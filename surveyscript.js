// --- Initialize Supabase ---
const supabaseUrl = 'https://pqrgvelzxmtdqrofxujx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxcmd2ZWx6eG10ZHFyb2Z4dWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMTc0ODAsImV4cCI6MjA3MTY5MzQ4MH0.s8JZLDdzIS1wBLln0Zs3LK_9BHelUcbRhyAC_0-5sos';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", nextQuestion);

let answers = JSON.parse(localStorage.getItem("veganBuddyAnswers")) || {};
let currentStep = 1;

// --- Step 1: Email + password (signup) ---
const emailStatus = document.getElementById("emailStatus");

// --- Next Question Function ---
async function nextQuestion() {
    const currentEl = document.getElementById("q" + currentStep);

    if (!validateStep(currentStep)) {
        alert("Please answer before continuing.");
        return;
    }

    if (currentStep === 1) {
        // Step 1: Email + password
        const email = document.getElementById("profileEmail").value.trim();
        const password = document.getElementById("profilePassword1").value.trim();
        const password2 = document.getElementById("profilePassword2").value.trim();

        if (!email || !password || !password2) {
            return alert("Please fill in all fields.");
        }
        if (password !== password2) {
            return alert("Passwords do not match.");
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: window.location.origin + '/survey.html'
                }
            });

            if (error) throw error;

            answers.email = email;
            answers.password = password;
            saveAnswers();

            emailStatus.innerText = "We have sent a verification e-mail, please confirm it.";
            emailStatus.className = "sending";

            // Do NOT switch step yet — wait for verification
        } catch (err) {
            console.error("Signup error:", err);
            alert("Failed to create account. Try again.");
        }
        return;
    }

    if (currentStep === 2) {
        // Step 2: Profile info
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

        switchStep(currentEl, "q3");
        currentStep = 3;
        return;
    }

    if (currentStep === 3) {
        answers.goals = [...document.querySelectorAll('input[name="goal"]:checked')].map(cb => cb.value);
        saveAnswers();

        if (answers.goals.includes("Solving health issues")) {
            switchStep(currentEl, "q3b");
            currentStep = 3.5;
            return;
        } else {
            switchStep(currentEl, "q4");
            currentStep = 4;
            return;
        }
    }

    if (currentStep === 3.5) {
        answers.healthIssues = [...document.querySelectorAll('input[name="healthIssue"]:checked')].map(cb => cb.value);
        saveAnswers();
        switchStep(currentEl, "q4");
        currentStep = 4;
        return;
    }

    if (currentStep === 4) {
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

        switchStep(currentEl, "q5");
        currentStep = 5;
        nextBtn.style.display = "none";
        showBuddyIntro();
        return;
    }
}

// --- Helpers ---
function validateStep(step) {
    switch(step) {
        case 1:
            const email = document.getElementById("profileEmail").value.trim();
            const password = document.getElementById("profilePassword1").value.trim();
            const password2 = document.getElementById("profilePassword2").value.trim();
            return email !== "" && password !== "" && password2 !== "";
        case 2:
            return document.getElementById("profileName").value.trim() !== "" &&
                   document.getElementById("year").value.trim() !== "" &&
                   document.getElementById("month").value.trim() !== "" &&
                   document.getElementById("day").value.trim() !== "";
        case 3:
            return document.querySelectorAll('input[name="goal"]:checked').length > 0;
        case 3.5:
            return true;
        case 4:
            return true;
        default:
            return true;
    }
}

function switchStep(currentEl, nextId) {
    if (currentEl) currentEl.classList.remove("active");
    const nextEl = document.getElementById(nextId);
    if (nextEl) nextEl.classList.add("active");

    // --- Title control ---
    if (nextId === "q1") {
        document.getElementById("welcomeTitle").style.display = "block";
        document.getElementById("welcomeTitleSecond").style.display = "none";
    } else if (nextId === "q2") {
        document.getElementById("welcomeTitle").style.display = "none";
        document.getElementById("welcomeTitleSecond").style.display = "block";
    } else {
        document.getElementById("welcomeTitle").style.display = "none";
        document.getElementById("welcomeTitleSecond").style.display = "none";
    }
}


async function saveAnswers() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

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
    });

    if (error) {
        console.error("Error saving profile:", error);
    } else {
        console.log("Saved to Supabase:", data);
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

    document.getElementById("q5").classList.add("active");

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

// --- Save profile to Supabase ---
async function saveProfile() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return alert("You must verify your email first.");

    const { data, error } = await supabase.from('profiles').upsert({
        id: user.id,
        email: user.email,
        name: answers.profileName,
        birth_date: `${answers.year}-${answers.month}-${answers.day}`,
        profile_photo: answers.profilePhoto,
        goals: answers.goals,
        health_issues: answers.healthIssues,
        pet_name: answers.petName,
        pet_photo: answers.petPhoto
    });

    if (error) console.error(error);
    else console.log("Profile saved:", data);
}

// --- Auto jump to Step 2 if verified ---
window.addEventListener('load', async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session && session.user && session.user.email_confirmed_at) {
        emailStatus.innerText = "Email already verified! ✅";
        emailStatus.className = "verified";
        answers.email = session.user.email;
        saveAnswers();

        // jump to Step 2
        document.getElementById("q1").classList.remove("active");
        document.getElementById("q2").classList.add("active");
        document.getElementById("welcomeTitle").style.display = "none";
        currentStep = 2;
    }
});
