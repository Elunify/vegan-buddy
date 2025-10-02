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
    const streakSaved = await handleStreakSave(user, profile, yesterday);
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
  
  return profile;
}




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

// --- Recipes -----
// --- Recipes -----
// --- Recipes -----
// --- Recipes -----

// Make sure supabase client is initialized
// const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function loadRecipes() {
  const { data: userData } = await supabase.auth.getUser();
  const userId = userData?.user?.id;

  if (!userId) return; // user not logged in

  // CALL RPC FUNCTION instead of direct table/view
  const { data, error } = await supabase
    .rpc("get_recipes_with_likes", { user_uuid: userId })
    .order('like_count', { ascending: false }); 

  if (error) return console.error("Error fetching recipes:", error);

  const container = document.getElementById("recipes-container");
  container.innerHTML = "";

  const modal = document.getElementById("recipe-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalIngredients = document.getElementById("modal-ingredients");
  const modalInstructions = document.getElementById("modal-instructions");
  const closeBtn = modal.querySelector(".close-btn");

  closeBtn.addEventListener("click", () => modal.classList.add("hidden-modal"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden-modal");
  });

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

    // Add delete button if this recipe belongs to the current user
    if (recipe.user_id === userId) {
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "x";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", async (e) => {
        e.stopPropagation(); // Prevent modal from opening
        if (!confirm("Are you sure you want to delete this recipe?")) return;

        const { error: delError } = await supabase
          .from("recipes")
          .delete()
          .eq("id", recipe.id);

        if (delError) return console.error("Delete failed:", delError);

        // Optionally, delete the image from storage
        await supabase.storage.from("recipes").remove([recipe.image_url.split("/").pop()]);

        // Remove card from DOM
        card.remove();
      });

      card.appendChild(deleteBtn);
    }

    // Card click opens modal
    card.querySelector(".recipe-img, .recipe-title").addEventListener("click", () => {
      modalImg.src = recipe.image_url;
      modalTitle.textContent = recipe.title;
      modalIngredients.innerHTML = "<strong>Ingredients:</strong><br>" + recipe.ingredients;
      modalInstructions.innerHTML = "<strong>Instructions:</strong><br>" + recipe.description;
      modal.classList.remove("hidden-modal");
    });

    // Like button toggle
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

let currentUser;
let joinedLocationId = null;
let firstLoad = true;

// Initialize page
document.addEventListener("DOMContentLoaded", async () => {
  // 1️⃣ Load recipes (doesn’t need currentUser)
  await loadRecipes();

  // 2️⃣ Load user
  await initUser();  // sets currentUser

  // 3️⃣ Load locations, forum, chat, etc.
  await loadLocations();

  // Forum blocks (needs currentUser)
  await loadForumBlocks();

  // Chat list (needs currentUser)
  await loadChatList();

  // Chat list (needs currentUser)
  await loadFriendsTab();

  const tabs = {
  home: document.getElementById("home")
};
  // ===== Load last open tab if available =====
  const lastTab = localStorage.getItem("lastOpenTab");
  if (lastTab && tabs[lastTab]) {
    openTab(lastTab);
  } else {
    openTab("home"); // default tab
  }

// Elements
const openUploadBtn = document.getElementById("openUploadBtn");
const modal = document.getElementById("upload-recipe");
const closeBtn = modal.querySelector(".close-btn");
const recipeForm = document.getElementById("recipeForm");
const feedback = document.getElementById("uploadFeedback");

// Open modal
openUploadBtn.addEventListener("click", () => {
  modal.classList.remove("hidden-modal");
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden-modal");
});

// Close modal on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden-modal");
});

const imageInput = document.getElementById("recipeImage");
const imagePreview = document.getElementById("imagePreview");

imageInput.addEventListener("change", async () => {
  const file = imageInput.files[0];
  if (!file) {
    imagePreview.style.display = "none";
    imagePreview.innerHTML = '<span style="color:#999;">No image selected</span>';
    return;
  }

  try {
    const resizedFile = await resizeImageToSquare(file, 500); // single size
    const url = URL.createObjectURL(resizedFile);

    // show preview
    previewImg.src = url;
    imagePreview.style.display = "flex";

    // store file for submission
    imageInput.resizedFile = resizedFile;
  } catch (err) {
    console.error(err);
    imagePreview.style.display = "none";
    imagePreview.innerHTML = '<span style="color:red;">Failed to preview image</span>';
  }
});


// Upload recipe logic
recipeForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  feedback.textContent = "";

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return feedback.textContent = "You must be logged in to upload a recipe.";

  let imageFile = imageInput.resizedFile; // use the resized & cropped image
if (imageFile) {
  imageFile = await resizeImageToSquare(imageFile, 500); // resize & crop
}
  const title = document.getElementById("recipeTitle").value.trim();
  const ingredients = document.getElementById("recipeIngredients").value.trim();
  const instructions = document.getElementById("recipeInstructions").value.trim();

  if (!imageFile || !title || !ingredients || !instructions) {
    return feedback.textContent = "Please fill in all fields and select an image.";
  }

  try {
    // Upload image to bucket
    const fileExt = imageFile.name.split('.').pop() || 'jpg';
    const fileName = `${user.id}/${Date.now()}.${fileExt}`;

    // if imageFile is a Blob without name, wrap it into a File
if (!(imageFile instanceof File)) {
  imageFile = new File([imageFile], fileName, { type: imageFile.type });
}

    const { error: uploadError } = await supabase.storage
      .from("recipes")
      .upload(fileName, imageFile, { upsert: true });
    if (uploadError) throw uploadError;

    const imageUrl = supabase.storage
      .from("recipes")
      .getPublicUrl(fileName).data.publicUrl;

    // Insert into recipes table
    const { error: insertError } = await supabase.from("recipes").insert({
      user_id: user.id,
      title,
      ingredients,
      description: instructions,
      image_url: imageUrl
    });
    if (insertError) throw insertError;

    feedback.style.color = "green";
    feedback.textContent = "✅ Recipe uploaded successfully!";
    recipeForm.reset();
    modal.classList.add("hidden");

    // Reload recipes to show the new one
    loadRecipes();

  } catch (err) {
    console.error(err);
    feedback.style.color = "red";
    feedback.textContent = "❌ Failed to upload recipe. Try again.";
  }
});

function autoResizeTextarea(textarea) {
  textarea.style.height = 'auto';          // reset height
  textarea.style.height = textarea.scrollHeight + 'px'; // set height to fit content
}

const textareas = document.querySelectorAll('textarea');

textareas.forEach(textarea => {
  textarea.addEventListener('input', () => autoResizeTextarea(textarea));
  
  // initialize height in case there's pre-filled text
  autoResizeTextarea(textarea);
});

});

async function resizeImageToSquare(file, size = 500) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = e => {
      img.src = e.target.result;
    };

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      // Determine square crop
      const minSide = Math.min(img.width, img.height);
      const sx = (img.width - minSide) / 2;
      const sy = (img.height - minSide) / 2;

      // Draw cropped square into canvas
      ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);

      // Convert canvas to blob
      canvas.toBlob(blob => {
        if (blob) resolve(new File([blob], file.name, { type: file.type }));
        else reject(new Error("Canvas conversion failed"));
      }, file.type, 0.9); // 0.9 quality
    };

    reader.onerror = err => reject(err);

    reader.readAsDataURL(file);
  });
}

// Community -->
   // Community -->
    // Community -->
     // Community -->
      // Community -->

// ===== Load countries and cities =====
async function loadLocations() {
  const { data, error } = await supabase
    .from("locations")
    .select("*")
    .order("country");

  if (error) return console.error(error);

  const countries = [...new Set(data.map(l => l.country))];
  const countrySelect = document.getElementById("countrySelect");
  const citySelect = document.getElementById("citySelect");

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

  citySelect.addEventListener("change", (e) => {
    document.getElementById("joinCommunityBtn").disabled = !e.target.value;
  });
}

// ===== Load user community if exists =====
async function loadUserCommunity(currentUser) {
  const { data: participant, error: participantError } = await supabase
    .from("community_participants")
    .select("id, location_id")
    .eq("user_id", currentUser.id)
    .maybeSingle();

  if (participantError) {
    console.error(participantError);
    return;
  }

  if (participant) {
    const { data: location, error: locationError } = await supabase
      .from("locations")
      .select("country, city")
      .eq("id", participant.location_id)
      .single();

    if (locationError) {
      console.error(locationError);
      return;
    }

    const locationName = `${location.city}, ${location.country}`;
    document.getElementById("joinedCommunityText").textContent = `You are in the community: ${locationName}`;
    document.getElementById("leaveCommunityBtn").style.display = "inline-block";
    document.getElementById("joinCommunityBtn").style.display = "none";

    // Show dashboard
    showCommunityDashboard(participant.location_id, locationName);
  }
}

// ===== Load Community Messages =====
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

  const last = container.lastElementChild;
  if (firstLoad || wasAtBottom) {
    if (last) last.scrollIntoView({ block: "end", behavior: "auto" });
    firstLoad = false;
  }
}


// ===== Send Community Message =====
async function sendCommunityMessage() {
  const text = document.getElementById("communityMessageInput").value.trim();
  if (!text || !joinedLocationId) return alert("You are not in a community.");

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("name")
    .eq("id", currentUser.id)
    .maybeSingle();

  if (profileError) return console.error(profileError);

  const { error } = await supabase.from("community_messages").insert([{
    user_id: currentUser.id,
    username: profile?.name || "Unknown",
    location_id: joinedLocationId,
    content: text
  }]);

  if (error) return console.error(error);

  document.getElementById("communityMessageInput").value = "";
  await loadCommunityMessages(joinedLocationId);
}

document.getElementById("sendCommunityMessageBtn").addEventListener("click", sendCommunityMessage);

let messageChannel = null;

function setupRealtimeMessages(locationId) {
  if (messageChannel) {
    supabase.removeChannel(messageChannel);
  }

  messageChannel = supabase
    .channel(`community_messages_${locationId}`)
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'community_messages', filter: `location_id=eq.${locationId}` },
      payload => {
        const container = document.getElementById("communityMessages");
        const msg = payload.new;

        // Append only the new message
        const div = document.createElement("div");
        div.classList.add("chat-message");
        div.textContent = `${msg.username}: ${msg.content}`;
        div.classList.add(msg.user_id === currentUser?.id ? "my-message" : "their-message");
        container.appendChild(div);

        // Scroll if visible
        if (container.offsetParent !== null) { // checks if visible
          div.scrollIntoView({ block: "end", behavior: "auto" });
        }
      }
    )
    .subscribe();
}

// ===== Show Community Dashboard =====
async function showCommunityDashboard(locationId, locationName) {
  joinedLocationId = locationId;
  firstLoad = true;

  document.getElementById("joinCommunityCard").style.display = "none";
  document.getElementById("joinedCommunityText").textContent = `You are in the community: ${locationName}`;
  document.getElementById("communityDashboard").style.display = "block";
  document.getElementById("communityTitle").textContent = `${locationName} Community`;

  // Start chat & events hidden
  document.getElementById("communityChatSection").style.display = "none";
  document.getElementById("communityEventsSection").style.display = "none";

  await loadCommunityMessages(locationId);
  await loadCommunityEvents(locationId);

  setupRealtimeMessages(locationId);

await showCommunityMembers(locationId);
}
  
async function showCommunityMembers(locationId) {
  const membersList = document.getElementById("communityMembersList");
  membersList.innerHTML = "";

  // 1️⃣ Fetch current user's friends first
  const { data: friendsData, error: friendsError } = await supabase
    .from("friends")
    .select("*")
    .or(`user1_id.eq.${currentUser.id},user2_id.eq.${currentUser.id}`);

  if (friendsError) return console.error(friendsError);

  // Make sure it's an array
  const friends = Array.isArray(friendsData) ? friendsData : [];

  // 2️⃣ Fetch pending requests sent by current user
  const { data: sentRequests, error: sentError } = await supabase
    .from("friend_requests")
    .select("receiver_email")
    .eq("sender_id", currentUser.id)
    .eq("status", "pending");

  if (sentError) return console.error(sentError);

  // 3️⃣ Fetch all community members
  const { data: members, error } = await supabase
    .from("community_participants")
    .select("user_id, name, profile_photo, email")
    .eq("location_id", locationId);

  if (error) return console.error(error);

  // 4️⃣ Helper function
  function isFriend(memberId, currentUserId, friends) {
    return friends.some(
      f =>
        (f.user1_id === currentUserId && f.user2_id === memberId) ||
        (f.user2_id === currentUserId && f.user1_id === memberId)
    );
  }

  // 5️⃣ Loop through members
  members.forEach(member => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = member.profile_photo || "default.jpg";
    img.alt = member.name;

    const nameSpan = document.createElement("span");
    nameSpan.textContent = member.name;

    li.appendChild(img);
    li.appendChild(nameSpan);

    if (member.user_id !== currentUser.id && !isFriend(member.user_id, currentUser.id, friends)) {
      const btn = document.createElement("button");
      btn.textContent = "Send Request";

      const alreadySent = sentRequests.some(r => r.receiver_email === member.email);
      if (alreadySent) {
        btn.textContent = "Request Sent";
        btn.disabled = true;
      }

      btn.onclick = async () => {
        const result = await sendRequest(member.email);
        if (result.success) {
          btn.textContent = "Request Sent ✅";
          btn.disabled = true;
          await showIncomingFriendRequests();
        } else {
          alert(result.message);
        }
      };

      li.appendChild(btn);
    }

    membersList.appendChild(li);
  });
}


// ===== Join Community =====
document.getElementById("joinCommunityBtn").addEventListener("click", async () => {
  const locationId = document.getElementById("citySelect").value;
  if (!locationId || !currentUser) return;

  // Check if user is already in a community
  const { data: existing, error } = await supabase
    .from("community_participants")
    .select("*")
    .eq("user_id", currentUser.id)
    .maybeSingle();

  if (error) return console.error(error);

  if (existing) {
    alert("You are already a member of a community!");
    return showCommunityDashboard(existing.location_id, `${existing.city}, ${existing.country}`);
  }

  const locationName = document.getElementById("citySelect").selectedOptions[0].text + ", " +
                       document.getElementById("countrySelect").value;

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("name, profile_photo, email")
    .eq("id", currentUser.id)
    .single();

  if (profileError) return console.error(profileError);

  await supabase.from("community_participants").upsert([{
    user_id: currentUser.id,
    location_id: locationId,
    name: profile.name,
    profile_photo: profile.profile_photo,
    email: profile.email
  }]);

  showCommunityDashboard(locationId, locationName);
});


// ===== Leave Community =====
document.getElementById("leaveCommunityDashboardBtn").addEventListener("click", async () => {
  const { error } = await supabase
    .from("community_participants")
    .delete()
    .eq("user_id", currentUser.id);

  if (error) return console.error(error);

  document.getElementById("communityDashboard").style.display = "none";
  document.getElementById("joinCommunityCard").style.display = "block";
  document.getElementById("joinedCommunityText").textContent = "";
  document.getElementById("leaveCommunityBtn").style.display = "none";
  document.getElementById("joinCommunityBtn").style.display = "inline-block";
});

function scrollCommunityChatToBottom() {
  const container = document.getElementById("communityMessages");
  if (container && container.children.length > 0) {
    container.lastElementChild.scrollIntoView({ block: "end", behavior: "auto" });
  }
}

// Toggle sections with scroll fix
document.querySelectorAll('.community-section-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
      // scroll only when chat becomes visible
      if (content.id === 'communityChatSection') scrollCommunityChatToBottom();
    }
  });
});

// ===== Load Community Events =====
async function loadCommunityEvents(locationId) {
  const { data, error } = await supabase
    .from("community_events")
    .select("id, place, description, event_date, user_id, username")
    .eq("location_id", locationId)
    .order("event_date", { ascending: true });

  if (error) return console.error(error);

  const ul = document.getElementById("communityEventsList");
  ul.innerHTML = "";

  const now = new Date();

  for (const event of data) {
    const eventDate = new Date(event.event_date);

    // Automatically delete past events
    if (eventDate < now) {
      await supabase.from("community_events").delete().eq("id", event.id);
      continue;
    }

    const li = document.createElement("li");
    li.textContent = `${eventDate.toLocaleString()} — ${event.place} — ${event.description} (by ${event.username})`;

    if (event.user_id === currentUser.id) {
      const delBtn = document.createElement("button");
      delBtn.textContent = "x";
      delBtn.className = "eventdelete-btn";
      delBtn.onclick = async () => {
        await supabase.from("community_events").delete().eq("id", event.id);
        await loadCommunityEvents(locationId);
      };
      li.appendChild(delBtn);
    }

    ul.appendChild(li);
  }
}

// ===== Create Event =====
const createEventBtn = document.getElementById("createEventBtn");
const submitEventBtn = document.getElementById("submitEventBtn");
const createEventInputs = document.getElementById("createEventInputs");
const eventPlaceInput = document.getElementById("eventPlaceInput");
const eventTimeInput = document.getElementById("eventTimeInput");
const descriptionInput = document.getElementById("eventDescriptionInput");

createEventBtn.addEventListener("click", () => {
  createEventInputs.style.display = createEventInputs.style.display === "none" ? "flex" : "none";
  createEventInputs.style.flexDirection = "column";
});

submitEventBtn.addEventListener("click", async () => {
  const place = eventPlaceInput.value.trim();
  const description = descriptionInput.value.trim();
  const eventDate = eventTimeInput.value;

  if (!place || !eventDate || !joinedLocationId) {
    return alert("Please enter place, date, and ensure you are in a community.");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("name")
    .eq("id", currentUser.id)
    .maybeSingle();

  const { error } = await supabase.from("community_events").insert([{
    location_id: joinedLocationId,
    place: place,
    description: description,
    event_date: eventDate,
    user_id: currentUser.id,
    username: profile.name
  }]);

  if (error) return console.error(error);

  eventPlaceInput.value = "";
  descriptionInput.value = "";
  eventTimeInput.value = "";
  createEventInputs.style.display = "none";

  await loadCommunityEvents(joinedLocationId);
});

loadLocations();

// ----- Anonymous Forum -----
// ----- Anonymous Forum -----
// ----- Anonymous Forum -----
// ----- Anonymous Forum -----
// ----- Anonymous Forum -----

document.querySelectorAll(".AFsection h2").forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
  

const forumMessages = document.getElementById('forumMessages');
const submitBlockBtn = document.getElementById('submitBlockBtn');
const blockContent = document.getElementById('blockContent');

const commentPopup = document.getElementById('AFcommentPopup');
const closePopup = document.getElementById('AFclosePopup');

closePopup.addEventListener('click', () => {
  commentPopup.classList.add('hidden');
});

const popupBlockContent = document.getElementById('AFpopupBlockContent');
const popupCommentsList = document.getElementById('AFpopupCommentsList');
const newCommentInput = document.getElementById('AFnewCommentInput');
const submitCommentBtn = document.getElementById('AFsubmitCommentBtn');

let activeBlockId;



// Get logged in user before anything else
async function initUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error("Auth error:", error);
    return;
  }
  currentUser = data.user;
  // Now safe to load community info
  await loadUserCommunity(currentUser);
}

// Load forum blocks
async function loadForumBlocks() {  
  forumMessages.innerHTML = '';
  const { data: blocks, error } = await supabase
    .from('forum_blocks')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return console.error(error);

  blocks.forEach(block => { 
    const li = document.createElement('li');
    li.className = 'forum-block'; // important for CSS

    // Block text span
    const textSpan = document.createElement('span');
    textSpan.className = 'block-text';
    textSpan.textContent = block.content;

    li.appendChild(textSpan);

    // Make block clickable to open popup
    li.addEventListener('click', () => AFopenCommentPopup(block));

    // Show delete button only for the poster
    if (block.user_id === currentUser.id) {
      const delBtn = document.createElement('deletebutton');
      delBtn.textContent = '❌';
      delBtn.className = 'block-delete-btn';
      delBtn.addEventListener('click', async (e) => {
        e.stopPropagation(); // prevent opening popup
        await supabase.from('forum_blocks').delete().eq('id', block.id);
        loadForumBlocks();
      });
      li.appendChild(delBtn);
    }

    forumMessages.appendChild(li);
  });
}

// Submit new block
submitBlockBtn.addEventListener('click', async () => {
  const content = blockContent.value.trim();
  if (!content) return;

  await supabase.from('forum_blocks').insert([{ user_id: currentUser.id, content }]);
  blockContent.value = '';
  loadForumBlocks();
});

// Open popup for comments
async function AFopenCommentPopup(block) {
  activeBlockId = block.id;
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

  // Show "Asker" if commenter is the original poster
  const isAsker = c.commenter_id === block.user_id;
  const displayName = isAsker ? "Asker" : c.commenter_name;

  // Create text span
  const textSpan = document.createElement('span');
  textSpan.innerHTML = `<strong>${displayName}:</strong> ${c.content}`;

  li.appendChild(textSpan);

  // Show delete button if this comment belongs to current user
  if (c.commenter_id === currentUser.id) {
    const delBtn = document.createElement('delbutton');
    delBtn.textContent = '❌';
    delBtn.className = 'block-delete-btn';
    delBtn.addEventListener('click', async () => {
      await supabase.from('forum_comments').delete().eq('id', c.id);
      AFopenCommentPopup(block); // refresh comments
    });
    li.appendChild(delBtn); // now button is in the same flex row
  }

  popupCommentsList.appendChild(li);
});


  commentPopup.classList.remove('hidden');
}

// Submit new comment
submitCommentBtn.addEventListener('click', async () => {
  const content = newCommentInput.value.trim();
  if (!content || !activeBlockId) return;

  // Get current user's profile name
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('id, name') // adjust to your column name
    .eq('id', currentUser.id)
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return;
  }

  const commenterName = profile?.name || "Anonymous";

  // Insert comment with commenter_id
  await supabase.from('forum_comments').insert([{
    block_id: activeBlockId,
    commenter_id: currentUser.id,    // <--- NEW: save user ID
    commenter_name: commenterName,
    content
  }]);

  newCommentInput.value = '';

  // Refresh comments in popup
const { data: fullBlock, error: blockError } = await supabase
  .from('forum_blocks')
  .select('*')
  .eq('id', activeBlockId)
  .single();

if (blockError) return console.error(blockError);

AFopenCommentPopup(fullBlock);
});

async function loadChatList() {
  const list = document.getElementById("chatListItems");
  if (!list) return;
  list.innerHTML = "";

  // Fetch chats where currentUser is either user1 or user2
  const { data: chats, error } = await supabase
    .from('chats')
    .select('*')
    .or(`user1_id.eq.${currentUser.id},user2_id.eq.${currentUser.id}`)
    .order('last_message_at', { ascending: false });

  if (error) {
    console.error("Error fetching chats:", error);
    return;
  }

  if (!chats || chats.length === 0) return; // nothing to show yet

  chats.forEach(chat => {
  if (!chat || !chat.id) return; // <-- skip invalid rows

    // Decide who the friend is
    const friend = chat.user1_id === currentUser.id
    ? { id: chat.user2_id || "unknown", name: chat.user2_name || "Unknown", photo: chat.user2_profile_photo || "default.jpg" }
    : { id: chat.user1_id || "unknown", name: chat.user1_name || "Unknown", photo: chat.user1_profile_photo || "default.jpg" };

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

// ===== Friends =====
// ===== Friends =====
// ===== Friends =====
// ===== Friends =====

// ============================================
// FRIENDS & CHATS MODULE
// ============================================

// Global state
let messageSubscription = null;

// ----------------------
// Unified Send Friend Request
// ----------------------
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

// ----------------------
// Friend Request Popup Button
// ----------------------
document.getElementById("sendFriendRequestBtn")?.addEventListener("click", async () => {
  const email = document.getElementById("friendEmailInput")?.value;
  const result = await sendRequest(email);

  if (!result.success) {
    alert(result.message);
  } else {
    alert("Friend request sent!");
    document.getElementById("friendEmailInput").value = "";
    searchPopup.style.display = "none";
    await showFriends("friendsList", friend => startChatWithFriend(friend));
    if (joinedLocationId) await showCommunityMembers(joinedLocationId);
  }
});

// ----------------------
// Show Incoming Friend Requests
// ----------------------
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

// ----------------------
// Show Friends List
// ----------------------
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

// ----------------------
// Load Friends Tab
// ----------------------
async function loadFriendsTab() {
  await showIncomingFriendRequests();
  await showFriends("friendsList", friend => startChatWithFriend(friend));
}

// ----------------------
// Start Chat with Friend
// ----------------------
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

function openChatWindow(chatId, friend) {
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

// ----------------------
// Send Message
// ----------------------
document.getElementById("sendMessageBtn")?.addEventListener("click", async () => {
  const messageInput = document.getElementById("messageInput");
  const text = messageInput.value.trim();
  if (!text) return;

  const friend = window.currentChatFriend;
  if (!friend) return;

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select("name, profile_photo")
    .eq("id", currentUser.id)
    .maybeSingle();
  if (profileError) return console.error(profileError);

  let chatId = window.currentChatId;

  if (!chatId) {
    const { data: newChat, error: createError } = await supabase
      .from('chats')
      .insert([{
        user1_id: currentUser.id,
        user1_name: profile?.name,
        user1_profile_photo: profile?.profile_photo,
        user2_id: friend.id,
        user2_name: friend.name,
        user2_profile_photo: friend.photo,
        last_message: text,
        last_message_at: new Date().toISOString()
      }])
      .select()
      .single();
    if (createError) return console.error(createError);
    chatId = newChat.id;
    window.currentChatId = chatId;
  } else {
    await supabase.from('chats').update({
      last_message: text,
      last_message_at: new Date().toISOString()
    }).eq('id', chatId);
  }

  const { error: messageError } = await supabase.from('messages').insert([{
    chat_id: chatId,
    sender_id: currentUser.id,
    content: text
  }]);
  if (messageError) return console.error(messageError);

  messageInput.value = '';
  loadMessages(chatId, friend);
});

// ----------------------
// Load Messages & Subscribe
// ----------------------
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

// --------- MENTORSHIP ------------
// --------- MENTORSHIP ------------
// --------- MENTORSHIP ------------
// --------- MENTORSHIP ------------

