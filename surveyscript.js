// --- Initialize Supabase ---
const supabaseUrl = 'https://pqrgvelzxmtdqrofxujx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxcmd2ZWx6eG10ZHFyb2Z4dWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMTc0ODAsImV4cCI6MjA3MTY5MzQ4MH0.s8JZLDdzIS1wBLln0Zs3LK_9BHelUcbRhyAC_0-5sos';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", nextQuestion);

let currentStep = 1; // start at step 1 (profile info)

let answers = JSON.parse(localStorage.getItem("veganBuddyAnswers")) || {
  profileName: "",
  year: "",
  month: "",
  day: "",
  profilePhoto: null,
  goals: [],
  healthIssues: [],
  petName: "",
  petPhoto: null
};

// --- Next Question Function ---
async function nextQuestion() {
    const currentEl = document.getElementById("q" + currentStep);

    if (!validateStep(currentStep)) {
        alert("Please answer before continuing.");
        return;
    }

    if (currentStep === 1) {
        // Step 1: Profile info
        const name = document.getElementById("profileName").value.trim();
        const year = document.getElementById("year").value;
        const month = document.getElementById("month").value;
        const day = document.getElementById("day").value;
        const profilePhotoFile = document.getElementById("profilePhoto").files[0];

        if (!name || !year || !month || !day) {
            alert("Please fill in your name and date of birth.");
            return;
        }

        answers.profileName = name;
        answers.year = year;
        answers.month = month;
        answers.day = day;

        // If the user uploaded a photo, it's already handled by the change event
        // If skipped, leave answers.profilePhoto as null; saveProfile() sets default
        saveAnswers();

        document.getElementById("welcomeTitle").style.display = "none";

        switchStep(currentEl, "q2");
        currentStep = 2;
        return;
    }

    if (currentStep === 2) {
        answers.goals = [...document.querySelectorAll('input[name="goal"]:checked')].map(cb => cb.value);
        saveAnswers();

        if (answers.goals.includes("Solving health issues")) {
            switchStep(currentEl, "q2b");
            currentStep = 2.5;
            return;
        } else {
            switchStep(currentEl, "q3");
            currentStep = 3;
            return;
        }
    }

    if (currentStep === 2.5) {
        answers.healthIssues = [...document.querySelectorAll('input[name="healthIssue"]:checked')].map(cb => cb.value);
        saveAnswers();

        const currentEl = document.querySelector('.active'); // get whatever is active right now
        switchStep(currentEl, "q3");
        currentStep = 3;
        return;
    }

    if (currentStep === 3) {
        const petNameInput = document.getElementById("petname").value.trim();
        const petPhotoFile = document.getElementById("petPhotoUpload").files[0];
        // Pet photo upload handled by change event; if skipped, answers.petPhoto stays null
        answers.petName = petNameInput || "Toad";
        saveAnswers();

        switchStep(currentEl, "q4");
        currentStep = 4;
        nextBtn.style.display = "none";
        showBuddyIntro();
        return;
    }
}

// --- Helpers ---
function validateStep(step) {
    switch(step) {
        case 1:
            return document.getElementById("profileName").value.trim() !== "" &&
                   document.getElementById("year").value.trim() !== "" &&
                   document.getElementById("month").value.trim() !== "" &&
                   document.getElementById("day").value.trim() !== "";
        case 2:
            return document.querySelectorAll('input[name="goal"]:checked').length > 0;
        case 2.5:
        case 3:
        case 4:
            return true;
    }
}

function switchStep(currentEl, nextId) {
    if (currentEl) currentEl.classList.remove("active");
    const nextEl = document.getElementById(nextId);
    if (nextEl) nextEl.classList.add("active");

    if (nextId === "q1") {
        document.getElementById("welcomeTitle").style.display = "block";
    }
}

// --- Buddy Intro ---
function showBuddyIntro() {
    const name = answers.profileName || "friend";

    const elunaSpeech = `Hi ${name}! I'm Eluna. 
I care deeply about animals, nature, self-care and spirituality. 
My goal is to reduce every injustice in our world. 
Let me introduce my twin brother, Elune:`;

    const eluneSpeech = `Hey ${name}! I’m Elune. 
I'm more interested in climate change, doing sports, living healthy and nutritioning. 
My goal is to live my life the most conscious, rational and logical way. 
With my sister I'll be here for you and we'll give you useful tips, and we'll guide you through your adventure!`;

    document.getElementById("q4").classList.add("active");

    setTimeout(() => {
        document.getElementById("elunaPortrait").classList.add("visible");
        document.getElementById("elunaText").classList.add("visible");

        setTimeout(() => {
            typeText("elunaText", elunaSpeech, () => {
                document.getElementById("elunePortrait").classList.add("visible");
                document.getElementById("eluneText").classList.add("visible");

                setTimeout(() => {
                    typeText("eluneText", eluneSpeech, () => {
                        const btn = document.getElementById("startButton");
                        btn.classList.remove("hidden");
                        btn.addEventListener("click", async () => {
                            await saveProfile();
                            window.location.href = "mainpage.html";
                        });
                    });
                }, 1000);
            });
        }, 600);
    }, 300);
}

function typeText(elementId, text, callback) {
    const el = document.getElementById(elementId);
    el.innerHTML = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            el.innerHTML += (text[i] === "\n") ? "<br>" : text[i];
            i++;
            setTimeout(type, 25);
        } else if (callback) callback();
    }
    type();
}

// --- Upload Helper ---
async function uploadFile(bucket, file, userId) {
  if (!file) return null;

  // Create a unique filename per user
  const ext = file.name.split('.').pop();
  const filePath = `${userId}/${Date.now()}.${ext}`;

  const { error } = await supabase.storage.from(bucket).upload(filePath, file, {
    cacheControl: '3600',
    upsert: true
  });

  if (error) {
    console.error(`Error uploading to ${bucket}:`, error);
    return null;
  }

  // Get public URL
  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
  return data.publicUrl;
}

// --- Profile photo preview + upload ---
document.getElementById('profilePhoto').addEventListener('change', async e => {
  let file = e.target.files[0];
  if (!file) return;

  // Resize & compress before upload
  file = await resizeImage(file, 600, 0.7); // max 600px, 70% quality

  // Instant preview (before upload finishes)
  const instantPreview = URL.createObjectURL(file);
  document.getElementById('profilePreview').src = instantPreview;
  document.getElementById('profilePreview').style.display = 'block';

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return alert("Please log in first!");

  // Upload compressed image
  const url = await uploadFile('profile_photos', file, user.id);
  if (url) {
    answers.profilePhoto = url;
    saveAnswers();
    // Replace preview with final Supabase URL
    document.getElementById('profilePreview').src = url;
  }
});


// --- Pet photo preview + upload ---
document.getElementById('petPhotoUpload').addEventListener('change', async e => {
  let file = e.target.files[0];
  if (!file) return;

  // Resize & compress before upload
  file = await resizeImage(file, 300, 0.7); // max 300px, 70% quality

  // Instant preview (before upload finishes)
  const instantPreview = URL.createObjectURL(file);
  document.getElementById('petPhotoPreview').src = instantPreview;
  document.getElementById('petPhotoPreview').style.display = 'block';

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return alert("Please log in first!");

  // Upload compressed image
  const url = await uploadFile('pet_photos', file, user.id);
  if (url) {
    answers.petPhoto = url;
    saveAnswers();
    // Replace preview with final Supabase URL
    document.getElementById('petPhotoPreview').src = url;
  }
});

// --- Save Answers Function ---
async function saveAnswers() {
    localStorage.setItem("veganBuddyAnswers", JSON.stringify(answers));
}

// --- Save Profile Function ---
async function saveProfile() {
    // Get current logged-in user
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    console.warn("No logged-in user. Cannot save profile.");
    return;
  }

  // Default URLs (use the real public links from Supabase dashboard)
  const defaultProfileUrl = "https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/profile_photos/default.jpg";
  const defaultPetUrl     = "https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/pet_photos/default.jpg";

  try { 

    // 1️⃣ Check if profile exists
    const { data: existingProfile, error: fetchError } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', user.id)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') { // Not Found
      console.error("Error fetching existing profile:", fetchError);
      return;
    }

    if (existingProfile) {
      // 2️⃣ Update existing profile
      const { data, error } = await supabase
        .from('profiles')
        .update({
          name: answers.profileName,
          birth_date: `${answers.year}-${answers.month}-${answers.day}`,
          profile_photo: answers.profilePhoto || defaultProfileUrl,
          goals: answers.goals || [],
          health_issues: answers.healthIssues || [],
          pet_name: answers.petName || null,
          pet_photo: answers.petPhoto || defaultPetUrl
        })
        .eq('id', user.id);

      if (error) console.error("Error updating profile:", error);
      else console.log("Profile updated:", data);

    } else {
      // 3️⃣ Insert new profile
      const { data, error } = await supabase
        .from('profiles')
        .insert({
          id: user.id,
          email: user.email,
          name: answers.profileName,
          birth_date: `${answers.year}-${answers.month}-${answers.day}`,
          profile_photo: answers.profilePhoto || defaultProfileUrl,
          goals: answers.goals || [],
          health_issues: answers.healthIssues || [],
          pet_name: answers.petName || null,
          pet_photo: answers.petPhoto || defaultPetUrl
        });

      if (error) console.error("Error inserting profile:", error);
      else console.log("Profile created:", data);
    }

  } catch (err) {
    console.error("Unexpected error saving profile:", err);
  }
}

//resize Image
async function resizeImage(file, maxSize = 600, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = e => {
      img.src = e.target.result;
    };

    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      // Keep aspect ratio
      if (width > height) {
        if (width > maxSize) {
          height = Math.round((height *= maxSize / width));
          width = maxSize;
        }
      } else {
        if (height > maxSize) {
          width = Math.round((width *= maxSize / height));
          height = maxSize;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        blob => {
          if (!blob) return reject("Canvas is empty");
          resolve(new File([blob], file.name, { type: blob.type }));
        },
        "image/jpeg",
        quality // 0–1 compression level
      );
    };

    img.onerror = err => reject(err);
    reader.readAsDataURL(file);
  });
}
