// Function to hide all pages and show the selected one
function showSection(sectionId) {
  // Get all elements with class "page"
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    if (page.id === sectionId) {
      page.classList.remove('hidden'); // Show selected page
    } else {
      page.classList.add('hidden'); // Hide others
    }
  });

  // Close side menu if open
  const sideMenu = document.getElementById('sideMenu');
  if (sideMenu && sideMenu.classList.contains('open')) {
    sideMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
}

// --- Settings Page Trigger ---
const profileWrapper = document.querySelector('.profile-wrapper');
if (profileWrapper) {
  profileWrapper.addEventListener('click', () => showSection('settings'));
}

// --- Side Menu Toggle ---
const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');

menuButton.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  document.body.classList.toggle('menu-open'); // overlay
});

// Optional: close menu when clicking outside
document.body.addEventListener('click', e => {
  if (sideMenu.classList.contains('open') && !sideMenu.contains(e.target) && e.target !== menuButton) {
    sideMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
});


// --- Side Menu Buttons ---
const helpUsGrowBtn = document.getElementById('helpusgrowBtn');
if (helpUsGrowBtn) {
  helpUsGrowBtn.addEventListener('click', () => showSection('supportus'));
}

const aboutUsBtn = document.getElementById('aboutUsBtn');
if (aboutUsBtn) {
  aboutUsBtn.addEventListener('click', () => showSection('aboutus'));
}

// --- Bottom Navigation Buttons ---

//bottom navigation buttons:
document.querySelectorAll('.dropdown > button').forEach(btn => {
  btn.addEventListener('click', () => {
    const dropdown = btn.nextElementSibling; // the .dropdown-content
    const isOpen = dropdown.classList.contains('open');

    // Close all other dropdowns
    document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('open'));

    // Toggle current dropdown
    if (!isOpen) {
      dropdown.classList.add('open');
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

// Explore: Restaurants, Scan
const exploreButtons = ['restaurants','scan'];
exploreButtons.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) {
    btn.addEventListener('click', () => {
      showSection(id);
      closeDropdowns(); // close dropdown
    });
  }
});

// Community: Local, Events, Forum, Friends, Mentorship, Success
const communityButtons = ['local','events','forum','friends','mentorship','success'];
communityButtons.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) {
    btn.addEventListener('click', () => {
      showSection(id);
      closeDropdowns(); // close dropdown
    });
  }
});

// Playground: Avatar, Shop, Leaderboards, Challenges
const playgroundButtons = ['avatar','shop','leaderboards','challenges'];
playgroundButtons.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) {
    btn.addEventListener('click', () => {
      showSection(id);
      closeDropdowns(); // close dropdown
    });
  }
});

// Home button
const homeBtn = document.querySelector('.bottom-nav button[onclick="showSection(\'home\')"]');
if (homeBtn) {
  homeBtn.addEventListener('click', () => {
    showSection('home');
    closeDropdowns();
  });
  }

// --- Top buttons on main page ---
const checkinBtn = document.getElementById('checkinBtn');
if (checkinBtn) {
  checkinBtn.addEventListener('click', () => showSection('dailycheck-in'));
}

const healthBtn = document.getElementById('healthBtn');
if (healthBtn) {
  healthBtn.addEventListener('click', () => showSection('healthissues'));
}

// --- Quick Access Buttons ---
const lessonsBtn = document.getElementById('lessonsBtn');
if (lessonsBtn) {
  lessonsBtn.addEventListener('click', () => showSection('lessons'));
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
const containerSettings = document.querySelector('.containersettings');
const containerEdit = document.querySelector('.containeredit');

editBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent default link navigation
  containerSettings.classList.add('hidden'); // hide settings
  containerEdit.classList.remove('hidden');  // show edit form
});

function toggleMemberships() {
    const list = document.getElementById("membership-list");
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }
