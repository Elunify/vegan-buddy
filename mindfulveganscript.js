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
    li.textContent = block.content;

    // Make block clickable to open popup
    li.addEventListener('click', () => openCommentPopup(block));

    // Show delete button only for the poster
    if (block.user_id === currentUser.id) {
      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
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
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
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

