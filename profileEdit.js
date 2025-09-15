document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = 'yourprofile.html'; // Or wherever you want the back button to lead
    });

    // Load existing data from localStorage
const answers = JSON.parse(localStorage.getItem("veganBuddyAnswers")) || {};

// Populate inputs
document.getElementById("profileNameInput").value = answers.profileName || "";
document.getElementById("dobDay").value = answers.day || "";
document.getElementById("dobMonth").value = answers.month || "";
document.getElementById("dobYear").value = answers.year || "";
document.getElementById("profilePhotoInput").value = answers.profilePhoto || "";
document.getElementById("profilePhotoPreview").src = answers.profilePhoto || "blankphoto.jpg";

// Helper function to check checkboxes based on saved answers
function populateCheckboxes(name, values) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]`);
  checkboxes.forEach(cb => {
    cb.checked = values && values.includes(cb.value);
  });
}

// Populate Q2: Goals
populateCheckboxes("goal", answers.goals);

// Populate Q2b: Health Issues
populateCheckboxes("healthIssue", answers.healthIssues);

// Populate Q2c: Digestion Details
populateCheckboxes("digestion", answers.digestionDetails);

// Populate Q3b: Allergies / Dislikes
populateCheckboxes("allergy", answers.dislikes);

document.getElementById("petNameInput").value = answers.petName || "";
document.getElementById("petPhotoInput").value = answers.petPhoto || "";
document.getElementById("petPhotoPreview").src = answers.petPhoto || "defaultPet.jpg";

// Update preview images on URL input
document.getElementById("profilePhotoInput").addEventListener("input", e => {
  const url = e.target.value || "blankphoto.jpg";
  document.getElementById("profilePhotoPreview").src = url;
});
document.getElementById("petPhotoInput").addEventListener("input", e => {
  const url = e.target.value || "defaultPet.jpg";
  document.getElementById("petPhotoPreview").src = url;
});

// Save profile
document.getElementById("saveBtn").addEventListener("click", () => {
  // Collect goals
  const goals = Array.from(document.querySelectorAll('input[name="goal"]:checked')).map(cb => cb.value);

  // Collect health issues
  const healthIssues = Array.from(document.querySelectorAll('input[name="healthIssue"]:checked')).map(cb => cb.value);

  // Collect digestion details
  const digestionDetails = Array.from(document.querySelectorAll('input[name="digestionDetail"]:checked')).map(cb => cb.value);

  // Collect dislikes / allergies
  let dislikes = [];
  const hasAllergy = document.querySelector('input[name="hasAllergy"]:checked')?.value;
  if (hasAllergy === "yes") {
    dislikes = Array.from(document.querySelectorAll('input[name="Allergy"]:checked'))
                    .map(cb => cb.value)
                    .filter(v => v !== "Other");

    const otherAllergy = document.getElementById("otherAllergy").value.trim();
    if (otherAllergy) dislikes.push(otherAllergy);
  }

  const newData = {
    profileName: document.getElementById("profileNameInput").value.trim(),
    day: document.getElementById("dobDay").value,
    month: document.getElementById("dobMonth").value,
    year: document.getElementById("dobYear").value,
    // Use the current preview src so uploaded files are saved
    profilePhoto: document.getElementById("profilePhotoPreview").src || "",
    goals,
    healthIssues,
    digestionDetails,
    dislikes,
    petName: document.getElementById("petNameInput").value.trim(),
    petPhoto: document.getElementById("petPhotoPreview").src || "",
  };

  localStorage.setItem("veganBuddyAnswers", JSON.stringify(newData));
  alert("Profile saved!");
  
  // Redirect to yourprofile.html
  window.location.href = 'yourprofile.html';
});

// ===== PROFILE PHOTO =====
const profilePhotoPreview = document.getElementById('profilePhotoPreview');
const profilePhotoUpload = document.getElementById('profilePhotoUpload');
const changeProfilePhotoBtn = document.getElementById('changeProfilePhotoBtn');

// Load previous profile photo if exists
const savedProfilePhoto = localStorage.getItem('profilePhoto');
if (savedProfilePhoto) {
  profilePhotoPreview.src = savedProfilePhoto;
}

// Open file picker when button is clicked
changeProfilePhotoBtn.addEventListener('click', () => {
  profilePhotoUpload.click();
});

// Save uploaded profile photo to localStorage and preview it
profilePhotoUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const photoDataUrl = e.target.result;
    profilePhotoPreview.src = photoDataUrl;
    localStorage.setItem('profilePhoto', photoDataUrl); // save to localStorage
  };
  reader.readAsDataURL(file);
});


// ===== PET PHOTO =====
const petPhotoPreview = document.getElementById('petPhotoPreview');
const petPhotoUpload = document.getElementById('petPhotoUpload');
const changePetPhotoBtn = document.getElementById('changePetPhotoBtn');

// Load previous pet photo if exists
const savedPetPhoto = localStorage.getItem('petPhoto');
if (savedPetPhoto) {
  petPhotoPreview.src = savedPetPhoto;
}

// Open file picker when button is clicked
changePetPhotoBtn.addEventListener('click', () => {
  petPhotoUpload.click();
});

// Save uploaded pet photo to localStorage and preview it
petPhotoUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const photoDataUrl = e.target.result;
    petPhotoPreview.src = photoDataUrl;
    localStorage.setItem('petPhoto', photoDataUrl); // save to localStorage
  };
  reader.readAsDataURL(file);
});


// ===== BORN DATE =====
const dobInputs = document.querySelectorAll('#dobDay, #dobMonth, #dobYear');

dobInputs.forEach(input => {
  input.addEventListener('input', () => {
    const maxLength = input.id === 'dobYear' ? 4 : 2;
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  });
});


const dobFields = ['dobDay', 'dobMonth', 'dobYear'];

dobFields.forEach((id, index) => {
  const input = document.getElementById(id);
  
  input.addEventListener('input', () => {
    // Remove non-digit characters
    input.value = input.value.replace(/\D/g, '');
    
    // If the length reaches maxlength, move to next input
    if (input.value.length >= input.maxLength) {
      const nextInput = document.getElementById(dobFields[index + 1]);
      if (nextInput) nextInput.focus();
    }
  });
});

const dobDay = document.getElementById('dobDay');
const dobMonth = document.getElementById('dobMonth');
const dobYear = document.getElementById('dobYear');

dobDay.addEventListener('input', () => {
  // Keep only digits
  dobDay.value = dobDay.value.replace(/\D/g, '');

  // Restrict range
  if (dobDay.value !== '') {
    let val = parseInt(dobDay.value);
    if (val < 1) val = 1;
    if (val > 31) val = 31;
    dobDay.value = val;
  }

  // Move to next field if max length reached
  if (dobDay.value.length >= dobDay.maxLength) {
    dobMonth.focus();
  }
});

dobMonth.addEventListener('input', () => {
  dobMonth.value = dobMonth.value.replace(/\D/g, '');
  if (dobMonth.value !== '') {
    let val = parseInt(dobMonth.value);
    if (val < 1) val = 1;
    if (val > 12) val = 12;
    dobMonth.value = val;
  }
  if (dobMonth.value.length >= dobMonth.maxLength) {
    dobYear.focus();
  }
});

dobYear.addEventListener('input', () => {
  dobYear.value = dobYear.value.replace(/\D/g, '');
  if (dobYear.value !== '') {
    let val = parseInt(dobYear.value);
    if (val < 1925) val = 1925;
    if (val > 2025) val = 2025;
    dobYear.value = val;
  }
});

// ===== PERSONALIZE QUESTIONS =====

// Q2: Goals
const q2Checkboxes = document.querySelectorAll('input[name="goal"]');
const q2bSection = document.getElementById('q2b'); // Health issues
const q2cSection = document.getElementById('q2c'); // Digestion details

// Q3: Allergies
const q3Radios = document.querySelectorAll('input[name="hasAllergy"]');
const q3bSection = document.getElementById('q3b');

// Initially hide conditional sections
q2bSection.style.display = 'none';
q2cSection.style.display = 'none';
q3bSection.style.display = 'none';

// Q2 logic: show Q2b if "Solving health issues" is checked
q2Checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    const showQ2b = Array.from(q2Checkboxes).some(c => c.checked && c.value === 'Solving health issues');
    q2bSection.style.display = showQ2b ? 'block' : 'none';

    if (!showQ2b) {
      // Hide Q2c and uncheck all Q2b & Q2c checkboxes
      q2cSection.style.display = 'none';
      document.querySelectorAll('#q2b input[type="checkbox"], #q2c input[type="checkbox"]').forEach(c => c.checked = false);
    }
  });
});

// Q2b logic: show Q2c if "Digestive issues" is checked
const q2bCheckboxes = document.querySelectorAll('input[name="healthIssue"]');
q2bCheckboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    const showQ2c = Array.from(q2bCheckboxes).some(c => c.checked && c.value === 'Digestive issues');
    q2cSection.style.display = showQ2c ? 'block' : 'none';

    if (!showQ2c) {
      document.querySelectorAll('#q2c input[type="checkbox"]').forEach(c => c.checked = false);
    }
  });
});

// Q3 logic: show Q3b if "Yes" is selected
q3Radios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.value === 'yes' && radio.checked) {
      q3bSection.style.display = 'block';
    } else if (radio.value === 'no' && radio.checked) {
      q3bSection.style.display = 'none';
      document.querySelectorAll('#q3b input[type="checkbox"]').forEach(c => c.checked = false);
      document.getElementById('otherAllergy').value = '';
    }
  });
});