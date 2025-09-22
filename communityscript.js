let currentUser;

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

// put this near the top if not already present
let firstLoad = true; // tracks first load per opened community
let joinedLocationId = null;

// ===== Show Community Dashboard =====
async function showCommunityDashboard(locationId, locationName) {
  // Save global id
  joinedLocationId = locationId;

  // Reset firstLoad for this community open so initial view jumps to bottom
  firstLoad = true;

  // Hide join UI, show dashboard
  document.getElementById("joinCommunityCard").style.display = "none";
  document.getElementById("joinedCommunityText").textContent = `You are in the community: ${locationName}`;
  document.getElementById("communityDashboard").style.display = "block";

  // Ensure the chat & events sections are expanded (so scrollHeight is measurable)
  const chatContent = document.getElementById("communityChatSection");
  const eventsContent = document.getElementById("communityEventsSection");
  if (chatContent) chatContent.style.display = "block";
  if (eventsContent) eventsContent.style.display = "block";

  // Set title
  document.getElementById("communityTitle").textContent = `${locationName} Community`;

  // Load content (messages + events)
  await loadCommunityMessages(locationId);
  await loadCommunityEvents(locationId);
}

// ===== Load Community Messages =====
async function loadCommunityMessages(locationId) {
  if (!locationId) return;

  const { data, error } = await supabase
    .from("community_messages")
    .select("*")
    .eq("location_id", locationId)
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    return;
  }

  const container = document.getElementById("communityMessages");
  if (!container) return;

  // check if user was at bottom (only meaningful for subsequent loads)
  let wasAtBottom = false;
  if (!firstLoad) {
    wasAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 50;
  }

  // clear and append messages in normal order (old -> new)
  container.innerHTML = "";
  data.forEach(msg => {
    const div = document.createElement("div");
    div.classList.add("chat-message");
    div.textContent = `${msg.username}: ${msg.content}`;

    if (msg.user_id === currentUser?.id) {
      div.classList.add("my-message");
    } else {
      div.classList.add("their-message");
    }

    container.appendChild(div);
  });

  // wait for the browser to render appended nodes
  await new Promise(requestAnimationFrame);

  // scroll behavior:
  const last = container.lastElementChild;
  if (firstLoad) {
    // always jump to bottom on first load for this community
    if (last) last.scrollIntoView({ block: "end", behavior: "auto" });
    firstLoad = false;
  } else if (wasAtBottom) {
    // if the user was at bottom, keep them at bottom on update
    if (last) last.scrollIntoView({ block: "end", behavior: "auto" });
  }
}

// ===== Send Community Message (use joinedLocationId) =====
document.getElementById("sendCommunityMessageBtn").addEventListener("click", async () => {
  const text = document.getElementById("communityMessageInput").value.trim();
  if (!text) return;

  if (!joinedLocationId) return alert("You are not in a community.");

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("name")
    .eq("id", currentUser.id)
    .maybeSingle();

  if (profileError) {
    console.error(profileError);
    return;
  }

  const username = profile?.name || "Unknown";

  const { error } = await supabase.from("community_messages").insert([{
    user_id: currentUser.id,
    username,
    location_id: joinedLocationId,
    content: text
  }]);

  if (error) {
    console.error(error);
    return;
  }

  // Clear input and reload messages (will scroll to bottom because user just sent a message)
  document.getElementById("communityMessageInput").value = "";

  // Option A: re-fetch messages and force scroll to bottom for the sender
  await loadCommunityMessages(joinedLocationId);

  // Option B: if you prefer to append locally instead of reloading, you can create DOM node and scroll:
  // const container = document.getElementById("communityMessages");
  // const div = document.createElement("div"); div.classList.add('chat-message','my-message'); div.textContent = `${username}: ${text}`; container.appendChild(div);
  // div.scrollIntoView({ block: 'end' });
});

function scrollToBottomSmart(container) {
  const isAtBottom =
    container.scrollHeight - container.scrollTop <= container.clientHeight + 50; 
    // +50px tolerance

  if (isAtBottom) {
    container.scrollTop = container.scrollHeight;
  }
}

// ===== When current user sends a message =====
async function sendMessage(content, username, locationId) {
  if (!content.trim()) return;

  const { error } = await supabase.from("community_messages").insert([{
    content,
    username,
    location_id: locationId
  }]);

  if (error) return console.error(error);

  // After sending → scroll to bottom
  const container = document.getElementById("communityMessages");
  setTimeout(() => {
    container.scrollTop = container.scrollHeight;
  }, 50);
}

// ===== Send Community Message =====
document.getElementById("sendCommunityMessageBtn").addEventListener("click", async () => {
  const text = document.getElementById("communityMessageInput").value.trim();
  if (!text) return;

  // Use joinedLocationId instead of citySelect.value
  if (!joinedLocationId) return alert("You are not in a community.");

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("name")
    .eq("id", currentUser.id)
    .single();

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
});

async function deleteOldMessages() {
  // calculate 30 days ago
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const { error } = await supabase
    .from('community_messages')
    .delete()
    .lt('created_at', thirtyDaysAgo.toISOString()); // delete messages older than 30 days

  if (error) {
    console.error('Failed to delete old messages:', error);
  } else {
    console.log('Old messages deleted successfully.');
  }
}

// run it periodically (optional)
deleteOldMessages();

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
      await supabase
        .from("community_events")
        .delete()
        .eq("id", event.id);
      continue; // skip displaying
    }

    // Display event
    const li = document.createElement("li");
    li.textContent = `${eventDate.toLocaleString()} — ${event.place} — ${event.description} (by ${event.username})`;

    // Optionally add delete button for creator
    if (event.user_id === currentUser.id) {
      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.style.marginLeft = "1rem";
      delBtn.onclick = async () => {
        await supabase
          .from("community_events")
          .delete()
          .eq("id", event.id);
        await loadCommunityEvents(locationId); // refresh
      };
      li.appendChild(delBtn);
    }

    ul.appendChild(li);
  }
}

// ===== Join Community =====
document.getElementById("joinCommunityBtn").addEventListener("click", async () => {
  const locationId = document.getElementById("citySelect").value;
  if (!locationId) return;

  const locationName = document.getElementById("citySelect").selectedOptions[0].text + ", " +
                       document.getElementById("countrySelect").value;

  const { error } = await supabase.from("community_participants").upsert([{
    user_id: currentUser.id,
    location_id: locationId
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

// ===== Toggle sections =====
document.querySelectorAll('.community-section-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// ===== Create Event =====
const createEventBtn = document.getElementById("createEventBtn");
const submitEventBtn = document.getElementById("submitEventBtn"); // new submit button
const createEventInputs = document.getElementById("createEventInputs"); // the div wrapping inputs
const eventPlaceInput = document.getElementById("eventPlaceInput");
const eventTimeInput = document.getElementById("eventTimeInput");
const descriptionInput = document.getElementById("eventDescriptionInput"); // description input
const communityEventsList = document.getElementById("communityEventsList");

// ===== Toggle input section =====
createEventBtn.addEventListener("click", () => {
  createEventInputs.style.display = createEventInputs.style.display === "none" ? "flex" : "none";
  createEventInputs.style.flexDirection = "column";
});

// ===== Submit event =====
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
    user_id: currentUser.id, // <--- save creator
    username: profile.name
  }]);

  if (error) return console.error(error);

  // Clear inputs
  eventPlaceInput.value = "";
  descriptionInput.value = "";
  eventTimeInput.value = "";

  // Optionally hide inputs after submission
  createEventInputs.style.display = "none";

  // Reload events list
  await loadCommunityEvents(joinedLocationId);
});


// ===== DOMContentLoaded =====
document.addEventListener("DOMContentLoaded", async () => {
  await getCurrentUser();
  await loadLocations();
  await loadUserCommunity();

  document.getElementById('backBtn').onclick = () => window.location.href = 'mainpage.html';
  document.getElementById("communityBtn").onclick = () => openTab("homeSection");
  document.getElementById("mealArtBtn").onclick = () => openTab("mealArtContest");
  document.getElementById("friendsBtn").onclick = () => openTab("friends");
  document.getElementById("messagesBtn").onclick = () => openTab("messages");

  openTab("homeSection"); // default tab
});
