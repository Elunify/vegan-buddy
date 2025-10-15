//--------------------------
// SUPABASE
//--------------------------
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabaseUrl = 'https://pqrgvelzxmtdqrofxujx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxcmd2ZWx6eG10ZHFyb2Z4dWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMTc0ODAsImV4cCI6MjA3MTY5MzQ4MH0.s8JZLDdzIS1wBLln0Zs3LK_9BHelUcbRhyAC_0-5sos';
const supabase = createClient(supabaseUrl, supabaseKey);

import { DailyCheckInPool } from './scriptpools.js';
import { HealthIssuesPool } from './scriptpools.js';
import { extralessonsData } from './scriptpools.js';

//--------------------------
// GLOBAL VARIABLES
//--------------------------
let currentUser = null;
let currentProfile = null;
let currentGlobalImpact = null;
let globalImpact = {
  animals_saved: 0,
  forest_saved: 0,
  water_saved: 0,
  co2_saved: 0,
  donated: 0
};
let currentMeals = [];

// Forum/chat
let activeBlockId = null;

const goalsInputs = document.querySelectorAll('input[name="goal"]');
const healthIssuesSection = document.getElementById("q2b");

let messageSubscription = null;

//--------------------------
// HELPERS
//--------------------------
function showLoading(isLoading) {
  const loader = document.getElementById("loading");
  const content = document.getElementById("homepageContent");
  if (!loader || !content) return;

  if (isLoading) {
    loader.style.display = "flex";
    content.style.opacity = "0";
  } else {
    loader.style.display = "none";
    content.style.opacity = "1";
  }
}

function toArray(value) {
  return Array.isArray(value) ? value : Object.values(value || []);
}

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

function formatNumber(value) {
  value = Math.round(value);
  if (value >= 1_000_000_000) return (value / 1_000_000_000).toFixed(1) + 'B';
  if (value >= 1_000_000) return (value / 1_000_000).toFixed(1) + 'M';
  if (value >= 1_000) return (value / 1_000).toFixed(1) + 'k';
  return value.toString();
}

//--------------------------
// FETCH DATA
//--------------------------
async function fetchAllData() {
  // 1️⃣ Get current user
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return console.error("Not logged in:", userError);
  currentUser = user;

  // 2️⃣ Fetch profile
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();
  if (profileError) return console.error("Error fetching profile:", profileError);
  currentProfile = profile;

  // 3️⃣ Fetch global impact (single row)
  const { data: impact, error: impactError } = await supabase
    .from("global_impact")
    .select("*")
    .single();
  if (impactError) return console.error("Error fetching global impact:", impactError);
  currentGlobalImpact = impact; // assign fetched row to top-level variable

  // 4️⃣ Fetch meals
  const { data: meals, error: mealsError } = await supabase
    .from("meals")
    .select("*");
  if (mealsError) return console.error("Error fetching meals:", mealsError);
  currentMeals = meals;

  return { profile, impact, meals };
}

//--------------------------
// PROFILE RENDERING
//--------------------------
async function renderProfile() {
  const profile = currentProfile;
  const globalImpact = currentGlobalImpact;
  
  if (!profile) return;

  // Profile photo
  ["profilePhoto", "profilePhotoprofile", "profilePhotoPreview"].forEach(id => {
    const el = document.getElementById(id);
    if (el && profile.profile_photo) el.src = profile.profile_photo;
  });

  // Name & Diet
  document.getElementById("profileName").textContent = profile.name || "-";
  document.getElementById("profileNameInput").value = profile.name || "-";
  document.getElementById("diet").textContent = profile.diet_preference || "-";
  document.getElementById("profileDietSelect").value = profile.diet_preference || "-";

  // Streak, Level, Badge
  document.getElementById("streak-counter").textContent = profile.streak || 0;
  document.getElementById("currentLevel").textContent = profile.current_level || 0;
  document.getElementById("streak-counterprofile").textContent = profile.streak || 0;
  document.getElementById("currentLevelprofile").textContent = profile.current_level || 0;
  document.getElementById("badgeprofile").textContent = profile.badge || 0;

  // ===== Goals =====
  const goalsList = document.getElementById("goalsList");
  goalsList.innerHTML = "";
  const goals = toArray(profile.goals);
  goals.forEach(goal => {
    const li = document.createElement("li");
    li.textContent = goal;
    goalsList.appendChild(li);
  });
  document.querySelectorAll('input[name="goal"]').forEach(cb => {
    cb.checked = goals.includes(cb.value);
  });

  // ===== Health Issues =====
  const healthList = document.getElementById("healthIssuesList");
  healthList.innerHTML = "";
  const issues = toArray(profile.health_issues);
  issues.forEach(issue => {
    const li = document.createElement("li");
    li.textContent = issue;
    healthList.appendChild(li);
  });
  document.querySelectorAll('input[name="healthIssue"]').forEach(cb => {
    cb.checked = issues.includes(cb.value);
  });
  toggleHealthIssues();

  // Pet
  ["petPhotoprofile", "petPhotoPreview"].forEach(id => {
    const el = document.getElementById(id);
    if (el && profile.pet_photo) el.src = profile.pet_photo;
  });
  document.getElementById("petName").textContent = profile.pet_name || "-";
  document.getElementById("petNameprofile").textContent = profile.pet_name || "-";
  document.getElementById("petNameInput").value = profile.pet_name || "-";

  // Hide empty lists titles
  document.querySelectorAll(".details-list").forEach(list => {
    if (list.querySelectorAll("li").length === 0) {
      if (list.previousElementSibling) list.previousElementSibling.style.display = "none";
      list.style.display = "none";
    }
  });


  // Counters
  const countersElements = {
    animalsSavedEl: document.getElementById('savedAnimals'),
    forestSavedEl: document.getElementById('savedForest'),
    waterSavedEl: document.getElementById('savedWater'),
    co2SavedEl: document.getElementById('savedCO2'),
    donatedEl: document.getElementById('savedDonated'),
    levelBar: document.getElementById('levelBar'),
    levelProgress: document.getElementById('levelProgress'),
    currentLevelEl: document.getElementById("currentLevel"),
    streakEl: document.getElementById('streak-counter')
  };

  // ===== Level & XP =====
  const totalXP = profile.total_xp ?? 0;
  const levelData = getLevelFromXP(totalXP);
  const { level, xpTowardsNextLevel, xpNeededForNextLevel } = levelData;

  if (countersElements.levelProgress) {
    if (level >= 100) {
      countersElements.levelProgress.style.display = "none";
    } else {
      countersElements.levelProgress.style.display = "block";
      let progressPercent = (xpTowardsNextLevel / xpNeededForNextLevel) * 100;
      progressPercent = Math.min(progressPercent, 100);
      countersElements.levelProgress.style.width = progressPercent + '%';
      countersElements.currentLevelEl.textContent = level;
    }
  }

  // Sync level to DB
  if (profile.current_level !== level) {
    const { error: updateError } = await supabase
      .from("profiles")
      .update({ current_level: level })
      .eq("id", currentUser.id);
    if (!updateError) profile.current_level = level;
  }

 // --- Daily check-in logic ---
const checkinBtn = document.getElementById("checkinBtn");
const lessonPathBtn = document.getElementById("lessonPathBtn"); // <-- new
const dailyCheckInSection = document.getElementById("dailycheck-in");
const lessonPathSection = document.getElementById("lesson-path");

// Helper to format date in UTC as YYYY-MM-DD
function getUTCDateString(date) {
  return (
    date.getUTCFullYear() + '-' +
    String(date.getUTCMonth() + 1).padStart(2, '0') + '-' +
    String(date.getUTCDate()).padStart(2, '0')
  );
}

// Streak fire icon
const streakFire = document.querySelector("#streak .fire");
const todayUTC = new Date();
const todayStr = getUTCDateString(todayUTC);

// Yesterday
const yesterdayUTC = new Date();
yesterdayUTC.setUTCDate(yesterdayUTC.getUTCDate() - 1);
const yesterdayStr = getUTCDateString(yesterdayUTC);

if (!profile.last_checkin_date) {
  // Never checked in yet
  streakFire.classList.add("inactive");
  streakFire.setAttribute("title", "Start your streak today!");
} else if (profile.last_checkin_date === todayStr) {
  // Checked in today
  streakFire.classList.remove("inactive");
  streakFire.textContent = "🔥"; // normal fire emoji
  streakFire.setAttribute("title", "Streak active!");
} else if (profile.last_checkin_date === yesterdayStr) {
  // Checked in yesterday but not today
  streakFire.classList.add("inactive");
  streakFire.textContent = "🔥"; 
  streakFire.setAttribute("title", "Check in today to keep your streak!");
} else if (profile.last_checkin_date < yesterdayStr) {
  // Missed one or more days
  streakFire.classList.add("inactive");
  streakFire.textContent = "⚠️🔥"; // warning + fire
  streakFire.setAttribute("title", "You missed your streak! It will reset if you don't check in today.");
}

if (checkinBtn && lessonPathBtn && dailyCheckInSection && lessonPathSection) {
  if (profile.last_checkin_date === todayStr) {
    // ✅ Already checked in today
    checkinBtn.classList.add("hidden");        // Hide check-in button
    lessonPathBtn.classList.remove("hidden");  // Show learning path button
    dailyCheckInSection.classList.add("hidden");
    lessonPathSection.classList.remove("hidden");
  } else {
    // 🕓 Not checked in yet
    checkinBtn.classList.remove("hidden");
    lessonPathBtn.classList.add("hidden");     // Hide learning path button
    dailyCheckInSection.classList.remove("hidden");
    lessonPathSection.classList.add("hidden");

  }
}

  // Personal impact cards
  document.getElementById('youAnimals').textContent = formatNumber(profile.animals_saved ?? 0);
  document.getElementById('youForest').textContent  = formatNumber(profile.forest_saved ?? 0);
  document.getElementById('youWater').textContent   = formatNumber(profile.water_saved ?? 0);
  document.getElementById('youCO2').textContent     = formatNumber(profile.co2_saved ?? 0);

  // Community impact from fetched variable
  if (globalImpact) {
    document.getElementById('communityAnimals').textContent = formatNumber(globalImpact.animals_saved ?? 0);
    document.getElementById('communityForest').textContent  = formatNumber(globalImpact.forest_saved ?? 0);
    document.getElementById('communityWater').textContent   = formatNumber(globalImpact.water_saved ?? 0);
    document.getElementById('communityCO2').textContent     = formatNumber(globalImpact.co2_saved ?? 0);
  }

  // XP to next level
  const xpRemaining = levelData.xpNeededForNextLevel - levelData.xpTowardsNextLevel;
  document.getElementById("xpToNext").textContent = `${xpRemaining} XP to next level`;

  // Pet rendering
  const petDisplay = document.getElementById("petDisplay");
  const petAvatar = document.getElementById("petAvatar");

  function renderPet(container) {
    if (!container) return;
    container.innerHTML = "";
    if (profile.pet_photo) {
      const petImg = document.createElement("img");
      petImg.src = profile.pet_photo;
      petImg.alt = profile.pet_name || "Pet";
      petImg.classList.add("pet-photo");
      container.appendChild(petImg);
    } else if (profile.pet_name) {
      container.textContent = profile.pet_name;
    }
  }

  renderPet(petDisplay);
  renderPet(petAvatar);

  return profile;
}

//--------------------------
// WINNERS (from currentMeals)
//--------------------------
function loadWinnersFromData() {
  if (!currentMeals || currentMeals.length === 0) return;

  // Helper to find latest winner by type
  function getLatestWinner(isPro) {
    return currentMeals
      .filter(meal => meal.is_winner && meal.is_pro === isPro)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0] || null;
  }

  // Amateur / Individual
  const amateurWinner = getLatestWinner(false);
  if (amateurWinner) {
    document.getElementById("amateurName").textContent = amateurWinner.uploader_name;
    document.getElementById("amateurImage").src = amateurWinner.image_url;
    document.getElementById("amateurImagePopup").src = amateurWinner.image_url;

    const amateurRecipeDiv = document.getElementById("amateurRecipe");
    if (amateurWinner.recipe_available) {
      const a = document.createElement("a");
      a.href = "#";
      a.className = "recipe";
      a.textContent = "Recipe";
      a.addEventListener("click", e => {
        e.preventDefault();
        showRecipeModal(amateurWinner);
      });
      amateurRecipeDiv.innerHTML = "";
      amateurRecipeDiv.appendChild(a);
    } else {
      amateurRecipeDiv.innerHTML = `<span class="no-recipe">No recipe</span>`;
    }
  }

  // Professional / Restaurant
  const proWinner = getLatestWinner(true);
  if (proWinner) {
    document.getElementById("proName").textContent = proWinner.uploader_name;
    document.getElementById("proImage").src = proWinner.image_url;
    document.getElementById("proImagePopup").src = proWinner.image_url;

    const proRecipeDiv = document.getElementById("professionalRecipe");
    if (proWinner.recipe_available) {
      const a = document.createElement("a");
      a.href = "#";
      a.className = "recipe";
      a.textContent = "Recipe";
      a.addEventListener("click", e => {
        e.preventDefault();
        showRecipeModal(proWinner);
      });
      proRecipeDiv.innerHTML = "";
      proRecipeDiv.appendChild(a);
    } else {
      proRecipeDiv.innerHTML = `<span class="no-recipe">No recipe</span>`;
    }
  }
}

//--------------------------
// GOALS / HEALTH TOGGLE
//--------------------------
function toggleHealthIssues() {
  const solvingChecked = Array.from(goalsInputs).some(cb => cb.checked && cb.value === "Solving health issues");
  healthIssuesSection.style.display = solvingChecked ? "block" : "none";
  if (!solvingChecked) {
    document.querySelectorAll('input[name="healthIssue"]').forEach(cb => cb.checked = false);
  }

  const healthList = document.getElementById("healthIssuesList");
  const healthTitle = document.getElementById("healthTitle");
  if (!healthList || !healthTitle) return;

  healthTitle.style.display = healthList.children.length === 0 ? "none" : "block";
}
document.querySelectorAll('input[name="goal"]').forEach(cb => cb.addEventListener("change", toggleHealthIssues));

//--------------------------
// STREAK MANAGEMENT
//--------------------------
async function handleStreakSave(user, profile, yesterday) {
  const save = confirm("Do you want to save your streak for 10 badges?");
  if (!save) {
    alert("Your streak will reset.");
    await supabase.from("profiles").update({ streak: 0, last_checkin_date: yesterday }).eq("id", user.id);
    profile.streak = 0;
    profile.last_checkin_date = yesterday;
    return false;
  }

  if ((profile.badge || 0) >= 10) {
    await supabase.from("profiles").update({ badge: profile.badge - 10, last_checkin_date: yesterday }).eq("id", user.id);
    profile.badge -= 10;
    profile.last_checkin_date = yesterday;
    alert("Streak saved by spending 10 badges!");
    return true;
  }   
  /*  
  else  {
    const pay = confirm("You don't have enough badges. Do you want to save your streak for 1€?");
    if (pay) {
      await supabase.from("profiles").update({ last_checkin_date: yesterday }).eq("id", user.id);
      profile.last_checkin_date = yesterday;
      alert("Redirecting to payment...");
      return true;
    } else {
      alert("Your streak will reset.");
      await supabase.from("profiles").update({ streak: 0, last_checkin_date: yesterday }).eq("id", user.id);
      profile.streak = 0;
      profile.last_checkin_date = yesterday;
      return false;
    }
  }
  */
}

//--------------------------
// CHANGE PROFILE
//--------------------------

// --- SAVE PROFILE ---
async function saveProfile() {
  if (!currentUser || !currentProfile) {
    console.error("User not loaded yet");
    return;
  }

  const updates = {};

  // Name
  updates.name = document.getElementById('profileNameInput').value || null;

  // Diet Preference
  updates.diet_preference = document.getElementById('profileDietSelect').value || null;

  // Goals
  const selectedGoals = Array.from(document.querySelectorAll('input[name="goal"]:checked')).map(cb => cb.value);
  updates.goals = selectedGoals.length ? selectedGoals : null;

  // Health Issues
  const solvingChecked = selectedGoals.includes("Solving health issues");
  const selectedHealth = solvingChecked
    ? Array.from(document.querySelectorAll('input[name="healthIssue"]:checked')).map(cb => cb.value)
    : [];
  updates.health_issues = selectedHealth.length ? selectedHealth : null;

  // Pet name
  updates.pet_name = document.getElementById('petNameInput').value || null;

  // --- Handle Profile Photo ---
  if (newProfilePhotoFile) {
    updates.profile_photo = await uploadFile(newProfilePhotoFile, 'profile_photos', currentUser.id);
  }

  // --- Handle Pet Photo ---
  if (newPetPhotoFile) {
    updates.pet_photo = await uploadFile(newPetPhotoFile, 'pet_photos', currentUser.id);
  }

  // --- Update profiles table ---
  const { error: updateError } = await supabase.from('profiles').update(updates).eq('id', currentUser.id);
  if (updateError) return console.error("Profile update error:", updateError);

  // --- Update related tables ---
  const relatedUpdates = {
    name: updates.name,
    profile_photo: updates.profile_photo
  };

  // Chats
  await supabase.from('chats').update({ user1_name: relatedUpdates.name, user1_profile_photo: relatedUpdates.profile_photo }).eq('user1_id', currentUser.id);
  await supabase.from('chats').update({ user2_name: relatedUpdates.name, user2_profile_photo: relatedUpdates.profile_photo }).eq('user2_id', currentUser.id);

  // Friends
  await supabase.from('friends').update({ user1_name: relatedUpdates.name, user1_profile_photo: relatedUpdates.profile_photo }).eq('user1_id', currentUser.id);
  await supabase.from('friends').update({ user2_name: relatedUpdates.name, user2_profile_photo: relatedUpdates.profile_photo }).eq('user2_id', currentUser.id);

  // Community participants
  await supabase.from('community_participants').update(relatedUpdates).eq('user_id', currentUser.id);

  // Mentors
  await supabase.from('mentors').update(relatedUpdates).eq('user_id', currentUser.id);

  // --- Update local profile object ---
  Object.assign(currentProfile, updates);

  // --- Reload UI ---
  const { profile, globalImpact } = await fetchAllData();
  await renderProfile(profile, globalImpact);
  await initHealthPaths();
  await renderExtraLessons();
setupExtraLessonClicks(); // ← important for interactivity
applyExtraLessonProgress(); // ← optional, to reflect completed lessons

  // Show profile view
  document.querySelector('.containeredit')?.classList.add('hidden');
  document.querySelector('.containersettings')?.classList.remove('hidden');
}

// --- Helper: upload file ---
async function uploadFile(file, bucket, userId) {
  const timestamp = Date.now();
  const fileName = `${userId}/${file.name.split('.')[0]}-${timestamp}.${file.name.split('.').pop()}`;
  const { data, error } = await supabase.storage.from(bucket).upload(fileName, file, { upsert: true });
  if (error) throw error;
  return supabase.storage.from(bucket).getPublicUrl(fileName).data.publicUrl;
}

// Attach save button
document.getElementById('saveBtn')?.addEventListener('click', saveProfile);

//--------------------------
// DAILY CHECKIN
//--------------------------

// Global variables
let yesterdayQuiz = [];
let todayGoal = null;
let todayLessonIndex = 0;
let todayLesson = null;

// ------------------
// 1️⃣ Get today's lesson from currentProfile
// ------------------
function getTodaysLessonFromProfile(profile) {
  if (!profile.goals || !Array.isArray(profile.goals) || profile.goals.length === 0) {
    profile.goals = Object.keys(DailyCheckInPool.goals);
  }

  const validGoals = profile.goals.filter(goal => DailyCheckInPool.goals[goal]?.length > 0);
  if (validGoals.length === 0) throw new Error("User has no valid goals with lessons.");

  const index = profile.day_counter % validGoals.length;
  todayGoal = validGoals[index];
  todayLessonIndex = profile.goal_progress?.[todayGoal] ?? 0;

  const lessonsForGoal = DailyCheckInPool.goals[todayGoal];
  todayLesson = lessonsForGoal && lessonsForGoal.length > 0 
    ? lessonsForGoal[todayLessonIndex] 
    : Object.values(DailyCheckInPool.goals).flat()[profile.day_counter % Object.values(DailyCheckInPool.goals).flat().length];

  return { todayGoal, todayLessonIndex, todayLesson };
}

// ------------------
// 2️⃣ Render today's lesson
// ------------------
function renderTodaysLesson() {
  document.getElementById("dailyLessonDCI").innerHTML = `
    <p class="lesson-text">${todayLesson.lesson}</p>
  `;
}

// ------------------
// 3️⃣ Render yesterday's quiz
// ------------------
function renderYesterdaysQuiz(profile) {
  const quizContainer = document.getElementById("quizDCI");
  quizContainer.innerHTML = "";

  if (!profile.last_lesson) {
    quizContainer.style.display = "none";
    yesterdayQuiz = [];
    return;
  }

  const { goal, lessonIndex } = profile.last_lesson;
  let quiz = DailyCheckInPool.goals[goal][lessonIndex].quiz;

  // Ensure it's always an array
  yesterdayQuiz = Array.isArray(quiz) ? quiz : [quiz];

  quizContainer.style.display = "block";
  quizContainer.innerHTML = `<label class="bigLabelDCI">Last lesson's quiz:</label>`;

  yesterdayQuiz.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "quiz-itemDCI";
    div.innerHTML = `
      <p class="quiz-questionDCI">${q.question}</p>
      <div class="quiz-optionsDCI">
        ${q.options.map(opt => `
          <label class="checkbox-labelDCI">
            <input type="radio" name="q${i}" value="${opt}"> ${opt}
          </label>`).join("")}
      </div>
    `;
    quizContainer.appendChild(div);
  });
}

// ------------------
// 4️⃣ Calculate impact
// ------------------
function calculateImpact(mealValue) {
  const impactMultiplier = [0, 0.3, 0.7, 1][mealValue - 1];
  const baseImpact = { animals_saved: 0.7, forest_saved: 0.5, water_saved: 660, co2_saved: 4 };

  return {
    animals_saved: baseImpact.animals_saved * impactMultiplier,
    forest_saved: baseImpact.forest_saved * impactMultiplier,
    water_saved: baseImpact.water_saved * impactMultiplier,
    co2_saved: baseImpact.co2_saved * impactMultiplier
  };
}

// ------------------
// 5️⃣ Update profile & global impact
// ------------------
// top-level scope

async function handleSubmit() {

   // Helper to format date in UTC as YYYY-MM-DD
function getUTCDateString(date) {
  return (
    date.getUTCFullYear() + '-' +
    String(date.getUTCMonth() + 1).padStart(2, '0') + '-' +
    String(date.getUTCDate()).padStart(2, '0')
  );
}
const yesterdayUTC = new Date();
yesterdayUTC.setUTCDate(yesterdayUTC.getUTCDate() - 1);
const yesterdayStr = getUTCDateString(yesterdayUTC);
    // Optional streak reset
if (currentProfile.last_checkin_date < yesterdayStr) {
  const streakSaved = await handleStreakSave(currentUser, currentProfile, yesterdayStr);
  if (streakSaved) {
    await supabase
      .from("profiles")
      .update({ last_checkin_date: yesterdayStr })
      .eq("id", currentProfile.id);
  }
}

  // Quiz validation
  if (currentProfile.day_counter > 0) {
    let allAnswered = true, allCorrect = true;

    yesterdayQuiz.forEach((q, i) => {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (!selected) allAnswered = false;
      else if (selected.value !== q.answer) allCorrect = false;
    });

    if (!allAnswered) return alert("Please answer all quiz questions!");
    if (!allCorrect) return alert("Some answers are incorrect. Try again!");
  }

  // Meal selection
  const mealAnswer = document.querySelector('input[name="mealsDCI"]:checked');
  if (!mealAnswer) return alert("Please select your diet from yesterday!");
  const mealValue = parseInt(mealAnswer.value);
  const impactIncrement = calculateImpact(mealValue);
  const badgeIncrement = mealValue === 4 ? 1 : 0;

  // Update currentProfile
  currentProfile.day_counter += 1;
  currentProfile.streak = (currentProfile.streak || 0) + 1;
  currentProfile.total_xp = (currentProfile.total_xp || 0) + 30;
  currentProfile.goal_progress = { ...currentProfile.goal_progress, [todayGoal]: (todayLessonIndex + 1) % DailyCheckInPool.goals[todayGoal].length };
  currentProfile.last_lesson = { goal: todayGoal, lessonIndex: todayLessonIndex };
  currentProfile.animals_saved = (currentProfile.animals_saved || 0) + impactIncrement.animals_saved;
  currentProfile.forest_saved = (currentProfile.forest_saved || 0) + impactIncrement.forest_saved;
  currentProfile.water_saved = (currentProfile.water_saved || 0) + impactIncrement.water_saved;
  currentProfile.co2_saved = (currentProfile.co2_saved || 0) + impactIncrement.co2_saved;
  currentProfile.last_checkin_date = new Date().toISOString().split("T")[0];
  currentProfile.badge = (currentProfile.badge || 0) + badgeIncrement;

  // Update Supabase
  const { error: updateError } = await supabase.from("profiles").update(currentProfile).eq("id", currentProfile.id);
  if (updateError) return console.error("Profile update failed:", updateError);

  // Update globalImpact locally
  Object.keys(impactIncrement).forEach(key => {
    globalImpact[key] = (globalImpact[key] || 0) + impactIncrement[key];
  });

  // Update global impact UI immediately
  document.getElementById('communityAnimals').textContent = formatNumber(Math.round(globalImpact.animals_saved || 0));
  document.getElementById('communityForest').textContent  = formatNumber(Math.round(globalImpact.forest_saved || 0));
  document.getElementById('communityWater').textContent   = formatNumber(Math.round(globalImpact.water_saved || 0));
  document.getElementById('communityCO2').textContent     = formatNumber(Math.round(globalImpact.co2_saved || 0));

  await updateGlobalImpact(impactIncrement);

  // Refresh homepage
  const { profile, globalImpact: fetchedImpact } = await fetchAllData();
  await renderProfile(profile, globalImpact);

  // Hide Daily Check-in, show home
  document.getElementById("dailycheck-in").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("topBar").classList.remove("hidden");
  document.getElementById("checkinBtn")?.classList.add("hidden");
  document.getElementById("dailycheck-in")?.classList.add("hidden");
  document.getElementById("learn")?.classList.add("hidden");
  await fetchAllLeaderboards();
}

async function updateGlobalImpact(increment) {
  if (!currentGlobalImpact || !currentGlobalImpact.id) return;

  // Calculate new totals
  const updatedImpact = {
    animals_saved: (currentGlobalImpact.animals_saved || 0) + (increment.animals_saved || 0),
    forest_saved:  (currentGlobalImpact.forest_saved || 0)  + (increment.forest_saved || 0),
    water_saved:   (currentGlobalImpact.water_saved || 0)   + (increment.water_saved || 0),
    co2_saved:     (currentGlobalImpact.co2_saved || 0)     + (increment.co2_saved || 0)
  };

  const { error } = await supabase
    .from("global_impact")
    .update(updatedImpact)
    .eq("id", currentGlobalImpact.id);

  if (error) {
    console.error("Failed to update global impact:", error);
  } else {
    // Update top-level variable so UI can read the new totals immediately
    currentGlobalImpact = { ...currentGlobalImpact, ...updatedImpact };
  }
}

//--------------------------
// HEALTH LESSONS
//--------------------------

// ------- Health issues----------
async function initHealthPaths() {
  if (!currentUser || !currentProfile) return;

  const userData = currentProfile;
  const healthIssues = userData.health_issues || []; // array of user's health issues

  // Grab elements
  const title = document.querySelector(".YourHealthIssueTitle");
  const allButtons = document.querySelectorAll("#healthissues .path-btn");
  const allCourses = document.querySelectorAll("#healthissues .course");

  // --- RESET STATE ---
  if (title) title.classList.remove("hidden");          // always show title first
  allButtons.forEach(b => b.classList.add("hidden"));   // hide all buttons initially
  allCourses.forEach(c => c.classList.add("hidden"));   // hide all courses initially

  // Show only the buttons for the user's health issues
  allButtons.forEach(btn => {
    if (healthIssues.includes(btn.dataset.path)) {
      btn.classList.remove("hidden");
    }
  });

  // If user has only 1 health issue → auto-click it and hide title/buttons
  if (healthIssues.length === 1) {
    const btn = document.querySelector(
      `#healthissues .path-btn[data-path="${healthIssues[0]}"]`
    );
    if (btn) {
      // Hide title + buttons section
      if (title) title.classList.add("hidden");
      allButtons.forEach(b => b.classList.add("hidden"));

      // Auto-open the single health issue
      btn.click();
    }
  }

  // Wire click events to show selected course
  allButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const path = btn.dataset.path;

      // Hide all courses first
      allCourses.forEach(c => c.classList.add("hidden"));

      // Show selected course
      const selectedCourse = document.getElementById(path);
      if (selectedCourse) selectedCourse.classList.remove("hidden");

      // Render lessons for this course (from your lessonsData for health)
      renderLessonsForHealthIssue(
  path,
  Array.isArray(userData.health_progress?.[path]) ? userData.health_progress[path] : [],
  userData,
  currentUser.id
);
    });
  });

  // If user has only 1 health issue → auto-click it
  if (healthIssues.length === 1) {
    const btn = document.querySelector(`#healthissues .path-btn[data-path="${healthIssues[0]}"]`);
    if (btn) btn.click();
  }
}

// Render lessons for a specific health issue
function renderLessonsForHealthIssue(issue, completedLessons = [], userData, userId) {

  const course = document.getElementById(issue);
  if (!course) return;
  const lessonList = course.querySelector(".lesson-list");
  lessonList.innerHTML = "";

  const lessons = HealthIssuesPool.health.filter(l => l.issue === issue);

  lessons.forEach((lesson, index) => {
    const li = document.createElement("li");

    // Determine class
    let className = "lesson locked";
    if (completedLessons.includes(index + 1)) {
      className = "lesson completed";
    } else if (completedLessons.includes(index) || index === 0) {
      // Unlock the next lesson after the last completed or first lesson
      className = "lesson unlocked";
    }

    li.dataset.step = index + 1;
    li.className = className;

    li.innerHTML = `
      <div class="lesson-title">
        <span class="lesson-icon">${
          li.classList.contains("completed") ? "✅" :
          li.classList.contains("unlocked") ? "🟢" : "🔒"
        }</span>
        ${lesson.title}
      </div>
      <div class="lesson-content"></div>
    `;
    lessonList.appendChild(li);

    setupLessonClickForHealth(li, lesson, index, issue, userData, userId);
  });
}

function setupLessonClickForHealth(li, lesson, index, issue, userData, userId) {
  const lessonTab = document.getElementById("healthylesson-tab");
  const lessonTitle = document.getElementById("lesson-title");
  const lessonContent = document.getElementById("lesson-content");
  const quizContainer = document.getElementById("quiz-container");

  li.addEventListener("click", () => {
    if (li.classList.contains("locked")) return; // locked lessons cannot be opened

    // Fill lesson content
    lessonTitle.textContent = lesson.title;
    lessonContent.innerHTML = `<p>${lesson.content}</p>`;

    // Start Quiz button
    const startQuizBtn = document.createElement("button");
    startQuizBtn.textContent = "Start Quiz 📝";
    startQuizBtn.id = "start-quiz-btn";
    lessonContent.appendChild(startQuizBtn);

    quizContainer.innerHTML = "";

    // Show lesson tab and hide main health tab
    lessonTab.classList.remove("hidden");
    document.getElementById("healthissues").classList.add("hidden");

    // Start Quiz click
    startQuizBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      quizContainer.classList.remove("hidden");
      quizContainer.innerHTML = `
        <p><strong>Quiz:</strong> ${lesson.quiz.question}</p>
        ${lesson.quiz.options
          .map((opt, i) => `<button class="quiz-option" data-index="${i}">${opt}</button>`)
          .join("")}
        <div id="quiz-feedback"></div>
      `;

      // Quiz option click
quizContainer.querySelectorAll(".quiz-option").forEach((answerBtn) => {
  answerBtn.addEventListener("click", async (e) => {
    const chosenIndex = parseInt(answerBtn.dataset.index, 10);
    const feedback = quizContainer.querySelector("#quiz-feedback");

    if (chosenIndex === lesson.quiz.answer) {
      feedback.textContent = "✅ Correct! Lesson completed.";
      feedback.style.color = "green";

      // Initialize progress
      if (!userData.health_progress) userData.health_progress = {};
      if (!userData.health_progress[issue]) userData.health_progress[issue] = [];
      if (!userData.health_progress[issue].includes(index + 1)) {
        userData.health_progress[issue].push(index + 1);

        // Update Supabase
        const { error } = await supabase
          .from("profiles")
          .update({
            total_xp: (userData.total_xp || 0) + 5,
            health_progress: userData.health_progress
          })
          .eq("id", userId);
        if (error) console.error("Failed to update lesson completion:", error);

        // Rerender course lessons with updated progress
        renderLessonsForHealthIssue(
          issue,
          userData.health_progress[issue],
          userData,
          userId
        );
        const { profile } = await fetchAllData();
        await renderProfile(profile);
        await fetchAllLeaderboards();

        // ✅ Delay before switching back
        setTimeout(() => {
          // Hide lesson tab and show main tab
          lessonTab.classList.add("hidden");
          const mainTab = document.getElementById("healthissues");
          mainTab.classList.remove("hidden");

          // Scroll to next lesson
          const courseList = document.querySelector(`#${CSS.escape(issue)} .lesson-list`);
          const nextLesson = courseList.querySelectorAll(".lesson")[index + 1];
          if (nextLesson) nextLesson.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 1300); // 1000 ms = 1 second
      }
    } else {
      feedback.textContent = "❌ Incorrect. Try again!";
      feedback.style.color = "red";
    }
  });
});   
    });
  });
}


//--------------------------
// COMPARISON
//--------------------------

// Constants for comparisons
const sheetsPerTree = 8000;
const forestAreaPerTree = 10; // m²
const showerWaterUse = 65; // liters
const co2PerCarHour = 10; // kg

function injectComparisonSentences(profile) {
  const animals = Math.round(profile.animals_saved || 0);
  const forest  = Math.round(profile.forest_saved || 0);
  const water   = Math.round(profile.water_saved || 0);
  const co2     = Math.round(profile.co2_saved || 0);

  // Calculate equivalents
  const treesSaved = forest / forestAreaPerTree;
  const paperEquivalent = Math.round(treesSaved * sheetsPerTree);
  const showerEquivalent = Math.round(water / showerWaterUse);
  const carTimeEquivalent = (co2 / co2PerCarHour).toFixed(1);

  // Inject into separate blocks with highlighted values
document.getElementById("animalsSentence").innerHTML =
  `Because of you, <span class="highlight">${animals}</span> animals are safe — imagine them as happy friends roaming, swimming, and enjoying life freely!`;

document.getElementById("forestSentence").innerHTML =
  `With your choices, you’ve protected <span class="highlight">${forest}</span> m² of forest — that’s like saving <span class="highlight">${paperEquivalent}</span> sheets of paper from ever being used!`;

document.getElementById("waterSentence").innerHTML =
  `By choosing plant-based meals, you’ve saved <span class="highlight">${water}</span> liters of water — enough for <span class="highlight">${showerEquivalent}</span> refreshing showers!`;

document.getElementById("co2Sentence").innerHTML =
  `Your actions cut down <span class="highlight">${co2}</span> kg of CO₂ emissions — the same as avoiding <span class="highlight">${carTimeEquivalent}</span> hours of car travel!`;
}


document.getElementById('calculateImpactBtn').addEventListener('click', () => {
  const years = parseInt(document.getElementById('years').value) || 0;
  const months = parseInt(document.getElementById('months').value) || 0;
  const totalMonths = years * 12 + months;

  // Impact per month constants
  const animalsSavedPerMonth = 21;
  const forestSavedPerMonth = 15; // m²
  const waterSavedPerMonth = 2000; // liters
  const co2SavedPerMonth = 120; // kg

  // Calculate total impact
  const animalsSaved = animalsSavedPerMonth * totalMonths;
  const forestSaved = forestSavedPerMonth * totalMonths;
  const waterSaved = waterSavedPerMonth * totalMonths;
  const co2Saved = co2SavedPerMonth * totalMonths;

  // Inject results and show container
  document.getElementById('calcAnimals').textContent = animalsSaved;
  document.getElementById('calcForest').textContent = forestSaved;
  document.getElementById('calcWater').textContent = waterSaved;
  document.getElementById('calcCO2').textContent = co2Saved;

  // 🐾 Sentences
  document.getElementById('calcComparison').innerHTML =
`Every animal you spared has a heartbeat, a breath, and a story ❤️. 
The forest you’ve protected provides enough oxygen for <span class="highlight">${Math.round(forestSaved / 20)}</span> people for a whole year 🌬️. 
You’ve also saved enough water to fill <span class="highlight">${Math.round(waterSaved / 170)}</span> bathtubs — a small but meaningful gift to our planet 🛁. 
And all your choices together prevented as much CO₂ as <span class="highlight">${Math.round(co2Saved / 21)}</span> trees absorb in a year 🌳.`;

  document.getElementById('impactResults').classList.remove('hidden');
});


//--------------------------
// MEALART
//--------------------------

function showRecipeModal(meal) {
  const modal = document.getElementById("mealArtrecipeModal");
  document.getElementById("mealArtmodalFoodName").textContent = meal.food_name || "No title";
  document.getElementById("mealArtmodalPrepTime").textContent = meal.prep_time || "N/A"; 
  document.getElementById("mealArtmodalIngredients").innerHTML = (meal.ingredients || "No ingredients provided").replace(/\n/g, "<br>");
  document.getElementById("mealArtmodalInstructions").innerHTML = (meal.instructions || "No instructions provided").replace(/\n/g, "<br>");
  modal.style.display = "flex";
}

function closeRecipeModal() {
  const modal = document.getElementById("mealArtrecipeModal");
  modal.style.display = "none";
}


// TAB HANDLER
function setupTabs() {
  const tabs = document.querySelectorAll(".main-tab");
  const tabContents = document.querySelectorAll(".main-tab-content");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      tabContents.forEach(c => c.style.display = "none");
      const content = document.getElementById(tab.dataset.tab);
      if (content) content.style.display = "block";
    });
  });
  tabs[0]?.click();
}


// MEAL RENDERING
function renderMealItem(meal, today) {
  const homeChefGallery = document.getElementById("home-chef-gallery");
  const proKitchenGallery = document.getElementById("pro-kitchen-gallery");
  const homeChefWinners = document.getElementById("home-chef-winners");
  const proKitchenWinners = document.getElementById("pro-kitchen-winners");

  const mealDiv = document.createElement("div");
  mealDiv.className = "meal-item";
  mealDiv.dataset.id = meal.id;

  const foodNameP = document.createElement("p");
  foodNameP.className = "food-name";
  foodNameP.textContent = meal.food_name; // <- use food_name
  mealDiv.appendChild(foodNameP);

  const img = document.createElement("img");
  img.src = meal.image_url;
  img.alt = `${meal.uploader_name}'s meal`;

  const nameP = document.createElement("p");
  nameP.textContent = meal.uploader_name;

  const recipeSpan = document.createElement("span");
  recipeSpan.className = "recipe-label";
  recipeSpan.textContent = meal.recipe_available ? "Recipe available" : "No recipe";
  if (meal.recipe_available) {
    recipeSpan.classList.add("recipe-available");
    recipeSpan.addEventListener("click", () => showRecipeModal(meal));
  }

  mealDiv.append(img, nameP, recipeSpan);

  // Delete button for own meal
  if (meal.user_id === currentUser.id && !meal.is_winner && today !== 1) {
    const delBtn = document.createElement("button");
    delBtn.className = "delete-meal-btn";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", async () => {
      if (!confirm("Are you sure you want to delete this meal?")) return;

      const { error } = await supabase.from("meals").delete().eq("id", meal.id);
      if (error) {
        alert("Error deleting meal: " + error.message);
      } else {
        mealDiv.remove();
        const uploadBtn = document.getElementById("uploadBtn");
        if (uploadBtn) uploadBtn.style.display = "block";
        const alreadyUploadedMsg = document.getElementById("alreadyUploadedMsg");
        if (alreadyUploadedMsg) alreadyUploadedMsg.style.display = "none";
      }
      fetchAllData();
    });
    mealDiv.appendChild(delBtn);
  }

  // Image popup
  img.addEventListener("click", () => {
    const popup = document.getElementById("mealPopup");
    const popupImg = document.getElementById("popupMealImage");
    popupImg.src = img.src;
    popup.classList.remove("hidden");
  });

  // Append to gallery
  if (meal.is_winner) {
    (meal.is_pro ? proKitchenWinners : homeChefWinners).appendChild(mealDiv);
  } else {
    (meal.is_pro ? proKitchenGallery : homeChefGallery).appendChild(mealDiv);
  }
}

function renderMeals(meals) {
  const today = new Date().getDay();
  const galleries = [
    document.getElementById("home-chef-gallery"),
    document.getElementById("pro-kitchen-gallery"),
    document.getElementById("home-chef-winners"),
    document.getElementById("pro-kitchen-winners")
  ].filter(el => el); // <-- remove nulls

  galleries.forEach(el => el.innerHTML = "");

  meals.forEach(meal => renderMealItem(meal, today));
}


// UPLOAD BUTTON & FORM
function setupUploadButton() {
  const uploadBtn = document.getElementById("uploadBtn");
  if (!uploadBtn) return;

  uploadBtn.addEventListener("click", () => {
    if (!uploadBtn.classList.contains("locked")) {
      document.getElementById("mealArtContestSmall").classList.add("hidden-meal");
      document.getElementById("MealArtUploadContent").classList.remove("hidden-meal");
    }
  });

  // Unlock if pro or level >= 10
  if (currentProfile.is_pro || (currentProfile.current_level || 0) >= 1) {                      // ---- BLOCK HERE IF YOU WANT
    uploadBtn.classList.remove("locked");
    uploadBtn.removeAttribute("data-unlock");
    uploadBtn.style.pointerEvents = "auto";
    uploadBtn.style.opacity = "1";
  }
}

function setupMealUploadForm() {
  const mealPhotoInput = document.getElementById("mealPhoto");
  const previewImage = document.getElementById("mealArtpreviewImage");
  const photoPreview = document.getElementById("mealArtphotoPreview");
  const form = document.getElementById("mealUploadForm");
  const uploadBtn = document.getElementById("uploadBtn");

  // Photo preview
  mealPhotoInput.addEventListener("change", e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        previewImage.src = e.target.result;
        photoPreview.style.display = "block";
      };
      reader.readAsDataURL(file);
    } else {
      previewImage.src = "";
      photoPreview.style.display = "none";
    }
  });

  // Form submit
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const file = mealPhotoInput.files[0];
    if (!file) return alert("Please select a photo before submitting.");

    const foodName = document.getElementById("mealArtrecipeName").value.trim();
    const mealArtPrepTime = document.getElementById("mealArtPrepTime").value.trim();
    const ingredients = document.getElementById("mealArtrecipeIngredients").value.trim();
    const instructions = document.getElementById("mealArtrecipeInstructions").value.trim();
    const recipeAvailable = !!(foodName && ingredients && instructions);

    const isProCategory = currentProfile.is_pro === true;
    const fileExt = file.name.split('.').pop();
    const fileName = `${currentUser.id}_${Date.now()}.${fileExt}`;
    const filePath = `${isProCategory ? 'pro' : 'home'}/${fileName}`;

    const { error: uploadError } = await supabase.storage.from("meal-uploads").upload(filePath, file);
    if (uploadError) return alert("Error uploading photo: " + uploadError.message);

    const { data: publicUrlData } = supabase.storage.from("meal-uploads").getPublicUrl(filePath);
    const imageUrl = publicUrlData.publicUrl;

    const weekStartDate = new Date();
    weekStartDate.setDate(weekStartDate.getDate() - weekStartDate.getDay() + 1);

    const { data: newMeals, error: mealError } = await supabase
      .from("meals")
      .insert([{
        user_id: currentUser.id,
        uploader_name: currentProfile.name || "Anonymous",
        is_pro: isProCategory,
        image_url: imageUrl,
        food_name: foodName,
        prep_time: mealArtPrepTime, 
        ingredients,
        instructions,
        recipe_available: recipeAvailable,
        week_start_date: weekStartDate.toISOString().split('T')[0]
      }])
      .select();

    if (mealError) return alert("Error saving meal: " + mealError.message);

    alert("Meal uploaded successfully!");
    renderMeals([...currentMeals, newMeals[0]]);
    currentMeals.push(newMeals[0]);

    uploadBtn.style.display = "none";
    document.getElementById("alreadyUploadedMsg").style.display = "block";
    form.reset();
    previewImage.src = "";
    photoPreview.style.display = "none";
    document.getElementById("MealArtUploadContent").classList.add("hidden-meal");
    document.getElementById("mealArtContestSmall").classList.remove("hidden-meal");
    document.querySelector(".main-tab[data-tab='participants']")?.click();
  });
}


// MONDAY VOTING
async function setupMondayVoting(userId) {  
 const todayUTC = new Date().getUTCDay(); // 0 = Sunday, 1 = Monday, etc.
  if (todayUTC !== 1) return; // Only run on Monday (UTC)

  const homeChefGallery = document.getElementById("home-chef-gallery");
  const proKitchenGallery = document.getElementById("pro-kitchen-gallery");
  const votenote = document.getElementById("votenote");
  if (votenote) votenote.style.display = "block";

  const uploadBtn = document.getElementById("uploadBtn");
  if (uploadBtn) uploadBtn.style.display = "none";

  const uploadnote = document.getElementById("uploadnote");
  const generalnote = document.getElementById("generalnote");
  if (uploadnote) uploadnote.style.display = "none";
  if (generalnote) generalnote.style.display = "none";

  await addVotingToGallery(homeChefGallery, false, userId);
  await addVotingToGallery(proKitchenGallery, true, userId);
}

async function addVotingToGallery(gallery, isPro, userId) {
  if (!gallery) return;
  if (!userId) {
    console.error("Missing userId for voting check");
    return;
  }

  // 🗓️ Calculate the Monday of the current week in UTC
  const nowUTC = new Date();
  const utcDay = nowUTC.getUTCDay(); // 0 = Sunday, 1 = Monday...
  const weekStartUTC = new Date(Date.UTC(
    nowUTC.getUTCFullYear(),
    nowUTC.getUTCMonth(),
    nowUTC.getUTCDate() - utcDay + 1, // Move back to Monday
    0, 0, 0, 0
  ));
  const weekStr = weekStartUTC.toISOString().split("T")[0];

  const { data: existingVote, error } = await supabase
    .from("votes")
    .select("*")
    .eq("user_id", userId)
    .eq("category", isPro)
    .eq("week_start_date", weekStr)
    .maybeSingle();

  if (error) console.error("Vote fetch error:", error);

  const alreadyVoted = !!existingVote;

  for (const mealDiv of gallery.querySelectorAll(".meal-item")) {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `${isPro}-vote`;
    radio.value = mealDiv.dataset.id;
    radio.disabled = alreadyVoted; // ✅ disable if already voted
    radio.style.marginRight = "5px";

    let votesSpan = mealDiv.querySelector(".votes-span");
    if (!votesSpan) {
      votesSpan = document.createElement("span");
      votesSpan.classList.add("votes-span");
      votesSpan.style.marginLeft = "10px";
      mealDiv.appendChild(votesSpan);
    }

    const { data: mealData } = await supabase
      .from("meals")
      .select("votes")
      .eq("id", mealDiv.dataset.id)
      .single();
    votesSpan.textContent = `Votes: ${mealData?.votes || 0}`;

    mealDiv.prepend(radio);
  }

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit Vote";
  submitBtn.classList.add("button");
  submitBtn.style.marginTop = "10px";
  submitBtn.disabled = alreadyVoted;

  if (alreadyVoted) {
    submitBtn.textContent = "Vote Submitted ✅";
  }

  submitBtn.addEventListener("click", async () => {
    const selected = gallery.querySelector(`input[name='${isPro}-vote']:checked`);
    if (!selected) return alert("Please select a meal to vote!");
    const mealId = selected.value;

    await supabase.from("votes").insert([
      { user_id: userId, meal_id: mealId, category: isPro, week_start_date: weekStr }
    ]);

    const votesSpan = selected.parentElement.querySelector(".votes-span");
    let currentVotes = parseInt(votesSpan.textContent.replace("Votes: ", "")) || 0;
    currentVotes += 1;
    votesSpan.textContent = `Votes: ${currentVotes}`;

    gallery.querySelectorAll("input").forEach(r => (r.disabled = true));
    submitBtn.disabled = true;
    submitBtn.textContent = "Vote Submitted ✅";

    await supabase.from("meals").update({ votes: currentVotes }).eq("id", mealId);
    alert("Vote submitted! Thank you.");
  });

  gallery.parentElement.appendChild(submitBtn);
}



// RECIPE MODAL CLOSE
function setupRecipeModalClose() {
  document.getElementById("mealArtcloseModal").addEventListener("click", closeRecipeModal);
  window.addEventListener("click", e => {
    if (e.target.id === "mealArtrecipeModal") closeRecipeModal();
  });
}

function updateMealArtNotes(today) {
  const uploadBtn = document.getElementById("uploadBtn");
  const votenote = document.getElementById("votenote");
  const uploadnote = document.getElementById("uploadnote");
  const generalnote = document.getElementById("generalnote");
  const alreadyUploadedMsg = document.getElementById("alreadyUploadedMsg");
  const todayUTC = new Date().getUTCDay(); // 0 = Sunday, 1 = Monday, etc.

  if (todayUTC === 1) { // Monday — voting day
    votenote?.classList.remove("hidden-meal");
    uploadBtn?.classList.add("hidden-meal");
    uploadnote?.classList.add("hidden-meal");
    generalnote?.classList.add("hidden-meal");
  } else { // Tuesday-Sunday — upload day
    votenote?.classList.add("hidden-meal");
    uploadBtn?.classList.remove("hidden-meal");
    generalnote?.classList.remove("hidden-meal");

    // Show uploadnote only for non-pro
    if (!currentProfile.is_pro) {
      uploadnote?.classList.remove("hidden-meal");
    } else {
      uploadnote?.classList.add("hidden-meal");
    }

    // Check if user already uploaded
    if (currentMeals.some(m => m.user_id === currentUser.id && !m.is_winner)) {
      uploadBtn?.classList.add("hidden-meal");
      alreadyUploadedMsg?.classList.remove("hidden-meal");
      uploadnote?.classList.add("hidden-meal");
    } else {
      alreadyUploadedMsg?.classList.add("hidden-meal");
    }
  }
}

// ----------------------------
// EXTRA LESSONS 
// ----------------------------
function getHealthLessons(profile) {
  // 1️⃣ Gather lessons from both sources
  const healthIssuesLessons = HealthIssuesPool.health || [];
  const extraLessons = (extralessonsData && extralessonsData.health) || [];
  const userIssues = profile.health_issues || [];

  if (userIssues.length === 0) {
    // If user has no issues, show all general health lessons (both pools)
    const generalHealthIssuesLessons = healthIssuesLessons.filter(l => !l.issue);
    return [...generalHealthIssuesLessons, ...extraLessons];
  }

  // 2️⃣ Group lessons by issue
  const lessonsByIssue = userIssues.map(issue =>
    healthIssuesLessons.filter(lesson => lesson.issue === issue)
  );

  // 3️⃣ Interleave lessons (round-robin)
  const interleaved = [];
  const maxLen = Math.max(...lessonsByIssue.map(l => l.length));
  for (let i = 0; i < maxLen; i++) {
    lessonsByIssue.forEach(issueLessons => {
      if (issueLessons[i]) interleaved.push(issueLessons[i]);
    });
  }

  // 4️⃣ Add general health lessons (without issue)
  const generalLessons = healthIssuesLessons.filter(l => !l.issue);

  // 5️⃣ Add extra lessons from extralessonspool
  const extraHealthLessons = extraLessons.filter(l => !l.issue);

  // 6️⃣ Combine everything
  return [...interleaved, ...generalLessons, ...extraHealthLessons];
}

let globalLessonsToRender = {};

// Render lessons per course
function renderExtraLessons() { 
  if (!extralessonsData) return;

  Object.keys(extralessonsData).forEach(courseKey => {
  const course = document.getElementById(courseKey);
  if (!course) return;

  const lessonList = course.querySelector(".extralesson-list");
  if (!lessonList) return;
  lessonList.innerHTML = ""; // clear

  let lessonsToRender = extralessonsData[courseKey];

  // <-- NEW: if health, sort by user issues first
  if (courseKey === "health" && currentProfile) {          
    lessonsToRender = getHealthLessons(currentProfile);
  }

// ✅ Save lessons globally so setupExtraLessonClicks can access them
    globalLessonsToRender[courseKey] = lessonsToRender;

  lessonsToRender.forEach((lesson, index) => {
  const li = document.createElement("li");
  li.dataset.step = index + 1;

  // Check if this lesson was completed before
  if (currentProfile.completedHealthLessons?.includes(lesson.title)) {
    li.className = "extralesson completed";
  } else if (index === 0 || currentProfile.completedHealthLessons?.includes(lessonsToRender[index - 1].title)) {
  li.className = "extralesson unlocked";
  } else {
    li.className = "extralesson locked";
  }

  li.innerHTML = `
    <div class="extralesson-title">
      <span class="extralesson-icon">${li.classList.contains("completed") ? "✅" : (li.classList.contains("unlocked") ? "🟢" : "🔒")}</span>
      ${lesson.title}
    </div>
    <div class="extralesson-content"></div>
  `;
  lessonList.appendChild(li);
});
});
}

// Setup click handlers for lessons
// Setup click handlers for lessons
function setupExtraLessonClicks() {
  if (!extralessonsData) return;

  ["animals", "earth", "health"].forEach(courseId => {
    const course = document.getElementById(courseId);
    if (!course) return;

    const lessons = course.querySelectorAll(".extralesson");
    lessons.forEach((lesson, idx) => {
      const contentContainer = lesson.querySelector(".extralesson-content");
      const title = lesson.querySelector(".extralesson-title");
      if (!title) return;

      title.addEventListener("click", async () => {
  if (lesson.classList.contains("locked")) return;

  // Close other lessons
  lessons.forEach(l => {
    if (l !== lesson) l.querySelector(".extralesson-content")?.classList.remove("active");
  });

  contentContainer.classList.toggle("active");

  if (!contentContainer.innerHTML.trim()) {
    const lessonData = globalLessonsToRender[courseId][idx];
    const questionObj = lessonData.quiz || lessonData.question || null; // support both naming conventions
    let innerHTML = "";

    // --- Show the lesson text first ---
    innerHTML += `
      <div class="extralesson-text" style="margin-top:0.5rem;">
        <p>${lessonData.content}</p>
        ${questionObj ? `<button class="start-quiz-btn">Take Quiz 🧠</button>` : `<button class="complete-btn">I have read it ✅</button>`}
      </div>
    `;

    // --- Prepare the quiz (hidden at first) ---
    if (questionObj) {
      innerHTML += `
        <div class="extraquiz-section" style="display:none; margin-top:0.5rem;">
          <p><strong>${questionObj.question || questionObj.text}</strong></p>
          ${questionObj.options.map((opt, i) => `
            <label style="display:block; margin-bottom:0.3rem;">
              <input type="radio" name="extraquiz-${courseId}-${idx}" value="${i}"> ${opt}
            </label>`).join("")}
          <button class="extraquiz-submit">Submit Answer</button>
          <div class="extraquiz-feedback" style="margin:0.5rem 0; color:red"></div>
        </div>
      `;
    }

    contentContainer.innerHTML = innerHTML;

    // --- When user finishes reading, start the quiz ---
    if (questionObj) {
      const startQuizBtn = contentContainer.querySelector(".start-quiz-btn");
      const quizSection = contentContainer.querySelector(".extraquiz-section");
      startQuizBtn.addEventListener("click", e => {
        e.stopPropagation();
        startQuizBtn.style.display = "none";
        quizSection.style.display = "block";
      });

      const submitBtn = contentContainer.querySelector(".extraquiz-submit");
      const feedback = contentContainer.querySelector(".extraquiz-feedback");

      submitBtn.addEventListener("click", e => {
        e.stopPropagation();
        const selected = contentContainer.querySelector(`input[name="extraquiz-${courseId}-${idx}"]:checked`);
        if (!selected) { feedback.textContent = "Please select an answer!"; return; }
        if (parseInt(selected.value) !== (questionObj.answer ?? questionObj.correctIndex)) {
          feedback.textContent = "Wrong answer, try again!"; return;
        }

        feedback.textContent = "✅ Correct!";
submitBtn.style.display = "none";

// Automatically complete the lesson after 1 second
setTimeout(async () => {
  lesson.classList.remove("unlocked");
  lesson.classList.add("completed");

  await saveExtraLessonProgress();
  renderExtraLessons();
  setupExtraLessonClicks();
  applyExtraLessonProgress();

  const nextLesson = document.querySelector(`#${CSS.escape(courseId)} .extralesson[data-step="${idx + 2}"]`);
  if (nextLesson) nextLesson.scrollIntoView({ behavior: "smooth", block: "center" });

  contentContainer.classList.remove("active");
  contentContainer.innerHTML = "";
}, 1000);
      });
    }
  }
});
    });
  });
}


// Save progress using currentProfile if available
async function saveExtraLessonProgress() {
  if (!currentProfile) return;

  const previousProgress = currentProfile.extra_lesson || {};
  let totalXp = currentProfile.total_xp || 0;

  const progress = {};
  let newLessonsCompleted = 0;

  Object.keys(extralessonsData).forEach(courseId => {
    progress[courseId] = [];
    const lessons = document.querySelectorAll(`#${courseId} .extralesson`);

    lessons.forEach((lesson, idx) => {
      if (lesson.classList.contains("completed")) {
        // Use lesson title as unique identifier
        const lessonTitle = lesson.querySelector(".extralesson-title").textContent.trim();
        progress[courseId].push(lessonTitle);

        // Only count new lessons for XP
        if (!previousProgress[courseId] || !previousProgress[courseId].includes(lessonTitle)) {
          newLessonsCompleted++;

          // If health course and lesson has an issue, track it
          if (courseId === "health") {
            let lessonData = (extralessonsData.health || []).find(l => l.title === lessonTitle);
if (!lessonData) lessonData = (HealthIssuesPool.health || []).find(l => l.title === lessonTitle);
            if (lessonData?.issue) {
              if (!currentProfile.completedHealthIssues) currentProfile.completedHealthIssues = [];
              if (!currentProfile.completedHealthIssues.includes(lessonData.issue)) {
                currentProfile.completedHealthIssues.push(lessonData.issue);
              }
            }
          }
        }
      }
    });
  });

  totalXp += newLessonsCompleted * 5;

  // Update profile in Supabase
  const { error } = await supabase
    .from("profiles")
    .update({
      extra_lesson: progress,
      total_xp: totalXp,
      completed_health_issues: currentProfile.completedHealthIssues || []
    })
    .eq("id", currentProfile.id);

  if (error) console.error("Error saving extra lesson progress:", error);
  else {
    currentProfile.extra_lesson = progress;
    currentProfile.total_xp = totalXp;
  }

  // Optionally refresh profile on page
  const { profile } = await fetchAllData();
  await renderProfile(profile);
  await fetchAllLeaderboards();
}

// Apply saved progress to DOM (no extra fetch)
function applyExtraLessonProgress() {
  if (!currentProfile || !currentProfile.extra_lesson) return;

  Object.keys(currentProfile.extra_lesson).forEach(courseId => {
    const lessons = document.querySelectorAll(`#${courseId} .extralesson`);
    const completedLessons = currentProfile.extra_lesson[courseId] || [];

    let lastCompletedIndex = -1;

    lessons.forEach((lesson, idx) => {
      const lessonTitle = lesson.querySelector(".extralesson-title").textContent.trim();

      if (completedLessons.includes(lessonTitle)) {
        lesson.className = "extralesson completed";
        lastCompletedIndex = idx;
      } else {
        lesson.className = "extralesson locked";
      }

      lesson.querySelector(".extralesson-icon").textContent =
        lesson.classList.contains("completed") ? "✅" :
        lesson.classList.contains("unlocked") ? "🟢" : "🔒";
    });

    // Unlock the next lesson after the last completed one
    if (lastCompletedIndex + 1 < lessons.length) {
      const nextLesson = lessons[lastCompletedIndex + 1];
      if (!nextLesson.classList.contains("completed")) {
        nextLesson.className = "extralesson unlocked";
        nextLesson.querySelector(".extralesson-icon").textContent = "🟢";
      }
    }
  });
}


// COURSE BUTTONS
function setupCourseButtons() {
  document.querySelectorAll(".learning-path-buttons .path-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const path = btn.dataset.path;
      document.querySelectorAll(".course").forEach(c => c.classList.add("hidden"));
      document.getElementById(path)?.classList.remove("hidden");
    });
  });
}

// ----------------------------
// RECIPES
// ----------------------------

async function loadRecipes() {
  const { data: userData } = await supabase.auth.getUser();
  const userId = userData?.user?.id;

  if (!userId) return; // user not logged in

  // 1️⃣ Fetch full recipes table
  const { data: recipes, error: recipesError } = await supabase
    .from("recipes")
    .select("*");

  if (recipesError) return console.error("Error fetching recipes:", recipesError);

  // 2️⃣ Fetch likes info from RPC
  const { data: likesData, error: likesError } = await supabase
    .rpc("get_recipes_with_likes", { user_uuid: userId });

  if (likesError) return console.error("Error fetching likes:", likesError);

  // 3️⃣ Merge likes info into recipes
  const data = recipes.map(r => {
    const likeInfo = likesData.find(l => l.id === r.id) || {};
    return {
      ...r,
      like_count: likeInfo.like_count || 0,
      liked_by_user: likeInfo.liked_by_user || false
    };
  });

  const container = document.getElementById("recipes-container");
  container.innerHTML = "";

  const modal = document.getElementById("recipe-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalPreptime = document.getElementById("modal-preptime");
  const modalIngredients = document.getElementById("modal-ingredients");
  const modalInstructions = document.getElementById("modal-instructions");
  const closeBtn = modal.querySelector(".close-btn");

  closeBtn.addEventListener("click", () => modal.classList.add("hidden-modal"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden-modal");
  });

  // 4️⃣ Render cards with merged data
  data.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image_url}" alt="${recipe.title}" class="recipe-img">
      <div class="recipe-title">${recipe.title}</div>
      <button class="like-btn ${recipe.liked_by_user ? "liked" : "not-liked"}" data-id="${recipe.id}">
        <span class="heart-icon"></span>
        <span class="like-count">${recipe.like_count}</span>
      </button>
    `;

    if (recipe.user_id === userId) {
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "x";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", async (e) => {
        e.stopPropagation();
        if (!confirm("Are you sure you want to delete this recipe?")) return;

        const { error: delError } = await supabase
          .from("recipes")
          .delete()
          .eq("id", recipe.id);

        if (delError) return console.error("Delete failed:", delError);
        await supabase.storage.from("recipes").remove([recipe.image_url.split("/").pop()]);
        card.remove();
      });

      card.appendChild(deleteBtn);
    }

    // Modal click
    card.querySelector(".recipe-img, .recipe-title").addEventListener("click", () => {
      modalImg.src = recipe.image_url;
      modalTitle.textContent = recipe.title;
      modalPreptime.innerHTML = "<strong>Preparation time:</strong> " + (recipe.prep_time || "N/A");
      modalIngredients.innerHTML = "<strong>Ingredients:</strong><br>" + recipe.ingredients;
      modalInstructions.innerHTML = "<strong>Instructions:</strong><br>" + recipe.description;
      modal.classList.remove("hidden-modal");
    });

    const likeBtn = card.querySelector(".like-btn");
    likeBtn.addEventListener("click", () => toggleLike(recipe.id, userId, likeBtn));

    container.appendChild(card);
  });
}


// Toggle like function
async function toggleLike(recipeId, userId) {
  const likeBtn = document.querySelector(`.like-btn[data-id="${recipeId}"]`);
  const countSpan = likeBtn.querySelector(".like-count");

  // Prevent spamming
  if (likeBtn.disabled) return;
  likeBtn.disabled = true;

  try {
    const { data: existingLikes, error } = await supabase
      .from("recipe_likes")
      .select("*")
      .eq("recipe_id", recipeId)
      .eq("user_id", userId);

    if (error) throw error;

    if (existingLikes.length > 0) {
      // Remove like
      const { error: delError } = await supabase
        .from("recipe_likes")
        .delete()
        .eq("recipe_id", recipeId)
        .eq("user_id", userId);
      if (delError) throw delError;

      likeBtn.classList.remove("liked");
      likeBtn.classList.add("not-liked");
      countSpan.textContent = parseInt(countSpan.textContent) - 1;
    } else {
      // Add like
      const { error: insertError } = await supabase
        .from("recipe_likes")
        .insert([{ recipe_id: recipeId, user_id: userId }]);
      if (insertError) throw insertError;

      likeBtn.classList.remove("not-liked");
      likeBtn.classList.add("liked");
      countSpan.textContent = parseInt(countSpan.textContent) + 1;
    }
  } catch (err) {
    console.error(err);
  } finally {
    likeBtn.disabled = false; // Re-enable after request completes
  }
}

function setupRecipeUploadForm() {
  const recipeImageInput = document.getElementById("recipeImage");
  const previewImg = document.getElementById("previewImg");
  const imagePreview = document.getElementById("imagePreview");
  const form = document.getElementById("recipeForm");
  const uploadFeedback = document.getElementById("uploadFeedback");

  // Image preview
  recipeImageInput.addEventListener("change", e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        previewImg.src = e.target.result;
        imagePreview.style.display = "flex";
      };
      reader.readAsDataURL(file);
    } else {
      previewImg.src = "";
      imagePreview.style.display = "none";
    }
  });

  // Form submit
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const file = recipeImageInput.files[0];
    if (!file) return alert("Please select a recipe image before submitting.");

    const title = document.getElementById("recipeTitle").value.trim();
    const prepTime = document.getElementById("recipePrepTime").value.trim();
    const ingredients = document.getElementById("recipeIngredients").value.trim();
    const instructions = document.getElementById("recipeInstructions").value.trim();

    if (!title || !prepTime || !ingredients || !instructions) {
      return alert("Please fill in all fields before submitting.");
    }

    // Build unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${currentUser.id}_${Date.now()}.${fileExt}`;
    const filePath = `recipes/${fileName}`;

    // Upload image to Supabase storage
    const { error: uploadError } = await supabase.storage.from("recipes").upload(filePath, file);
    if (uploadError) return alert("Error uploading photo: " + uploadError.message);

    // Get public URL
    const { data: publicUrlData } = supabase.storage.from("recipes").getPublicUrl(filePath);
    const imageUrl = publicUrlData.publicUrl;

    // Insert into recipes table
    const { data: newRecipe, error: insertError } = await supabase
      .from("recipes")
      .insert([{
        user_id: currentUser.id,
        title,
        prep_time: prepTime,
        ingredients,
        description: instructions,
        image_url: imageUrl
      }])
      .select();

    if (insertError) return alert("Error saving recipe: " + insertError.message);

    alert("Recipe uploaded successfully!");
    
    // Reset form
    form.reset();
    previewImg.src = "";
    imagePreview.style.display = "none";
    uploadFeedback.textContent = "";

    // Optionally, close the modal
    document.getElementById("upload-recipe").classList.add("hidden-modal");

    // Optionally, re-render recipes list
    if (typeof loadRecipes === "function") loadRecipes();
  });
}

// ----------------------------
// COMMUNITY
// ----------------------------
let joinedLocationId = null;
let firstLoad = true;
let messageChannel = null;

// ----------------------------
// Load countries and cities
// ----------------------------
async function loadLocations() {
  const { data, error } = await supabase
    .from("locations")
    .select("*")
    .order("country");

  if (error) return console.error(error);

  const countries = [...new Set(data.map(l => l.country))];
  const countrySelect = document.getElementById("countrySelect");
  const citySelect = document.getElementById("citySelect");

  // Populate countries
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

  citySelect.addEventListener("change", e => {
    document.getElementById("joinCommunityBtn").disabled = !e.target.value;
  });
}

// ----------------------------
// Load user community if exists
// ----------------------------
async function loadUserCommunity(currentUser) {
  if (!currentUser) return;

  const { data: participant, error } = await supabase
    .from("community_participants")
    .select("id, location_id")
    .eq("user_id", currentUser.id)
    .maybeSingle();

  if (error) return console.error(error);

  if (participant) {
    const { data: location, error: locationError } = await supabase
      .from("locations")
      .select("country, city")
      .eq("id", participant.location_id)
      .single();

    if (locationError) return console.error(locationError);

    const locationName = `${location.city}, ${location.country}`;
    document.getElementById("joinedCommunityText").textContent = `You are in the community: ${locationName}`;
    document.getElementById("leaveCommunityBtn").style.display = "inline-block";
    document.getElementById("joinCommunityBtn").style.display = "none";

    await showCommunityDashboard(participant.location_id, locationName);
  }
}

// ----------------------------
// Show community dashboard
// ----------------------------
async function showCommunityDashboard(locationId, locationName) {
  joinedLocationId = locationId;
  firstLoad = true;

  document.getElementById("joinCommunityCard").style.display = "none";
  document.getElementById("joinedCommunityText").textContent = `You are in the community: ${locationName}`;
  document.getElementById("communityDashboard").style.display = "block";
  document.getElementById("communityTitle").textContent = `${locationName} Community`;

  // Hide chat & events initially
  document.getElementById("communityChatSection").style.display = "none";
  document.getElementById("communityEventsSection").style.display = "none";

  await loadCommunityMessages(locationId);
  await loadCommunityEvents(locationId);
  await showCommunityMembers(locationId);

  setupRealtimeMessages(locationId);
}

// ----------------------------
// Load community messages
// ----------------------------
async function loadCommunityMessages(locationId) {
  if (!locationId) return;

  const { data, error } = await supabase
    .from("community_messages")
    .select("*")
    .eq("location_id", locationId)
    .order("created_at", { ascending: true });

  if (error) return console.error(error);

  const container = document.getElementById("communityMessages");
  if (!container) return;

  const wasAtBottom = !firstLoad &&
    container.scrollHeight - container.scrollTop <= container.clientHeight + 50;

  container.innerHTML = "";
  data.forEach(msg => {
    const div = document.createElement("div");
    div.classList.add("chat-message");
    div.textContent = `${msg.username}: ${msg.content}`;
    div.classList.add(msg.user_id === currentUser?.id ? "my-message" : "their-message");
    container.appendChild(div);
  });

  await new Promise(requestAnimationFrame);

  if (firstLoad || wasAtBottom) {
    container.lastElementChild?.scrollIntoView({ block: "end", behavior: "auto" });
    firstLoad = false;
  }
}

// ----------------------------
// Send community message
// ----------------------------
async function sendCommunityMessage() {
  const text = document.getElementById("communityMessageInput").value.trim();
  if (!text || !joinedLocationId) return alert("You are not in a community.");

  const { error } = await supabase.from("community_messages").insert([{
    user_id: currentUser.id,
    username: currentProfile.name,
    location_id: joinedLocationId,
    content: text
  }]);

  if (error) return console.error(error);

  document.getElementById("communityMessageInput").value = "";
}

document.getElementById("sendCommunityMessageBtn").addEventListener("click", sendCommunityMessage);

// ----------------------------
// Real-time messages
// ----------------------------
function setupRealtimeMessages(locationId) {
  if (messageChannel) supabase.removeChannel(messageChannel);

  messageChannel = supabase
    .channel(`community_messages_${locationId}`)
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "community_messages", filter: `location_id=eq.${locationId}` },
      payload => {
        const container = document.getElementById("communityMessages");
        const msg = payload.new;

        const div = document.createElement("div");
        div.classList.add("chat-message");
        div.textContent = `${msg.username}: ${msg.content}`;
        div.classList.add(msg.user_id === currentUser?.id ? "my-message" : "their-message");
        container.appendChild(div);

        if (container.offsetParent !== null) div.scrollIntoView({ block: "end", behavior: "auto" });
      }
    )
    .subscribe();
}
function scrollCommunityChatToBottom() {
  const container = document.getElementById("communityMessages");
  if (container && container.children.length > 0) {
    container.lastElementChild.scrollIntoView({ block: "end", behavior: "auto" });
  }
}
// ----------------------------
// Community members
// ----------------------------
async function showCommunityMembers(locationId) {
  const membersList = document.getElementById("communityMembersList");
  membersList.innerHTML = "";

  // Fetch members
  const { data: members, error } = await supabase
    .from("community_participants")
    .select("user_id, name, profile_photo, email")
    .eq("location_id", locationId);

  if (error) return console.error(error);

  // Fetch friends & sent requests
  const { data: friendsData } = await supabase
    .from("friends")
    .select("*")
    .or(`user1_id.eq.${currentUser.id},user2_id.eq.${currentUser.id}`);

  const friends = Array.isArray(friendsData) ? friendsData : [];

  const { data: sentRequests } = await supabase
    .from("friend_requests")
    .select("receiver_email")
    .eq("sender_id", currentUser.id)
    .eq("status", "pending");

  members.forEach(member => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = member.profile_photo || "default.jpg";
    img.alt = member.name;

    // ✅ Attach the user's ID to the image
    img.dataset.userid = member.user_id;

    // ✅ On click, open profile card using that ID
  img.addEventListener("click", e => {
    e.stopPropagation();
    openProfile(img);
  });

    const nameSpan = document.createElement("span");
    nameSpan.textContent = member.name;

    li.appendChild(img);
    li.appendChild(nameSpan);

    if (member.user_id !== currentUser.id &&
        !friends.some(f => f.user1_id === member.user_id || f.user2_id === member.user_id)) {

      const btn = document.createElement("button");
      btn.textContent = sentRequests.some(r => r.receiver_email === member.email) ? "Request Sent" : "Send Request";
      btn.disabled = btn.textContent === "Request Sent";

      btn.onclick = async () => {
        const result = await sendRequest(member.email);
        if (result.success) {
          btn.textContent = "Request Sent ✅";
          btn.disabled = true;
        } else {
          alert(result.message);
        }
      };
      li.appendChild(btn);
    }

    membersList.appendChild(li);
  });
}

async function openProfile(imgElement) {
  const userId = imgElement.dataset.userid;
  if (!userId) return;

  // Fetch public profile data from Supabase
  const { data, error } = await supabase
    .from('profilecards')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error || !data) {
    console.error('Error fetching profile:', error);
    return;
  }

  // Fill the popup with user data
  const popup = document.getElementById("ProfileCardDemo");
  popup.querySelector(".ProfileAvatarLarge").style.backgroundImage = `url('${data.avatar_url}')`;
  popup.querySelector(".profile-name").textContent = data.username;
  popup.querySelector(".dietprofilecard").textContent = `🌿 ${data.diet}`;
  // Goals (multiple)
const goalsContainer = popup.querySelector(".goalsprofilecard");
goalsContainer.innerHTML = '🎯 Goals:<br>'; // header
if (Array.isArray(data.goals)) {
  data.goals.forEach(goal => {
    goalsContainer.innerHTML += `• ${goal}<br>`;
  });
} else if (data.goals) {
  goalsContainer.innerHTML += `• ${data.goals}`;
}
  popup.querySelector(".levelprofilecard").textContent = `🌍 Level: ${data.level}`;
  popup.querySelector(".streakprofilecard").textContent = `🔥 ${data.streak}`;

  const achievementsList = popup.querySelector(".achievements-list");
  achievementsList.innerHTML = "";
  if (data.achievements && Array.isArray(data.achievements)) {
    data.achievements.forEach(a => {
      const span = document.createElement("span");
      span.className = "achievement";
      span.textContent = a;
      achievementsList.appendChild(span);
    });
  }

  // Show popup
  popup.classList.remove("hidden");
}

// Close popup
document.querySelector(".close-btnProfileCard").addEventListener("click", () => {
  document.getElementById("ProfileCardDemo").classList.add("hidden");
});
// ----------------------------
// Join community
// ----------------------------
document.getElementById("joinCommunityBtn").addEventListener("click", async () => {
  const locationId = document.getElementById("citySelect").value;
  if (!locationId) return;

  const existing = await supabase
    .from("community_participants")
    .select("*")
    .eq("user_id", currentUser.id)
    .maybeSingle();

  if (existing.data) return alert("You are already in a community!");

  const locationName = `${document.getElementById("citySelect").selectedOptions[0].text}, ${document.getElementById("countrySelect").value}`;

  await supabase.from("community_participants").upsert([{
    user_id: currentUser.id,
    location_id: locationId,
    name: currentProfile.name,
    profile_photo: currentProfile.profile_photo,
    email: currentProfile.email
  }]);

  await showCommunityDashboard(locationId, locationName);
});

// ----------------------------
// Leave community
// ----------------------------
document.getElementById("leaveCommunityDashboardBtn").addEventListener("click", async () => {
  const { error } = await supabase.from("community_participants").delete().eq("user_id", currentUser.id);
  if (error) return console.error(error);

  document.getElementById("communityDashboard").style.display = "none";
  document.getElementById("joinCommunityCard").style.display = "block";
  document.getElementById("joinedCommunityText").textContent = "";
  document.getElementById("leaveCommunityBtn").style.display = "none";
  document.getElementById("joinCommunityBtn").style.display = "inline-block";
});

// ----------------------------
// Community events
// ----------------------------
async function loadCommunityEvents(locationId) {
  const { data, error } = await supabase
    .from("community_events")
    .select("*")
    .eq("location_id", locationId)
    .order("event_date", { ascending: true });

  if (error) return console.error(error);

  const ul = document.getElementById("communityEventsList");
  ul.innerHTML = "";

  const now = new Date();

  for (const event of data) {
    const eventDate = new Date(event.event_date);

    // Delete past events
    if (eventDate < now) {
      await supabase.from("community_events").delete().eq("id", event.id);
      continue;
    }

    const li = document.createElement("li");
    li.textContent = `${eventDate.toLocaleString()} — ${event.place} — ${event.description} (by ${event.username})`;

    if (event.user_id === currentUser.id) {
      const delBtn = document.createElement("button");
      delBtn.textContent = "x";
      delBtn.onclick = async () => {
        await supabase.from("community_events").delete().eq("id", event.id);
        await loadCommunityEvents(locationId);
      };
      li.appendChild(delBtn);
    }

    ul.appendChild(li);
  }
};

async function initCommunityModule() {
  // 1️⃣ Load locations
  await loadLocations();

  // 2️⃣ Load user community if logged in
  if (currentUser) {
    await loadUserCommunity(currentUser);
  }

  // 3️⃣ Setup section toggles (chat, events, etc.)
  document.querySelectorAll('.community-section-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
        // Scroll chat into view if needed
        if (content.id === 'communityChatSection') {
          scrollCommunityChatToBottom();
        }
      }
    });
  });

  // 4️⃣ Setup create event toggle
  const createEventBtn = document.getElementById("createEventBtn");
  const createEventInputs = document.getElementById("createEventInputs");
  if (createEventBtn && createEventInputs) {
    createEventBtn.addEventListener("click", () => { 
      createEventInputs.style.display = createEventInputs.style.display === "none" ? "flex" : "none";
      createEventInputs.style.flexDirection = "column";
    });
  }
}


const submitEventBtn = document.getElementById("submitEventBtn");
const createEventInputs = document.getElementById("createEventInputs");
const eventPlaceInput = document.getElementById("eventPlaceInput");
const eventTimeInput = document.getElementById("eventTimeInput");
const descriptionInput = document.getElementById("eventDescriptionInput");

submitEventBtn.addEventListener("click", async () => {
  const place = eventPlaceInput.value.trim();
  const description = descriptionInput.value.trim();
  const eventDate = eventTimeInput.value;

  if (!place || !eventDate || !joinedLocationId) {
    return alert("Please enter place, date, and ensure you are in a community.");
  }

  if (!currentUser || !currentProfile) {
    return alert("User data not loaded. Please log in.");
  }

  const { error } = await supabase.from("community_events").insert([{
    location_id: joinedLocationId,
    place: place,
    description: description,
    event_date: eventDate,
    user_id: currentUser.id,
    username: currentProfile.name
  }]);

  if (error) {
    console.error(error);
    return alert("Failed to create event.");
  }

  // Clear inputs and hide form
  eventPlaceInput.value = "";
  descriptionInput.value = "";
  eventTimeInput.value = "";
  createEventInputs.style.display = "none";

  // Reload events for the community
  await loadCommunityEvents(joinedLocationId);
});

// ----------------------------
// ANONYMOUS FORUM
// ----------------------------
async function loadForumBlocks() {  
  const forumMessages = document.getElementById('forumMessages');
  if (!forumMessages) return;

  forumMessages.innerHTML = '';
  const { data: blocks, error } = await supabase
    .from('forum_blocks')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return console.error(error);

  blocks.forEach(block => { 
    const li = document.createElement('li');
    li.className = 'forum-block';

    const textSpan = document.createElement('span');
    textSpan.className = 'block-text';
    textSpan.textContent = block.content;
    li.appendChild(textSpan);

    // Add a clickable hint
  const hintSpan = document.createElement('span');
  hintSpan.className = 'block-hint';
  hintSpan.textContent = '💬';
  li.appendChild(hintSpan);

    li.addEventListener('click', () => AFopenCommentPopup(block));

    if (block.user_id === currentUser.id) {
      const delBtn = document.createElement('deletebutton');
      delBtn.textContent = '❌';
      delBtn.className = 'block-delete-btn';
      delBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        await supabase.from('forum_blocks').delete().eq('id', block.id);
        loadForumBlocks();
      });
      li.appendChild(delBtn);
    }

    forumMessages.appendChild(li);
  });
}

async function AFopenCommentPopup(block) {
  activeBlockId = block.id;

  const popupBlockContent = document.getElementById('AFpopupBlockContent');
  const popupCommentsList = document.getElementById('AFpopupCommentsList');
  const commentPopup = document.getElementById('AFcommentPopup');
  if (!popupBlockContent || !popupCommentsList || !commentPopup) return;

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
    const isAsker = c.commenter_id === block.user_id;
    const displayName = isAsker ? "Asker" : c.commenter_name;
    const textSpan = document.createElement('span');
    textSpan.innerHTML = `<strong>${displayName}:</strong> ${c.content}`;
    li.appendChild(textSpan);

    if (c.commenter_id === currentUser.id) {
      const delBtn = document.createElement('delbutton');
      delBtn.textContent = '❌';
      delBtn.className = 'block-delete-btn';
      delBtn.addEventListener('click', async () => {
        await supabase.from('forum_comments').delete().eq('id', c.id);
        AFopenCommentPopup(block);
      });
      li.appendChild(delBtn);
    }

    popupCommentsList.appendChild(li);
  });

  commentPopup.classList.remove('hidden');
}

async function submitNewComment(content, inputElement) {
  if (!content || !activeBlockId) return;

  const { data: profile } = await supabase
    .from('profiles')
    .select('id, name')
    .eq('id', currentUser.id)
    .single();

  const commenterName = profile?.name || "Anonymous";

  await supabase.from('forum_comments').insert([{
    block_id: activeBlockId,
    commenter_id: currentUser.id,
    commenter_name: commenterName,
    content
  }]);

  inputElement.value = '';

  const { data: fullBlock } = await supabase
    .from('forum_blocks')
    .select('*')
    .eq('id', activeBlockId)
    .single();

  AFopenCommentPopup(fullBlock);
}

//--------------------------
// Friends + Messages
//--------------------------
async function sendRequest(receiverEmail) {
  const email = receiverEmail.trim().toLowerCase();
  if (!email) return { success: false, message: "No email provided." };
  if (email === currentUser.email.toLowerCase()) return { success: false, message: "You cannot send a request to yourself." };

  // Check for existing request
  const { data: existing, error: checkError } = await supabase
    .from("friend_requests")
    .select("*")
    .eq("sender_id", currentUser.id)
    .eq("receiver_email", email)
    .maybeSingle();
  if (checkError) return { success: false, message: checkError.message };
  if (existing) return { success: false, message: "Request already sent!" };

  // Fetch profile
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("name, profile_photo")
    .eq("id", currentUser.id)
    .maybeSingle();
  if (profileError) return { success: false, message: profileError.message };

  // Insert request
  const { error } = await supabase.from("friend_requests").insert([{
    sender_id: currentUser.id,
    receiver_email: email,
    name: profile?.name || "Unknown",
    profile_photo: profile?.profile_photo || "default.jpg",
    email: currentUser.email,
    status: "pending"
  }]);
  if (error) return { success: false, message: error.message };

  return { success: true };
}

async function showIncomingFriendRequests() { 
     
  const list = document.getElementById("incomingRequestsList");
  if (!list) return;
  list.innerHTML = "";

  const { data: requests, error } = await supabase
    .from("friend_requests")
    .select("id, sender_id, name, profile_photo, email, receiver_email, status")
    .eq("receiver_email", currentUser.email)
    .eq("status", "pending");
  if (error) return console.error(error);

  requests.forEach(req => {
    const li = document.createElement("li");
    li.className = "friend-request-item";

    const img = document.createElement("img");
    img.src = req.profile_photo || "default.jpg";
    img.alt = req.name || "Unknown";

    // ✅ Attach the user's ID to the image
    img.dataset.userid = req.sender_id;

    // ✅ On click, open profile card using that ID
  img.addEventListener("click", e => {
    e.stopPropagation();
    openProfile(img);
  });

    const nameSpan = document.createElement("span");
    nameSpan.textContent = req.name || "Unknown";

    const actions = document.createElement("div");
    actions.className = "actions";

    // Accept
    const acceptBtn = document.createElement("button");
    acceptBtn.className = "accept";
    acceptBtn.textContent = "Accept";
    acceptBtn.onclick = async () => {
      const { data: myProfile, error: myError } = await supabase
        .from("profiles")
        .select("id, name, profile_photo, email")
        .eq("id", currentUser.id)
        .single();
      if (myError) return console.error(myError);

      const { error: insertError } = await supabase.from("friends").insert([{
        user1_id: req.sender_id,
        user1_name: req.name,
        user1_email: req.email,
        user1_profile_photo: req.profile_photo,
        user2_id: myProfile.id,
        user2_name: myProfile.name,
        user2_email: myProfile.email,
        user2_profile_photo: myProfile.profile_photo
      }]);
      if (insertError) return console.error(insertError);

      await supabase.from("friend_requests").delete().eq("id", req.id);
      await showIncomingFriendRequests();
      await showFriends("friendsList", friend => startChatWithFriend(friend));
    };

    // Decline
    const declineBtn = document.createElement("button");
    declineBtn.className = "decline";
    declineBtn.textContent = "Decline";
    declineBtn.onclick = async () => {
      await supabase.from("friend_requests").delete().eq("id", req.id);
      await showIncomingFriendRequests();
    };

    actions.appendChild(acceptBtn);
    actions.appendChild(declineBtn);

    li.appendChild(img);
    li.appendChild(nameSpan);
    li.appendChild(actions);

    list.appendChild(li);
  });
}

async function showFriends(containerId, onClickFriend) {
  const list = document.getElementById(containerId);
  if (!list) return;
  list.innerHTML = "";

  const { data: friendsData, error } = await supabase
    .from("friends")
    .select("*")
    .or(`user1_id.eq.${currentUser.id},user2_id.eq.${currentUser.id}`);
  if (error) return console.error(error);

  friendsData.forEach(friendship => {
    const friend = friendship.user1_id === currentUser.id
      ? { id: friendship.user2_id, name: friendship.user2_name, email: friendship.user2_email, photo: friendship.user2_profile_photo }
      : { id: friendship.user1_id, name: friendship.user1_name, email: friendship.user1_email, photo: friendship.user1_profile_photo };

    const li = document.createElement("li");
    li.className = "friend-item";

    const img = document.createElement("img");
    img.src = friend.photo || "default.jpg";
    img.alt = friend.name;

    // ✅ Attach the user's ID to the image
    img.dataset.userid = friend.id;

    // ✅ On click, open profile card using that ID
  img.addEventListener("click", e => {
    e.stopPropagation();
    openProfile(img);
  });

    const nameSpan = document.createElement("span");
    nameSpan.textContent = friend.name || "Unknown";

    const btn = document.createElement("button");
    btn.textContent = "Message";
    btn.className = "message";
    btn.onclick = e => {
      e.stopPropagation();
      onClickFriend(friend);
    };

    li.appendChild(img);
    li.appendChild(nameSpan);
    li.appendChild(btn);

    list.appendChild(li);
  });
}

async function loadFriendsTab() {
  await showIncomingFriendRequests();
  await showFriends("friendsList", friend => startChatWithFriend(friend));
}

async function startChatWithFriend(friend) {
  const { data: existingChats, error: chatError } = await supabase
    .from('chats')
    .select('*')
    .or(
      `and(user1_id.eq.${currentUser.id},user2_id.eq.${friend.id}),and(user1_id.eq.${friend.id},user2_id.eq.${currentUser.id})`
    )
    .limit(1);
  if (chatError) return console.error(chatError);

  const chatId = existingChats?.[0]?.id;
  openChatWindow(chatId, friend);
}

async function openChatWindow(chatId, friend) {
  window.currentChatId = chatId;
  window.currentChatFriend = friend;

  const friendsEl = document.getElementById("friends");
  const messagesEl = document.getElementById("messages");
  const chatListEl = document.getElementById("chatListView");
  const chatViewEl = document.getElementById("chatView");

  // Add/remove hidden class instead of changing style.display
  // Add/remove hidden class safely
  if (friendsEl) friendsEl.classList.add("hidden");
  if (messagesEl) messagesEl.classList.remove("hidden");
  if (chatListEl) chatListEl.classList.add("hidden");
  if (chatViewEl) chatViewEl.classList.remove("hidden");

  document.getElementById("chatHeader").textContent = friend.name;

  if (chatId) loadMessages(chatId, friend);
  else document.getElementById("chatMessages").innerHTML = "";
}
// Back arrow
document.getElementById("backToList").addEventListener("click", () => {
  document.getElementById("chatListView").classList.remove("hidden");
  document.getElementById("chatView").classList.add("hidden");
  window.currentChatId = null;
  window.currentChatFriend = null;
});

async function loadMessages(chatId, friend) {
  const chatContainer = document.getElementById("chatMessages");
  if (!chatContainer) return;

  const { data: messages, error } = await supabase
    .from('messages')
    .select('*')
    .eq('chat_id', chatId)
    .order('created_at', { ascending: true });
  if (error) return console.error(error);

  chatContainer.innerHTML = "";
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.textContent = msg.content;
    div.className = msg.sender_id === currentUser.id ? "my-message" : "friend-message";
    chatContainer.appendChild(div);
  });
  chatContainer.scrollTop = chatContainer.scrollHeight;

  if (messageSubscription) supabase.removeChannel(messageSubscription);

  messageSubscription = supabase
    .channel(`chat-${chatId}`)
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'messages',
      filter: `chat_id=eq.${chatId}`
    }, (payload) => {
      const msg = payload.new;
      const div = document.createElement("div");
      div.textContent = msg.content;
      div.className = msg.sender_id === currentUser.id ? "my-message" : "friend-message";
      chatContainer.appendChild(div);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    })
    .subscribe();
}


//--------------------------
// CHAT MODULE
//--------------------------
async function loadChatList() {
  const list = document.getElementById("chatListItems");
  if (!list) return;

  function renderChats(chats) {
    list.innerHTML = "";
    if (!chats || chats.length === 0) return;

    chats.forEach(chat => {
      const friend = chat.user1_id === currentUser.id
        ? { id: chat.user2_id, name: chat.user2_name, photo: chat.user2_profile_photo }
        : { id: chat.user1_id, name: chat.user1_name, photo: chat.user1_profile_photo };

      const li = document.createElement("li");
      li.style.display = "flex";
      li.style.alignItems = "center";
      li.style.justifyContent = "space-between";
      li.style.padding = "0.5rem";
      li.style.borderBottom = "1px solid #eee";

      const img = document.createElement("img");
      img.src = friend.photo || "default.jpg";
      img.alt = friend.name;
      img.style.width = "40px";
      img.style.height = "40px";
      img.style.borderRadius = "50%";
      img.style.marginRight = "0.5rem";

      const info = document.createElement("div");
      info.style.flex = "1";
      const nameSpan = document.createElement("div");
      nameSpan.textContent = friend.name;
      nameSpan.style.fontWeight = "500";
      const lastMessage = document.createElement("div");
      lastMessage.textContent = chat.last_message || "";
      lastMessage.style.fontSize = "0.85rem";
      lastMessage.style.color = "#555";

      info.appendChild(nameSpan);
      info.appendChild(lastMessage);

      li.appendChild(img);
      li.appendChild(info);
      li.onclick = () => startChatWithFriend(friend);

      list.appendChild(li);
    });
  }

  const { data: chats, error } = await supabase
    .from('chats')
    .select('*')
    .or(`user1_id.eq.${currentUser.id},user2_id.eq.${currentUser.id}`)
    .order('last_message_at', { ascending: false });

  if (error) return console.error("Error fetching chats:", error);
  renderChats(chats);

  supabase
    .channel('public:chats')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'chats' },
      payload => {
        const chat = payload.new;
        if (!chat) return;
        if (chat.user1_id === currentUser.id || chat.user2_id === currentUser.id) {
          loadChatList();
        }
      }
    )
    .subscribe();
}
// ----------------------------
// MENTORSHIP
// ----------------------------
function setupMentorshipUI() {
  const applyBtn = document.getElementById("applyMentorBtn");
  const cancelBtn = document.getElementById("mentor-cancel");
  const submitBtn = document.getElementById("mentor-submit");

  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      document.getElementById("mentor-popup")?.classList.remove("mentor-hidden");
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      document.getElementById("mentor-popup")?.classList.add("mentor-hidden");
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", async () => {
      submitBtn.disabled = true;

      const years = document.getElementById("mentor-years").value;
      if (years === "" || isNaN(years)) {
        alert("Please enter valid years.");
        submitBtn.disabled = false;
        return;
      }

      const user = currentUser;
      const profile = currentProfile;
      if (!user || !profile) {
        alert("You must be logged in.");
        submitBtn.disabled = false;
        return;
      }

      // Insert mentor
      const { error } = await supabase.from("mentors").insert({
        user_id: user.id,
        name: profile.name,
        profile_photo: profile.profile_photo || "",
        email: profile.email,
        years_vegan: parseInt(years, 10)
      });

      if (error) {
        console.error(error);
        alert("Failed to submit mentorship.");
        submitBtn.disabled = false;
        return;
      }

      alert("Mentor application submitted!");
      document.getElementById("mentor-popup")?.classList.add("mentor-hidden");
      submitBtn.disabled = false;

      loadMentors();          // refresh mentors list
      checkAndToggleMentorUI(); // refresh UI
    });
  }
}
async function loadMentors() {

  const user = currentUser;
  if (!user) return;

  const mentorsList = document.getElementById("mentorsList");
  mentorsList.innerHTML = "<li>Loading mentors...</li>";

  const { data: mentors, error } = await supabase
    .from("mentors")
    .select("id, user_id, name, profile_photo, years_vegan");

  if (error) {
    console.error(error);
    mentorsList.innerHTML = "<li>Error loading mentors.</li>";
    return;
  }

  mentorsList.innerHTML = "";

  const isMentor = mentors.some(m => m.user_id === user.id);

 mentors.forEach(mentor => {
  const li = document.createElement("li");
  li.className = "mentor-item";

  // Create HTML with data-userid attribute
  li.innerHTML = `
    <img 
      src="${mentor.profile_photo || 'default.jpg'}" 
      alt="${mentor.name}" 
      class="mentor-photo" 
      data-userid="${mentor.user_id}"
    >
    <div class="mentor-info">
      <p class="mentor-name">${mentor.name}</p>
      <p class="mentor-years">${mentor.years_vegan} years vegan</p>
    </div>
    <button class="mentor-message-btn" data-id="${mentor.id}">Message</button>
  `;

  // ✅ Select the image inside the li
  const img = li.querySelector(".mentor-photo");

  // ✅ Add click event to open profile
  img.addEventListener("click", e => {
    e.stopPropagation();
    openProfile(img); // Calls your existing function
  });

  mentorsList.appendChild(li);

    // Message button
    const msgBtn = li.querySelector(".mentor-message-btn");
    msgBtn.addEventListener("click", () => startChatWithMentor(mentor));
    if (isMentor) msgBtn.style.display = "none";
  });

}
async function checkAndToggleMentorUI() {
  const user = currentUser;
  if (!user) return;

  const { data: mentorRecord } = await supabase
    .from("mentors")
    .select("*")
    .eq("user_id", user.id)
    .maybeSingle();

  const isMentor = !!mentorRecord;

  const applyBtn = document.getElementById("applyMentorBtn");
  const alreadyMentor = document.getElementById("alrdymentor");
  const connectWithMentor = document.getElementById("ConnectWithAMentor");

  if (isMentor) {
    applyBtn.style.display = "none";
    alreadyMentor.style.display = "flex";
    connectWithMentor.style.display = "none";
  } else {
    applyBtn.style.display = "inline-block";
    alreadyMentor.style.display = "none";
  }

  const endBtn = document.getElementById("endmentorship");
  endBtn?.addEventListener("click", async () => {
    const { error } = await supabase.from("mentors").delete().eq("user_id", user.id);
    if (error) { console.error(error); alert("Failed to end mentorship."); return; }
    alert("Mentorship ended.");
    applyBtn.style.display = "inline-block";
    alreadyMentor.style.display = "none";
    loadMentors();
  });
}
function setupDemoCard() {
  const demoCard = document.getElementById("ProfileCardDemo");
  const closeBtn = demoCard.querySelector(".close-btn");

  closeBtn?.addEventListener("click", () => demoCard.classList.remove("show"));

  document.addEventListener("click", e => {
    if (demoCard.classList.contains("show") &&
        !demoCard.contains(e.target) &&
        !e.target.classList.contains("mentor-photo")) {
      demoCard.classList.remove("show");
    }
  });
}

async function startChatWithMentor(mentor) {
  const { data: { user: currentUser }, error } = await supabase.auth.getUser();
  if (error || !currentUser) {
    alert("You must be logged in to start a chat.");
    return;
  }

  if (!mentor?.user_id) {
    console.error("Mentor user_id is missing!", mentor);
    alert("Cannot start chat: mentor user ID is missing.");
    return;
  }

  // 1. Check if chat already exists
  const orQuery = `and(user1_id.eq.${currentUser.id},user2_id.eq.${mentor.user_id}),and(user1_id.eq.${mentor.user_id},user2_id.eq.${currentUser.id})`;
  const { data: existingChats, error: chatError } = await supabase
    .from('chats')
    .select('*')
    .or(orQuery)
    .limit(1);

  if (chatError) {
    console.error("Error checking existing chat:", chatError);
  }

  let chatId = existingChats?.[0]?.id || null;

  // 2. Set the global current chat context
  window.currentChatFriend = {
    id: mentor.user_id,
    name: mentor.name,
    photo: mentor.profile_photo || ""
  };
  window.currentChatId = chatId; // will be null if chat doesn't exist

  // 3. Hide the mentorship tab
  document.getElementById("mentorship")?.classList.add("hidden");

  // 4. Open chat window (empty if chatId is null)
  openChatWindow(chatId, window.currentChatFriend);
}

// ----------------------------
// LEADERBOARDS
// ----------------------------
// Render leaderboard
function renderLeaderboard(ulId, data, type) {
  const ul = document.getElementById(ulId);
  if (!ul) return;

  ul.innerHTML = data.map((user, index) => {
    switch(type) {
      case 'streak':
        return `<li>${index + 1}. ${user.name} 🌱 – ${user.streak} days</li>`;
      case 'xp':
        return `<li>${index + 1}. ${user.name} 💫 – XP: ${user.total_xp}, (Level ${user.level})</li>`;
      case 'impact':
        return `<li>${index + 1}. ${user.name} 🌿 – ${user.animals_saved || 0} animals, ${user.water_saved || 0}L water, ${user.forest_saved || 0} trees, ${user.co2_saved || 0}kg CO₂</li>`;
      default:
        return `<li>${index + 1}. ${user.name}</li>`;
    }
  }).join('');
}

// Fetch leaderboard
async function fetchLeaderboard(leaderboardType, ulId, limitCount = 10) {
  let rpcName;

  switch(leaderboardType) {
    case 'xp':
      rpcName = 'get_leaderboard_level';
      break;
    case 'impact':      // <-- use 'impact' here
      rpcName = 'get_leaderboard_impact';
      break;
    default:            // streak / other
      rpcName = 'get_leaderboard';
      break;
  }

  const { data, error } = await supabase.rpc(rpcName, { limit_count: limitCount });

  if (error) {
    console.error(`Error fetching ${leaderboardType} leaderboard:`, error);
    return;
  }

  renderLeaderboard(ulId, data, leaderboardType);
}

// Fetch all
async function fetchAllLeaderboards() {
  await fetchLeaderboard('xp', 'overall-level');
  await fetchLeaderboard('streak', 'overall-streak');
  await fetchLeaderboard('impact', 'overall-impact'); // Only three leaderboards
}














//--------------------------
// INIT
//--------------------------
document.addEventListener("DOMContentLoaded", async () => {
    //pageload
  showLoading(true);
  try {
    await fetchAllData();
    await renderProfile();
    await loadWinnersFromData();

    // ✅ Wait a tick to ensure DOM is updated
    setTimeout(async () => {
      if (currentUser && currentUser.id) {
        await setupMondayVoting(currentUser.id);
      }
    }, 300);
  } catch (err) {
    console.error("Error initializing mainpage:", err);
  }

  //dailycheckin

  try {
    getTodaysLessonFromProfile(currentProfile);
    renderTodaysLesson();
    renderYesterdaysQuiz(currentProfile);

    window.handleSubmit = handleSubmit;
  } catch (err) {
    console.error("Daily Check-in setup error:", err);
  }
  //Healthlessons
  await initHealthPaths();

//Comparison
if (currentProfile) {
  injectComparisonSentences(currentProfile);
} else {
  console.warn("currentProfile not available yet — comparison sentences not injected.");
}

//MEALART
setupTabs();
  setupUploadButton();
  setupMealUploadForm();
  setupRecipeModalClose();
  renderMeals(currentMeals);

  const modal = document.getElementById("mealArtrecipeModal");
if (modal) {
    modal.classList.add("hidden-meal");
    modal.style.display = "none"; // force hide
  }
  const today = new Date().getDay();
  updateMealArtNotes(today);

//EXTRA LESSONS
// Ensure extralessonsData and currentProfile are already loaded
  if (!extralessonsData) {
    console.warn("extralessonsData not loaded yet!");
    return;
  }
  if (!currentProfile) {
    console.warn("currentProfile not available yet!");
    return;
  }
  // Render lessons and apply existing progress
  renderExtraLessons();
  applyExtraLessonProgress();
  // Setup click handlers for lessons
  setupExtraLessonClicks();
  // Setup course buttons
  setupCourseButtons();
//EXTRA LESSONS
await loadRecipes();
//COMMUNITY
  await initCommunityModule();

// ---- Anonymous Forum & Chat Initialization ----
    // Forum collapse toggle
    document.querySelectorAll(".AFsection h2").forEach(header => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
      });
    });

    // Close comment popup
    const closePopup = document.getElementById('AFclosePopup');
    if (closePopup) closePopup.addEventListener('click', () => {
      const commentPopup = document.getElementById('AFcommentPopup');
      commentPopup?.classList.add('hidden');
    });

    // Submit block
    const submitBlockBtn = document.getElementById('submitBlockBtn');
    const blockContent = document.getElementById('blockContent');
    if (submitBlockBtn && blockContent) {
      submitBlockBtn.addEventListener('click', async () => {
        const content = blockContent.value.trim();
        if (!content) return;
        await supabase.from('forum_blocks').insert([{ user_id: currentUser.id, content }]);
        blockContent.value = '';
        loadForumBlocks();
      });
    }

    // Submit comment
    const submitCommentBtn = document.getElementById('AFsubmitCommentBtn');
    const newCommentInput = document.getElementById('AFnewCommentInput');
    if (submitCommentBtn && newCommentInput) {
      submitCommentBtn.addEventListener('click', async () => {
        await submitNewComment(newCommentInput.value.trim(), newCommentInput);
      });
    }

    // Load forum blocks and chats
    await loadForumBlocks();
    await loadChatList();

//Friends + messages
  
// Friend request popup
  document.getElementById("sendFriendRequestBtn")?.addEventListener("click", async () => {
    const email = document.getElementById("friendEmailInput")?.value;
    const result = await sendRequest(email);
    if (!result.success) alert(result.message);
    else {
      alert("Friend request sent!");
      document.getElementById("friendEmailInput").value = "";
      searchPopup.style.display = "none";
      await showFriends("friendsList", friend => startChatWithFriend(friend));
      if (joinedLocationId) await showCommunityMembers(joinedLocationId);
    }
  });

  // Back to chat list
  document.getElementById("backToList")?.addEventListener("click", () => {
    document.getElementById("chatListView")?.classList.remove("hidden");
    document.getElementById("chatView")?.classList.add("hidden");
    window.currentChatId = null;
    window.currentChatFriend = null;
  });

  // Send message button
  document.getElementById("sendMessageBtn")?.addEventListener("click", async () => {
    const messageInput = document.getElementById("messageInput");
    const text = messageInput.value.trim();
    if (!text) return;
    const friend = window.currentChatFriend;
    if (!friend?.id) return console.error("No valid friend selected.");
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select("name, profile_photo")
        .eq("id", currentUser.id)
        .maybeSingle();

      let chatId = window.currentChatId;

      // Create chat if doesn't exist
      if (!chatId) {
        const { data: newChat } = await supabase.from('chats').insert([{
          user1_id: currentUser.id,
          user1_name: profile?.name || currentUser.email,
          user1_profile_photo: profile?.profile_photo || "",
          user2_id: friend.id,
          user2_name: friend.name,
          user2_profile_photo: friend.photo || "",
          last_message: text,
          last_message_at: new Date().toISOString()
        }]).select().single();
        chatId = newChat.id;
        window.currentChatId = chatId;
      } else {
        await supabase.from('chats').update({
          last_message: text,
          last_message_at: new Date().toISOString()
        }).eq('id', chatId);
      }

      await supabase.from('messages').insert([{
        chat_id: chatId,
        sender_id: currentUser.id,
        content: text
      }]);

      messageInput.value = '';
      loadMessages(chatId, friend);
    } catch (err) { console.error(err); }
  });

  // Load friends & requests
  await loadFriendsTab();

//Mentorship
await setupMentorshipUI();
await setupDemoCard();
await loadMentors();
await checkAndToggleMentorUI();

//LeaderBoards
await fetchAllLeaderboards();

// Setup the upload form
    setupRecipeUploadForm();

    // Open modal button
    const openUploadBtn = document.getElementById("openUploadBtn");
    const uploadModal = document.getElementById("upload-recipe");
    const closeBtns = uploadModal.querySelectorAll(".close-btn");

    // Show modal
    openUploadBtn.addEventListener("click", () => {
      uploadModal.classList.remove("hidden-modal");
    });

    // Hide modal with close buttons
    closeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        uploadModal.classList.add("hidden-modal");
      });
    });

    // Hide modal when clicking outside content
    window.addEventListener("click", e => {
      if (e.target === uploadModal) {
        uploadModal.classList.add("hidden-modal");
      }
    });


//Show page after everything is loaded:
  showLoading(false);
});