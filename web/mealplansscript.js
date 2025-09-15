// Back button
document.getElementById('backBtn').addEventListener('click', () => {
  window.location.href = 'mainpage.html';
});

// ======= Pet Section Setup =======
function setupPetSection() {
    const answers = JSON.parse(localStorage.getItem("veganBuddyAnswers")) || {};
    const petAvatarDiv = document.getElementById("petAvatar");
    const petNameSpan = document.getElementById("petName");
    const petTip = document.getElementById("petTip");
    
    const savedPetPhoto = answers.petPhoto;
    const savedPetIcon = answers.pet;
    const savedPetName = answers.petName || "Pet";
    
    // Show pet name
    if (petNameSpan) petNameSpan.textContent = savedPetName + " says:";

    // Show avatar or emoji
    if (petAvatarDiv) {
        petAvatarDiv.innerHTML = "";
        if (savedPetPhoto) {
            const img = document.createElement("img");
            img.src = savedPetPhoto;
            img.alt = savedPetName;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.borderRadius = "50%";
            img.style.objectFit = "cover";
            petAvatarDiv.appendChild(img);
        } else if (savedPetIcon) {
            petAvatarDiv.textContent = savedPetIcon;
        } else {
            petAvatarDiv.textContent = "🐾";
        }
    }

    // Toggle nutrition tip bubble
    const toggle = document.getElementById("thoughtToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        if (petTip.style.display === "block") {
            petTip.style.display = "none";
        } else {
            petTip.style.display = "block";
        }
      });
    }

    // Hide tip by default
    if (petTip) petTip.style.display = "none";
}

// ======= Daily Content Pool + Injection =======
document.addEventListener("DOMContentLoaded", () => {

  const dailyPool = [
    {
      tip: "🌱 Tip: Replace regular milk with oat milk for a creamy and sustainable alternative!",
      recipe: {
        title: "Creamy Vegan Pasta",
        ingredients: "200g pasta, 1 cup oat milk, 2 tbsp olive oil, garlic, spinach, salt & pepper",
        preparation: "Cook pasta. In a pan, sauté garlic in olive oil, add spinach, then oat milk. Combine with pasta and season to taste."
      },
      petMessage: "Add a handful of nuts to your meal for extra protein and healthy fats!"
    },
    {
      tip: "🌱 Tip: Use mashed bananas instead of eggs in baking to keep it vegan!",
      recipe: {
        title: "Vegan Banana Muffins",
        ingredients: "2 ripe bananas, 1 cup flour, 1/2 cup sugar, 1 tsp baking powder, 1/4 cup plant-based milk",
        preparation: "Mash bananas. Mix all ingredients until smooth. Bake at 180°C for 20-25 minutes."
      },
      petMessage: "Include a variety of colorful vegetables to boost your meal’s vitamins!"
    },
    {
      tip: "🌱 Tip: Swap butter with coconut oil for a healthier alternative!",
      recipe: {
        title: "Vegan Stir-Fry",
        ingredients: "1 cup tofu, mixed vegetables, 2 tbsp soy sauce, 1 tbsp coconut oil",
        preparation: "Heat coconut oil, fry tofu until golden, add vegetables and soy sauce, stir-fry for 5 minutes."
      },
      petMessage: "Try drinking a glass of water before meals to stay hydrated!"
    }
  ];

  // Select daily content
  const dayIndex = new Date().getDate() % dailyPool.length;
  const todayContent = dailyPool[dayIndex];

  // Inject Tip
  const tipDiv = document.querySelector(".tip");
  if (tipDiv) tipDiv.innerHTML = todayContent.tip;

  // Inject Recipe
  const recipeDiv = document.querySelector(".recipe");
  if (recipeDiv) recipeDiv.innerHTML = `
    <h2>Recipe: ${todayContent.recipe.title}</h2>
    <p><strong>Ingredients:</strong> ${todayContent.recipe.ingredients}</p>
    <p><strong>Preparation:</strong> ${todayContent.recipe.preparation}</p>
  `;

  // Setup pet avatar and name
  setupPetSection();

  // Inject daily pet message AFTER setupPetSection
  const petTip = document.getElementById("petTip");
  if (petTip) {
    petTip.textContent = todayContent.petMessage;
    petTip.style.display = "block"; // show by default
  }
});
