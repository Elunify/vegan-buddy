// ====== Personalized Daily Lesson Script ======

// 1️⃣ Define lessons for each survey answer
const lessons = {
  goals: {
    "Protecting animals & animal welfare": [
      "Choosing a plant-based diet can prevent the slaughter of hundreds of animals per year, depending on your consumption habits.",
      "Many plant-based alternatives, like lab-grown or plant-based meats, reduce the demand for factory farming, which improves overall animal welfare."
    ],
    "Caring for the environment & fighting climate change": [
      "A plant-based diet typically generates 50–70% less greenhouse gas emissions compared to a meat-heavy diet.",
      "Producing plant foods generally uses far less water and land than raising livestock, helping preserve forests and freshwater resources."
    ],
    "Healthy living & wellness": [
      "Diets rich in fruits, vegetables, legumes, and whole grains are linked to lower risks of heart disease, diabetes, and certain cancers.",
      "Plant-based diets are naturally high in fiber, which improves gut health and can aid in weight management."
    ],
    "Solving health issues": [
      "Plant-based diets can help lower LDL cholesterol and blood pressure, reducing the risk of cardiovascular problems.",
      "Many plant foods contain anti-inflammatory compounds that can help manage chronic inflammation and blood sugar levels."
    ],
    "Boosting my performance as an athlete": [
      "Plant-based athletes often recover faster due to higher intake of antioxidants from fruits and vegetables.",
      "Vegan protein sources like lentils, beans, tofu, and quinoa provide all essential amino acids when combined properly, supporting muscle growth and endurance."
    ]
  }

  /* 
  healthIssue: {
    "Low energy or fatigue": [
      "Learn which plant-based foods can boost energy.",
      "Discover how balanced meals affect stamina."
    ],
    "Nutrition imbalances": [
      "Learn how to get all essential nutrients on a plant-based diet.",
      "Discover which foods are rich in iron and B12."
    ],
    "High cholesterol or heart issues": [
      "Learn which foods help lower cholesterol.",
      "Tips to support heart health with plant-based meals."
    ],
    "Diabetes or blood sugar issues": [
      "Learn about low-glycemic plant foods.",
      "Tips for stable blood sugar throughout the day."
    ],
    "Muscle or joint discomfort": [
      "Discover anti-inflammatory plant foods.",
      "Learn exercises that support joint health."
    ],
    "Digestive issues": [
      "Tips for gentle plant-based foods for digestion.",
      "Learn how fiber can help or hurt digestion depending on your body."
    ],
    "Inflammation or swelling": [
      "Learn about anti-inflammatory foods like turmeric and berries.",
      "Tips to reduce inflammation naturally."
    ],
    "Kidney stress": [
      "Learn which plant foods are kidney-friendly.",
      "Tips to stay hydrated and reduce kidney strain."
    ],
    "Cancer risk": [
      "Learn plant foods with antioxidants that may reduce cancer risk.",
      "Tips for a cancer-preventive diet."
    ]
  },
  digestionDetail: {
    "Bloating or gas": [
      "Tips to reduce bloating with plant-based foods.",
      "Discover digestive-friendly cooking techniques."
    ],
    "Lactose intolerance": [
      "Learn about dairy alternatives.",
      "Tips for calcium-rich plant-based foods."
    ],
    "Gluten sensitivity": [
      "Discover gluten-free plant-based meals.",
      "Learn which grains are naturally gluten-free."
    ],
    "Acid reflux or heartburn": [
      "Learn foods that reduce heartburn.",
      "Tips for meal timing to prevent reflux."
    ],
    "Constipation or irregular digestion": [
      "Learn fiber-rich foods that improve regularity.",
      "Tips to hydrate and keep digestion smooth."
    ],
    "Stomach cramps or discomfort": [
      "Discover gentle foods that soothe the stomach.",
      "Tips for smaller, frequent meals."
    ]
  }
*/
};

// 1️⃣ Load user answers from localStorage
const answers = JSON.parse(localStorage.getItem("veganBuddyAnswers")) || {};

// 2️⃣ Build lesson pool only from goals
let goalLessons = [];

const userGoals = Array.isArray(answers.goals) ? answers.goals : [];
userGoals.forEach(goal => {
  if (lessons.goals[goal]) {
    goalLessons = goalLessons.concat(lessons.goals[goal]);
  }
});

// 3️⃣ Determine today's lesson
let lastLessonIndex = parseInt(localStorage.getItem("lastLessonIndex")) || 0;
let todayLesson = "";

// If user has goals, pick from goals pool
if (goalLessons.length > 0) {
  todayLesson = goalLessons[lastLessonIndex % goalLessons.length];
} else {
  // No goals: pick a random lesson from all lessons in the goals pool
  const allGoalLessons = Object.values(lessons.goals).flat();
  todayLesson = allGoalLessons.length > 0
    ? allGoalLessons[Math.floor(Math.random() * allGoalLessons.length)]
    : "Set your goals to start doing lessons"; // fallback if somehow goals pool is empty
}

// 4️⃣ Update index for next day
localStorage.setItem("lastLessonIndex", lastLessonIndex + 1);

// 5️⃣ Display lesson in the page
const lessonContainer = document.getElementById("dailyLesson");
if (lessonContainer) {
  lessonContainer.textContent = todayLesson;
}