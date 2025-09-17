// --- Initialize Supabase ---
const supabaseUrl = 'https://pqrgvelzxmtdqrofxujx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxcmd2ZWx6eG10ZHFyb2Z4dWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMTc0ODAsImV4cCI6MjA3MTY5MzQ4MH0.s8JZLDdzIS1wBLln0Zs3LK_9BHelUcbRhyAC_0-5sos';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);


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
  const petDiv = document.getElementById("petDisplay");
  if (profile.pet_photo) {
    const petImg = document.createElement("img");
    petImg.src = profile.pet_photo;
    petImg.alt = profile.pet_name || "Pet";
    petImg.classList.add("pet-photo");
    petDiv.appendChild(petImg);
  } else if (profile.pet_name) {
    petDiv.textContent = profile.pet_name;
  }
}

// Run when page loads
loadProfile();