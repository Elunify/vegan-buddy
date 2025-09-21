
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

      // Only update tip when showing
      if (!bubble.classList.contains("hidden")) {
        prepareHourlyTip();  // <-- fill the tip
      }
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
  co2SavedEl: document.getElementById('savedCO2'),
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
window.updateUI = function(profile) {
  if (!profile) return;

  // ===== Basic counters (formatted) =====
  if (countersElements.animalsSavedEl) countersElements.animalsSavedEl.textContent = formatNumber(Math.round(profile.animals_saved || 0));
  if (countersElements.forestSavedEl) countersElements.forestSavedEl.textContent = formatNumber(Math.round(profile.forest_saved || 0));
  if (countersElements.waterSavedEl) countersElements.waterSavedEl.textContent = formatNumber(Math.round(profile.water_saved || 0));
  if (countersElements.co2SavedEl) countersElements.co2SavedEl.textContent = formatNumber(Math.round(profile.co2_saved || 0));
  if (countersElements.donatedEl) countersElements.donatedEl.textContent = formatNumber(Math.round(profile.donated || 0));
  if (countersElements.streakEl) countersElements.streakEl.textContent = profile.streak || 0;
  if (countersElements.indexNumber) countersElements.indexNumber.textContent = profile.total_xp || 0;

  // ===== Calculate level & XP progress =====
  const { level, xpTowardsNextLevel, xpNeededForNextLevel } = getLevelFromXP(profile.total_xp || 0);

  if (countersElements.currentLevelEl) countersElements.currentLevelEl.textContent = level;

  // Fill level bar
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

  // ===== Unlock features based on streak/level =====
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
    streak: 0,
    animals_saved: 0,
    forest_saved: 0,
    water_saved: 0,
    co2_saved: 0,
    donated: 0,
    total_xp: 10,
    current_level: 1,
    badge: 10,
    last_checkin_date: "2025-01-02"
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
async function addImpact(userId, impactIncrement) {
  // Load current stats
  const { data: profile, error: fetchError } = await supabase
    .from('profiles')
    .select('streak, animals_saved, forest_saved, water_saved, co2_saved, donated, total_xp, current_level, badge')
    .eq('id', userId)
    .single();

  if (fetchError) {
    console.error('Error loading profile:', fetchError);
    return null;
  }

  // Update stats with the increment
  const newImpact = {
    animals_saved: (profile.animals_saved || 0) + impactIncrement.animals_saved,
    forest_saved: (profile.forest_saved || 0) + impactIncrement.forest_saved,
    water_saved: (profile.water_saved || 0) + impactIncrement.water_saved,
    co2_saved: (profile.co2_saved || 0) + impactIncrement.co2_saved,
    donated: (profile.donated || 0) + impactIncrement.donated,
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
    return null;
  }

  // Update UI
  updateUI(newImpact);

  // Round values for display + format large numbers
document.getElementById('savedAnimals').textContent = formatNumber(Math.round(newImpact.animals_saved));
document.getElementById('savedForest').textContent  = formatNumber(Math.round(newImpact.forest_saved));
document.getElementById('savedWater').textContent   = formatNumber(Math.round(newImpact.water_saved));
document.getElementById('savedCO2').textContent     = formatNumber(Math.round(newImpact.co2_saved));
document.getElementById('savedDonated').textContent = formatNumber(Math.round(newImpact.donated));

  // Return the increment so we can pass it to global impact
  return impactIncrement;
}

// ===== Button listeners =====
document.getElementById('resetBtn')?.addEventListener('click', async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) {
    console.error("Not logged in:", error);
    return;
  }

  await resetStats(user.id);
});

document.getElementById('addBtn')?.addEventListener('click', async () => {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("Not logged in:", userError);
    return;
  }

  // 1️⃣ Define the incremental impact
  const impactIncrement = {
    animals_saved: 0.7,
    forest_saved: 0.5,
    water_saved: 660,
    co2_saved: 4,
    donated: 0
  };

  // 2️⃣ Update personal impact and get the increment back
  const increment = await addImpact(user.id, impactIncrement);

  // 3️⃣ Update global impact by the same increment
  if (increment) {
    await addToGlobalImpact(increment);
  }
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

async function addToGlobalImpact(change) {
  const { error } = await supabase.rpc('add_global_impact', {
    add_animals: change.animals_saved || 0,
    add_forest: change.forest_saved || 0,
    add_water: change.water_saved || 0,
    add_co2: change.co2_saved || 0,
    add_donated: change.donated || 0
  });

  if (error) {
    console.error("Error updating global impact:", error);
  } 
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

window.nextStep = function() {
  currentStep++;
  if (currentStep >= steps.length) {
    finishIntro();
    return;
  }
  showStep(currentStep);
};

window.finishIntro = function() {
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
  const now = Date.now();

  // 1️⃣ Check if we have a cached tip and its timestamp
  const cachedTip = localStorage.getItem("hourlyTip");
  const cachedTime = parseInt(localStorage.getItem("hourlyTipTime")) || 0;

  // 2️⃣ If cached tip is less than 1 hour old, return it
  if (cachedTip && now - cachedTime < 3600 * 1000) {
    document.getElementById("dailyTip").textContent = cachedTip;
    return;
  }

  // 3️⃣ Otherwise, generate a new tip
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("Not logged in:", userError);
    return;
  }

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

  // Build tip pool
  let goalTips = [];
  userGoals.forEach(goal => {
    if (tips.goals[goal]) goalTips = goalTips.concat(tips.goals[goal]);
  });

  let hourlyTip = "";
  if (goalTips.length > 0) {
    const lastTipIndex = parseInt(localStorage.getItem("lastTipIndex")) || 0;
    hourlyTip = goalTips[lastTipIndex % goalTips.length];
    localStorage.setItem("lastTipIndex", lastTipIndex + 1);
  } else {
    const allGoalTips = Object.values(tips.goals).flat();
    hourlyTip = allGoalTips.length > 0
      ? allGoalTips[Math.floor(Math.random() * allGoalTips.length)]
      : "Set your goals to start getting tips!";
  }

  // 4️⃣ Cache the tip with current timestamp
  localStorage.setItem("hourlyTip", hourlyTip);
  localStorage.setItem("hourlyTipTime", now);

  // 5️⃣ Update the DOM
  document.getElementById("dailyTip").textContent = hourlyTip;
}