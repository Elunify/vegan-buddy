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

// ===== Show Community Dashboard =====
let joinedLocationId = null;

async function showCommunityDashboard(locationId, locationName) {
  // Hide join card
  joinedLocationId = locationId; // save it globally
  document.getElementById("joinCommunityCard").style.display = "none";
  document.getElementById("joinedCommunityText").textContent = `You are in the community: ${locationName}`;
  document.getElementById("communityDashboard").style.display = "block";

  // Set title dynamically
  document.getElementById("communityTitle").textContent = `${locationName} Community`;

  // Show joined text
  document.getElementById("joinedCommunityText").textContent = `You are in the community: ${locationName}`;

  // Load messages and events
  await loadCommunityMessages(locationId);
  await loadCommunityEvents(locationId);
}

// ===== Load Community Messages =====
async function loadCommunityMessages(locationId) {
  const { data, error } = await supabase
    .from("community_messages")
    .select("*")
    .eq("location_id", locationId)
    .order("created_at", { ascending: true });

  if (error) return console.error(error);

  const container = document.getElementById("communityMessages");
  container.innerHTML = "";
  data.forEach(msg => {
    const div = document.createElement("div");
    div.textContent = `${msg.username}: ${msg.content}`;
    container.appendChild(div);
  });
}

// ===== Send Community Message =====
document.getElementById("sendCommunityMessageBtn").addEventListener("click", async () => {
  const text = document.getElementById("communityMessageInput").value.trim();
  if (!text) return;

  const locationId = document.getElementById("citySelect").value;
  if (!locationId) return;

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("name")
    .eq("id", currentUser.id)
    .single();

  if (profileError) return console.error(profileError);

  const { error } = await supabase.from("community_messages").insert([{
    user_id: currentUser.id,
    username: profile?.name || "Unknown",
    location_id: locationId,
    content: text
  }]);

  if (error) return console.error(error);

  document.getElementById("communityMessageInput").value = "";
  await loadCommunityMessages(locationId);
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

  data.forEach(event => {
  const li = document.createElement("li");
  // Event text
    li.textContent = `${new Date(event.event_date).toLocaleString()} — ${event.place} (${event.description || ''}) by ${event.username || 'Unknown'}`;
  
  // If current user is the creator, show a delete button
  if (event.user_id === currentUser.id) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "0.5rem";
    deleteBtn.addEventListener("click", async () => {
      await supabase.from("community_events").delete().eq("id", event.id);
      await loadCommunityEvents(locationId);
    });
    li.appendChild(deleteBtn);
  }

  ul.appendChild(li);
});
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
