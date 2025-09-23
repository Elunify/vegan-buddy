uploadBtn.addEventListener("click", () => {
  if (!uploadBtn.classList.contains("locked")) {
    window.location.href = "mealupload.html";
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  const today = new Date().getDay(); // Sunday=0, Monday=1
  const tabs = document.querySelectorAll(".main-tab");
  const tabContents = document.querySelectorAll(".main-tab-content");

  if (tabs.length === 0 || tabContents.length === 0) return; // safety check

  // ===== Tab Switching =====
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      tabContents.forEach(content => {
        if (content) content.style.display = "none";
      });

      const tabId = tab.getAttribute("data-tab");
      const selectedContent = document.getElementById(tabId);
      if (selectedContent) {
        selectedContent.style.display = "block";
      }

      if (tabId === "current-participants") {
        updateUploadVisibility();
      }
    });
  });

  // Show default tab
  const defaultTab = tabs[0];
  if (defaultTab) defaultTab.click();

  // ===== DOM containers =====
  const homeChefGallery = document.getElementById("home-chef-gallery");
  const proKitchenGallery = document.getElementById("pro-kitchen-gallery");
  const homeChefWinners = document.getElementById("home-chef-winners");
  const proKitchenWinners = document.getElementById("pro-kitchen-winners");
  const votenote = document.getElementById("votenote");
  const uploadBtn = document.getElementById("uploadBtn");

  // ===== Fetch current user =====
  let currentUser = null;
  try {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) return;
    currentUser = user;

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("is_pro, current_level")
      .eq("id", user.id)
      .single();
    if (profileError || !profile) return;

    

    // ===== Monday Voting Logic =====
    if (today === 1) { // Monday
      if (votenote) votenote.style.display = "block";
      if (uploadBtn) uploadBtn.style.display = "none";
      if (uploadnote) uploadnote.style.display = "none";
      if (generalnote) generalnote.style.display = "none";
    } else { // Other days → Upload
      if (uploadBtn) uploadBtn.style.display = "inline-block";
      if (profile.is_pro) {
        if (uploadnote) uploadnote.style.display = "none";
      } else {
        if (uploadnote) uploadnote.style.display = "inline-block";
      }

      // Unlock button if eligible
      if (profile.is_pro || profile.current_level >= 10) {
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

  // ===== Fetch meals from Supabase =====
  const { data: meals, error } = await supabase
    .from("meals")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching meals:", error);
    return;
  }

  // Clear galleries
  homeChefGallery.innerHTML = "";
  proKitchenGallery.innerHTML = "";
  homeChefWinners.innerHTML = "";
  proKitchenWinners.innerHTML = "";

  // ===== Render meals =====
  meals.forEach(meal => {
    const mealDiv = document.createElement("div");
    mealDiv.className = "meal-item";
    mealDiv.dataset.id = meal.id; // needed for voting

    // Image
    const img = document.createElement("img");
    img.src = meal.image_url;
    img.alt = `${meal.uploader_name}'s meal`;

    // Uploader name
    const nameP = document.createElement("p");
    nameP.textContent = meal.uploader_name;

    // Recipe label
    const recipeSpan = document.createElement("span");
    recipeSpan.className = "recipe-label";
    recipeSpan.textContent = meal.recipe_available ? "Recipe available" : "No recipe";
    if (meal.recipe_available) {
      recipeSpan.classList.add("recipe-available");
      recipeSpan.addEventListener("click", () => showRecipeModal(meal));
    }

    // Append elements
    mealDiv.appendChild(img);
    mealDiv.appendChild(nameP);
    mealDiv.appendChild(recipeSpan);

    // Delete button for user's own non-winner meal
    if (meal.user_id === currentUser.id && !meal.is_winner && today !== 1) {
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-meal-btn";
      deleteBtn.addEventListener("click", async () => {
        if (confirm("Are you sure you want to delete this meal?")) {
          const { error } = await supabase
            .from("meals")
            .delete()
            .eq("id", meal.id);
          if (error) alert("Error deleting meal: " + error.message);
          else mealDiv.remove();
        }
      });
      mealDiv.appendChild(deleteBtn);
    }

    // Insert into correct container
    if (meal.is_winner) {
      (meal.is_pro ? proKitchenWinners : homeChefWinners).appendChild(mealDiv);
    } else {
      (meal.is_pro ? proKitchenGallery : homeChefGallery).appendChild(mealDiv);
    }
  });

  // ===== Monday Voting: Add radio & submit =====
if (new Date().getDay() === 1) { // Monday
  const addVoting = async (gallery, isPro) => {
    if (!gallery) return;

    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1);
    const weekStartStr = weekStart.toISOString().split('T')[0];

    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) return;

    // Fetch existing votes for this user & category
    const { data: existingVote } = await supabase
      .from('votes')
      .select('*')
      .eq('user_id', user.id)
      .eq('category', isPro)
      .eq('week_start_date', weekStartStr)
      .maybeSingle();

    const meals = gallery.querySelectorAll(".meal-item");
    for (const meal of meals) {
      // Add radio button
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `${isPro}-vote`;
      radio.value = meal.dataset.id;
      radio.style.marginRight = "5px";
      if (existingVote) radio.disabled = true;
      meal.prepend(radio);

      // Fetch current votes for this meal
      const { data: mealData, error: mealError } = await supabase
        .from('meals')
        .select('votes')
        .eq('id', meal.dataset.id)
        .single();

      const votesCount = mealError ? 0 : mealData.votes || 0;

      // Display votes
      const votesSpan = document.createElement("span");
      votesSpan.textContent = `Votes: ${votesCount}`;
      votesSpan.style.marginLeft = "10px";
      meal.appendChild(votesSpan);
    }

    // Submit button
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit Vote";
    submitBtn.style.marginTop = "10px";
    if (existingVote) submitBtn.disabled = true;

    submitBtn.addEventListener("click", async () => {
      const selected = gallery.querySelector(`input[name='${isPro}-vote']:checked`);
      if (!selected) {
        alert("Please select a meal to vote!");
        return;
      }

      const mealId = selected.value;

      // Insert vote row
      const { data: voteData, error: voteError } = await supabase
        .from('votes')
        .insert([{
          user_id: user.id,
          meal_id: mealId,
          category: isPro,
          week_start_date: weekStartStr
        }]);

      if (voteError) {
        alert("Error submitting vote: " + voteError.message);
        return;
      }

      // Increment votes
      const { data: mealData, error: mealError } = await supabase
        .from('meals')
        .select('votes')
        .eq('id', mealId)
        .single();

      if (!mealError) {
        const currentVotes = mealData.votes || 0;
        await supabase
          .from('meals')
          .update({ votes: currentVotes + 1 })
          .eq('id', mealId);
      }

      // Update votes display
      const votesSpan = selected.parentElement.querySelector("span");
      if (votesSpan) votesSpan.textContent = `Votes: ${currentVotes + 1}`;

      // Disable voting UI
      gallery.querySelectorAll("input").forEach(r => r.disabled = true);
      submitBtn.disabled = true;

      alert("Vote submitted! Thank you.");
    });

    gallery.parentElement.appendChild(submitBtn);
  };

  addVoting(homeChefGallery, false);
  addVoting(proKitchenGallery, true);
}



  // ===== Recipe Modal =====
  function showRecipeModal(meal) {
    document.getElementById("modalFoodName").textContent = meal.food_name || "No title";
    document.getElementById("modalIngredients").textContent = meal.ingredients || "No ingredients provided";
    document.getElementById("modalInstructions").textContent = meal.instructions || "No instructions provided";
    document.getElementById("recipeModal").style.display = "flex";
  }

  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("recipeModal").style.display = "none";
  });
  window.addEventListener("click", e => {
    if (e.target.id === "recipeModal") document.getElementById("recipeModal").style.display = "none";
  });

  // ===== Back button =====
  const backBtn = document.getElementById("backBtn");
  if (backBtn) backBtn.addEventListener("click", () => window.location.href = "community.html");

});





