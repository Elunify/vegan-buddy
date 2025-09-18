
// ======= Avatar click redirects to profile =======
  function setupAvatarClick() {
    const avatar = document.getElementById("avatarDisplay");
    if (avatar) {
      avatar.style.cursor = "pointer";
      avatar.addEventListener("click", () => {
        window.location.href = "yourprofile.html";
      });
    }
  }

  // ======= Thought Bubble Toggle =======
  document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("avatarDisplayPet");
  const bubble = document.getElementById("petThought");

  if (container && bubble) {
    container.addEventListener("click", (event) => {
      // Optional: prevent clicks inside the bubble from closing it immediately
      if (event.target === bubble || bubble.contains(event.target)) return;

      bubble.classList.toggle("hidden");
    });
  }
});

  // Open sidemenu
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const sideMenu = document.getElementById("sideMenu");

  if (menuButton && sideMenu) {
    menuButton.addEventListener("click", () => {
      sideMenu.classList.toggle("hidden");
    });
  }

  // Navigation buttons
  const topListsBtn = document.getElementById("topListsBtn");
  const helpusgrowBtn = document.getElementById("helpusgrowBtn");
  const aboutUsBtn = document.getElementById("aboutUsBtn");
  const sourcesBtn = document.getElementById("sourcesBtn");

  if (topListsBtn) {
    topListsBtn.addEventListener("click", () => {
      window.location.href = "leaderboards.html";
    });
  }

  if (helpusgrowBtn) {
    helpusgrowBtn.addEventListener("click", () => {
      window.location.href = "helpusgrow.html";
    });
  }

  if (aboutUsBtn) {
    aboutUsBtn.addEventListener("click", () => {
      window.location.href = "aboutus.html";
    });
  }

  if (sourcesBtn) {
    sourcesBtn.addEventListener("click", () => {
      window.location.href = "sources.html";
    });
  }
});

// =========================================================== TEMPORAL ==========================================================
// =========================================================== TEMPORAL ==========================================================
// =========================================================== TEMPORAL ==========================================================
// =========================================================== TEMPORAL ==========================================================
// =========================================================== TEMPORAL ==========================================================


// ===== UI Elements =====
const countersElements = {
  animalsSavedEl: document.getElementById('savedAnimals'),
  forestSavedEl: document.getElementById('savedForest'),
  waterSavedEl: document.getElementById('savedWater'),
  co2ReducedEl: document.getElementById('savedCO2'),
  donatedEl: document.getElementById('savedDonated'),
  levelBar: document.getElementById('levelBar'),
  indexNumber: document.getElementById('indexnumber'),
  currentLevelEl: document.getElementById("currentLevel"),
  streakEl: document.getElementById('streak-counter')
};

// ===== Helper: Calculate level from XP =====
function getLevelFromXP(totalXP) {
  let level = 1;
  let xpNeededForNext = 100;
  let xpLeft = totalXP;

  while (xpLeft >= xpNeededForNext && level < 100) {
    xpLeft -= xpNeededForNext;
    level++;
    xpNeededForNext = Math.floor(xpNeededForNext * 1.05);
  }

  return { level, xpTowardsNextLevel: xpLeft, xpNeededForNextLevel: xpNeededForNext };
}

// ===== Update UI with profile data =====
function updateUI(profile) {
  if (!profile) return;

  if (countersElements.animalsSavedEl) countersElements.animalsSavedEl.textContent = profile.animals_saved;
  if (countersElements.forestSavedEl) countersElements.forestSavedEl.textContent = profile.forest_saved;
  if (countersElements.waterSavedEl) countersElements.waterSavedEl.textContent = profile.water_saved;
  if (countersElements.co2ReducedEl) countersElements.co2ReducedEl.textContent = profile.co2_saved;
  if (countersElements.donatedEl) countersElements.donatedEl.textContent = profile.donated;
  if (countersElements.streakEl) countersElements.streakEl.textContent = profile.streak;

  const { level, xpTowardsNextLevel, xpNeededForNextLevel } = getLevelFromXP(profile.total_xp);
  if (countersElements.currentLevelEl) countersElements.currentLevelEl.textContent = level;

  if (countersElements.indexNumber) countersElements.indexNumber.textContent = profile.total_xp;

  if (countersElements.levelBar) {
    if (level >= 100) {
      countersElements.levelBar.style.display = "none";
    } else {
      countersElements.levelBar.style.display = "block";
      const progressPercent = (xpTowardsNextLevel / xpNeededForNextLevel) * 100;
      countersElements.levelBar.style.width = progressPercent + '%';
      countersElements.levelBar.textContent = progressPercent.toFixed(0) + '%';
    }
  }

  unlockFeatures(profile);
}

// ===== Unlock features based on streak/level =====
function unlockFeatures(profile) {
  const streak = profile.streak;
  const level = profile.current_level;

  const checkUnlock = (elId, minStreak, minLevel) => {
    const el = document.getElementById(elId);
    if (!el) return;
    if (streak >= minStreak || level >= minLevel) {
      el.classList.remove("locked");
      el.removeAttribute("data-unlock");
    } else {
      el.classList.add("locked");
      el.setAttribute("data-unlock", `🔓 S${minStreak} / L${minLevel}`);
    }
  };

  checkUnlock("meal-plans", 2, 2);
  checkUnlock("meal-art", 5, 3);
  checkUnlock("Scan & Info", 10, 5);
  checkUnlock("Community", 15, 6);
  checkUnlock("Playground", 20, 7);
  checkUnlock("Mindful vegan", 30, 10);
}

// ===== Reset Stats =====
async function resetStats(userId) {
  const startingValues = {
    streak: 1,
    animals_saved: 0,
    forest_saved: 0,
    water_saved: 0,
    co2_saved: 0,
    donated: 0,
    total_xp: 10,
    current_level: 1,
    badge: 0
  };

  const { data, error } = await supabase
    .from('profiles')
    .update(startingValues)
    .eq('id', userId);

  if (error) {
    console.error('Error resetting stats:', error);
    return;
  }

  // Update UI
  updateUI({ ...startingValues });
}

// ===== Add Impact =====
async function addImpact(userId) {
  // Load current stats
  const { data: profile, error: fetchError } = await supabase
    .from('profiles')
    .select('streak, animals_saved, forest_saved, water_saved, co2_saved, donated, total_xp, current_level, badge')
    .eq('id', userId)
    .single();

  if (fetchError) {
    console.error('Error loading profile:', fetchError);
    return;
  }

  // Update stats
  const newImpact = {
    animals_saved: (profile.animals_saved || 0) + 1,
    forest_saved: (profile.forest_saved || 0) + 0.5,
    water_saved: (profile.water_saved || 0) + 660,
    co2_saved: (profile.co2_saved || 0) + 4,
    donated: (profile.donated || 0) + 0,
    streak: (profile.streak || 0) + 1,
    total_xp: (profile.total_xp || 0) + 30
  };

  const { level } = getLevelFromXP(newImpact.total_xp);
  newImpact.current_level = level;

  // Save to Supabase
  const { error: updateError } = await supabase
    .from('profiles')
    .update(newImpact)
    .eq('id', userId);

  if (updateError) {
    console.error('Error updating stats:', updateError);
    return;
  }

  // Update UI
  updateUI(newImpact);
}

// ===== Button listeners =====
document.getElementById('resetBtn')?.addEventListener('click', async () => {
  const userId = supabase.auth.getUser()?.data.user?.id;
  if (userId) await resetStats(userId);
});

document.getElementById('addBtn')?.addEventListener('click', async () => {
  const userId = supabase.auth.getUser()?.data.user?.id;
  if (userId) await addImpact(userId); 

  // Update global stats
  await addToGlobalImpact(profileImpact);
});


// =========================================================== TEMPORAL END ==========================================================
// =========================================================== TEMPORAL END ==========================================================
// =========================================================== TEMPORAL END ==========================================================
// =========================================================== TEMPORAL END ==========================================================
// =========================================================== TEMPORAL END ==========================================================


const logoutBtn = document.getElementById('logoutBtn');

logoutBtn?.addEventListener('click', async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error signing out:', error.message);
    return;
  }

  // Redirect to login/index page
  window.location.href = 'index.html';
});

async function addToGlobalImpact(profileImpact) {
  const { data, error } = await supabase.rpc('add_global_impact', {
    add_animals: profileImpact.animals_saved || 0,
    add_forest: profileImpact.forest_saved || 0,
    add_water: profileImpact.water_saved || 0,
    add_co2: profileImpact.co2_saved || 0,
    add_donated: profileImpact.donated || 0
  });

  if (error) console.error('Error updating global impact:', error);
  else console.log('Global impact updated!', data);
}






























// Other functions + POOL
// Other functions + POOL
// Other functions + POOL
// Other functions + POOL
  
const steps = document.querySelectorAll('.intro-step');
let currentStep = 0;
const introwindow = document.getElementById("introwindow");

// Disable/enable page scroll
function disableScroll() {
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden"; // lock <html> too
}

function enableScroll() {
  document.body.style.overflow = "";
  document.documentElement.style.overflow = ""; // restore
}

function showStep(index) {
  // Hide all steps except the current one
  steps.forEach((step, idx) => {
    step.style.display = idx === index ? "block" : "none";
  });

  // Update introwindow position
  introwindow.className = ""; 
  introwindow.classList.add("step-" + (index + 1));

  // Remove old highlight
  document.querySelectorAll(".highlighted").forEach(el =>
    el.classList.remove("highlighted")
  );

  // Add new highlight (if defined)
  const targetSelector = steps[index].dataset.target;
  if (targetSelector) {
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) targetEl.classList.add("highlighted");
  }
}

function nextStep() {
  currentStep++;
  if (currentStep >= steps.length) {
    finishIntro();
    return;
  }
  showStep(currentStep);
}

function finishIntro() {
  // Remove highlights
  document.querySelectorAll(".highlighted").forEach(el =>
    el.classList.remove("highlighted")
  );
  
  const introOverlay = document.getElementById("intro-overlay");
  introOverlay.style.display = "none";
  enableScroll(); // restore scrolling

  // Save that intro is finished
  localStorage.setItem("introFinished", "true");
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  const introOverlay = document.getElementById("intro-overlay");
  const introFinished = localStorage.getItem("introFinished");

  if (!introFinished) {
    // Show intro if not finished
    introOverlay.style.display = "block";
    disableScroll(); // lock scroll during intro
    showStep(0); // init first step
  } else {
    // Skip intro
    introOverlay.style.display = "none";
    enableScroll(); // ensure page is scrollable
  }

  // Initialize other page features
  initXP();
  updateProfileCounters();
});



// 1️⃣ Define lessons for each survey answer
const tips = {
  goals: {
    "Protecting animals & animal welfare": [
      "Every small choice counts! Even one plant-based meal helps reduce suffering",
      "Learn about cruelty-free products and support ethical brands",
      "Share your knowledge—educating others is a powerful way to create change"
      ],

    "Caring for the environment & fighting climate change": [
      "Eating plant-based is one of the simplest ways to reduce your carbon footprint",
      "Try reducing waste—compost food scraps and choose reusable items",
      "Remember: small consistent actions add up to big environmental impact"
      ],

    "Healthy living & wellness": [
      "Nourish your body with colorful fruits, veggies, and whole foods",
      "Stay active—exercise supports both body and mind",
      "Hydrate and rest well; wellness is about balance, not perfection"
     ],

    "Solving health issues": [
      "Plant-based foods can help manage cholesterol, blood pressure, and inflammation",
      "Experiment with nutrient-rich ingredients to see what works best for your body",
      "Consult professionals when needed—knowledge + action is powerful"
     ],

    "Boosting my performance as an athlete": [
      "Plant proteins, complex carbs, and healthy fats fuel energy and recovery",
      "Listen to your body—rest and nutrition are part of training",
      "Track your progress and celebrate every improvement, no matter how small"
    ]
  }
};



async function prepareHourlyTip() {
  // 1️⃣ Get last tip index from localStorage
  let lastTipIndex = parseInt(localStorage.getItem("lastTipIndex")) || 0;

  // 2️⃣ Get current user
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("Not logged in:", userError);
    return;
  }

  // 3️⃣ Fetch user's goals from Supabase
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("goals")
    .eq("id", user.id)
    .single();

  if (profileError || !profile) {
    console.error("Error fetching profile goals:", profileError);
    return;
  }

  const userGoals = Array.isArray(profile.goals) ? profile.goals : [];

  // 4️⃣ Build tip pool based on user's goals
  let goalTips = [];
  userGoals.forEach(goal => {
    if (tips.goals[goal]) {
      goalTips = goalTips.concat(tips.goals[goal]);
    }
  });

  // 5️⃣ Pick tip
  let hourlyTip = "";
  if (goalTips.length > 0) {
    hourlyTip = goalTips[lastTipIndex % goalTips.length];
  } else {
    const allGoalTips = Object.values(tips.goals).flat();
    hourlyTip = allGoalTips.length > 0
      ? allGoalTips[Math.floor(Math.random() * allGoalTips.length)]
      : "Set your goals to start getting tips!";
  }

  // 6️⃣ Update last tip index
  localStorage.setItem("lastTipIndex", lastTipIndex + 1);

  // 7️⃣ Update tip in the DOM
  const tipContainer = document.getElementById("dailyTip");
  if (tipContainer) {
    tipContainer.textContent = hourlyTip;
  }
}