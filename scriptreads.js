import { supabase } from "./supabaseClient.js";

// ===== Helper to format numbers =====
function formatNumber(value) {
  value = Math.round(value);
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(1) + 'B';
  } else if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1) + 'M';
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(1) + 'k';
  } else {
    return value.toString();
  }
}

// ===== Handle Streak Save (make it global so both loadProfile and tab logic can use it) =====
async function handleStreakSave(user, profile, yesterday) {
  const save = confirm("Do you want to save your streak for 10 badges?");
  if (!save) {
    alert("Your streak will reset.");
    await supabase.from("profiles").update({ streak: 0, last_checkin_date: yesterday }).eq("id", user.id);
    return false;
  }

  if ((profile.badge || 0) >= 10) {
    await supabase.from("profiles").update({
      badge: profile.badge - 10,
      last_checkin_date: yesterday
    }).eq("id", user.id);
    alert("Streak saved by spending 10 badges!");
    return true;
  } else {
    const pay = confirm("You don't have enough badges. Do you want to save your streak for 1€?");
    if (pay) {
      // TODO: integrate payment
      await supabase.from("profiles").update({ last_checkin_date: yesterday }).eq("id", user.id);
      alert("Redirecting to payment...");
      return true;
    } else {
      alert("Your streak will reset.");
      await supabase.from("profiles").update({ streak: 0, last_checkin_date: yesterday }).eq("id", user.id);
      return false;
    }
  }
}

document.addEventListener("DOMContentLoaded", loadProfile);

 // ReadProfile
  // ReadProfile
   // ReadProfile

async function loadProfile() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("Not logged in:", userError);
    return;
  }

  // Fetch the user's profile record
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("profile_photo, pet_photo, pet_name, last_checkin_date, badge, streak, current_level, total_xp, animals_saved, forest_saved, water_saved, co2_saved, goals, health_issues")
    .eq("id", user.id)
    .single();

  if (profileError) {
    console.error("Error fetching profile:", profileError);
    return;
  }

const streakFire = document.querySelector("#streak .fire");
const todaystreak = new Date().toISOString().split("T")[0];

if (profile.last_checkin_date !== todaystreak) {
  streakFire.classList.add("inactive");
} else {
  streakFire.classList.remove("inactive");
}

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

// After fetching the profile:
const totalXP = profile.total_xp;

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

// Calculate XP progress
const { level, xpTowardsNextLevel, xpNeededForNextLevel } = getLevelFromXP(totalXP);

if (countersElements.levelProgress) {
  if (level >= 100) {
    countersElements.levelProgress.style.display = "none";
  } else {
    countersElements.levelProgress.style.display = "block";
    let progressPercent = (xpTowardsNextLevel / xpNeededForNextLevel) * 100;

    // Cap at 100%
    progressPercent = Math.min(progressPercent, 100);

    countersElements.levelProgress.style.width = progressPercent + '%';
    countersElements.currentLevelEl.textContent = level;
  }
}


  // Daily Check-in button
const checkinBtn = document.getElementById("checkinBtn");
const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
// Calculate yesterday string
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const yesterdayStr = yesterday.toISOString().split("T")[0];

if (profile.last_checkin_date === today) {
  // Already checked in today
  checkinBtn.classList.add("done");
  checkinBtn.textContent = "✅ Daily Check-in";
} else {
  // Not checked in today
  checkinBtn.classList.remove("done");
  checkinBtn.textContent = "Daily Check-in";

  if (profile.last_checkin_date < yesterdayStr) {
    // Missed yesterday → reset streak or handle special logic
    const streakSaved = await handleStreakSave();
    if (streakSaved) {
      await supabase.from("profiles").update({
        last_checkin_date: yesterdayStr
      }).eq("id", user.id);
    }
  }
}

// Health Solutions button
const healthBtn = document.getElementById("healthBtn");
if (profile.health_issues && profile.health_issues.length > 0) {
  healthBtn.classList.remove("hidden");
  healthBtn.textContent = "Health Solutions";
} else {
  healthBtn.classList.add("hidden");
}
  // Set profile photo
  if (profile.profile_photo) {
    document.getElementById("profilePhoto").src = profile.profile_photo;
  }

  // Set counters
  document.getElementById("currentLevel").textContent = profile.current_level ?? 0;
  document.getElementById("streak-counter").textContent = profile.streak ?? 0;

  // Set impact cards
    document.getElementById('youAnimals').textContent = formatNumber(Math.round(profile.animals_saved || 0));
    document.getElementById('youForest').textContent  = formatNumber(Math.round(profile.forest_saved || 0));
    document.getElementById('youWater').textContent   = formatNumber(Math.round(profile.water_saved || 0));
    document.getElementById('youCO2').textContent     = formatNumber(Math.round(profile.co2_saved || 0));


  // ===== Load global impact =====
  const { data: globalImpact, error: globalError } = await supabase
    .from('global_impact')
    .select('animals_saved, forest_saved, water_saved, co2_saved, donated')
    .single();

  if (globalError) {
    console.error('Error loading global impact:', globalError);
  } else {
    document.getElementById('communityAnimals').textContent = formatNumber(Math.round(globalImpact.animals_saved || 0));
    document.getElementById('communityForest').textContent  = formatNumber(Math.round(globalImpact.forest_saved || 0));
    document.getElementById('communityWater').textContent   = formatNumber(Math.round(globalImpact.water_saved || 0));
    document.getElementById('communityCO2').textContent     = formatNumber(Math.round(globalImpact.co2_saved || 0));
  }

const levelData = getLevelFromXP(profile.total_xp ?? 0); // ⚠ must declare levelData

// Update XP to next level
const xpRemaining = levelData.xpNeededForNextLevel - levelData.xpTowardsNextLevel;
document.getElementById("xpToNext").textContent = `${xpRemaining} XP to next level`;

  // Insert pet_name into span
const petNameEl = document.getElementById("pet_name");
if (petNameEl && profile.pet_name) {
  petNameEl.textContent = profile.pet_name;
}

  // Render pet
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
  
}



// Run on page load
loadProfile();

 // Meal-art
  // Meal-art
   // Meal-art

async function loadWinners() {
    // Amateur / Individual (is_pro = false)
    const { data: amateurWinner, error: amateurError } = await supabase
      .from("meals")
      .select("uploader_name, image_url, recipe_available, food_name, ingredients, instructions, id")
      .eq("is_winner", true)
      .eq("is_pro", false)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (amateurWinner) {
      document.getElementById("amateurName").textContent = amateurWinner.uploader_name;
      document.getElementById("amateurImage").src = amateurWinner.image_url;
        // Update popup image
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
}else {
        amateurRecipeDiv.innerHTML = `<span class="no-recipe">No recipe</span>`;
      }
    }

    // Professional / Restaurant (is_pro = true)
    const { data: proWinner, error: proError } = await supabase
      .from("meals")
      .select("uploader_name, image_url, recipe_available, food_name, ingredients, instructions, id")
      .eq("is_winner", true)
      .eq("is_pro", true)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (proWinner) {
      document.getElementById("proName").textContent = proWinner.uploader_name;
      document.getElementById("proImage").src = proWinner.image_url;
        // Update popup image
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

    if (amateurError) console.error("Amateur fetch error:", amateurError);
    if (proError) console.error("Pro fetch error:", proError);
  }

  loadWinners();

  // ===== Recipe Modal =====
window.showRecipeModal = function (meal) {
  document.getElementById("modalFoodName").textContent = meal.food_name || "No title";

  document.getElementById("modalIngredients").innerHTML = 
      (meal.ingredients || "No ingredients provided").replace(/\n/g, "<br>");

  document.getElementById("modalInstructions").innerHTML = 
      (meal.instructions || "No instructions provided").replace(/\n/g, "<br>");

  document.getElementById("recipeModal").style.display = "flex";
}

 document.getElementById("closeModal").addEventListener("click", () => {
 document.getElementById("recipeModal").style.display = "none";
  });
  window.addEventListener("click", e => {
    if (e.target.id === "recipeModal") document.getElementById("recipeModal").style.display = "none";
  });

  //===== Homepage Ends =======//
