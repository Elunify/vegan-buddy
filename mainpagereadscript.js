async function loadProfile() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("Not logged in:", userError);
    return;
  }

  // Fetch the user's profile record
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("profile_photo, pet_photo, pet_name")
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

  // Set pet overlay (image or emoji)
const petDisplay = document.getElementById("petDisplay");
const petAvatar = document.getElementById("petAvatar");

// Helper function to render pet into a container
function renderPet(container) {
  if (!container) return; // skip if not on this page
  container.innerHTML = ""; // clear old content

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

// Render into both if they exist
renderPet(petDisplay);
renderPet(petAvatar);
}

// Run when page loads
loadProfile();









