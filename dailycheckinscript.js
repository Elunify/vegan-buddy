document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = 'mainpage.html'; // Or wherever you want the back button to lead
    });

// ===== Daily Check-in Script =====

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", async () => {

  // 1️⃣ Get the current logged-in user
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("Not logged in:", userError);
    return;
  }

  // 2️⃣ Load user profile (to get goals, progress, day_counter)
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (profileError || !profile) {
    console.error("Error fetching profile:", profileError);
    return;
  }

  // Use profile as user object
  const userData = profile;

  // ======== 3️⃣ Determine today's goal and lesson ========
  const todayGoalIndex = userData.day_counter % userData.goals.length;
  const todayGoal = userData.goals[todayGoalIndex];

  // Initialize goal_progress if missing
  if (!userData.goal_progress) userData.goal_progress = {};
  if (userData.goal_progress[todayGoal] === undefined) userData.goal_progress[todayGoal] = 0;

  const todayLessonIndex = userData.goal_progress[todayGoal];
  const todayLesson = lessons.goals[todayGoal][todayLessonIndex];

  // Inject today's lesson
document.getElementById("dailyLesson").innerHTML = `
  <p class="lesson-text">${todayLesson.lesson}</p>
`;

  // ======== 4️⃣ Determine yesterday's quiz ========
  const yesterdayIndex = todayLessonIndex === 0 
    ? lessons.goals[todayGoal].length - 1 
    : todayLessonIndex - 1;
  const yesterdayQuiz = lessons.goals[todayGoal][yesterdayIndex].quiz;

  // Inject yesterday's quiz into container
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = `<label class="bigLabel">Today's quiz:</label>`;
  yesterdayQuiz.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "quiz-item";
    div.innerHTML = `
      <p class="quiz-question">${q.question}</p>
      <div class="quiz-options">
    ${q.options.map(opt => `<label class="checkbox-label"><input type="radio" name="q${i}" value="${opt}"> ${opt}</label>`).join("")}
  </div>
    `;
    quizContainer.appendChild(div);
  });

  // ======== 5️⃣ Handle Submit ========
  window.handleSubmit = async function() {
    // Check that all quiz questions are answered
    let allAnswered = true;
    yesterdayQuiz.forEach((q, i) => {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (!selected) allAnswered = false;
    });

    // Check that all quiz answers are correct
  let allCorrect = true;
  yesterdayQuiz.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected.value !== q.answer) allCorrect = false;
  });

  if (!allCorrect) {
    alert("Some answers are incorrect. Please try again!");
    return;
  }

    // Check meal selection
    const mealAnswer = document.querySelector('input[name="meals"]:checked');
    if (!allAnswered || !mealAnswer) {
      alert("Please answer all questions before proceeding!");
      return;
    }

    // ===== 6️⃣ Compute impact from meals =====
    const mealValue = parseInt(mealAnswer.value);
    let impactMultiplier = 0;
    switch(mealValue) {
      case 1: impactMultiplier = 0; break;
      case 2: impactMultiplier = 0.3; break;
      case 3: impactMultiplier = 0.7; break;
      case 4: impactMultiplier = 1; break;
    }

    // Example impact numbers (adjust as needed)
    const baseImpact = { animals_saved: 0.7, forest_saved: 0.5, water_saved: 660, co2_saved: 4, donated: 0 };
    const impactIncrement = {
      animals_saved: baseImpact.animals_saved * impactMultiplier,
      forest_saved: baseImpact.forest_saved * impactMultiplier,
      water_saved: baseImpact.water_saved * impactMultiplier,
      co2_saved: baseImpact.co2_saved * impactMultiplier,
      donated: baseImpact.donated
    };

    // ===== 7️⃣ Update user stats =====
    const updatedProfile = {
      day_counter: userData.day_counter + 1,
      streak: (userData.streak || 0) + 1,
      total_xp: (userData.total_xp || 0) + 30,
      goal_progress: {
        ...userData.goal_progress,
        [todayGoal]: (todayLessonIndex + 1) % lessons.goals[todayGoal].length
      },
      animals_saved: (userData.animals_saved || 0) + impactIncrement.animals_saved,
      forest_saved: (userData.forest_saved || 0) + impactIncrement.forest_saved,
      water_saved: (userData.water_saved || 0) + impactIncrement.water_saved,
      co2_saved: (userData.co2_saved || 0) + impactIncrement.co2_saved,
      donated: (userData.donated || 0) + impactIncrement.donated,
      last_checkin_date: new Date().toISOString().split('T')[0] // YYYY-MM-DD
    };

    // 3️⃣ Update global impact by the same increment
  if (impactIncrement) {
    await addToGlobalImpact(impactIncrement);
  }

    // Save to Supabase
    const { error: updateError } = await supabase
      .from('profiles')
      .update(updatedProfile)
      .eq('id', user.id);

    if (updateError) {
      console.error("Error updating profile:", updateError);
      alert("Something went wrong. Please try again.");
      return;
    }

    // Redirect to mainpage
    window.location.href = "mainpage.html";
  };

});

async function addToGlobalImpact(change) {
  const { error } = await supabase.rpc('add_global_impact', {
    add_animals: change.animals_saved || 0,
    add_forest: change.forest_saved || 0,
    add_water: change.water_saved || 0,
    add_co2: change.co2_saved || 0,
    add_donated: change.donated || 0
  });

  if (error) {
    console.error("Error updating global impact:", error);
  } 
}


// ====== Personalized Daily Lesson Script ======

// 1️⃣ Define lessons for each survey answer
const lessons = {
  goals: {
    "Protecting animals & animal welfare": [
      {
    lesson: "Choosing a plant-based diet can prevent the slaughter of hundreds of animals per year, depending on your consumption habits. Many plant-based alternatives, like lab-grown or plant-based meats, reduce the demand for factory farming, which improves overall animal welfare.",
    quiz: [
      {
        question: "How does a plant-based diet help animals?",
        options: ["It prevents the slaughter of many animals", "It increases factory farming", "It has no effect"],
        answer: "It prevents the slaughter of many animals"
      },
      {
        question: "What effect do plant-based alternatives have on factory farming?",
        options: ["Reduce demand for factory farming", "Increase animal suffering", "No effect"],
        answer: "Reduce demand for factory farming"
      },
      {
        question: "Lab-grown or plant-based meats help improve what?",
        options: ["Animal welfare", "Air quality", "Traffic conditions"],
        answer: "Animal welfare"
      }
    ]
  },
  {
        lesson: "Supporting cruelty-free products and plant-based meals reduces the exploitation of animals and encourages companies to adopt more humane practices.",
        quiz: [
          {
            question: "Buying cruelty-free products helps to?",
            options: ["Reduce animal exploitation", "Increase factory farming", "Have no effect"],
            answer: "Reduce animal exploitation"
          },
          {
            question: "Plant-based meals encourage companies to adopt?",
            options: ["More humane practices", "Less sustainable practices", "No change"],
            answer: "More humane practices"
          },
          {
            question: "Eating plant-based affects animal welfare by?",
            options: ["Reducing demand for animal products", "Increasing demand", "No effect"],
            answer: "Reducing demand for animal products"
          }
        ]
      }

  // ✅ Add more lessons here in the future
],

    "Caring for the environment & fighting climate change": [
      {
    lesson: "A plant-based diet typically generates 50–70% less greenhouse gas emissions compared to a meat-heavy diet. Producing plant foods generally uses far less water and land than raising livestock, helping preserve forests and freshwater resources.",
    quiz: [
      {
        question: "How much less greenhouse gas does a plant-based diet produce?",
        options: ["50–70% less", "10% less", "More emissions"],
        answer: "50–70% less"
      },
      {
        question: "Why does eating plants help preserve forests and water?",
        options: ["Uses less land and water than livestock", "Uses more land and water", "No effect"],
        answer: "Uses less land and water than livestock"
      },
      {
        question: "Plant-based diets help fight what major global issue?",
        options: ["Climate change", "Traffic congestion", "Deforestation of cities"],
        answer: "Climate change"
      }
    ]
  },
      {
        lesson: "Reducing meat consumption lowers deforestation and water pollution, helping to protect biodiversity and maintain healthier ecosystems.",
        quiz: [
          {
            question: "Eating less meat helps reduce?",
            options: ["Deforestation and water pollution", "Air traffic", "Urban sprawl"],
            answer: "Deforestation and water pollution"
          },
          {
            question: "Reducing meat consumption helps protect?",
            options: ["Biodiversity", "Plastic production", "Internet speed"],
            answer: "Biodiversity"
          },
          {
            question: "Healthier ecosystems are maintained by?",
            options: ["Lower meat consumption", "More livestock farming", "No dietary change"],
            answer: "Lower meat consumption"
          }
        ]
      }
// ✅ Add more lessons here in the future
  ],

    "Healthy living & wellness": [
      {
    lesson: "Diets rich in fruits, vegetables, legumes, and whole grains are linked to lower risks of heart disease, diabetes, and certain cancers. Plant-based diets are naturally high in fiber, which improves gut health and can aid in weight management.",
    quiz: [
      {
        question: "Which health benefits are linked to plant-based diets?",
        options: ["Lower risk of heart disease, diabetes, and certain cancers", "Higher cholesterol and blood pressure", "No effect on health"],
        answer: "Lower risk of heart disease, diabetes, and certain cancers"
      },
      {
        question: "Why is a plant-based diet good for gut health?",
        options: ["High in fiber", "Low in nutrients", "Contains no protein"],
        answer: "High in fiber"
      },
      {
        question: "Plant-based diets can help with what aspect of wellness?",
        options: ["Weight management", "Increasing sugar intake", "Muscle wasting"],
        answer: "Weight management"
      }
    ]
  },
      {
        lesson: "Eating more vegetables and whole foods supports a balanced diet, increases energy levels, and promotes long-term physical and mental well-being.",
        quiz: [
          {
            question: "Eating vegetables and whole foods helps?",
            options: ["Increase energy and promote well-being", "Cause fatigue", "Decrease immunity"],
            answer: "Increase energy and promote well-being"
          },
          {
            question: "A balanced diet includes?",
            options: ["Vegetables and whole foods", "Only processed snacks", "Sugary drinks only"],
            answer: "Vegetables and whole foods"
          },
          {
            question: "Plant-based diets can improve?",
            options: ["Physical and mental health", "Only financial health", "No effect"],
            answer: "Physical and mental health"
          }
        ]
      }
// ✅ Add more lessons here in the future
],

    "Boosting my performance as an athlete": [
      {
    lesson: "Plant-based athletes often recover faster due to higher intake of antioxidants from fruits and vegetables. Vegan protein sources like lentils, beans, tofu, and quinoa provide all essential amino acids when combined properly, supporting muscle growth and endurance.",
    quiz: [
      {
        question: "Why do plant-based athletes often recover faster?",
        options: ["Higher intake of antioxidants", "Lower protein intake", "Fewer carbohydrates"],
        answer: "Higher intake of antioxidants"
      },
      {
        question: "Which vegan protein sources support muscle growth?",
        options: ["Lentils, beans, tofu, and quinoa", "Candy and soda", "Processed snacks only"],
        answer: "Lentils, beans, tofu, and quinoa"
      },
      {
        question: "Plant-based diets support athletes by providing what?",
        options: ["All essential amino acids", "Only carbs", "No nutrients"],
        answer: "All essential amino acids"
      }
    ]
  },
      {
        lesson: "Consuming a variety of plant proteins throughout the day ensures sufficient nutrient intake and can improve endurance, stamina, and overall athletic performance.",
        quiz: [
          {
            question: "Eating a variety of plant proteins helps?",
            options: ["Ensure sufficient nutrients and improve performance", "Cause weakness", "Reduce stamina"],
            answer: "Ensure sufficient nutrients and improve performance"
          },
          {
            question: "Plant-based protein intake supports?",
            options: ["Endurance and stamina", "Only flexibility", "No performance"],
            answer: "Endurance and stamina"
          },
          {
            question: "Combining plant proteins properly ensures?",
            options: ["All essential amino acids", "None of the amino acids", "Only carbs"],
            answer: "All essential amino acids"
          }
        ]
      }
// ✅ Add more lessons here in the future
  ]
 }
};
