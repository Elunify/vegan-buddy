

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

  // Set profile photo
  if (profile.profile_photo) {
    document.getElementById("profilePhoto").src = profile.profile_photo;
  }

  // Set counters
  document.getElementById("currentLevel").textContent = profile.current_level ?? 0;
  document.getElementById("streak-counter").textContent = profile.streak ?? 0;

  // Set impact cards
    document.getElementById('savedAnimals').textContent = formatNumber(Math.round(profile.animals_saved || 0));
    document.getElementById('savedForest').textContent  = formatNumber(Math.round(profile.forest_saved || 0));
    document.getElementById('savedWater').textContent   = formatNumber(Math.round(profile.water_saved || 0));
    document.getElementById('savedCO2').textContent     = formatNumber(Math.round(profile.co2_saved || 0));

 // ===== Helper to format numbers =====
function formatNumber(value) {
  value = Math.round(value); // round to nearest whole number
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

  const levelData = getLevelFromXP(profile.total_xp ?? 0); // ⚠ must declare levelData

// Update level & streak
document.getElementById("currentLevel").textContent = levelData.level;
document.getElementById("streak-counter").textContent = profile.streak ?? 0;

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

  // ===== Daily Check-in Tab Logic =====
  const dailyTab = document.getElementById("daily-checkin-tab");
  if (!dailyTab) return;

  const todayStr = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];

  async function handleStreakSave() {
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
        // Integrate payment logic here
        await supabase.from("profiles").update({
        last_checkin_date: yesterday
      }).eq("id", user.id);
        alert("Redirecting to payment...");
        return true;
      } else {
        alert("Your streak will reset.");
        await supabase.from("profiles").update({ streak: 0, last_checkin_date: yesterday }).eq("id", user.id);
        return false;
      }
    }
  }

  // Check last check-in
  if (profile.last_checkin_date === todayStr) {
    // Already checked in today
    dailyTab.style.pointerEvents = "none";
    dailyTab.style.opacity = 0.6;
    dailyTab.textContent = "✅ Daily Check-in";
  } else if (profile.last_checkin_date < yesterdayStr) {
    // Missed yesterday
    const streakSaved = await handleStreakSave();
    if (streakSaved) {
        await supabase.from("profiles").update({
        last_checkin_date: yesterday
      }).eq("id", user.id);
    }
  }
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
      .single();

    if (amateurWinner) {
      document.getElementById("amateurName").textContent = amateurWinner.uploader_name;
      document.getElementById("amateurImage").src = amateurWinner.image_url;

      const amateurRecipeDiv = document.getElementById("amateurRecipe");
      if (amateurWinner.recipe_available) {
        amateurRecipeDiv.innerHTML = `<a href="#" onclick='showRecipeModal(${JSON.stringify(amateurWinner)})'>Recipe available</a>`;
      } else {
        amateurRecipeDiv.innerHTML = `<span class="no-recipe">Recipe unavailable</span>`;
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
      .single();

    if (proWinner) {
      document.getElementById("proName").textContent = proWinner.uploader_name;
      document.getElementById("proImage").src = proWinner.image_url;

      const proRecipeDiv = document.getElementById("professionalRecipe");
      if (proWinner.recipe_available) {
        proRecipeDiv.innerHTML = `<a href="#" onclick='showRecipeModal(${JSON.stringify(proWinner)})'>Recipe available</a>`;
      } else {
        proRecipeDiv.innerHTML = `<span class="no-recipe">Recipe unavailable</span>`;
      }
    }

    if (amateurError) console.error("Amateur fetch error:", amateurError);
    if (proError) console.error("Pro fetch error:", proError);
  }

  loadWinners();

  // ===== Recipe Modal =====
  window.showRecipeModal = function (meal) {
    document.getElementById("modalFoodName").textContent = meal.food_name || "No title";
    document.getElementById("modalIngredients").textContent = meal.ingredients || "No ingredients provided";
    document.getElementById("modalInstructions").textContent = meal.instructions || "No instructions provided";
    document.getElementById("recipeModal").style.display = "flex";
  }

 // document.getElementById("closeModal").addEventListener("click", () => {
 //   document.getElementById("recipeModal").style.display = "none";
 // });
 // window.addEventListener("click", e => {
 //   if (e.target.id === "recipeModal") document.getElementById("recipeModal").style.display = "none";
 // });
