// ---------- MEAL ART CONTEST JS ----------
import { supabase } from "./supabaseClient.js";

document.addEventListener("DOMContentLoaded", async () => {
    const modal = document.getElementById("mealArtrecipeModal");
  if (modal) {
    modal.classList.add("hidden-meal");
    modal.style.display = "none"; // force hide
  }
  const today = new Date().getDay(); // Sunday=0, Monday=1

  // --- TABS ---
  const tabs = document.querySelectorAll(".main-tab");
  const tabContents = document.querySelectorAll(".main-tab-content");
  if (tabs.length > 0 && tabContents.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        tabContents.forEach(c => c.style.display = "none");
        const content = document.getElementById(tab.dataset.tab);
        if (content) content.style.display = "block";
      });
    });
    tabs[0]?.click(); // show default tab
  }

  // --- DOM ELEMENTS ---
  const homeChefGallery = document.getElementById("home-chef-gallery");
  const proKitchenGallery = document.getElementById("pro-kitchen-gallery");
  const homeChefWinners = document.getElementById("home-chef-winners");
  const proKitchenWinners = document.getElementById("pro-kitchen-winners");
  const votenote = document.getElementById("votenote");
  const uploadBtn = document.getElementById("uploadBtn");
  const uploadnote = document.getElementById("uploadnote");
  const generalnote = document.getElementById("generalnote");

  // --- FETCH CURRENT USER & PROFILE ---
  let currentUser = null;
  let profile = null;
  try {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) throw new Error("User not logged in");
    currentUser = user;

    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("is_pro, current_level, name")
      .eq("id", user.id)
      .single();
    if (profileError || !profileData) throw new Error("Profile not found");
    profile = profileData;

    // --- MONDAY LOGIC ---
    if (today === 1) {
      if (votenote) votenote.style.display = "block";
      if (uploadBtn) uploadBtn.style.display = "none";
      if (uploadnote) uploadnote.style.display = "none";
      if (generalnote) generalnote.style.display = "none";
    } else {
      uploadBtn.style.display = "inline-block";
      uploadnote.style.display = profile.is_pro ? "none" : "inline-block";
      if (profile.is_pro || profile.current_level >= 1 //-------------------- Lock section here until a level if it's necessary once!
      ) {
        uploadBtn.classList.remove("locked");
        uploadBtn.removeAttribute("data-unlock");
        uploadBtn.style.pointerEvents = "auto";
        uploadBtn.style.opacity = "1";
      }
    }
  } catch (err) {
    console.error(err);
    return;
  }
  // After fetching currentUser and profile
try {
  // Check if the user already uploaded a meal this week
  const { data: existingMeals, error: existingError } = await supabase
    .from("meals")
    .select("*")
    .eq("user_id", currentUser.id)
    .eq("is_winner", false); // only current contest entries

  if (existingError) throw existingError;

  if (existingMeals && existingMeals.length > 0) {
    // User already uploaded a meal: hide upload button, show already-uploaded message
    uploadBtn.style.display = "none";
    document.getElementById("alreadyUploadedMsg").style.display = "block";
    uploadnote.style.display = "none";
  } else {
    // User can upload
    uploadBtn.style.display = "inline-block";
    uploadnote.style.display = profile.is_pro ? "none" : "inline-block";

    if (profile.is_pro || (profile.current_level || 0) >= 10) {
      uploadBtn.classList.remove("locked");
      uploadBtn.removeAttribute("data-unlock");
      uploadBtn.style.pointerEvents = "auto";
      uploadBtn.style.opacity = "1";
    }
  }
} catch (err) {
  console.error("Error checking existing meals:", err);
}
  // --- FETCH MEALS ---
  let meals = [];
  try {
    const { data, error } = await supabase
      .from("meals")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    meals = data;
  } catch (err) {
    console.error("Error fetching meals:", err);
    return;
  }

  // --- CLEAR GALLERIES ---
  [homeChefGallery, proKitchenGallery, homeChefWinners, proKitchenWinners].forEach(el => el.innerHTML = "");

  // --- NEW SAFE MEAL RENDERING ---
  const displayMealItem = (meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.className = "meal-item";
    mealDiv.dataset.id = meal.id;

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
      // Remove the meal div from the gallery
      mealDiv.remove();

      // Show the upload button again
      const uploadBtn = document.getElementById("uploadBtn");
      if (uploadBtn) uploadBtn.style.display = "block";

      // Hide the "already uploaded" message
      const alreadyUploadedMsg = document.getElementById("alreadyUploadedMsg");
      if (alreadyUploadedMsg) alreadyUploadedMsg.style.display = "none";
    }
  });
  mealDiv.appendChild(delBtn);
}
    
img.src = meal.image_url;
img.alt = `${meal.uploader_name}'s meal`;

// directly attach popup handler here
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
  };

  const renderMeals = (meals) => {
    meals.forEach(displayMealItem);
  };

  renderMeals(meals);

  // --- VOTING ON MONDAY ---
  if (today === 1) {
    const addVoting = async (gallery, isPro) => {
      if (!gallery) return;
      const weekStart = new Date();
      weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1);
      const weekStr = weekStart.toISOString().split("T")[0];

      const { data: { user } } = await supabase.auth.getUser();
      const { data: existingVote } = await supabase
        .from("votes")
        .select("*")
        .eq("user_id", user.id)
        .eq("category", isPro)
        .eq("week_start_date", weekStr)
        .maybeSingle();

setTimeout(async () => {
  console.log("Finalizing weekly contest...");
  await finalizeWeekContest();
}, getMillisUntilEndOfDay());

      for (const meal of gallery.querySelectorAll(".meal-item")) {
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = `${isPro}-vote`;
  radio.value = meal.dataset.id;
  radio.style.marginRight = "5px";
  if (existingVote) radio.disabled = true;

  // Fetch current votes for this meal
  const { data: mealData } = await supabase
    .from("meals")
    .select("votes")
    .eq("id", meal.dataset.id)
    .single();
  const votesCount = mealData?.votes || 0;

  // Create or find the votes span
  let votesSpan = meal.querySelector(".votes-span");
  if (!votesSpan) {
    votesSpan = document.createElement("span");
    votesSpan.classList.add("votes-span");
    votesSpan.style.marginLeft = "10px";
    meal.appendChild(votesSpan);
  }
  votesSpan.textContent = `Votes: ${votesCount}`;

  // Add the radio button
  meal.prepend(radio);
}

      const submitBtn = document.createElement("button");
      submitBtn.textContent = "Submit Vote";
      submitBtn.classList.add("button");
      submitBtn.style.marginTop = "10px";
      submitBtn.disabled = !!existingVote;
      submitBtn.addEventListener("click", async () => {
        const selected = gallery.querySelector(`input[name='${isPro}-vote']:checked`);
  if (!selected) return alert("Please select a meal to vote!");
  
  const mealId = selected.value;

  // Insert the vote
  await supabase.from("votes").insert([{
    user_id: currentUser.id,
    meal_id: mealId,
    category: isPro,
    week_start_date: weekStr
  }]);

  // Find the votes span next to the selected meal
  const votesSpan = selected.parentElement.querySelector(".votes-span");

  // Get current count from the span text
  let currentVotes = parseInt(votesSpan.textContent.replace("Votes: ", "")) || 0;
  
  // Increment locally
  currentVotes += 1;
  votesSpan.textContent = `Votes: ${currentVotes}`;

  // Disable all radios and the submit button
  gallery.querySelectorAll("input").forEach(r => r.disabled = true);
  submitBtn.disabled = true;

  // Update the DB asynchronously (optional)
  await supabase.from("meals").update({ votes: currentVotes }).eq("id", mealId);

  alert("Vote submitted! Thank you.");
});

      gallery.parentElement.appendChild(submitBtn);
    };

    addVoting(homeChefGallery, false);
    addVoting(proKitchenGallery, true);
  }

  // --- RECIPE MODAL ---
  function showRecipeModal(meal) {
    document.getElementById("mealArtmodalFoodName").textContent = meal.food_name || "No title";
    document.getElementById("mealArtmodalIngredients").innerHTML = (meal.ingredients || "No ingredients provided").replace(/\n/g, "<br>");
    document.getElementById("mealArtmodalInstructions").innerHTML = (meal.instructions || "No instructions provided").replace(/\n/g, "<br>");
    document.getElementById("mealArtrecipeModal").style.display = "flex";
  }
  document.getElementById("mealArtcloseModal").addEventListener("click", () => {
    document.getElementById("mealArtrecipeModal").style.display = "none";
  });
  window.addEventListener("click", e => {
    if (e.target.id === "mealArtrecipeModal") document.getElementById("mealArtrecipeModal").style.display = "none";
  });

  // --- UPLOAD BUTTON ---
  uploadBtn.addEventListener("click", () => {
  if (!uploadBtn.classList.contains("locked")) {
    // hide just the contest section
    document.getElementById("mealArtContestSmall").classList.add("hidden-meal");

    // show the upload form
    document.getElementById("MealArtUploadContent").classList.remove("hidden-meal");
  }
});

  // --- PHOTO PREVIEW ---
  const mealPhotoInput = document.getElementById("mealPhoto");
  const photoPreview = document.getElementById("mealArtphotoPreview");
  const previewImage = document.getElementById("mealArtpreviewImage");

  mealPhotoInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
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

  // --- FORM SUBMISSION ---
  const form = document.getElementById("mealUploadForm");
  form.addEventListener("submit", async e => {
    e.preventDefault();

    const file = mealPhotoInput.files[0];
    if (!file) return alert("Please select a photo before submitting.");

    const recipeNameInput = document.getElementById("mealArtrecipeName");
    const ingredientsInput = document.getElementById("mealArtrecipeIngredients");
    const instructionsInput = document.getElementById("mealArtrecipeInstructions");

    const foodName = recipeNameInput.value.trim();
    const ingredients = ingredientsInput.value.trim();
    const instructions = instructionsInput.value.trim();
    const recipeAvailable = !!(foodName && ingredients && instructions);

    let isProCategory = profile.is_pro === true;
  //  if (!isProCategory && (profile.current_level || 0) < 10) {
  //    return alert("You need to reach level 10 to participate!");
  //  }

    const fileExt = file.name.split('.').pop();
    const fileName = `${currentUser.id}_${Date.now()}.${fileExt}`;
    const filePath = `${isProCategory ? 'pro' : 'home'}/${fileName}`;

    const { error: uploadError } = await supabase.storage.from("meal-uploads").upload(filePath, file);
    if (uploadError) return alert("Error uploading photo: " + uploadError.message);

    const { data: publicUrlData } = supabase.storage.from("meal-uploads").getPublicUrl(filePath);
    const imageUrl = publicUrlData.publicUrl;

    const weekStartDate = new Date();
    weekStartDate.setDate(weekStartDate.getDate() - weekStartDate.getDay() + 1);

    // After inserting the meal
const { data: newMeals, error: mealError } = await supabase
  .from("meals")
  .insert([{
    user_id: currentUser.id,
    uploader_name: profile.name || "Anonymous",
    is_pro: isProCategory,
    image_url: imageUrl,
    food_name: foodName,
    ingredients,
    instructions,
    recipe_available: recipeAvailable,
    week_start_date: weekStartDate.toISOString().split('T')[0]
  }])
  .select(); // <--- returns the inserted row

if (mealError) return alert("Error saving meal: " + mealError.message);

    alert("Meal uploaded successfully!");
    refreshParticipants(newMeals[0], currentUser, today, homeChefGallery, proKitchenGallery, homeChefWinners, proKitchenWinners);
    uploadBtn.style.display = "none";
    document.getElementById("alreadyUploadedMsg").style.display = "block";
    uploadnote.style.display = "none";
    form.reset();
    previewImage.src = "";
    photoPreview.style.display = "none";
    document.getElementById("MealArtUploadContent").classList.add("hidden-meal");
    document.getElementById("mealArtContestSmall").classList.remove("hidden-meal");

    // Switch to participants tab
    document.querySelector(".main-tab[data-tab='participants']")?.click();
  });

});

// --- REFRESH PARTICIPANTS ---
// --- REFRESH PARTICIPANTS ---
// --- REFRESH PARTICIPANTS ---
async function refreshParticipants(meal , currentUser, today, homeChefGallery, proKitchenGallery, homeChefWinners, proKitchenWinners) {
    const mealDiv = document.createElement("div");
    mealDiv.className = "meal-item";
    mealDiv.dataset.id = meal.id;

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
      // Remove the meal div from the gallery
      mealDiv.remove();

      // Show the upload button again
      const uploadBtn = document.getElementById("uploadBtn");
      if (uploadBtn) uploadBtn.style.display = "block";

      // Hide the "already uploaded" message
      const alreadyUploadedMsg = document.getElementById("alreadyUploadedMsg");
      if (alreadyUploadedMsg) alreadyUploadedMsg.style.display = "none";
    }
  });
  mealDiv.appendChild(delBtn);
}
    
img.src = meal.image_url;
img.alt = `${meal.uploader_name}'s meal`;

// directly attach popup handler here
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
  };

