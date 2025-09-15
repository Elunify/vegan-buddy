document.addEventListener("DOMContentLoaded", () => {

  // ======= Profile Photo Setup =======
  function setupProfilePhoto() {
    const answers = JSON.parse(localStorage.getItem("veganBuddyAnswers")) || {};
    const profilePhoto = document.getElementById('profilePhoto');
    if (profilePhoto) {
      profilePhoto.src = answers.profilePhoto || 'default-profile.png';
    }
  }

  // ======= Pet Section Setup =======
  function setupPetSection() {
    const answers = JSON.parse(localStorage.getItem("veganBuddyAnswers")) || {};
    const petAvatarDiv = document.getElementById("petAvatar");
    const petNameSpan = document.getElementById("petName");
    const petDisplay = document.getElementById("petDisplay");

    const savedPetPhoto = answers.petPhoto;
    const savedPetIcon = answers.pet;
    const savedPetName = answers.petName || "Pet";

    if (petNameSpan) petNameSpan.textContent = savedPetName;

    function updatePetElement(container) {
      if (!container) return;
      container.innerHTML = "";
      if (savedPetPhoto) {
        const img = document.createElement("img");
        img.src = savedPetPhoto;
        img.alt = savedPetName;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.borderRadius = "50%";
        img.style.objectFit = "cover";
        container.appendChild(img);
      } else if (savedPetIcon) {
        container.textContent = savedPetIcon;
      } else {
        container.textContent = "🐾";
      }
    }

    updatePetElement(petAvatarDiv);
    updatePetElement(petDisplay);
  }

  // ======= Reset function =======
  function resetImpactAndStreakAndLevel() {
    // Reset impact values
    const resetImpact = {
      animals: 0,
      forest: 0,
      water: 0,
      co2: 0,
      donated: 0
    };
    saveImpact(resetImpact);

    // Reset streak
    saveStreak(0);

    // Reset totalXP
    localStorage.setItem('totalXP', '0');

    // Update UI
    updateImpactUI();
    updateStreakUI();
    unlockFeatures();
  }

  const resetBtn = document.getElementById('resetimpactBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetImpactAndStreakAndLevel);
  }

  // ======= Setup menu buttons =======
  function setupMenuButtons() {
    const menuBtn = document.getElementById("menuButton");
    const menu = document.getElementById("sideMenu");
    const resetBtn = document.querySelector(".menu-item.reset");
    const addBtn = document.querySelector(".menu-item.add");

    // Toggle side menu visibility
    if (menuBtn && menu) {
      menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    }

    // Reset button clears localStorage and redirects
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        localStorage.clear();
        alert("Data has been cleared.");
        location.href = "survey.html";
      });
    }

    // Add button increases impact
    if (addBtn) {
      addBtn.addEventListener("click", addImpact);
    }

    // Side menu button redirects
    const pageMap = {
      topListsBtn: "leaderboards.html",
      aboutUsBtn: "aboutus.html",
      helpusgrowBtn: "helpusgrow.html",
      sourcesBtn: "sources.html"
    };

    Object.entries(pageMap).forEach(([id, url]) => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener("click", () => {
          window.location.href = url;
        });
      } else {
        console.warn(`Button with ID ${id} not found`);
      }
    });
  }

  // ======= Avatar click redirects to profile =======
  function setupAvatarClick() {
    const avatar = document.getElementById("avatarDisplay");
    if (avatar) {
      avatar.style.cursor = "pointer";
      avatar.addEventListener("click", () => {
        window.location.href = "yourprofile.html";
      });
    }
  }

  // ======= Thought Bubble Toggle =======
  function setupThoughtBubbleToggle() {
    const toggle = document.getElementById("thoughtToggle");
    const bubble = document.getElementById("petThought");
    const petAvatar = document.getElementById("petAvatar");

    if (toggle && bubble && petAvatar) {
      function toggleBubble() {
        bubble.classList.toggle("hidden");
      }

      toggle.addEventListener("click", toggleBubble);
      petAvatar.addEventListener("click", toggleBubble);
    }
  }

  // ======= Meal Art Winners =======
  const winnersData = {
    amateur: {
      name: "Jane Doe",
      image: "assets/meals/amateur.jpg",
      recipeURL: "amateurRecipe.html" // leave "" or null if no recipe
    },
    professional: {
      name: "Green Leaf Bistro",
      image: "assets/meals/professional.jpg",
      recipeURL: "" // no recipe available
    }
  };

  function updateMealArtWinners() {
    // Amateur / Hobby
    document.getElementById("amateurName").textContent = winnersData.amateur.name;
    document.getElementById("amateurImage").src = winnersData.amateur.image;
    document.getElementById("amateurImage").alt = `${winnersData.amateur.name} winning dish`;

    const amateurRecipe = document.getElementById("amateurRecipe");
    if (winnersData.amateur.recipeURL) {
      amateurRecipe.innerHTML = `<a href="${winnersData.amateur.recipeURL}">Recipe available</a>`;
    } else {
      amateurRecipe.innerHTML = `<span class="no-recipe">Recipe is not available</span>`;
    }

    // Professional / Restaurant
    document.getElementById("proName").textContent = winnersData.professional.name;
    document.getElementById("proImage").src = winnersData.professional.image;
    document.getElementById("proImage").alt = `${winnersData.professional.name} winning dish`;

    const proRecipe = document.getElementById("professionalRecipe");
    if (winnersData.professional.recipeURL) {
      proRecipe.innerHTML = `<a href="${winnersData.professional.recipeURL}">Recipe available</a>`;
    } else {
      proRecipe.innerHTML = `<span class="no-recipe">Recipe is not available</span>`;
    }
  }

  // ======= Initialize All =======
  function init() {
    setupProfilePhoto();
    setupPetSection();
    updateImpactUI();
    updateStreakUI();
    setupMenuButtons();
    setupAvatarClick();
    setupThoughtBubbleToggle();
    //updateMealArtWinners(); // ✅ NOW runs last so nothing overwrites it
    unlockFeatures();
  }

  // Run initialization
  init();

});




const steps = document.querySelectorAll('.intro-step');
let currentStep = 0;
const introwindow = document.getElementById("introwindow");

// Disable/enable page scroll
function disableScroll() {
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden"; // lock <html> too
}

function enableScroll() {
  document.body.style.overflow = "";
  document.documentElement.style.overflow = ""; // restore
}

function showStep(index) {
  // Hide all steps except the current one
  steps.forEach((step, idx) => {
    step.style.display = idx === index ? "block" : "none";
  });

  // Update introwindow position
  introwindow.className = ""; 
  introwindow.classList.add("step-" + (index + 1));

  // Remove old highlight
  document.querySelectorAll(".highlighted").forEach(el =>
    el.classList.remove("highlighted")
  );

  // Add new highlight (if defined)
  const targetSelector = steps[index].dataset.target;
  if (targetSelector) {
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) targetEl.classList.add("highlighted");
  }
}

function nextStep() {
  currentStep++;
  if (currentStep >= steps.length) {
    finishIntro();
    return;
  }
  showStep(currentStep);
}

function finishIntro() {
  // Remove highlights
  document.querySelectorAll(".highlighted").forEach(el =>
    el.classList.remove("highlighted")
  );
  
  const introOverlay = document.getElementById("intro-overlay");
  introOverlay.style.display = "none";
  enableScroll(); // restore scrolling

  // Save that intro is finished
  localStorage.setItem("introFinished", "true");
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  const introOverlay = document.getElementById("intro-overlay");
  const introFinished = localStorage.getItem("introFinished");

  if (!introFinished) {
    // Show intro if not finished
    introOverlay.style.display = "block";
    disableScroll(); // lock scroll during intro
    showStep(0); // init first step
  } else {
    // Skip intro
    introOverlay.style.display = "none";
    enableScroll(); // ensure page is scrollable
  }

  // Initialize other page features
  initXP();
  updateProfileCounters();
});



// 1️⃣ Define lessons for each survey answer
const tips = {
  goals: {
    "Protecting animals & animal welfare": [
      "Every small choice counts! Even one plant-based meal helps reduce suffering",
      "Learn about cruelty-free products and support ethical brands",
      "Share your knowledge—educating others is a powerful way to create change"
      ],

    "Caring for the environment & fighting climate change": [
      "Eating plant-based is one of the simplest ways to reduce your carbon footprint",
      "Try reducing waste—compost food scraps and choose reusable items",
      "Remember: small consistent actions add up to big environmental impact"
      ],

    "Healthy living & wellness": [
      "Nourish your body with colorful fruits, veggies, and whole foods",
      "Stay active—exercise supports both body and mind",
      "Hydrate and rest well; wellness is about balance, not perfection"
     ],

    "Solving health issues": [
      "Plant-based foods can help manage cholesterol, blood pressure, and inflammation",
      "Experiment with nutrient-rich ingredients to see what works best for your body",
      "Consult professionals when needed—knowledge + action is powerful"
     ],

    "Boosting my performance as an athlete": [
      "Plant proteins, complex carbs, and healthy fats fuel energy and recovery",
      "Listen to your body—rest and nutrition are part of training",
      "Track your progress and celebrate every improvement, no matter how small"
    ]
  }
};



function prepareHourlyTip() {
  // 1️⃣ Get last tip index
  let lastTipIndex = parseInt(localStorage.getItem("lastTipIndex")) || 0;

  // 2️⃣ Build tip pool only from user's goals
  const answers = JSON.parse(localStorage.getItem("veganBuddyAnswers")) || {};
  let goalTips = [];
  const userGoals = Array.isArray(answers.goals) ? answers.goals : [];
  userGoals.forEach(goal => {
    if (tips.goals[goal]) {
      goalTips = goalTips.concat(tips.goals[goal]);
    }
  });

  // 3️⃣ Pick the tip
  let hourlyTip = "";
  if (goalTips.length > 0) {
    hourlyTip = goalTips[lastTipIndex % goalTips.length];
  } else {
    const allGoalTips = Object.values(tips.goals).flat();
    hourlyTip = allGoalTips.length > 0
      ? allGoalTips[Math.floor(Math.random() * allGoalTips.length)]
      : "Set your goals to start getting tips!";
  }

  // 4️⃣ Update index
  localStorage.setItem("lastTipIndex", lastTipIndex + 1);

  // 5️⃣ Update tip text ONLY, do NOT show bubble yet
  const tipContainer = document.getElementById("dailyTip");
  if (tipContainer) {
    tipContainer.textContent = hourlyTip;
  }
}

// Call this on page load to prepare the tip
prepareHourlyTip();

// Schedule hourly update for next tips
setInterval(() => {
  prepareHourlyTip();
  // Optional: only show bubble if user has it open
  // const petBubble = document.getElementById("petThought");
  // if (!petBubble.classList.contains("hidden")) {
  //   petBubble.classList.remove("hidden");
  // }
}, 60 * 60 * 1000);

// Toggle bubble when user clicks
function setupThoughtBubbleToggle() {
  const toggle = document.getElementById("thoughtToggle");
  const bubble = document.getElementById("petThought");
  const petAvatar = document.getElementById("petAvatar");

  if (toggle && bubble && petAvatar) {
    function toggleBubble() {
      bubble.classList.toggle("hidden");
      // Show tip when bubble is shown
      if (!bubble.classList.contains("hidden")) {
        // Tip is already prepared on page load
      }
    }

    toggle.addEventListener("click", toggleBubble);
    petAvatar.addEventListener("click", toggleBubble);
  }
}