// ===== Shared Impact & Streak Functions =====

// Load streak
function loadStreak() {
  return parseInt(localStorage.getItem('streak') || '0', 10);
}

// Save streak
function saveStreak(value) {
  localStorage.setItem('streak', value);
}

// Load saved impact from localStorage
function loadSavedImpact() {
  return JSON.parse(localStorage.getItem('savedImpact')) || {
    animals: 0,
    forest: 0,
    water: 0,
    co2: 0,
    donated: 0
  };
}

// Save impact to localStorage
function saveImpact(impact) {
  localStorage.setItem('savedImpact', JSON.stringify(impact));
}

function initXP() {
  if (!localStorage.getItem("totalXP")) {
    const startingXP = 10; // 10% of 100 XP (Level 1 threshold)
    localStorage.setItem("totalXP", startingXP.toString());
    getLevelFromXP(startingXP); // calculate & save starting level
  }
}

// Calculate XP from impact values
function calculateXPFromImpact(impact) {
  return (
    (impact.animals || 0) * 10 +
    (impact.forest || 0) * 5 +
    ((impact.water || 0) / 100) * 2 +
    ((impact.co2 || 0) / 10) * 3 +
    (impact.donated || 0) * 20
  );
}

// Get level from XP and save it
function getLevelFromXP(totalXP) {
  let level = 1;
  let xpNeededForNext = 100;
  let xpLeft = totalXP;

  while (xpLeft >= xpNeededForNext && level < 100) {
    xpLeft -= xpNeededForNext;
    level++;
    xpNeededForNext = Math.floor(xpNeededForNext * 1.05);
  }

  // Save the calculated level to localStorage
  localStorage.setItem("currentlevel", level);

  return {
    level,
    xpTowardsNextLevel: xpLeft,
    xpNeededForNextLevel: xpNeededForNext
  };
}

// ===== Add XP for activities =====
function addXP(amount) {
  let totalXP = parseInt(localStorage.getItem("totalXP")) || 0;
  totalXP += amount;
  localStorage.setItem("totalXP", totalXP.toString());

  // Update level after XP change
  getLevelFromXP(totalXP);

  // Update UI
  updateImpactUI();
}

// ===== Update UI =====
const countersElements = {
  animalsSavedEl: document.getElementById('savedAnimals'),
  forestSavedEl: document.getElementById('savedForest'),
  waterSavedEl: document.getElementById('savedWater'),
  co2ReducedEl: document.getElementById('savedCO2'),
  donatedEl: document.getElementById('savedDonated'),
  levelBar: document.getElementById('levelBar'),
  indexNumber: document.getElementById('indexnumber')
};

function updateImpactUI() {
  const savedImpact = loadSavedImpact();

  if (countersElements.animalsSavedEl) countersElements.animalsSavedEl.textContent = savedImpact.animals || 0;
  if (countersElements.forestSavedEl) countersElements.forestSavedEl.textContent = savedImpact.forest || 0;
  if (countersElements.waterSavedEl) countersElements.waterSavedEl.textContent = savedImpact.water || 0;
  if (countersElements.co2ReducedEl) countersElements.co2ReducedEl.textContent = savedImpact.co2 || 0;
  if (countersElements.donatedEl) countersElements.donatedEl.textContent = savedImpact.donated || 0;

  const totalXP = parseInt(localStorage.getItem('totalXP')) || 0;
  const { level, xpTowardsNextLevel, xpNeededForNextLevel } = getLevelFromXP(totalXP);

  const currentLevelEl = document.getElementById("currentLevel");
  if (currentLevelEl) currentLevelEl.textContent = level;

  if (countersElements.indexNumber) countersElements.indexNumber.textContent = totalXP.toFixed(0);

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
}

function updateStreakUI() {
  const el = document.getElementById('streak-counter');
  if (el) el.textContent = loadStreak();
}

// ===== Add Impact =====
function addImpact() {
  const impact = loadSavedImpact();
  let streak = loadStreak();

  // Update impact values
  impact.animals += 1;
  impact.forest += 0.5;
  impact.water += 660;
  impact.co2 += 4;
  impact.donated += 0;
  streak += 1;

  // Save impact & streak
  saveImpact(impact);
  saveStreak(streak);

  // Calculate XP for this action only
  const xpGained = calculateXPFromImpact({
    animals: 1,
    forest: 0.5,
    water: 660,
    co2: 4,
    donated: 0
  });

  // Add to existing totalXP
  const totalXP = (parseInt(localStorage.getItem('totalXP')) || 0) + xpGained;
  localStorage.setItem('totalXP', totalXP.toString());

  // Update level & UI
  getLevelFromXP(totalXP);
  updateImpactUI();
  updateStreakUI();
  unlockFeatures();
}


// --- Get streak & level from localStorage ---
  // (make sure you save them in localStorage when updating the streak/level!)
  let streak = parseInt(localStorage.getItem("streak")) || 0;
  let level = parseInt(localStorage.getItem("currentlevel")) || 1;

  // --- Unlock logic ---
  function unlockFeatures() {
    const streak = parseInt(localStorage.getItem("streak")) || 0;
    const level = parseInt(localStorage.getItem("currentlevel")) || 1;
  
    // unlock meal-plans at Streak 2 or Level 2
  const mealPlans = document.getElementById("meal-plans");  
  
  if (streak >= 2 || level >= 2) {
  mealPlans.classList.remove("locked");
  mealPlans.removeAttribute("data-unlock");
} else if(streak < 2 && level <2){
  mealPlans.classList.add("locked");
  mealPlans.setAttribute("data-unlock", "🔓 S2 / L2");
}

  // unlock meal-art view
  const mealArt = document.getElementById("meal-art");  
  
  if (streak >= 5 || level >= 3) {
  mealArt.classList.remove("locked");
  mealArt.removeAttribute("data-unlock");
} else if(streak < 5 && level <3){
  mealArt.classList.add("locked");
  mealArt.setAttribute("data-unlock", "🔓 Streak 5 / Level 3");
}

 // unlock scan
  const Scan = document.getElementById("Scan & Info");

  if (streak >= 10 || level >= 5) {
  Scan.classList.remove("locked");
  Scan.removeAttribute("data-unlock");
} else if(streak < 10 && level <5){
  Scan.classList.add("locked");
  Scan.setAttribute("data-unlock", "🔓 S10 / L5");
}

  // unlock community view
  const Communityview = document.getElementById("Community");

  if (streak >= 15 || level >= 6) {
  Communityview.classList.remove("locked");
  Communityview.removeAttribute("data-unlock");
} else if(streak < 15 && level <6){
  Communityview.classList.add("locked");
  Communityview.setAttribute("data-unlock", "🔓 View S15 / L6");
}

  // unlock Playground view
  const Playground = document.getElementById("Playground");

  if (streak >= 20 || level >= 7) {
  Playground.classList.remove("locked");
  Playground.removeAttribute("data-unlock");
} else if(streak < 20 && level <7){
  Playground.classList.add("locked");
  Playground.setAttribute("data-unlock", "🔓 S20 / L7");
}

// unlock Mindful vegan
  const Mindful = document.getElementById("Mindful vegan");

  if (streak >= 30 || level >= 10) {
  Mindful.classList.remove("locked");
  Mindful.removeAttribute("data-unlock");
} else if(streak < 30 && level <10){
  Mindful.classList.add("locked");
  Mindful.setAttribute("data-unlock", "🔓 Streak 30 / Lvl 10");
}






}
