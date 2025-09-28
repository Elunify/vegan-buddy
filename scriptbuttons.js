import { supabase } from "./supabaseClient.js";


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
  if (!sideMenu.classList.contains('hidden')) {
    sideMenu.classList.add('hidden');
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

// Lessons, Recipes, Recommendations, Sources
const learnButtons = ['lessons','recipes','recommendations','sources'];
learnButtons.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) {
    btn.addEventListener('click', () => showSection(id));
  }
});

// Explore: Restaurants, Scan
const exploreButtons = ['restaurants','scan'];
exploreButtons.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) {
    btn.addEventListener('click', () => showSection(id));
  }
});

// Community: Local, Events, Forum, Friends, Mentorship, Success
const communityButtons = ['local','events','forum','friends','mentorship','success'];
communityButtons.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) {
    btn.addEventListener('click', () => showSection(id));
  }
});

// Playground: Avatar, Shop, Leaderboards, Challenges
const playgroundButtons = ['avatar','shop','leaderboards','challenges'];
playgroundButtons.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) {
    btn.addEventListener('click', () => showSection(id));
  }
});

// Home button
const homeBtn = document.querySelector('.bottom-nav button[onclick="showSection(\'home\')"]');
if (homeBtn) {
  homeBtn.addEventListener('click', () => showSection('home'));
}


