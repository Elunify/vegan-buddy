// =======================
// 1️⃣ TAB SYSTEM & DROPDOWNS
// =======================

let tabHistory = [];
let currentTab = "home";

// Show a section/page
function showSection(sectionId) {
  if (currentTab !== sectionId) {
    if (tabHistory[tabHistory.length - 1] !== currentTab) {
      tabHistory.push(currentTab); // save previous tab
    }
    currentTab = sectionId;
  }

   // Set messages tab state
  if (sectionId === 'messages') {
    window.isMessagesTabOpen = true;
    window.onMessagesTabOpened?.(); // optional, in case you have other logic
  } else {
    if (window.isMessagesTabOpen) {
      window.isMessagesTabOpen = false;
      window.onMessagesTabClosed?.();
    }
  }

  // Show/hide all pages
  document.querySelectorAll('.page').forEach(page => {
    if (page.id === sectionId) {
      page.classList.remove('hidden');

      // ✅ Special cases
      if (sectionId === 'mealartcontest') {
        const contestContent = document.getElementById("mealArtContestSmall");
        if (contestContent) contestContent.classList.remove("hidden-meal");
      }
      if (sectionId === 'mealArtUploadTab') {
        const uploadContent = document.getElementById("MealArtUploadContent");
        if (uploadContent) uploadContent.classList.remove("hidden-meal");
      }

    } else {
      page.classList.add('hidden');
    }
  });

  // Top bar only visible on home
  const topBar = document.getElementById('topBar');
  if (topBar) topBar.classList.toggle('hidden', sectionId !== 'home');
}

// In your main tab system JS file
window.goBackTab = function() {
  if (tabHistory.length > 0) {
    const previousTab = tabHistory.pop();
    showSection(previousTab);
    return true;
  }
  return false;
};

// Close all dropdowns
function closeDropdowns() {
  document.querySelectorAll('.dropdown-content.open').forEach(d => d.classList.remove('open'));
}

// Dropdown toggles
document.querySelectorAll('.dropdown > button, .profile-wrapper, .menu-button').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const dropdown = btn.nextElementSibling;
    if (dropdown && dropdown.classList) {
      const isOpen = dropdown.classList.contains('open');
      document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('open'));
      dropdown.classList.toggle('open', !isOpen);
    } else {
      document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('open'));
    }
  });
});

// Close dropdowns if clicking outside
document.body.addEventListener('click', e => {
  document.querySelectorAll('.dropdown-content.open').forEach(dropdown => {
    if (!dropdown.parentElement.contains(e.target)) dropdown.classList.remove('open');
  });
});

// ----- Define Dropdown Buttons -----

// 1️⃣ Profile dropdown: Profile, Friends, Messages
const profileDropdown = ['profile', 'friends', 'messages'];
profileDropdown.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) btn.addEventListener('click', () => {
    showSection(id);
    closeDropdowns();
    clearSectionNotifications(id); 
  });
});
// Handle user leaving page
window.addEventListener('beforeunload', () => {
  if (isMessagesTabOpen) onMessagesTabClosed();
});

// Handle browser tab visibility change (minimize/switch tab)
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && isMessagesTabOpen) {
    onMessagesTabClosed();
  }
});

// 2️⃣ Home button (no dropdown)
const homeBtn = document.querySelector(`button[onclick="showSection('home')"]`);
if (homeBtn) homeBtn.addEventListener('click', () => {
  showSection('home');
  closeDropdowns();
});

// 3️⃣ Community dropdown: Local Community, Anonymous Forum, Mentorship
const communityDropdown = ['local', 'forum', 'mentorship'];
communityDropdown.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) btn.addEventListener('click', () => {
    showSection(id);
    clearSectionNotifications(id);
    closeDropdowns();
  });
});

// 4️⃣ Playground dropdown: Achievements, Shop, Challenges
const playgroundDropdown = ['leaderboards', 'achievements', 'shop', 'challenges'];
playgroundDropdown.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) btn.addEventListener('click', () => {
    showSection(id);
    closeDropdowns();
  });
});

// 5️⃣ ETC dropdown: Leaderboards, Recommendations, About us, Sources
const etcDropdown = ['recommendations', 'subscriptions', 'sources', 'aboutus', 'contactus'];
etcDropdown.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) btn.addEventListener('click', () => {
    showSection(id);
    closeDropdowns();
  });
});

// =======================
// 2️⃣ BUTTON CLICK HANDLERS
// =======================

// ----- Profile Edit -----
const editBtn = document.querySelector('.editprofile');
const profileTab = document.getElementById('settings');
const editTab = document.getElementById('editProfileTabBtn');

if (editBtn) editBtn.addEventListener('click', e => {
  e.preventDefault();
  showSection('editProfileTabBtn'); // ✅ now uses showSection
});

// ----- Meal Art Contest & Upload -----
const mealArtContestPage = document.getElementById("mealartcontest");
const mealArtContestContent = document.getElementById("mealArtContestSmall");
const mealArtUploadPage = document.getElementById("mealArtUploadTab");
const mealArtUploadContent = document.getElementById("MealArtUploadContent");

function openMealArtContest() {
  const contestContent = document.getElementById("mealArtContestSmall");
  if (contestContent) contestContent.classList.remove("hidden-meal");
  showSection("mealartcontest"); // ✅ uses showSection
}

function openMealArtUpload() {
  const uploadContent = document.getElementById("MealArtUploadContent");
  if (uploadContent) uploadContent.classList.remove("hidden-meal");
  showSection("mealArtUploadTab"); // ✅ uses showSection
}

// Contest page buttons
document.querySelectorAll('.mealartBtn').forEach(btn => {
  btn.addEventListener('click', openMealArtContest);
});
document.getElementById("mealArtBtn")?.addEventListener('click', openMealArtContest);

// Upload button inside contest
document.getElementById("uploadBtn")?.addEventListener('click', openMealArtUpload);

// ----- Daily Check-in / Learn Path -----
const checkinBtn = document.getElementById('checkinBtn');
checkinBtn?.addEventListener('click', () => {
  initDailyCheckin();
  showSection('learn');
  document.getElementById('dailycheck-in')?.classList.remove('hidden');
  document.getElementById('lesson-path')?.classList.add('hidden');
});

const lessonPathBtn = document.getElementById("lessonPathBtn");
lessonPathBtn?.addEventListener('click', () => {
  showSection('learn');
  document.getElementById('dailycheck-in')?.classList.add('hidden');
  document.getElementById('lesson-path')?.classList.remove('hidden');
});

// ----- Trending Recipes -----
document.getElementById('recipesBtn')?.addEventListener('click', () => showSection('recipes'));

// =======================
// 3️⃣ POPUPS
// =======================

function openPopup(popupId) {
  document.querySelectorAll('.popup').forEach(p => p.classList.add('hidden'));
  document.getElementById(popupId)?.classList.remove('hidden');
}

// Close popup X buttons
document.querySelectorAll('.popup-close').forEach(btn => {
  btn.addEventListener('click', () => btn.closest('.popup')?.classList.add('hidden'));
});

// Optional: close popup on outside click
document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('click', e => {
    if (e.target === popup) popup.classList.add('hidden');
  });
});

// Meal Art Winners Popups
const mealArtMap = { 'amateurImage': 'popupAmateur', 'proImage': 'popupProfessional' };
Object.keys(mealArtMap).forEach(id => {
  document.getElementById(id)?.addEventListener('click', () => openPopup(mealArtMap[id]));
});

// Recipe modals
document.getElementById('amateurRecipe')?.addEventListener('click', () => openPopup('recipeModal'));
document.getElementById('professionalRecipe')?.addEventListener('click', () => openPopup('recipeModal'));

// Impact card popups
const impactMap = { 'youAnimals': 'popupAnimals', 'youForest': 'popupForest', 'youWater': 'popupWater', 'youCO2': 'popupCO2' };
document.querySelectorAll('.impact-cards .card').forEach(card => {
  card.addEventListener('click', () => {
    const strong = Array.from(card.querySelectorAll('strong')).find(s => impactMap[s.id]);
    if (strong) openPopup(impactMap[strong.id]);
  });
});
document.querySelectorAll('.openCalculator').forEach(link => link.addEventListener('click', () => openPopup('impactcalculator')));

// Search popup
const searchPopup = document.getElementById("searchPopup");
document.getElementById("openSearchPopup")?.addEventListener("click", () => searchPopup.style.display = "flex");
document.getElementById("closeSearchPopup")?.addEventListener("click", () => searchPopup.style.display = "none");
window.addEventListener("click", e => { if (e.target === searchPopup) searchPopup.style.display = "none"; });

// =======================
// 4️⃣ OTHER FUNCTIONS
// =======================

// Android back button
window.onAndroidBackPressed = function () {
  if (tabHistory.length > 0) {
    const previousTab = tabHistory.pop();
    currentTab = previousTab;
    showSection(previousTab);
    return true;
  }
  return false;
};

// Chat scrolling
const bottomNavHeight = 50;
const chatView = document.getElementById('chatView');
const chatMessages = document.getElementById('chatMessages');

function isAtBottom() {
  return chatMessages.scrollHeight - chatMessages.scrollTop - chatMessages.clientHeight < 20;
}

function scrollToBottom(force = false) {
  if (force || isAtBottom()) chatMessages.scrollTop = chatMessages.scrollHeight;
}

function updateChatLayout(forceScroll = false) {
  const viewportHeight = window.visualViewport?.height || window.innerHeight;
  chatView.style.height = `${viewportHeight - bottomNavHeight}px`;
  requestAnimationFrame(() => scrollToBottom(forceScroll));
}

if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', () => updateChatLayout(false));
} else {
  window.addEventListener('resize', () => updateChatLayout(false));
}

function addMessage(text) {
  const div = document.createElement('div');
  div.className = 'my-message';
  div.textContent = text;
  chatMessages.appendChild(div);
  scrollToBottom(true);
}

// Messages tab layout
function onMessagesTabOpened() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => updateChatLayout(true));
  });
}

function toggleListLeader(header) {
  const ul = header.nextElementSibling;
  ul?.classList.toggle('visible');
  header.classList.toggle('active'); // rotates arrow
}

  // Trigger profile photo file input
document.getElementById('changeProfilePhotoBtn').addEventListener('click', () => {
  document.getElementById('profilePhotoUpload').click();
});

// Trigger pet photo file input
document.getElementById('changePetPhotoBtn').addEventListener('click', () => {
  document.getElementById('petPhotoUpload').click();
});

// --- IMAGE RESIZE & CROP TO SQUARE FUNCTION ---
async function resizeImage(file, maxSize = 600, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = e => img.src = e.target.result;

    img.onload = () => {
      // Determine the square crop (centered)
      const minSide = Math.min(img.width, img.height);
      const startX = (img.width - minSide) / 2;
      const startY = (img.height - minSide) / 2;

      const canvas = document.createElement('canvas');
      canvas.width = maxSize;
      canvas.height = maxSize;

      const ctx = canvas.getContext('2d');

      // Draw the cropped square scaled to maxSize x maxSize
      ctx.drawImage(
        img,
        startX, startY,          // start of crop
        minSide, minSide,        // size of crop
        0, 0,                    // start position on canvas
        maxSize, maxSize          // size on canvas
      );

      canvas.toBlob(
        blob => {
          if (!blob) return reject("Canvas is empty");
          resolve(new File([blob], file.name, { type: blob.type }));
        },
        "image/jpeg",
        quality
      );
    };

    img.onerror = err => reject(err);
    reader.readAsDataURL(file);
  });
}

// --- PROFILE PHOTO PREVIEW ---
const profilePhotoInput = document.getElementById('profilePhotoUpload');
const profilePhotoPreview = document.getElementById('profilePhotoPreview');
let newProfilePhotoFile = null;

profilePhotoInput.addEventListener('change', async e => {
  let file = e.target.files[0];
  if (!file) return;

  file = await resizeImage(file, 600, 0.7, 'image/webp');
  newProfilePhotoFile = file;

  const fileUrl = URL.createObjectURL(file);

  if (profilePhotoPreview) {
    if (profilePhotoPreview.dataset.profilePhotoDiv === "true") {
      profilePhotoPreview.style.backgroundImage = `url('${fileUrl}')`;
    } else if (profilePhotoPreview.tagName === "IMG") {
      profilePhotoPreview.src = fileUrl;
    }
  }
});


// --- PET PHOTO PREVIEW ---
const petPhotoInput = document.getElementById('petPhotoUpload');
const petPhotoPreview = document.getElementById('petPhotoPreview');
let newPetPhotoFile = null;

petPhotoInput.addEventListener('change', async e => {
  let file = e.target.files[0];
  if (!file) return;

  file = await resizeImage(file, 300, 0.7, 'image/webp');
  newPetPhotoFile = file;

  petPhotoPreview.src = URL.createObjectURL(file);
});

// Open upload modal
const openUploadBtn = document.getElementById("openUploadBtn");
const uploadModal = document.getElementById("upload-recipe");
const closeBtns = uploadModal.querySelectorAll(".close-btn");

// Show modal when button clicked
openUploadBtn.addEventListener("click", () => {
  uploadModal.classList.remove("hidden-modal");
});

// Hide modal when clicking close button(s)
closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    uploadModal.classList.add("hidden-modal");
  });
});

// Optional: close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === uploadModal) {
    uploadModal.classList.add("hidden-modal");
  }
});
