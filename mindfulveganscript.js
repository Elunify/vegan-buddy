document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = 'mainpage.html'; // Or wherever you want the back button to lead
    });

    document.querySelectorAll(".section h2").forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
  function toggleList(header) {
    const content = header.nextElementSibling;
    content?.classList.toggle('visible');
    header.classList.toggle('active');
  }

const forumMessages = document.getElementById('forumMessages');
const submitBlockBtn = document.getElementById('submitBlockBtn');
const blockContent = document.getElementById('blockContent');

const commentPopup = document.getElementById('commentPopup');
const closePopup = document.getElementById('closePopup');

closePopup.addEventListener('click', () => {
  commentPopup.classList.add('hidden');
});

const popupBlockContent = document.getElementById('popupBlockContent');
const popupCommentsList = document.getElementById('popupCommentsList');
const newCommentInput = document.getElementById('newCommentInput');
const submitCommentBtn = document.getElementById('submitCommentBtn');

let currentUser;
let activeBlockId;


// Get current user
async function loadUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) return console.error(error);
  currentUser = user;
}
loadUser();

// Load forum blocks
async function loadForumBlocks() {
  forumMessages.innerHTML = '';
  const { data: blocks, error } = await supabase
    .from('forum_blocks')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return console.error(error);

  blocks.forEach(block => {
    const li = document.createElement('li');
    li.className = 'forum-block'; // important for CSS

    // Block text span
    const textSpan = document.createElement('span');
    textSpan.className = 'block-text';
    textSpan.textContent = block.content;

    li.appendChild(textSpan);

    // Make block clickable to open popup
    li.addEventListener('click', () => openCommentPopup(block));

    // Show delete button only for the poster
    if (block.user_id === currentUser.id) {
      const delBtn = document.createElement('deletebutton');
      delBtn.textContent = '❌';
      delBtn.className = 'block-delete-btn';
      delBtn.addEventListener('click', async (e) => {
        e.stopPropagation(); // prevent opening popup
        await supabase.from('forum_blocks').delete().eq('id', block.id);
        loadForumBlocks();
      });
      li.appendChild(delBtn);
    }

    forumMessages.appendChild(li);
  });
}
loadForumBlocks();

// Submit new block
submitBlockBtn.addEventListener('click', async () => {
  const content = blockContent.value.trim();
  if (!content) return;

  await supabase.from('forum_blocks').insert([{ user_id: currentUser.id, content }]);
  blockContent.value = '';
  loadForumBlocks();
});

// Open popup for comments
async function openCommentPopup(block) {
  activeBlockId = block.id;
  popupBlockContent.textContent = block.content;

  const { data: comments, error } = await supabase
    .from('forum_comments')
    .select('*')
    .eq('block_id', block.id)
    .order('created_at', { ascending: true });

  if (error) return console.error(error);

  popupCommentsList.innerHTML = '';
  comments.forEach(c => {
  const li = document.createElement('li');

  // Show "Asker" if commenter is the original poster
  const isAsker = c.commenter_id === block.user_id;
  const displayName = isAsker ? "Asker" : c.commenter_name;

  // Create text span
  const textSpan = document.createElement('span');
  textSpan.innerHTML = `<strong>${displayName}:</strong> ${c.content}`;

  li.appendChild(textSpan);

  // Show delete button if this comment belongs to current user
  if (c.commenter_id === currentUser.id) {
    const delBtn = document.createElement('delbutton');
    delBtn.textContent = '❌';
    delBtn.className = 'block-delete-btn';
    delBtn.addEventListener('click', async () => {
      await supabase.from('forum_comments').delete().eq('id', c.id);
      openCommentPopup(block); // refresh comments
    });
    li.appendChild(delBtn); // now button is in the same flex row
  }

  popupCommentsList.appendChild(li);
});


  commentPopup.classList.remove('hidden');
}

// Submit new comment
submitCommentBtn.addEventListener('click', async () => {
  const content = newCommentInput.value.trim();
  if (!content || !activeBlockId) return;

  // Get current user's profile name
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('id, name') // adjust to your column name
    .eq('id', currentUser.id)
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return;
  }

  const commenterName = profile?.name || "Anonymous";

  // Insert comment with commenter_id
  await supabase.from('forum_comments').insert([{
    block_id: activeBlockId,
    commenter_id: currentUser.id,    // <--- NEW: save user ID
    commenter_name: commenterName,
    content
  }]);

  newCommentInput.value = '';

  // Refresh comments in popup
const { data: fullBlock, error: blockError } = await supabase
  .from('forum_blocks')
  .select('*')
  .eq('id', activeBlockId)
  .single();

if (blockError) return console.error(blockError);

openCommentPopup(fullBlock);
});








async function loadUserPet() {
  // get current logged-in user
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error('Error getting current user:', userError);
    return;
  }

  // fetch pet info from profiles table
  const { data: pet, error } = await supabase
    .from('profiles')
    .select('pet_name, pet_photo')
    .eq('id', user.id)  // use 'id' instead of 'user_id'
    .single();

  if (error) {
    console.error('Error fetching user pet:', error);
    return;
  }

  const petAvatarDiv = document.getElementById('petAvatar');
  if (pet.pet_photo) {
    petAvatarDiv.innerHTML = `<img src="${pet.pet_photo}" alt="${pet.pet_name}" class="avatar">`;
  }

  const petNameSpan = document.getElementById('petName');
  if (pet.pet_name) {
    petNameSpan.textContent = pet.pet_name;
  }
}

// Run on page load
loadUserPet();

// 1️⃣ Define tips for each character
const characterTips = {
  eluna: [
    "Be patient when explaining veganism to friends — gentle words go a long way 🌸",
    "Share positive experiences instead of judging — curiosity sparks interest 💚",
    "Invite family or friends to try a delicious plant-based meal — lead by example 🍲"
  ],
  elune: [
    "Excuse: 'I don't know what to cook.' → Answer: Try easy vegan recipes, like pasta with veggies 🍝",
    "Excuse: 'I’ll miss cheese.' → Answer: Explore tasty plant-based alternatives 🧀",
    "Excuse: 'Vegan food is expensive.' → Answer: Many staples like beans, rice, and vegetables are budget-friendly 💰"
  ],
  pet: [
    "Your choices matter! Every meal makes a difference 🐾",
    "You’re inspiring others just by being mindful — keep going! ✨",
    "Small steps lead to big impact — believe in yourself 🌟"
  ]
};

// 2️⃣ General function to prepare hourly tip for a character
function prepareHourlyTip(character) {
  const now = Date.now();

  // Local storage keys
  const tipKey = character + "HourlyTip";
  const timeKey = character + "HourlyTipTime";
  const indexKey = character + "LastTipIndex";

  // Cached values
  const cachedTip = localStorage.getItem(tipKey);
  const cachedTime = parseInt(localStorage.getItem(timeKey)) || 0;

  // Reuse cached tip if < 1h old
  if (cachedTip && now - cachedTime < 3600 * 1000) {
    document.getElementById(character + "Tip").textContent = cachedTip;
    return;
  }

  // Select new tip
  const tips = characterTips[character] || [];
  let hourlyTip = "No tips available.";

  if (tips.length > 0) {
    const lastTipIndex = parseInt(localStorage.getItem(indexKey)) || 0;
    hourlyTip = tips[lastTipIndex % tips.length];
    localStorage.setItem(indexKey, lastTipIndex + 1);
  }

  // Cache tip + time
  localStorage.setItem(tipKey, hourlyTip);
  localStorage.setItem(timeKey, now);

  // Update DOM
  document.getElementById(character + "Tip").textContent = hourlyTip;
}

// 3️⃣ Example usage when opening thought bubbles
// toggleThought already calls this in the previous setup, so you’d just add:
function toggleThought(character) {
  // Get all thought bubbles
  const allBubbles = document.querySelectorAll('.thought-bubble');

  allBubbles.forEach(bubble => {
    // Hide all bubbles except the one being toggled
    if (bubble.id !== character + "Thought") {
      bubble.classList.remove("visible");
    }
  });

  // Toggle the selected bubble
  const bubble = document.getElementById(character + "Thought");
  bubble.classList.toggle("visible");

  // Optional: show a tip in the bubble
  if (typeof prepareHourlyTip === "function") prepareHourlyTip(character);
}

  const storyForm = document.getElementById("storyForm");
  const storyInput = document.getElementById("storyInput");
  const storyMessage = document.getElementById("storyMessage");
  const storiesList = document.getElementById("veganStories");

  // Load approved stories
  async function loadStories() {
    const { data, error } = await supabase
      .from("stories")
      .select("content, created_at")
      .eq("visible", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching stories:", error);
      return;
    }

    storiesList.innerHTML = "";
    data.forEach(story => {
      const li = document.createElement("li");
      li.textContent = story.content;
      storiesList.appendChild(li);
    });
  }

  // Submit story
storyForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    storyMessage.textContent = "You must be logged in to submit a story.";
    return;
  }

  // Check if user already submitted today
  const now = new Date();
const todayStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0,0,0));
const todayEnd   = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 23,59,59,999));

  const { data: existing, error: checkError } = await supabase
    .from("stories")
    .select("id")
    .eq("user_id", user.id)
    .gte("created_at", todayStart.toISOString())
    .lt("created_at", new Date(todayEnd.getTime() + 1).toISOString())

  if (checkError) {
    console.error("Error checking existing stories:", checkError);
    storyMessage.textContent = "Error checking your previous submissions.";
    return;
  }

  if (existing.length > 0) {
    storyMessage.textContent = "You can only submit one story per day.";
    return;
  }

  // Insert new story
  const { error } = await supabase.from("stories").insert([
    { user_id: user.id, content: storyInput.value }
  ]);

  if (error) {
    console.error("Error inserting story:", error);
    storyMessage.textContent = "Error submitting your story.";
  } else {
    storyMessage.textContent = "Thanks! Your story will appear once reviewed.";
    storyInput.value = "";
  }
});

  loadStories();










const mentorsList = document.getElementById("mentorsList");
const chatsList = document.getElementById("chatsList"); 
const applyMentorBtn = document.getElementById("applyMentorBtn");
const chatWindow = document.getElementById("chatWindow");
const chatWith = document.getElementById("chatWith");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendChatBtn = document.getElementById("sendChatBtn");

let currentChatUserId = null;

// Load ongoing chats for the logged-in user
async function loadChatsList() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const userId = user.id;

  // Get unique chat partners (sender or recipient)
  const { data: chats, error } = await supabase
    .from("buddy_messages")
    .select("sender_id, recipient_id")
    .or(`sender_id.eq.${userId},recipient_id.eq.${userId}`)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading chats:", error);
    return;
  }

  // Get unique partner IDs excluding self
  const partnerIds = [...new Set(
    chats.map(c => (c.sender_id === userId ? c.recipient_id : c.sender_id))
  )];

  chatsList.innerHTML = "";

  for (const partnerId of partnerIds) {
    // Fetch profile info of chat partner
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("name, profile_photo")
      .eq("id", partnerId)
      .single();

    if (profileError) {
      console.error("Error fetching profile for chat partner:", profileError);
      continue;
    }

    const li = document.createElement("li");
    li.dataset.userId = partnerId;
    li.style.cursor = "pointer";
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.marginBottom = "5px";

    const img = document.createElement("img");
    img.src = profile.profile_photo || "defaultProfile.jpg";
    img.alt = profile.name;
    img.style.width = "40px";
    img.style.height = "40px";
    img.style.borderRadius = "50%";
    img.style.marginRight = "10px";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = profile.name;

    li.appendChild(img);
    li.appendChild(nameSpan);

    li.onclick = () => openChat(partnerId, profile.name);

    chatsList.appendChild(li);
  }
}

// Check if the logged-in user is already a mentor
async function checkIfMentor() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  const { data: existingMentor, error } = await supabase
    .from("mentors")
    .select("id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error && error.code !== "PGRST116") {
    console.error("Error checking mentor status:", error);
    return false;
  }

  return !!existingMentor;
}

// Load mentors and prepare chat
async function loadBuddyData() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const userId = user.id;

  // Load mentors
  const { data: mentors, error: mentorsError } = await supabase
    .from("mentors")
    .select("id, user_id, name, profile_photo, years_vegan")
    .order("years_vegan", { ascending: false });

  if (mentorsError) {
    console.error("Error loading mentors:", mentorsError);
    return;
  }

  // Hide "Apply to be mentor" button if user is already a mentor
  const alreadyMentor = mentors.some(m => m.user_id === userId);
  applyMentorBtn.style.display = alreadyMentor ? "none" : "inline-block";
  document.getElementById("ConnectWithAMentor").style.display = alreadyMentor ? "none" : "inline-block";

  // Render your own mentor row first (if applicable)
  const yourMentor = mentors.find(m => m.user_id === userId);
  if (yourMentor) {
    const row = document.getElementById("alrdymentor");
    const photo = document.getElementById("alrdyMentorPhoto");
    const nameSpan = document.getElementById("alrdyMentorName");
    const yearsSpan = document.getElementById("alrdyMentorYears");
    const removeBtn = document.getElementById("removeMentorBtn");

    photo.src = yourMentor.profile_photo;
    nameSpan.textContent = yourMentor.name;
    yearsSpan.textContent = yourMentor.years_vegan;
    row.style.display = "block";

    removeBtn.onclick = async () => {
      if (!confirm("Are you sure you want to remove yourself as a mentor?")) return;

      const { error } = await supabase
        .from("mentors")
        .delete()
        .eq("id", yourMentor.id);

      if (error) {
        console.error("Error deleting mentor:", error);
        alert("Failed to remove yourself as a mentor.");
      } else {
        alert("You are no longer a mentor.");
        row.style.display = "none";
        loadBuddyData();
      }
    };
  } else {
    document.getElementById("alrdymentor").style.display = "none";
  }

  // Render other mentors
  mentorsList.innerHTML = "";
  mentors.forEach(mentor => {
    if (mentor.user_id === userId) return;

    const li = document.createElement("li");
    li.dataset.userId = mentor.user_id; 

    const img = document.createElement("img");
    img.src = mentor.profile_photo;
    img.alt = mentor.name;
    img.style.width = "40px";
    img.style.height = "40px";
    img.style.borderRadius = "50%";
    img.style.marginRight = "10px";

    const text = document.createElement("span");
    text.textContent = `${mentor.name} – ${mentor.years_vegan} years vegan`;

    const msgBtn = document.createElement("button");
    msgBtn.textContent = "Message";
    msgBtn.style.marginLeft = "10px";
    msgBtn.onclick = () => openChat(mentor.user_id, mentor.name);

    li.appendChild(img);
    li.appendChild(text);
    li.appendChild(msgBtn);
    mentorsList.appendChild(li);
  });
}

// Apply to be mentor
applyMentorBtn.addEventListener("click", async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return alert("You must be logged in.");

  if (await checkIfMentor()) return alert("You are already a mentor!");

  const years = prompt("For how many years have you been vegan?");
  const yearsNum = parseInt(years);
  if (isNaN(yearsNum) || yearsNum <= 0) return alert("Please enter a valid number.");

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("name, profile_photo")
    .eq("id", user.id)
    .single();

  if (profileError) {
    console.error("Error fetching profile:", profileError);
    return alert("Error fetching your profile info.");
  }

  const { error } = await supabase.from("mentors").insert([
    {
      user_id: user.id,
      name: profile.name || "Anonymous",
      profile_photo: profile.profile_photo || null,
      years_vegan: yearsNum
    }
  ]);

  if (error) {
    console.error("Error submitting mentor application:", error);
    alert("Error submitting mentor application.");
  } else {
    alert("Mentor application submitted!");
    applyMentorBtn.style.display = "none";
    loadBuddyData();
  }
});

// Open chat window
function openChat(userId, name) {
  currentChatUserId = userId;
  chatWith.textContent = `Chat with ${name}`;
  chatWindow.style.display = "block";
  loadChatMessages();
}

// Load chat messages with current chat user
async function loadChatMessages() {
  if (!currentChatUserId) return;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  const userId = user.id;

  const { data: chat, error } = await supabase
    .from("buddy_messages")
    .select("id, sender_id, recipient_id, message, created_at, sender_name, sender_profile_photo")
    .or(`sender_id.eq.${userId},recipient_id.eq.${userId}`)
    .order("created_at", { ascending: true });

  if (error) return console.error(error);

  chatMessages.innerHTML = "";
  chat.forEach(msg => {
    if ((msg.sender_id === userId && msg.recipient_id === currentChatUserId) ||
        (msg.sender_id === currentChatUserId && msg.recipient_id === userId)) {

          // Create container for each message
      const msgContainer = document.createElement("div");
      msgContainer.style.display = "flex";
      msgContainer.style.alignItems = "center";
      msgContainer.style.marginBottom = "5px";

      // Sender profile photo
      const img = document.createElement("img");
      img.src = msg.sender_profile_photo || "defaultProfile.jpg";
      img.alt = msg.sender_name || "User";
      img.style.width = "30px";
      img.style.height = "30px";
      img.style.borderRadius = "50%";
      img.style.marginRight = "10px";

      // Sender name + message
      const text = document.createElement("span");
      text.innerHTML = `<strong>${msg.sender_name || (msg.sender_id === userId ? "You" : "Buddy")}</strong>: ${msg.message}`;

      msgContainer.appendChild(img);
      msgContainer.appendChild(text);
      chatMessages.appendChild(msgContainer);
    }
  });

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send chat message
sendChatBtn.addEventListener("click", async () => {
  const text = chatInput.value.trim();
  if (!text || !currentChatUserId) return;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  // Fetch sender's profile info
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("name, profile_photo")
    .eq("id", user.id)
    .single();

  if (profileError) {
    console.error("Error fetching profile info:", profileError);
    return alert("Error sending message: could not fetch profile info.");
  }

  // Insert message with name and profile photo
  const { error } = await supabase.from("buddy_messages").insert([
    {
      sender_id: user.id,
      recipient_id: currentChatUserId,
      message: text,
      sender_name: profile.name || "Anonymous",
      sender_profile_photo: profile.profile_photo || null
    }
  ]);

  if (error) {
    console.error("Error sending message:", error);
  } else {
    chatInput.value = "";
    loadChatMessages();
  }
});

// Initial load
loadBuddyData();
loadChatsList();

const closeChatBtn = document.getElementById("closeChatWindow");

closeChatBtn.addEventListener("click", () => {
  chatWindow.style.display = "none";
  // Show the chat in chatsList again
  if (currentChatUserId) {
    const chatItem = document.querySelector(`#chatsList li[data-user-id='${currentChatUserId}']`);
    if (chatItem) chatItem.style.display = "flex";
  }
  currentChatUserId = null;
});

function openChat(userId, name) {
  currentChatUserId = userId;
  chatWith.textContent = `Chat with ${name}`;
  chatWindow.style.display = "block";

  // Hide this user from chatsList
  const chatItem = document.querySelector(`#chatsList li[data-user-id='${userId}']`);
  if (chatItem) chatItem.style.display = "none";

  loadChatMessages();
}

let chatSubscription = null;

async function subscribeToChat() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  const userId = user.id;

  // Unsubscribe previous subscription
  if (chatSubscription) {
    supabase.removeChannel(chatSubscription);
  }

  // Create a channel for buddy_messages table
  chatSubscription = supabase.channel('public:buddy_messages')
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'buddy_messages',
      filter: `sender_id=eq.${userId},recipient_id=eq.${userId}`
    }, payload => {
      const msg = payload.new;
      if (!currentChatUserId) return; 

      const relevant = (msg.sender_id === userId && msg.recipient_id === currentChatUserId) ||
                       (msg.sender_id === currentChatUserId && msg.recipient_id === userId);
      if (!relevant) return;

      const msgContainer = document.createElement("div");
      msgContainer.style.display = "flex";
      msgContainer.style.alignItems = "center";
      msgContainer.style.marginBottom = "5px";

      const img = document.createElement("img");
      img.src = msg.sender_profile_photo || "defaultProfile.jpg";
      img.alt = msg.sender_name || "User";
      img.style.width = "30px";
      img.style.height = "30px";
      img.style.borderRadius = "50%";
      img.style.marginRight = "10px";

      const text = document.createElement("span");
      text.innerHTML = `<strong>${msg.sender_name || (msg.sender_id === userId ? "You" : "Buddy")}</strong>: ${msg.message}`;

      msgContainer.appendChild(img);
      msgContainer.appendChild(text);
      chatMessages.appendChild(msgContainer);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    })
    .subscribe();
}

// Call it after page load
subscribeToChat();


