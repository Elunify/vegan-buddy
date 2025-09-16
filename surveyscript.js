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

        if (profilePhotoFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                answers.profilePhoto = e.target.result;
                saveAnswers();
            };
            reader.readAsDataURL(profilePhotoFile);
        } else {
            answers.profilePhoto = "blankphoto.jpg";
            saveAnswers();
        }

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

        answers.petName = petNameInput || "Toad";

        if (petPhotoFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                answers.petPhoto = e.target.result;
                saveAnswers();
            };
            reader.readAsDataURL(petPhotoFile);
        } else {
            answers.petPhoto = "defaultPet.jpg";
            saveAnswers();
        }

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

// --- Profile + Pet photo previews ---
document.getElementById('profilePhoto').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        document.getElementById('profilePreview').src = e.target.result;
        document.getElementById('profilePreview').style.display = 'block';
    };
    reader.readAsDataURL(file);
});

document.getElementById('petPhotoUpload').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        document.getElementById('petPhotoPreview').src = e.target.result;
        document.getElementById('petPhotoPreview').style.display = 'block';
    };
    reader.readAsDataURL(file);
});

// --- Date field auto-focus ---
document.getElementById('year').addEventListener('input', e => { if(e.target.value.length===4) document.getElementById('month').focus(); });
document.getElementById('month').addEventListener('input', e => { if(e.target.value.length===2) document.getElementById('day').focus(); });

// --- Save Answers Function ---
async function saveAnswers() {
    localStorage.setItem("veganBuddyAnswers", JSON.stringify(answers));
}

// --- Save Profile Function ---
async function saveProfile() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return console.error("No logged in user. Cannot save profile.");

    try {
        const { data, error } = await supabase.from('profiles').upsert({
            id: user.id,
            email: user.email,
            name: answers.profileName,
            birth_date: `${answers.year}-${answers.month}-${answers.day}`,
            profile_photo: answers.profilePhoto,
            goals: answers.goals || [],
            health_issues: answers.healthIssues || [],
            pet_name: answers.petName || null,
            pet_photo: answers.petPhoto || null
        }, { onConflict: ['id'] });

        if (error) console.error("Error saving profile:", error);
        else console.log("Profile saved:", data);

    } catch (err) {
        console.error("Unexpected error:", err);
    }
}
