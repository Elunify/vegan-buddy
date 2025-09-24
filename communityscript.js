let currentUser;
let joinedLocationId = null;
let firstLoad = true;

// ===== Get Current User =====
async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) console.error(error);
  currentUser = user;
}

window.addEventListener("DOMContentLoaded", async () => {
  await getCurrentUser();   // <-- make sure currentUser is set
  if (!currentUser) return; // safety check
  await loadFriendsTab();
});

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

  // 1️⃣ Fetch current user's friends first
  const { data: friendsData, error: friendsError } = await supabase
    .from("friends")
    .select("*")
    .or(`user1_id.eq.${currentUser.id},user2_id.eq.${currentUser.id}`);

  if (friendsError) return console.error(friendsError);

  // Make sure it's an array
  const friends = Array.isArray(friendsData) ? friendsData : [];

  // 2️⃣ Fetch pending requests sent by current user
  const { data: sentRequests, error: sentError } = await supabase
    .from("friend_requests")
    .select("receiver_email")
    .eq("sender_id", currentUser.id)
    .eq("status", "pending");

  if (sentError) return console.error(sentError);

  // 3️⃣ Fetch all community members
  const { data: members, error } = await supabase
    .from("community_participants")
    .select("user_id, name, profile_photo, email")
    .eq("location_id", locationId);

  if (error) return console.error(error);

  // 4️⃣ Helper function
  function isFriend(memberId, currentUserId, friends) {
    return friends.some(
      f =>
        (f.user1_id === currentUserId && f.user2_id === memberId) ||
        (f.user2_id === currentUserId && f.user1_id === memberId)
    );
  }

  // 5️⃣ Loop through members
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

    if (member.user_id !== currentUser.id && !isFriend(member.user_id, currentUser.id, friends)) {
      const btn = document.createElement("button");
      btn.textContent = "Send Request";

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

    membersList.appendChild(li);
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
  if (!currentUser) return; // safety

  await loadLocations();
  await loadUserCommunity();

  // Load chat list AFTER currentUser is defined
  await loadChatList();

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

  // Fetch sender profile before inserting
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("name, profile_photo")
    .eq("id", currentUser.id)
    .maybeSingle();

  if (profileError) return { success: false, message: profileError.message };

  // Insert request with profile data
  const { error } = await supabase.from("friend_requests").insert([{
    sender_id: currentUser.id,
    receiver_email: email,
    name: profile?.name || "Unknown",
    profile_photo: profile?.profile_photo || "default.jpg",
    email: currentUser.email,
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

// === Show Incoming Friend Requests ===
async function showIncomingFriendRequests() { 
  const list = document.getElementById("incomingRequestsList");
  list.innerHTML = "";

  const { data: requests, error } = await supabase
    .from("friend_requests")
    .select(`
      id,
      sender_id,
      name,
      profile_photo, 
      email,
      receiver_email,
      status
    `)
    .eq("receiver_email", currentUser.email)
    .eq("status", "pending");

  if (error) {
    console.error(error);
    return;
  }

  requests.forEach(req => {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.marginBottom = "0.5rem";

    const img = document.createElement("img");
    img.src = req.profile_photo || "default.jpg";
    img.alt = req.name || "Unknown";
    img.style.width = "40px";
    img.style.height = "40px";
    img.style.borderRadius = "50%";
    img.style.marginRight = "0.5rem";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = req.name || "Unknown";

    const actions = document.createElement("div");
    actions.className = "actions";

    // ✅ Accept button
    const acceptBtn = document.createElement("button");
    acceptBtn.className = "accept";
    acceptBtn.textContent = "Accept";
    acceptBtn.onclick = async () => {
  // ✅ Get my (receiver's) profile from profiles table
  const { data: myProfile, error: myError } = await supabase
    .from("profiles")
    .select("id, name, profile_photo, email")
    .eq("id", currentUser.id)
    .single();

  if (myError) {
    console.error("Error fetching my profile:", myError);
    return;
  }
      // Insert friendship into `friends` table
      const { error: insertError } = await supabase.from("friends").insert([{
  // Sender (already in friend_requests)
    user1_id: req.sender_id,
    user1_name: req.name,
    user1_email: req.email,
    user1_profile_photo: req.profile_photo,

    // Receiver (me)
    user2_id: myProfile.id,
    user2_name: myProfile.name,
    user2_email: myProfile.email,
    user2_profile_photo: myProfile.profile_photo
      }]);

      if (insertError) {
        console.error(insertError);
        return;
      }

      // Delete from friend_requests after accepting
      await supabase.from("friend_requests").delete().eq("id", req.id);

      await showIncomingFriendRequests();
      await showFriends();
    };

    // ❌ Decline button
    const declineBtn = document.createElement("button");
    declineBtn.className = "decline";
    declineBtn.textContent = "Decline";
    declineBtn.onclick = async () => {
      await supabase.from("friend_requests").delete().eq("id", req.id);
      await showIncomingFriendRequests();
    };

    actions.appendChild(acceptBtn);
    actions.appendChild(declineBtn);

    li.appendChild(img);
    li.appendChild(nameSpan);
    li.appendChild(actions);
    list.appendChild(li);
  });
}

/**
 * Render friends list in any container.
 * @param {string} containerId - ID of the <ul> where friends will be listed
 * @param {function} onClickFriend - callback when a friend is clicked
 */
async function showFriends(containerId, onClickFriend) {
  const list = document.getElementById(containerId);
  if (!list) return;
  list.innerHTML = "";

  // Fetch all friendships where currentUser is one of the two users
  const { data: friendsData, error } = await supabase
    .from("friends")
    .select("*")
    .or(`user1_id.eq.${currentUser.id},user2_id.eq.${currentUser.id}`);

  if (error) {
    console.error("Error fetching friends:", error);
    return;
  }

  friendsData.forEach(friendship => {
    // Determine the "other user"
    const friend = friendship.user1_id === currentUser.id
      ? {
          id: friendship.user2_id,
          name: friendship.user2_name,
          email: friendship.user2_email,
          photo: friendship.user2_profile_photo,
        }
      : {
          id: friendship.user1_id,
          name: friendship.user1_name,
          email: friendship.user1_email,
          photo: friendship.user1_profile_photo,
        };

    // List item
    const li = document.createElement("li");

    // Friend photo
    const img = document.createElement("img");
    img.src = friend.photo || "default.jpg";
    img.alt = friend.name;

    // Friend name
    const nameSpan = document.createElement("span");
    nameSpan.textContent = friend.name || "Unknown";

    li.appendChild(img);
    li.appendChild(nameSpan);

    // Click behavior
    const btn = document.createElement("button");
    btn.textContent = "Message";
    btn.className = "message";
    btn.onclick = e => {
      e.stopPropagation(); // prevent li.onclick from firing
      onClickFriend(friend);
};
li.appendChild(btn);

    list.appendChild(li);
  });
}

// === Load Friends Tab ===
async function loadFriendsTab() {
  await showIncomingFriendRequests();

  // Friends tab: render in #friendsList with "Message" button click
  await showFriends("friendsList", friend => startChatWithFriend(friend));
}


// === Chats ===
// === Chats ===
// === Chats ===
// === Chats ===

async function startChatWithFriend(friend) {
  // 1️⃣ Check if chat already exists
  const { data: existingChats, error: chatError } = await supabase
    .from('chats')
    .select('*')
    .or(
      `and(user1_id.eq.${currentUser.id},user2_id.eq.${friend.id}),and(user1_id.eq.${friend.id},user2_id.eq.${currentUser.id})`
    )
    .limit(1);

  if (chatError) {
    console.error("Error fetching chat:", chatError);
    return;
  }

  let chatId;

  if (existingChats.length > 0) {
    // 2️⃣ Chat already exists
    chatId = existingChats[0].id;
  } 

  // 4️⃣ Open chat window in Messages tab
  // Example: set a global/current state for active chat
  openChatWindow(chatId, friend);
}

function openChatWindow(chatId, friend) {
  window.currentChatId = chatId;
  window.currentChatFriend = friend; // ✅ store friend

  // 1️⃣ Hide friends tab and show messages tab
  const friends = document.getElementById("friends"); // main friends tab container
  const messages = document.getElementById("messages"); // main messages tab container
  if (friends) friends.style.display = "none";
  if (messages) messages.style.display = "block";

  // 2️⃣ Hide the chat list view and show the chat view
  const chatListView = document.getElementById("chatListView");
  const chatView = document.getElementById("chatView");
  if (chatListView) chatListView.style.display = "none";
  if (chatView) chatView.style.display = "block";

  // 3️⃣ Update chat header
  const chatHeader = document.getElementById("chatHeader");
  if (chatHeader) chatHeader.textContent = friend.name;

  // 4️⃣ Load messages only if chat exists
  const chatContainer = document.getElementById("chatMessages");
  if (chatId) {
    loadMessages(chatId, friend);
  } else {
    if (chatContainer) chatContainer.innerHTML = "";
  }
}


// Trigger the popup
document.getElementById("newMessageBtn").onclick = async () => {
  await showFriends("friendsListPopup", friend => {
    startChatWithFriend(friend);
    document.getElementById("newChatPopup").style.display = "none";
  });
  document.getElementById("newChatPopup").style.display = "flex";
};

// Close popup
document.getElementById("closePopup").onclick = () => {
  document.getElementById("newChatPopup").style.display = "none";
};

// Back button in chat view
document.getElementById("backToList").onclick = () => {
  const chatView = document.getElementById("chatView");
  const chatListView = document.getElementById("chatListView");

  if (chatView) chatView.style.display = "none";
  if (chatListView) chatListView.style.display = "block";
};

// Send message button handler
document.getElementById("sendMessageBtn").onclick = async () => {
  const messageInput = document.getElementById("messageInput");
  const text = messageInput.value.trim();
  if (!text) return; // ignore empty messages

  // Find the current friend object (you can store it globally when opening chat)
  const friend = window.currentChatFriend;
  if (!friend) return;

  // Fetch current user's profile
const { data: profile, error: profileError } = await supabase
  .from('profiles')
  .select("name, profile_photo")
  .eq("id", currentUser.id)
  .maybeSingle();

if (profileError) {
  console.error("Error fetching profile:", profileError);
  return;
}

  let chatId = window.currentChatId;

  // 1️⃣ If no chat yet, create it
  if (!chatId) {
    const { data: newChat, error: createError } = await supabase
      .from('chats')
      .insert([{
        // Sender (current user)
      user1_id: currentUser.id,
      user1_name: profile?.name,
      user1_profile_photo: profile?.profile_photo,

      // Receiver (friend)
      user2_id: friend.id,
      user2_name: friend.name,
      user2_profile_photo: friend.photo,

        last_message: text,
        last_message_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (createError) {
      console.error("Error creating chat:", createError);
      return;
    }

    chatId = newChat.id;
    window.currentChatId = chatId; // store for subsequent messages
  } else {
    // 2️⃣ If chat exists, just update last_message metadata
    await supabase.from('chats')
      .update({
        last_message: text,
        last_message_at: new Date().toISOString()
      })
      .eq('id', chatId);
  }

  // 3️⃣ Insert the actual message
  const { error: messageError } = await supabase.from('messages').insert([{
    chat_id: chatId,
    sender_id: currentUser.id,
    sender_name: currentUser.user_metadata?.name,
    sender_profile_photo: currentUser.user_metadata?.profile_photo,
    content: text
  }]);

  if (messageError) {
    console.error("Error sending message:", messageError);
    return;
  }

  // 4️⃣ Clear input and reload chat window
  messageInput.value = '';
  loadMessages(chatId, friend);
};

async function loadChatList() {
  const list = document.getElementById("chatListItems");
  if (!list) return;
  list.innerHTML = "";

  // Fetch chats where currentUser is either user1 or user2
  const { data: chats, error } = await supabase
    .from('chats')
    .select('*')
    .or(`user1_id.eq.${currentUser.id},user2_id.eq.${currentUser.id}`)
    .order('last_message_at', { ascending: false });

  if (error) {
    console.error("Error fetching chats:", error);
    return;
  }

  if (!chats || chats.length === 0) return; // nothing to show yet

  chats.forEach(chat => {
  if (!chat || !chat.id) return; // <-- skip invalid rows

    // Decide who the friend is
    const friend = chat.user1_id === currentUser.id
    ? { id: chat.user2_id || "unknown", name: chat.user2_name || "Unknown", photo: chat.user2_profile_photo || "default.jpg" }
    : { id: chat.user1_id || "unknown", name: chat.user1_name || "Unknown", photo: chat.user1_profile_photo || "default.jpg" };

    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.padding = "0.5rem";
    li.style.borderBottom = "1px solid #eee";

    const img = document.createElement("img");
    img.src = friend.photo || "default.jpg";
    img.alt = friend.name;
    img.style.width = "40px";
    img.style.height = "40px";
    img.style.borderRadius = "50%";
    img.style.marginRight = "0.5rem";

    const info = document.createElement("div");
    info.style.flex = "1";
    const nameSpan = document.createElement("div");
    nameSpan.textContent = friend.name;
    nameSpan.style.fontWeight = "500";
    const lastMessage = document.createElement("div");
    lastMessage.textContent = chat.last_message || "";
    lastMessage.style.fontSize = "0.85rem";
    lastMessage.style.color = "#555";

    info.appendChild(nameSpan);
    info.appendChild(lastMessage);

    li.appendChild(img);
    li.appendChild(info);

    li.onclick = () => startChatWithFriend(friend);

    list.appendChild(li);
  });
}

// === Subscribe to changes in the chats table for the current user ===
const chatSubscription = supabase
  .channel('realtime:chats')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'chats' },
    (payload) => {
      const newChat = payload.new;
      if (!newChat) return; // ignore deletes
      if (newChat.user1_id === currentUser.id || newChat.user2_id === currentUser.id) {
        loadChatList();
      }
    }
  )
  .subscribe();

let messageSubscription = null; // keep track of the subscription

async function loadMessages(chatId, friend) {
  const chatContainer = document.getElementById("chatMessages");
  if (!chatContainer) return;

  // 1️⃣ Load existing messages
  const { data: messages, error } = await supabase
    .from('messages')
    .select('*')
    .eq('chat_id', chatId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error("Error loading messages:", error);
    return;
  }

  chatContainer.innerHTML = ""; // clear previous chat
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.textContent = msg.content;
    div.className = msg.sender_id === currentUser.id ? "my-message" : "friend-message";
    chatContainer.appendChild(div);
  });
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // 2️⃣ Remove old subscription if any
  if (messageSubscription) {
    supabase.removeChannel(messageSubscription);
  }

  // 3️⃣ Subscribe to new messages for this chat
  messageSubscription = supabase
    .channel(`chat-${chatId}`)
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'messages',
      filter: `chat_id=eq.${chatId}`
    }, (payload) => {
      const msg = payload.new;
      const div = document.createElement("div");
      div.textContent = msg.content;
      div.className = msg.sender_id === currentUser.id ? "my-message" : "friend-message";
      chatContainer.appendChild(div);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    })
    .subscribe();
}