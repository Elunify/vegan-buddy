import { supabase } from "./supabaseClient.js";
import { initHealthPaths } from "./scriptfunctions.js";

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

export async function loadProfile() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("Not logged in:", userError);
    return;
  }

  // Fetch the user's profile record
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select(`
        profile_photo, 
        name,
        pet_photo, 
        pet_name, 
        last_checkin_date, 
        badge, 
        streak, 
        current_level, 
        total_xp, 
        animals_saved, 
        forest_saved, 
        water_saved, 
        co2_saved, 
        goals, 
        health_issues,
        diet_preference
        `)
    .eq("id", user.id)
    .single();

  if (profileError) {
    console.error("Error fetching profile:", profileError);
    return;
  }

  // Profile photo
  if (profile.profile_photo) {
    document.getElementById("profilePhoto").src = profile.profile_photo;
    document.getElementById("profilePhotoprofile").src = profile.profile_photo;
    document.getElementById("profilePhotoPreview").src = profile.profile_photo;
  }

  // Name + Diet
  document.getElementById("profileName").textContent = profile.name || "-";
  document.getElementById("profileNameInput").value = profile.name || "-";
  document.getElementById("diet").textContent = profile.diet_preference || "-";
  document.getElementById("profileDietSelect").option = profile.diet_preference || "-";

  // Streak + level + badge
  document.getElementById("streak-counter").textContent = profile.streak || 0;
  document.getElementById("currentLevel").textContent = profile.current_level || 0;
  document.getElementById("streak-counterprofile").textContent = profile.streak || 0;
  document.getElementById("currentLevelprofile").textContent = profile.current_level || 0;
  document.getElementById("badgeprofile").textContent = profile.badge || 0;

// Helper function to normalize array
function toArray(value) {
  return Array.isArray(value) ? value : Object.values(value || []);
}

// ===== Populate Goals =====
const goalsList = document.getElementById("goalsList");
goalsList.innerHTML = "";
const goals = toArray(profile.goals);

goals.forEach(goal => {
  const li = document.createElement("li");
  li.textContent = goal;
  goalsList.appendChild(li);
});

// Check corresponding checkboxes (if any)
document.querySelectorAll('input[name="goal"]').forEach(cb => {
  cb.checked = goals.includes(cb.value);
});

// ===== Populate Health Issues =====
const healthList = document.getElementById("healthIssuesList");
healthList.innerHTML = "";
const issues = toArray(profile.health_issues);

issues.forEach(issue => {
  const li = document.createElement("li");
  li.textContent = issue;
  healthList.appendChild(li);
});

// Check corresponding checkboxes (if any)
document.querySelectorAll('input[name="healthIssue"]').forEach(cb => {
  cb.checked = issues.includes(cb.value);
});

// Optional: show/hide Health Issues section
toggleHealthIssues();

  // Pet
  if (profile.pet_photo) {
 //   document.getElementById("petPhoto").src = profile.pet_photo;
    document.getElementById("petPhotoprofile").src = profile.pet_photo;
    document.getElementById("petPhotoPreview").src = profile.pet_photo;
  }
  document.getElementById("petName").textContent = profile.pet_name || "-";
  document.getElementById("petNameprofile").textContent = profile.pet_name || "-";
  document.getElementById("petNameInput").value = profile.pet_name || "-";

  document.querySelectorAll(".details-list").forEach(list => {
  // Only count <li> elements, ignore whitespace/text nodes
  if (list.querySelectorAll("li").length === 0) {
    list.previousElementSibling.style.display = "none"; // hide the section title
    list.style.display = "none"; // hide the list itself
  }
});

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
  checkinBtn.disabled = true; // Make button non-clickable
  checkinBtn.style.cursor = "not-allowed"; // Optional: show not-allowed cursor
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

// --- Toggle Health Issues Section ---
const healthIssuesSection = document.getElementById("q2b"); // keep your HTML as is
const goalsInputs = document.querySelectorAll('input[name="goal"]');

  function toggleHealthIssues() {
  const solvingChecked = Array.from(goalsInputs).some(cb => cb.checked && cb.value === "Solving health issues");
  healthIssuesSection.style.display = solvingChecked ? "block" : "none";

  // If hidden, uncheck all health issues
  if (!solvingChecked) {
    document.querySelectorAll('input[name="healthIssue"]').forEach(cb => cb.checked = false);
  }
}
// React to user changes
goalsInputs.forEach(cb => cb.addEventListener("change", toggleHealthIssues));

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


// --- SAVE PROFILE ---
async function saveProfile() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return console.error("Not logged in:", userError);

  let updates = {};

  // Name
  updates.name = document.getElementById('profileNameInput').value || null;

  // Diet Preference
  const selectedDiet = document.getElementById('profileDietSelect').value;
  updates.diet_preference = selectedDiet || null;

  // Goals
  const selectedGoals = Array.from(document.querySelectorAll('input[name="goal"]:checked')).map(cb => cb.value);
  updates.goals = selectedGoals.length ? selectedGoals : null;

  // Health Issues
const solvingChecked = Array.from(document.querySelectorAll('input[name="goal"]'))
  .some(cb => cb.checked && cb.value === "Solving health issues");

let selectedHealth = [];
if (solvingChecked) {
  selectedHealth = Array.from(document.querySelectorAll('input[name="healthIssue"]:checked')).map(cb => cb.value);
}

updates.health_issues = selectedHealth.length ? selectedHealth : null;

  // Pet name
  updates.pet_name = document.getElementById('petNameInput').value || null;

  // --- Handle Profile Photo ---
  if (newProfilePhotoFile) {
    const originalName = newProfilePhotoFile.name.replace(/\.[^/.]+$/, ""); // remove extension
    const fileExt = newProfilePhotoFile.name.split('.').pop(); // "jpg"
    const timestamp = Date.now();
    const fileName = `${user.id}/${originalName}-${timestamp}.${fileExt}`; 
    const bucket = 'profile_photos';

    // Delete old photo if exists
    const oldUrl = document.getElementById('profilePhotoInput').value;
    if (oldUrl) {
      const oldPath = oldUrl.split(`${bucket}/`)[1];
      if (oldPath) await supabase.storage.from(bucket).remove([oldPath]);
    }

    // Upload new photo
    const { data: uploadData, error: uploadError } = await supabase.storage.from(bucket).upload(fileName, newProfilePhotoFile, { upsert: true });
    if (uploadError) return console.error("Profile photo upload error:", uploadError);

    updates.profile_photo = supabase.storage.from(bucket).getPublicUrl(fileName).data.publicUrl;

  }

  // --- Handle Pet Photo ---
  if (newPetPhotoFile) {
    const originalName = newPetPhotoFile.name.replace(/\.[^/.]+$/, ""); // remove extension
    const fileExt = newPetPhotoFile.name.split('.').pop();
    const timestamp = Date.now();
    const fileName = `${user.id}/${originalName}-${timestamp}.${fileExt}`; // put user ID as folder
    const bucket = 'pet_photos';

    // Delete old photo if exists
    const oldUrl = document.getElementById('petPhotoInput').value;
    if (oldUrl) {
      const oldPath = oldUrl.split(`${bucket}/`)[1];
      if (oldPath) await supabase.storage.from(bucket).remove([oldPath]);
    }

    // Upload new photo
    const { data: uploadData, error: uploadError } = await supabase.storage.from(bucket).upload(fileName, newPetPhotoFile, { upsert: true });
    if (uploadError) return console.error("Pet photo upload error:", uploadError);

    updates.pet_photo = supabase.storage.from(bucket).getPublicUrl(fileName).data.publicUrl;
  }

  // --- Update profile in Supabase ---
  const { error: updateError } = await supabase.from('profiles').update(updates).eq('id', user.id);
  if (updateError) return console.error("Profile update error:", updateError);

// --- Reload profile data to update UI ---
  await initHealthPaths();
  await loadProfile();

  // --- Show profile and hide edit form instead of redirect ---
const containerSettings = document.querySelector('.containersettings');
const containerEdit = document.querySelector('.containeredit');

containerEdit.classList.add('hidden');     // hide edit form
containerSettings.classList.remove('hidden'); // show profile view
}

// --- Attach save button ---
document.getElementById('saveBtn').addEventListener('click', saveProfile);

// --- End settings ---
// --- End settings ---
// --- End settings ---
// --- End settings ---

// --- Supportus + aboutus ---
// --- Supportus + aboutus ---
// --- Supportus + aboutus ---
// --- Supportus + aboutus ---


