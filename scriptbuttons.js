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

  // Show/hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.id === sectionId ? page.classList.remove('hidden') : page.classList.add('hidden');
  });

  // Top bar only visible on home
  const topBar = document.getElementById('topBar');
  if (topBar) topBar.classList.toggle('hidden', sectionId !== 'home');
}

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
    if (id === 'messages') onMessagesTabOpened();
  });
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
const playgroundDropdown = ['profilecard','avatar','shop','leaderboards','challenges','supportus','settings'];
playgroundDropdown.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) btn.addEventListener('click', () => {
    showSection(id);
    closeDropdowns();
  });
});

// 5️⃣ ETC dropdown: Leaderboards, Recommendations, About us, Sources
const etcDropdown = ['leaderboards','recommendations','aboutus','sources'];
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
  showSection("mealartcontest"); // ✅ uses showSection
  const contestContent = document.getElementById("mealArtContestSmall");
  if (contestContent) contestContent.classList.remove("hidden-meal");
}

function openMealArtUpload() {
  showSection("mealArtUploadTab"); // ✅ uses showSection
  const uploadContent = document.getElementById("MealArtUploadContent");
  if (uploadContent) uploadContent.classList.remove("hidden-meal");
}

// Contest page buttons
document.querySelectorAll('.mealartBtn').forEach(btn => {
  btn.addEventListener('click', openMealArtContest);
});
document.getElementById("mealArtBtn")?.addEventListener('click', openMealArtContest);

// Upload button inside contest
document.getElementById("uploadBtn")?.addEventListener('click', openMealArtUpload);

// Back button from upload
document.getElementById("mealArtBackBtn")?.addEventListener('click', openMealArtContest);

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

  file = await resizeImage(file, 600, 0.7);
  newProfilePhotoFile = file;

  profilePhotoPreview.src = URL.createObjectURL(file);
});

// --- PET PHOTO PREVIEW ---
const petPhotoInput = document.getElementById('petPhotoUpload');
const petPhotoPreview = document.getElementById('petPhotoPreview');
let newPetPhotoFile = null;

petPhotoInput.addEventListener('change', async e => {
  let file = e.target.files[0];
  if (!file) return;

  file = await resizeImage(file, 300, 0.7);
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






/*
// Function to hide all pages and show the selected one
// --- TAB HISTORY SYSTEM (fixed) ---
let tabHistory = [];
let currentTab = "home";

// Show a section
function showSection(sectionId) {
  if (currentTab !== sectionId) {
    // Only push currentTab if it's not the same as last in history
    if (tabHistory[tabHistory.length - 1] !== currentTab) {
      tabHistory.push(currentTab);   // save previous tab
    }
    currentTab = sectionId;
  }

  // Get all elements with class "page"
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    if (page.id === sectionId) {
      page.classList.remove('hidden'); // Show selected page
    } else {
      page.classList.add('hidden'); // Hide others
    }
  });

  // Show top bar only for home page
  const topBar = document.getElementById('topBar');
  if (topBar) {
    if (sectionId === 'home') {
      topBar.classList.remove('hidden');
    } else {
      topBar.classList.add('hidden');
    }
  }
}

// Open Meal Art Contest page
const mealArtContestBtn = document.getElementById("mealArtBtn");
if (mealArtContestBtn) {
  mealArtContestBtn.addEventListener("click", () => {
    showSection("mealartcontest"); // ✅ show the page, not the inner content
    document.getElementById("mealArtContestSmall").classList.remove("hidden-meal"); // ensure content visible
  });
}

// Open Upload Page from contest
const uploadBtn = document.getElementById("uploadBtn");
if (uploadBtn) {
  uploadBtn.addEventListener("click", () => {
    showSection("mealArtUploadTab"); // ✅ show the page
    document.getElementById("MealArtUploadContent").classList.remove("hidden-meal"); // ensure upload content visible
  });
}


// --- Bottom Navigation Buttons ---
// Called from Android when BACK button is pressed
window.onAndroidBackPressed = function () {
  if (tabHistory.length > 0) {
    const previousTab = tabHistory.pop();
    currentTab = previousTab; // Update currentTab BEFORE calling showSection to prevent pushing currentTab again
    showSection(previousTab);
    return true;  // JS handled the back press
  }
  return false;   // No more history → let Android close the app
};

// Toggle dropdowns for all triggers (center buttons, profile, menu)
document.querySelectorAll('.dropdown > button, .profile-wrapper, .menu-button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = btn.nextElementSibling;

    if (dropdown && dropdown.classList) {
      const isOpen = dropdown.classList.contains('open');

      // Close all other dropdowns
      document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('open'));

      // Toggle this one
      dropdown.classList.toggle('open', !isOpen);
    } else {
      // no dropdown (e.g., home button)
      document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('open'));
    }
  });
});

// Helper: close all dropdowns when a section button is clicked
function closeDropdowns() {
  document.querySelectorAll('.dropdown-content.open').forEach(d => {
    d.classList.remove('open');
  });
}

// Lessons, Recipes, Recommendations, Sources
const learnButtons = ['lessons','recipes','recommendations','sources'];
learnButtons.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) {
    btn.addEventListener('click', () => {
      showSection(id);
      closeDropdowns(); // close dropdown
    });
  }
});

// Community: Local, Events, Forum, Friends, Mentorship, Success
const communityButtons = ['local','forum', 'mentorship'];
communityButtons.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) {
    btn.addEventListener('click', () => {
      showSection(id);
      clearSectionNotifications(id);      // clear notifications for this section
      closeDropdowns(); // close dropdown
    });
  }
});

// Sections that should clear notifications when clicked
const notifySections = ['friends', 'messages'];

notifySections.forEach(section => {
  const btn = document.querySelector(`button[onclick="showSection('${section}')"]`);
  
  if (btn) {
    btn.addEventListener('click', (event) => {
      event.preventDefault(); // just to be safe

      clearSectionNotifications(section);  // 👉 clear notifications
      showSection(section);                // 👉 open section
      closeDropdowns();                    // optional: close menu

      // 🔑 CRITICAL: run chat layout AFTER messages becomes visible
      if (section === 'messages') {
        onMessagesTabOpened();
        }
    });
  }
});
function onMessagesTabOpened() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => updateChatLayout(true));
  });
}

// Playground: Avatar, Shop, Leaderboards, Challenges
const playgroundButtons = ['profilecard','avatar','shop','leaderboards','challenges', 'supportus', 'settings'];
playgroundButtons.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) {
    btn.addEventListener('click', () => {
      showSection(id);
      closeDropdowns(); // close dropdown
    });
  }
});

// Close dropdowns when clicking outside
document.body.addEventListener('click', e => {
  // Select all dropdown buttons and their corresponding contents
  const dropdowns = document.querySelectorAll('.dropdown');
  const openDropdowns = document.querySelectorAll('.dropdown-content.open');

  openDropdowns.forEach(dropdown => {
    const parent = dropdown.parentElement; // the .dropdown container
    const button = parent.querySelector('button');

    // If click is outside the dropdown container and the button
    if (!parent.contains(e.target) && e.target !== button) {
      dropdown.classList.remove('open');
    }
  });
});


// Home button
const homeBtn = document.querySelector('.bottom-nav button[onclick="showSection(\'home\')"]');
if (homeBtn) {
  homeBtn.addEventListener('click', () => {
    showSection('home');
    closeDropdowns();
  });
  }

checkinBtn.addEventListener('click', () => {
  initDailyCheckin();
  showSection('learn'); // Show the learn page
  document.getElementById('dailycheck-in')?.classList.remove('hidden');
  document.getElementById('lesson-path')?.classList.add('hidden');
});

const lessonPathBtn = document.getElementById("lessonPathBtn");
if (lessonPathBtn) {
  lessonPathBtn.addEventListener('click', () => {
    showSection('learn');
    document.getElementById('dailycheck-in')?.classList.add('hidden');
    document.getElementById('lesson-path')?.classList.remove('hidden');
  });
}

const recipesBtn = document.getElementById('recipesBtn');
if (recipesBtn) {
  recipesBtn.addEventListener('click', () => showSection('recipes'));
}

// --- Meal-Art Winners H3 Sections ---
const mealartBtn = document.querySelectorAll('.mealartBtn');
mealartBtn.forEach(link => {
  link.style.cursor = 'pointer'; // shows it’s clickable
  link.addEventListener('click', () => showSection('mealartcontest'));
});

const uploadContainer = document.getElementById("MealArtUploadContent");
const mainContest = document.getElementById("mealArtContestSmall");
const mealArtbackBtn = document.getElementById("mealArtBackBtn");

document.getElementById("mealArtBtn").addEventListener("click", () => {
  showSection("mealartcontest");
});

// --- Meal Art Contest & Upload Tabs ---

const mealArtContestPage = document.getElementById("mealartcontest");
const mealArtUploadPage = document.getElementById("mealArtUploadTab");
const mealArtUploadContent = document.getElementById("MealArtUploadContent");


// Optional: integrate MealArtUploadContent as default hidden tab content
// This ensures the internal content (MealArtUploadContent) is visible when page is shown
function showMealArtUploadPage() {
  mealArtUploadContent.classList.remove("hidden-meal");
}

// Optional: hide contest content if needed
function showMealArtContestPage() {
  document.getElementById("mealArtContestSmall").classList.remove("hidden-meal");
}

// --- Function to open a popup and close others ---
function openPopup(popupId) {
  // Close all other popups
  document.querySelectorAll('.popup').forEach(p => p.classList.add('hidden'));

  // Open the requested popup
  const popup = document.getElementById(popupId);
  if (popup) popup.classList.remove('hidden');
}

// --- Impact Cards Popups ---
const impactMap = {
  'youAnimals': 'popupAnimals',
  'youForest': 'popupForest',
  'youWater': 'popupWater',
  'youCO2': 'popupCO2'
};

// Attach click listeners to each card
document.querySelectorAll('.impact-cards .card').forEach(card => {
  card.addEventListener('click', () => {
    // Find a <strong> in this card whose ID is in impactMap
    const strong = Array.from(card.querySelectorAll('strong'))
                        .find(s => impactMap[s.id]);
    if (strong) {
      openPopup(impactMap[strong.id]);
    }
  });
});

// --- Impact Calculator Links (all popups) ---
// Use a class "openCalculator" for all links inside popups
document.querySelectorAll('.openCalculator').forEach(link => {
  link.addEventListener('click', () => openPopup('impactcalculator'));
});

// --- Close popup on X button ---
document.querySelectorAll('.popup-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const popup = btn.closest('.popup');
    if (popup) popup.classList.add('hidden');
  });
});

// --- Optional: close popup when clicking outside content ---
document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('click', e => {
    if (e.target === popup) popup.classList.add('hidden');
  });
});

// --- Meal-Art Winners Popups ---
const mealArtMap = {
  'amateurImage': 'popupAmateur',
  'proImage': 'popupProfessional',
};

// Attach click listeners to the images
Object.keys(mealArtMap).forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener('click', () => openPopup(mealArtMap[id]));
  }
});

// Amateur Recipe Trigger
  const amateurRecipe = document.getElementById('amateurRecipe');
  if (amateurRecipe) {
    amateurRecipe.addEventListener('click', () => openPopup('recipeModal'));
  }

  // Pro Recipe Trigger
  const proRecipe = document.getElementById('professionalRecipe');
  if (proRecipe) {
    proRecipe.addEventListener('click', () => openPopup('recipeModal'));
  }

  // HomePage END
  // HomePage END
  // HomePage END
  // HomePage END
  // HomePage END

  // TOPBAR
  // TOPBAR
  // TOPBAR
  // TOPBAR
  // TOPBAR

// Grab elements
const editBtn = document.querySelector('.editprofile');
const profileTab = document.getElementById('settings');        // profile view
const editTab = document.getElementById('editProfileTabBtn');  // edit form

// Show Edit Tab
editBtn.addEventListener('click', (e) => {
  e.preventDefault();           // prevent link navigation
  profileTab.classList.add('hidden'); // hide profile view
  editTab.classList.remove('hidden'); // show edit form
});

function toggleMemberships() {
    const list = document.getElementById("membership-list");
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }

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


// LeaderBoard
// LeaderBoard
// LeaderBoard
// LeaderBoard

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

  file = await resizeImage(file, 600, 0.7);
  newProfilePhotoFile = file;

  profilePhotoPreview.src = URL.createObjectURL(file);
});

// --- PET PHOTO PREVIEW ---
const petPhotoInput = document.getElementById('petPhotoUpload');
const petPhotoPreview = document.getElementById('petPhotoPreview');
let newPetPhotoFile = null;

petPhotoInput.addEventListener('change', async e => {
  let file = e.target.files[0];
  if (!file) return;

  file = await resizeImage(file, 300, 0.7);
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



const bottomNavHeight = 50;
const chatView = document.getElementById('chatView');
const chatMessages = document.getElementById('chatMessages');

function isAtBottom() {
  return (
    chatMessages.scrollHeight - chatMessages.scrollTop - chatMessages.clientHeight
    < 20
  );
}

function scrollToBottom(force = false) {
  if (force || isAtBottom()) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function updateChatLayout(forceScroll = false) {
  const viewportHeight = window.visualViewport
    ? window.visualViewport.height
    : window.innerHeight;

  const availableHeight = viewportHeight - bottomNavHeight;

  chatView.style.height = `${availableHeight}px`;

  requestAnimationFrame(() => scrollToBottom(forceScroll));
}

if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', () => {
    updateChatLayout(false);
  });
} else {
  window.addEventListener('resize', () => {
    updateChatLayout(false);
  });
}

function addMessage(text) {
  const div = document.createElement('div');
  div.className = 'my-message';
  div.textContent = text;
  chatMessages.appendChild(div);

  scrollToBottom(true);
}

*/