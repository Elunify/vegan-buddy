document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = 'yourprofile.html'; // Or wherever you want the back button to lead
    });

// Trigger profile photo file input
document.getElementById('changeProfilePhotoBtn').addEventListener('click', () => {
  document.getElementById('profilePhotoUpload').click();
});

// Trigger pet photo file input
document.getElementById('changePetPhotoBtn').addEventListener('click', () => {
  document.getElementById('petPhotoUpload').click();
});

    
    // --- IMAGE RESIZE FUNCTION ---
async function resizeImage(file, maxSize = 600, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = e => img.src = e.target.result;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxSize) {
          height = Math.round(height * maxSize / width);
          width = maxSize;
        }
      } else {
        if (height > maxSize) {
          width = Math.round(width * maxSize / height);
          height = maxSize;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

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

// --- LOAD PROFILE ---
async function loadProfile() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return console.error("Not logged in:", userError);

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select(`
      profile_photo,
      name,
      birth_date,
      goals,
      health_issues,
      pet_photo,
      pet_name
    `)
    .eq("id", user.id)
    .single();

  if (profileError) return console.error("Error fetching profile:", profileError);

  // Fill inputs
  if (profile.profile_photo) {
    profilePhotoPreview.src = profile.profile_photo;
    document.getElementById('profilePhotoInput').value = profile.profile_photo;
  }

  document.getElementById('profileNameInput').value = profile.name || "";

  if (profile.birth_date) {
    const [year, month, day] = profile.birth_date.split("-");
    document.getElementById('dobDay').value = day || "";
    document.getElementById('dobMonth').value = month || "";
    document.getElementById('dobYear').value = year || "";
  }

  // Goals
  if (profile.goals) {
    let goals = Array.isArray(profile.goals) ? profile.goals : Object.values(profile.goals);
    document.querySelectorAll('input[name="goal"]').forEach(cb => {
      cb.checked = goals.includes(cb.value);
    });
  }
// Make Health Issues section visible if needed
toggleHealthIssues();

  // Health Issues
  if (profile.health_issues) {
    let issues = Array.isArray(profile.health_issues) ? profile.health_issues : Object.values(profile.health_issues);
    document.querySelectorAll('input[name="healthIssue"]').forEach(cb => {
      cb.checked = issues.includes(cb.value);
    });
  }

  // Pet photo & name
  if (profile.pet_photo) {
    petPhotoPreview.src = profile.pet_photo;
    document.getElementById('petPhotoInput').value = profile.pet_photo;
  }
  document.getElementById('petNameInput').value = profile.pet_name || "";
}




// --- SAVE PROFILE ---
async function saveProfile() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return console.error("Not logged in:", userError);

  let updates = {};

  // Name
  updates.name = document.getElementById('profileNameInput').value || null;

  // Birth date
  const day = document.getElementById('dobDay').value.padStart(2, "0");
  const month = document.getElementById('dobMonth').value.padStart(2, "0");
  const year = document.getElementById('dobYear').value;
  updates.birth_date = year && month && day ? `${year}-${month}-${day}` : null;

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

  window.location.href = 'yourprofile.html'; // redirect to profile page
}

// --- Attach save button ---
document.getElementById('saveBtn').addEventListener('click', saveProfile);

// Run on page load
loadProfile();


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

// Listen for changes on goal checkboxes
goalsInputs.forEach(cb => cb.addEventListener("change", toggleHealthIssues));










