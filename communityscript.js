let currentUser;
let joinedLocationId = null;
let firstLoad = true;

// ===== Get Current User =====
async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) console.error(error);
  currentUser = user;
}

// ===== Tabs =====
function openTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = "none");
  document.getElementById(tabId).style.display = "block";
}

// Community -->
   // Community -->
    // Community -->
     // Community -->
      // Community -->

// ===== Load countries and cities =====
async function loadLocations() {
  const { data, error } = await supabase
    .from("locations")
    .select("*")
    .order("country");

  if (error) return console.error(error);

  const countries = [...new Set(data.map(l => l.country))];
  const countrySelect = document.getElementById("countrySelect");
  const citySelect = document.getElementById("citySelect");

  countries.forEach(c => {
    const option = document.createElement("option");
    option.value = c;
    option.textContent = c;
    countrySelect.appendChild(option);
  });

  countrySelect.addEventListener("change", () => {
    const selectedCountry = countrySelect.value;
    citySelect.innerHTML = '<option value="">Select city</option>';
    citySelect.disabled = !selectedCountry;
    data.filter(l => l.country === selectedCountry).forEach(l => {
      const option = document.createElement("option");
      option.value = l.id;
      option.textContent = l.city;
      citySelect.appendChild(option);
    });
    document.getElementById("joinCommunityBtn").disabled = true;
  });

  citySelect.addEventListener("change", (e) => {
    document.getElementById("joinCommunityBtn").disabled = !e.target.value;
  });
}

// ===== Load user community if exists =====
async function loadUserCommunity() {
  const { data: participant, error: participantError } = await supabase
    .from("community_participants")
    .select("id, location_id")
    .eq("user_id", currentUser.id)
    .maybeSingle();

  if (participantError) {
    console.error(participantError);
    return;
  }

  if (participant) {
    const { data: location, error: locationError } = await supabase
      .from("locations")
      .select("country, city")
      .eq("id", participant.location_id)
      .single();

    if (locationError) {
      console.error(locationError);
      return;
    }

    const locationName = `${location.city}, ${location.country}`;
    document.getElementById("joinedCommunityText").textContent = `You are in the community: ${locationName}`;
    document.getElementById("leaveCommunityBtn").style.display = "inline-block";
    document.getElementById("joinCommunityBtn").style.display = "none";

    // Show dashboard
    showCommunityDashboard(participant.location_id, locationName);
  }
}

// ===== Load Community Messages =====
async function loadCommunityMessages(locationId) {
  if (!locationId) return;

  const { data, error } = await supabase
    .from("community_messages")
    .select("*")
    .eq("location_id", locationId)
    .order("created_at", { ascending: true });

  if (error) return console.error(error);

  const container = document.getElementById("communityMessages");
  if (!container) return;

  const wasAtBottom = !firstLoad &&
    container.scrollHeight - container.scrollTop <= container.clientHeight + 50;

  container.innerHTML = "";
  data.forEach(msg => {
    const div = document.createElement("div");
    div.classList.add("chat-message");
    div.textContent = `${msg.username}: ${msg.content}`;
    div.classList.add(msg.user_id === currentUser?.id ? "my-message" : "their-message");
    container.appendChild(div);
  });

  await new Promise(requestAnimationFrame);

  const last = container.lastElementChild;
  if (firstLoad || wasAtBottom) {
    if (last) last.scrollIntoView({ block: "end", behavior: "auto" });
    firstLoad = false;
  }
}


// ===== Send Community Message =====
async function sendCommunityMessage() {
  const text = document.getElementById("communityMessageInput").value.trim();
  if (!text || !joinedLocationId) return alert("You are not in a community.");

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("name")
    .eq("id", currentUser.id)
    .maybeSingle();

  if (profileError) return console.error(profileError);

  const { error } = await supabase.from("community_messages").insert([{
    user_id: currentUser.id,
    username: profile?.name || "Unknown",
    location_id: joinedLocationId,
    content: text
  }]);

  if (error) return console.error(error);

  document.getElementById("communityMessageInput").value = "";
  await loadCommunityMessages(joinedLocationId);
}

document.getElementById("sendCommunityMessageBtn").addEventListener("click", sendCommunityMessage);

let messageChannel = null;

function setupRealtimeMessages(locationId) {
  if (messageChannel) {
    supabase.removeChannel(messageChannel);
  }

  messageChannel = supabase
    .channel(`community_messages_${locationId}`)
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'community_messages', filter: `location_id=eq.${locationId}` },
      payload => {
        const container = document.getElementById("communityMessages");
        const msg = payload.new;

        // Append only the new message
        const div = document.createElement("div");
        div.classList.add("chat-message");
        div.textContent = `${msg.username}: ${msg.content}`;
        div.classList.add(msg.user_id === currentUser?.id ? "my-message" : "their-message");
        container.appendChild(div);

        // Scroll if visible
        if (container.offsetParent !== null) { // checks if visible
          div.scrollIntoView({ block: "end", behavior: "auto" });
        }
      }
    )
    .subscribe();
}

// ===== Show Community Dashboard =====
async function showCommunityDashboard(locationId, locationName) {
  joinedLocationId = locationId;
  firstLoad = true;

  document.getElementById("joinCommunityCard").style.display = "none";
  document.getElementById("joinedCommunityText").textContent = `You are in the community: ${locationName}`;
  document.getElementById("communityDashboard").style.display = "block";
  document.getElementById("communityTitle").textContent = `${locationName} Community`;

  // Start chat & events hidden
  document.getElementById("communityChatSection").style.display = "none";
  document.getElementById("communityEventsSection").style.display = "none";

  await loadCommunityMessages(locationId);
  await loadCommunityEvents(locationId);

  setupRealtimeMessages(locationId);

await showCommunityMembers(locationId);
}
  
async function showCommunityMembers(locationId) {
  const membersList = document.getElementById("communityMembersList");
  membersList.innerHTML = "";

  // Fetch pending requests sent by current user
  const { data: sentRequests, error: sentError } = await supabase
    .from("friend_requests")
    .select("receiver_email")
    .eq("sender_id", currentUser.id)
    .eq("status", "pending");

  if (sentError) return console.error(sentError);

  // Fetch all community members (excluding current user)
  const { data: members, error } = await supabase
    .from("community_participants")
    .select("user_id, name, profile_photo, email")
    .eq("location_id", locationId);

  if (error) return console.error(error);

  members.forEach(member => {
  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.marginBottom = "0.5rem";

  const img = document.createElement("img");
  img.src = member.profile_photo || "default.jpg";
  img.alt = member.name;
  img.style.width = "40px";
  img.style.height = "40px";
  img.style.borderRadius = "50%";
  img.style.marginRight = "0.5rem";

  const nameSpan = document.createElement("span");
  nameSpan.textContent = member.name;

  li.appendChild(img);
  li.appendChild(nameSpan);

  // Only create button for others
  if (member.user_id !== currentUser.id) {
    const btn = document.createElement("button");
    btn.textContent = "Send Request";

    // Check if request was already sent
    const alreadySent = sentRequests.some(r => r.receiver_email === member.email);
    if (alreadySent) {
      btn.textContent = "Request Sent";
      btn.disabled = true;
    }

    btn.onclick = async () => {
      const result = await sendRequest(member.email);
      if (result.success) {
        btn.textContent = "Request Sent ✅";
        btn.disabled = true;
        await showIncomingFriendRequests();
      } else {
        alert(result.message);
      }
    };

    li.appendChild(btn);
  }

  membersList.appendChild(li); // append every member, including yourself
});
}


// ===== Join Community =====
document.getElementById("joinCommunityBtn").addEventListener("click", async () => {
  const locationId = document.getElementById("citySelect").value;
  if (!locationId) return;

  const locationName = document.getElementById("citySelect").selectedOptions[0].text + ", " +
                       document.getElementById("countrySelect").value;

  // Fetch the user's name and profile picture from profiles
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("name, profile_photo, email")
    .eq("id", currentUser.id)
    .single();

  if (profileError) return console.error(profileError);

  // Insert/Upsert into community_participants
  const { error } = await supabase.from("community_participants").upsert([{
    user_id: currentUser.id,
    location_id: locationId,
    name: profile.name,
    profile_photo: profile.profile_photo,
    email: profile.email
  }]);

  if (error) return console.error(error);

  showCommunityDashboard(locationId, locationName);
});

// ===== Leave Community =====
document.getElementById("leaveCommunityDashboardBtn").addEventListener("click", async () => {
  const { error } = await supabase
    .from("community_participants")
    .delete()
    .eq("user_id", currentUser.id);

  if (error) return console.error(error);

  document.getElementById("communityDashboard").style.display = "none";
  document.getElementById("joinCommunityCard").style.display = "block";
  document.getElementById("joinedCommunityText").textContent = "";
  document.getElementById("leaveCommunityBtn").style.display = "none";
  document.getElementById("joinCommunityBtn").style.display = "inline-block";
});

function scrollCommunityChatToBottom() {
  const container = document.getElementById("communityMessages");
  if (container && container.children.length > 0) {
    container.lastElementChild.scrollIntoView({ block: "end", behavior: "auto" });
  }
}

// Toggle sections with scroll fix
document.querySelectorAll('.community-section-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
      // scroll only when chat becomes visible
      if (content.id === 'communityChatSection') scrollCommunityChatToBottom();
    }
  });
});

// ===== Load Community Events =====
async function loadCommunityEvents(locationId) {
  const { data, error } = await supabase
    .from("community_events")
    .select("id, place, description, event_date, user_id, username")
    .eq("location_id", locationId)
    .order("event_date", { ascending: true });

  if (error) return console.error(error);

  const ul = document.getElementById("communityEventsList");
  ul.innerHTML = "";

  const now = new Date();

  for (const event of data) {
    const eventDate = new Date(event.event_date);

    // Automatically delete past events
    if (eventDate < now) {
      await supabase.from("community_events").delete().eq("id", event.id);
      continue;
    }

    const li = document.createElement("li");
    li.textContent = `${eventDate.toLocaleString()} — ${event.place} — ${event.description} (by ${event.username})`;

    if (event.user_id === currentUser.id) {
      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.style.marginLeft = "1rem";
      delBtn.onclick = async () => {
        await supabase.from("community_events").delete().eq("id", event.id);
        await loadCommunityEvents(locationId);
      };
      li.appendChild(delBtn);
    }

    ul.appendChild(li);
  }
}

// ===== Create Event =====
const createEventBtn = document.getElementById("createEventBtn");
const submitEventBtn = document.getElementById("submitEventBtn");
const createEventInputs = document.getElementById("createEventInputs");
const eventPlaceInput = document.getElementById("eventPlaceInput");
const eventTimeInput = document.getElementById("eventTimeInput");
const descriptionInput = document.getElementById("eventDescriptionInput");

createEventBtn.addEventListener("click", () => {
  createEventInputs.style.display = createEventInputs.style.display === "none" ? "flex" : "none";
  createEventInputs.style.flexDirection = "column";
});

submitEventBtn.addEventListener("click", async () => {
  const place = eventPlaceInput.value.trim();
  const description = descriptionInput.value.trim();
  const eventDate = eventTimeInput.value;

  if (!place || !eventDate || !joinedLocationId) {
    return alert("Please enter place, date, and ensure you are in a community.");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("name")
    .eq("id", currentUser.id)
    .maybeSingle();

  const { error } = await supabase.from("community_events").insert([{
    location_id: joinedLocationId,
    place: place,
    description: description,
    event_date: eventDate,
    user_id: currentUser.id,
    username: profile.name
  }]);

  if (error) return console.error(error);

  eventPlaceInput.value = "";
  descriptionInput.value = "";
  eventTimeInput.value = "";
  createEventInputs.style.display = "none";

  await loadCommunityEvents(joinedLocationId);
});

// ===== DOMContentLoaded =====
document.addEventListener("DOMContentLoaded", async () => {
  await getCurrentUser();
  await loadLocations();
  await loadUserCommunity();

  const tabs = {
    homeSection: document.getElementById("homeSection"),
    mealArtContest: document.getElementById("mealArtContest"),
    friends: document.getElementById("friends"),
    messages: document.getElementById("messages")
  };

  const openTab = (tabId) => {
    Object.values(tabs).forEach(tab => tab.style.display = "none"); // hide all
    if (tabs[tabId]) tabs[tabId].style.display = "block";           // show selected
    localStorage.setItem("lastOpenTab", tabId);                     // save last tab
  };

  document.getElementById('backBtn').onclick = () => window.location.href = 'mainpage.html';
  document.getElementById("communityBtn").onclick = () => openTab("homeSection");
  document.getElementById("mealArtBtn").onclick = () => openTab("mealArtContest");
  document.getElementById("friendsBtn").onclick = () => openTab("friends");
  document.getElementById("messagesBtn").onclick = () => openTab("messages");

  // ===== Load last open tab if available =====
  const lastTab = localStorage.getItem("lastOpenTab");
  if (lastTab && tabs[lastTab]) {
    openTab(lastTab);
  } else {
    openTab("homeSection"); // default tab
  }
});

// Community END -->
   // Community END -->
    // Community END -->
     // Community END -->
      // Community END -->

// Friends -->
// Friends -->
// Friends -->
// Friends -->
// Friends -->

// === Popup controls ===
const searchPopup = document.getElementById("searchPopup");
document.getElementById("openSearchPopup").addEventListener("click", () => {
  searchPopup.style.display = "flex";
});
document.getElementById("closeSearchPopup").addEventListener("click", () => {
  searchPopup.style.display = "none";
});
window.addEventListener("click", e => {
  if (e.target === searchPopup) searchPopup.style.display = "none";
});

// === Send Friend Request ===// === Send Friend Request ===// === Send Friend Request ===
// === Send Friend Request ===
// === Send Friend Request ===
// === Send Friend Request ===
// === Send Friend Request ===
// === Send Friend Request ===
// ===== Unified Send Friend Request Function =====
async function sendRequest(receiverEmail) {
  const email = receiverEmail.trim().toLowerCase();
  if (!email) return { success: false, message: "No email provided." };
  if (email === currentUser.email.toLowerCase()) return { success: false, message: "You cannot send a request to yourself." };

  // Check if a request already exists
  const { data: existing, error: checkError } = await supabase
    .from("friend_requests")
    .select("*")
    .eq("sender_id", currentUser.id)
    .eq("receiver_email", email)
    .maybeSingle();

  if (checkError) return { success: false, message: checkError.message };
  if (existing) return { success: false, message: "Request already sent!" };

  // Insert request
  const { error } = await supabase.from("friend_requests").insert([{
    sender_id: currentUser.id,
    receiver_email: email,
    status: "pending"
  }]);

  if (error) return { success: false, message: error.message };
  return { success: true };
}

// ===== Popup Email Request Button =====
document.getElementById("sendFriendRequestBtn").addEventListener("click", async () => {
  const email = document.getElementById("friendEmailInput").value;
  const result = await sendRequest(email);

  if (!result.success) {
    alert(result.message);
  } else {
    alert("Friend request sent!");
    document.getElementById("friendEmailInput").value = "";
    searchPopup.style.display = "none";
    await showFriends(); // refresh friends tab
    if (joinedLocationId) await showCommunityMembers(joinedLocationId); // refresh community buttons
  }
});

// ===== Community Member Button Example =====
// Inside your community members loop:
const btn = document.createElement("button");
btn.textContent = "Send Request";
btn.onclick = async () => {
  const result = await sendRequest(member.email); // send automatically using the member's email
  if (result.success) {
    btn.textContent = "Request Sent ✅";
    btn.disabled = true;
    await showIncomingFriendRequests(); // refresh incoming requests for the recipient
  } else {
    alert(result.message);
  }
};

// === Send Friend Request ===
// === Send Friend Request ===
// === Send Friend Request ===
// === Send Friend Request ===
// === Send Friend Request ===

// === Show Incoming Requests ===
async function showIncomingFriendRequests() {
  const { data: requests, error } = await supabase
    .from("friend_requests")
    .select(`
      id,
    sender:profiles!fk_sender (name, profile_photo, email),
    receiver_email,
    status
    `)
    .eq("receiver_email", currentUser.email)
    .eq("status", "pending");

  if (error) return console.error(error);

  const list = document.getElementById("incomingRequestsList");
  list.innerHTML = "";

  requests.forEach(req => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = req.sender.profile_photo || "default-avatar.png";
    img.alt = req.sender.name;

    const span = document.createElement("span");
    span.textContent = req.sender.name;

    const actions = document.createElement("div");
    actions.className = "actions";

    const acceptBtn = document.createElement("button");
    acceptBtn.className = "accept";
    acceptBtn.textContent = "Accept";
    acceptBtn.onclick = async () => {
      // mark request as accepted
      await supabase.from("friend_requests").update({ status: "accepted" }).eq("id", req.id);
      await showIncomingFriendRequests();
      await showFriends();
    };

    const declineBtn = document.createElement("button");
    declineBtn.className = "decline";
    declineBtn.textContent = "Decline";
    declineBtn.onclick = async () => {
      await supabase.from("friend_requests").update({ status: "declined" }).eq("id", req.id);
      await showIncomingFriendRequests();
    };

    actions.appendChild(acceptBtn);
    actions.appendChild(declineBtn);

    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(actions);
    list.appendChild(li);
  });
}

// === Show Friends List (Optimized) ===
async function showFriends() {
  // 1️⃣ Fetch accepted friends where currentUser is sender or receiver
  const { data: friendsData, error: friendsError } = await supabase
    .from("friend_requests")
    .select(`
      id,
      sender_id,
      receiver_email,
      status,
      sender:profiles!fk_sender ( name, profile_photo, email )
    `)
    .or(`sender_id.eq.${currentUser.id},receiver_email.eq.${currentUser.email}`)
    .eq("status", "accepted");

  if (friendsError) return console.error(friendsError);

  // 2️⃣ Fetch all pending requests sent by currentUser (for buttons)
  const { data: sentRequests, error: sentError } = await supabase
    .from("friend_requests")
    .select("receiver_email")
    .eq("sender_id", currentUser.id)
    .eq("status", "pending");

  if (sentError) return console.error(sentError);

  // 3️⃣ Fetch all community members (excluding currentUser)
  const { data: communityMembers, error: membersError } = await supabase
    .from("community_participants")
    .select("user_id, name, profile_photo, email")
    .neq("user_id", currentUser.id);

  if (membersError) return console.error(membersError);

  const list = document.getElementById("friendsList");
  list.innerHTML = "";

  for (const member of communityMembers) {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.marginBottom = "0.5rem";

    const img = document.createElement("img");
    img.src = member.profile_photo || "default-avatar.png";
    img.alt = member.name;
    img.style.width = "40px";
    img.style.height = "40px";
    img.style.borderRadius = "50%";
    img.style.marginRight = "0.5rem";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = member.name;

    const actions = document.createElement("div");
    actions.style.marginLeft = "auto";

    // 4️⃣ Check if already friends
    const isFriend = friendsData.some(f =>
      (f.sender_id === member.user_id || f.receiver_email === member.email)
    );

    if (isFriend) {
      const msgBtn = document.createElement("button");
      msgBtn.className = "message";
      msgBtn.textContent = "Message";
      msgBtn.onclick = () => alert(`Messaging ${member.name}...`);
      actions.appendChild(msgBtn);
    } else {
      // 5️⃣ Check if a pending request was already sent
      const alreadySent = sentRequests.some(r => r.receiver_email === member.email);

      const btn = document.createElement("button");
      btn.className = "request";
      btn.textContent = alreadySent ? "Request Sent" : "Send Request";
      btn.disabled = alreadySent;

      btn.onclick = async () => {
        await supabase.from("friend_requests").insert([{
          sender_id: currentUser.id,
          receiver_email: member.email,
          status: "pending"
        }]);
        btn.textContent = "Request Sent";
        btn.disabled = true;
        await showIncomingFriendRequests(); // refresh incoming requests for the recipient
      };

      actions.appendChild(btn);
    }

    li.appendChild(img);
    li.appendChild(nameSpan);
    li.appendChild(actions);
    list.appendChild(li);
  }
}


// === Load Friends Tab ===
async function loadFriendsTab() {
  await showIncomingFriendRequests();
  await showFriends();
}
