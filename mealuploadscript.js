document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "community.html";
  });

  // ===== Get Current User =====
async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) console.error(error);
  currentUser = user;
}

const form = document.getElementById("mealUploadForm");
const mealPhotoInput = document.getElementById("mealPhoto");
const recipeNameInput = document.getElementById("recipeName");
const ingredientsInput = document.getElementById("recipeIngredients");
const instructionsInput = document.getElementById("recipeInstructions");

const photoPreview = document.getElementById("photoPreview");
const previewImage = document.getElementById("previewImage");

// Photo preview
mealPhotoInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.src = e.target.result;
      photoPreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    previewImage.src = "";
    photoPreview.style.display = "none";
  }
});

// Form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const file = mealPhotoInput.files[0];
  if (!file) {
    alert("Please select a photo before submitting.");
    return;
  }

  // Fetch current user
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    alert("You must be logged in to submit a meal.");
    return;
  }

  // Fetch profile
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profileError || !profile) {
    alert("Profile not found.");
    return;
  }

  // Determine if meal is in Pro Kitchen (boolean)
let isProCategory = false;

if (profile.is_pro === true) {
  isProCategory = true;
} else if ((profile.current_level || 0) < 10) {
  alert("You need to reach level 10 to participate!");
  return;
}

  // Determine if recipe is provided
  const foodName = recipeNameInput.value.trim();
  const ingredients = ingredientsInput.value.trim();
  const instructions = instructionsInput.value.trim();
  const recipeAvailable = foodName && ingredients && instructions ? true : false;

  // Upload image to Supabase storage
  const fileExt = file.name.split('.').pop();
  const fileName = `${user.id}_${Date.now()}.${fileExt}`;
  const filePath = `${isProCategory ? 'pro' : 'home'}/${fileName}`;

  const { data: uploadData, error: uploadError } = await supabase
    .storage
    .from("meal-uploads")
    .upload(filePath, file);

  if (uploadError) {
    alert("Error uploading photo: " + uploadError.message);
    return;
  }

  // Get public URL
  const { data: publicUrlData } = supabase
    .storage
    .from("meal-uploads")
    .getPublicUrl(filePath);

  const imageUrl = publicUrlData.publicUrl;

  // Insert meal row
  const weekStartDate = new Date();
  weekStartDate.setDate(weekStartDate.getDate() - weekStartDate.getDay() + 1); // Monday of this week

  const { data: mealData, error: mealError } = await supabase
    .from("meals")
    .insert([{
      user_id: user.id,
      uploader_name: profile.name || "Anonymous",
      is_pro: isProCategory,      // <-- boolean column
      image_url: imageUrl,
      food_name: foodName,
      ingredients,
      instructions,
      recipe_available: recipeAvailable,
      week_start_date: weekStartDate.toISOString().split('T')[0]
    }]);

  if (mealError) {
    alert("Error saving meal: " + mealError.message);
    return;
  }

  alert("Meal uploaded successfully!");
  form.reset();
  previewImage.src = "";
  photoPreview.style.display = "none";
});