document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = 'mainpage.html'; // Or wherever you want the back button to lead
    });


document.addEventListener("DOMContentLoaded", () => {

  const pathButtons = document.querySelectorAll(".path-btn");
  const courses = document.querySelectorAll(".course");

  const lessonsData = {
  animals: [
    { title: "Why animals?", content: "Animals matter because they feel pain and deserve compassion.", question: { text: "Why do animals matter?", options: ["They feel pain and deserve compassion", "They cannot move", "They are objects"], correctIndex: 0 } },
    { title: "Welfare basics", content: "Animal welfare means ensuring animals are healthy, safe, and respected.", question: { text: "What does animal welfare focus on?", options: ["Health, safety, respect", "Fashion", "Profit only"], correctIndex: 0 } },
    { title: "Adoption", content: "Adopting animals from shelters helps reduce homelessness and suffering.", question: { text: "Why is adoption important?", options: ["Reduces animal homelessness", "Increases sales", "Decorates homes"], correctIndex: 0 } },
    { title: "Volunteering", content: "Volunteering at animal sanctuaries supports care and rescue work.", question: { text: "What can volunteering do?", options: ["Help care and rescue animals", "Harm animals", "Sell products"], correctIndex: 0 } },
    { title: "Sanctuaries", content: "Supporting sanctuaries provides animals with safe lifelong homes.", question: { text: "What do sanctuaries provide?", options: ["Safe homes", "Circus training", "Factories"], correctIndex: 0 } },
    { title: "Farmed animals", content: "Farmed animals are intelligent and social, just like pets.", question: { text: "How are farmed animals similar to pets?", options: ["They are intelligent and social", "They cannot feel", "They are machines"], correctIndex: 0 } },
    { title: "Emotions", content: "Animals can feel emotions like joy, fear, and sadness.", question: { text: "Which is true about animals?", options: ["They feel emotions", "They cannot think", "They are toys"], correctIndex: 0 } },
    { title: "Conservation", content: "Wildlife conservation protects species and ecosystems.", question: { text: "What does conservation do?", options: ["Protect species and ecosystems", "Destroy habitats", "Capture animals"], correctIndex: 0 } },
    { title: "Poaching", content: "Poaching threatens endangered animals worldwide.", question: { text: "What threatens endangered animals?", options: ["Poaching", "Conservation", "Protection laws"], correctIndex: 0 } },
    { title: "Deforestation", content: "Deforestation destroys the homes of countless wild animals.", question: { text: "What does deforestation do?", options: ["Destroys habitats", "Builds homes", "Helps animals"], correctIndex: 0 } },
    { title: "Overfishing", content: "Overfishing harms ocean life and balance.", question: { text: "What harms ocean ecosystems?", options: ["Overfishing", "Marine protection", "Restoring reefs"], correctIndex: 0 } },
    { title: "Pollution", content: "Pollution can poison animals and their environments.", question: { text: "How does pollution affect animals?", options: ["Poisons them", "Makes them stronger", "Feeds them"], correctIndex: 0 } },
    { title: "Zoos", content: "Zoos can either educate or exploit animals, depending on practices.", question: { text: "What is true about zoos?", options: ["They can educate or exploit", "Always safe", "Always harmful"], correctIndex: 0 } },
    { title: "Circuses", content: "Circuses often use cruel training on animals.", question: { text: "Why are circuses criticized?", options: ["Cruel training", "Freedom", "Natural behavior"], correctIndex: 0 } },
    { title: "Pets care", content: "Companion animals need love, exercise, and proper nutrition.", question: { text: "What do pets need?", options: ["Love, exercise, nutrition", "Isolation", "Nothing"], correctIndex: 0 } },
    { title: "Neutering", content: "Spaying and neutering prevent overpopulation and suffering.", question: { text: "What does neutering do?", options: ["Prevents overpopulation", "Causes illness", "Is unnecessary"], correctIndex: 0 } },
    { title: "Respect", content: "Respecting animals means seeing them as individuals, not products.", question: { text: "How should we see animals?", options: ["As individuals", "As objects", "As tools"], correctIndex: 0 } },
    { title: "Rights", content: "Animal rights movements fight for freedom from exploitation.", question: { text: "What do animal rights groups want?", options: ["End exploitation", "Expand hunting", "Sell animals"], correctIndex: 0 } },
    { title: "Laws", content: "Laws protect some animals, but enforcement is often weak.", question: { text: "What is a problem with animal laws?", options: ["Weak enforcement", "Strong protection", "No cruelty exists"], correctIndex: 0 } },
    { title: "Vegan lifestyle", content: "Choosing a vegan lifestyle reduces harm to animals.", question: { text: "What lifestyle helps animals most?", options: ["Vegan lifestyle", "Excessive hunting", "Circus shows"], correctIndex: 0 } }
  ],

  earth: [
    { title: "Emissions", content: "Food choices affect greenhouse gas emissions.", question: { text: "What affects emissions?", options: ["Food choices", "Reading books", "Painting walls"], correctIndex: 0 } },
    { title: "Deforestation", content: "Animal agriculture is a major cause of deforestation.", question: { text: "What drives deforestation?", options: ["Animal agriculture", "Recycling", "Planting trees"], correctIndex: 0 } },
    { title: "Plant diet", content: "Eating plants uses fewer resources than eating animals.", question: { text: "Which diet uses fewer resources?", options: ["Plant-based", "Meat-heavy", "Wasteful"], correctIndex: 0 } },
    { title: "Water use", content: "Water is wasted when producing meat compared to plants.", question: { text: "Which uses more water?", options: ["Meat", "Vegetables", "Legumes"], correctIndex: 0 } },
    { title: "Methane", content: "Methane from cows warms the planet.", question: { text: "What gas do cows release?", options: ["Methane", "Oxygen", "Helium"], correctIndex: 0 } },
    { title: "Recycling", content: "Recycling reduces waste and pollution.", question: { text: "What does recycling do?", options: ["Reduces waste", "Increases trash", "Destroys resources"], correctIndex: 0 } },
    { title: "Plastic", content: "Plastic pollution harms oceans and wildlife.", question: { text: "Where does plastic pollution harm?", options: ["Oceans", "Libraries", "Mountains"], correctIndex: 0 } },
    { title: "Renewables", content: "Renewable energy reduces fossil fuel use.", question: { text: "Which reduces fossil fuels?", options: ["Renewables", "Coal", "Oil"], correctIndex: 0 } },
    { title: "Biodiversity", content: "Deforestation reduces biodiversity and oxygen.", question: { text: "What does deforestation reduce?", options: ["Biodiversity", "Pollution", "Plastic"], correctIndex: 0 } },
    { title: "Trees", content: "Planting trees helps absorb CO₂.", question: { text: "What absorbs CO₂?", options: ["Trees", "Cars", "Factories"], correctIndex: 0 } },
    { title: "Overfishing", content: "Overfishing disrupts ecosystems.", question: { text: "What does overfishing disrupt?", options: ["Ecosystems", "Schools", "Forests"], correctIndex: 0 } },
    { title: "Composting", content: "Composting turns waste into soil.", question: { text: "What does composting make?", options: ["Soil", "Plastic", "Metal"], correctIndex: 0 } },
    { title: "Efficiency", content: "Energy efficiency saves resources.", question: { text: "What does efficiency do?", options: ["Saves resources", "Wastes energy", "Breaks machines"], correctIndex: 0 } },
    { title: "Cycling", content: "Using bikes reduces pollution.", question: { text: "What reduces air pollution?", options: ["Cycling", "Driving cars", "Flying planes"], correctIndex: 0 } },
    { title: "Dead zones", content: "Ocean dead zones are caused by pollution.", question: { text: "What causes dead zones?", options: ["Pollution", "Clean water", "Trees"], correctIndex: 0 } },
    { title: "Climate", content: "Climate change increases extreme weather.", question: { text: "What increases storms and floods?", options: ["Climate change", "Planting trees", "Good farming"], correctIndex: 0 } },
    { title: "Local eating", content: "Eating locally reduces transport emissions.", question: { text: "How can we reduce transport emissions?", options: ["Eat locally", "Fly food in", "Ship more"], correctIndex: 0 } },
    { title: "Rainforests", content: "Protecting rainforests preserves biodiversity.", question: { text: "What do rainforests protect?", options: ["Biodiversity", "Plastic", "Concrete"], correctIndex: 0 } },
    { title: "Solar", content: "Solar panels use sunlight for clean energy.", question: { text: "What do solar panels use?", options: ["Sunlight", "Coal", "Gas"], correctIndex: 0 } },
    { title: "Daily actions", content: "Small daily actions matter for sustainability.", question: { text: "What makes sustainability possible?", options: ["Daily actions", "Ignoring waste", "Overusing"], correctIndex: 0 } }
  ],

  health: [
    { title: "Plant diet", content: "A plant-based diet boosts energy and immunity.", question: { text: "What boosts immunity?", options: ["Plant-based diet", "Fast food", "No food"], correctIndex: 0 } },
    { title: "Balanced meals", content: "Balanced meals should include protein, carbs, and fats.", question: { text: "What should meals include?", options: ["Protein, carbs, fats", "Sugar only", "Air"], correctIndex: 0 } },
    { title: "Vitamins", content: "Fruits and vegetables provide vitamins and minerals.", question: { text: "Where do vitamins come from?", options: ["Fruits and vegetables", "Plastic", "Chips"], correctIndex: 0 } },
    { title: "Grains", content: "Whole grains give long-lasting energy.", question: { text: "What gives lasting energy?", options: ["Whole grains", "Candy", "Soda"], correctIndex: 0 } },
    { title: "Protein", content: "Legumes are excellent protein sources.", question: { text: "What provides plant protein?", options: ["Legumes", "Rocks", "Water"], correctIndex: 0 } },
    { title: "Healthy fats", content: "Nuts and seeds contain healthy fats.", question: { text: "Where do healthy fats come from?", options: ["Nuts and seeds", "Plastic", "Oil spills"], correctIndex: 0 } },
    { title: "Hydration", content: "Hydration supports every body function.", question: { text: "What does hydration support?", options: ["Body functions", "Car engines", "TVs"], correctIndex: 0 } },
    { title: "Sleep", content: "Sleep restores energy and mental health.", question: { text: "What restores energy?", options: ["Sleep", "Exhaustion", "Skipping rest"], correctIndex: 0 } },
    { title: "Exercise", content: "Exercise strengthens muscles and the heart.", question: { text: "What strengthens the heart?", options: ["Exercise", "Laziness", "TV"], correctIndex: 0 } },
    { title: "Stress", content: "Stress management is vital for health.", question: { text: "What helps health?", options: ["Managing stress", "More stress", "Ignoring issues"], correctIndex: 0 } },
    { title: "Fiber", content: "Fiber aids digestion and prevents disease.", question: { text: "What helps digestion?", options: ["Fiber", "Sugar", "Oil"], correctIndex: 0 } },
    { title: "B12", content: "Vitamin B12 must be supplemented in vegan diets.", question: { text: "Which vitamin needs supplementing?", options: ["B12", "C", "D"], correctIndex: 0 } },
    { title: "Omega-3", content: "Omega-3s can be obtained from flax and chia.", question: { text: "Where can Omega-3 come from?", options: ["Flax and chia", "Plastic", "Candy"], correctIndex: 0 } },
    { title: "Iron", content: "Iron is found in lentils, beans, and spinach.", question: { text: "Which foods have iron?", options: ["Lentils and spinach", "Sugar", "Soda"], correctIndex: 0 } },
    { title: "Calcium", content: "Calcium is abundant in leafy greens and tofu.", question: { text: "Where can calcium be found?", options: ["Leafy greens and tofu", "Chips", "Plastic"], correctIndex: 0 } },
    { title: "Mindful eating", content: "Mindful eating prevents overeating.", question: { text: "What prevents overeating?", options: ["Mindful eating", "Rushing meals", "Skipping breakfast"], correctIndex: 0 } },
    { title: "Sugar", content: "Too much sugar harms health.", question: { text: "What harms health?", options: ["Excess sugar", "Water", "Fruits"], correctIndex: 0 } },
    { title: "Cooking", content: "Cooking at home helps control nutrition.", question: { text: "What helps control nutrition?", options: ["Cooking at home", "Fast food daily", "Skipping meals"], correctIndex: 0 } },
    { title: "Mental health", content: "Mental health is as important as physical health.", question: { text: "What is as important as physical health?", options: ["Mental health", "Money", "Fashion"], correctIndex: 0 } },
    { title: "Healthy habits", content: "Healthy habits add up to longevity.", question: { text: "What supports longevity?", options: ["Healthy habits", "Smoking", "Junk food"], correctIndex: 0 } }
  ]
};


function renderLessons() {
  Object.keys(lessonsData).forEach(courseKey => {
    const course = document.getElementById(courseKey);
    const lessonList = course.querySelector(".lesson-list");
    lessonList.innerHTML = ""; // clear existing

    lessonsData[courseKey].forEach((lesson, index) => {
      const li = document.createElement("li");
      li.dataset.step = index + 1;
      li.className = index === 0 ? "lesson unlocked" : "lesson locked";

      li.innerHTML = `
        <div class="lesson-title">
    <span class="lesson-icon">${index === 0 ? "🟢" : "🔒"}</span>
    ${lesson.title}
  </div>
  <div class="lesson-content"></div>
      `;

      lessonList.appendChild(li);
    });
  });
}

// Call this once on page load
renderLessons();

  // ===== Show selected course =====
  pathButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const path = btn.dataset.path;
      courses.forEach(c => c.classList.add("hidden"));
      const selectedCourse = document.getElementById(path);
      if (selectedCourse) selectedCourse.classList.remove("hidden");
    });
  });

  // ===== Update lesson icon based on state =====
  function updateLessonIcon(lesson) {
    const icon = lesson.querySelector(".lesson-icon");
    if (!icon) return;

    if (lesson.classList.contains("locked")) icon.textContent = "🔒";
    else if (lesson.classList.contains("unlocked")) icon.textContent = "🟢";
    else if (lesson.classList.contains("completed")) icon.textContent = "✅";
  }

  // ===== Save progress =====
  function saveProgress() {
    const progress = {};
    document.querySelectorAll(".course").forEach(course => {
      const courseId = course.id;
      progress[courseId] = [];
      course.querySelectorAll(".lesson").forEach((lesson, idx) => {
        if (lesson.classList.contains("completed")) progress[courseId].push(idx + 1);
      });
    });
    localStorage.setItem("learningProgress", JSON.stringify(progress));
  }

  // ===== Load progress =====
  function loadProgress() {
    const progress = JSON.parse(localStorage.getItem("learningProgress")) || {};
    for (const courseId in progress) {
      const completedLessons = progress[courseId];
      const course = document.getElementById(courseId);
      if (!course) continue;

      const lessons = course.querySelectorAll(".lesson");
      lessons.forEach((lesson, idx) => {
        if (completedLessons.includes(idx + 1)) {
          lesson.classList.add("completed");
          lesson.classList.remove("locked", "unlocked");
        } else if (idx === completedLessons.length) {
          lesson.classList.remove("locked");
          lesson.classList.add("unlocked");
        }
        updateLessonIcon(lesson);
      });
    }
  }

  // ===== Setup lessons click =====
  function setupLessonClick(courseId) {
    const course = document.getElementById(courseId);
    const lessons = course.querySelectorAll(".lesson");

    lessons.forEach((lesson, idx) => {
      const contentContainer = lesson.querySelector(".lesson-content");

      lesson.addEventListener("click", () => {
        if (!lesson.classList.contains("unlocked")) return;

        // Close other contents in this course
        lessons.forEach(l => {
          if (l !== lesson) {
            const otherContent = l.querySelector(".lesson-content");
            if (otherContent) otherContent.classList.remove("active");
          }
        });

        // Toggle current content
        contentContainer.classList.toggle("active");

        // Fill content if empty
        if (contentContainer.innerHTML.trim() === "") {
          const lessonObj = lessonsData[courseId][idx];

          let optionsHtml = lessonObj.question.options.map((opt, i) => 
            `<label style="display:block; margin-bottom:0.3rem;">
               <input type="radio" name="lesson-${courseId}-${idx}" value="${i}"> ${opt}
             </label>`
          ).join("");

          contentContainer.innerHTML = `
            <p><strong>${lessonObj.question.text}</strong></p>
            ${optionsHtml}
          <button class="submit-answer">Submit Answer</button>
          <div class="feedback" style="margin:0.5rem 0; color:red;"></div>
          <div class="lesson-text" style="display:none; margin-top:0.5rem;">
            <p>${lessonObj.content}</p>
            <button class="complete-btn">I have read it ✅</button>
          </div>
          `;

          // Make radios clickable (don’t trigger lesson toggle)
          const radios = contentContainer.querySelectorAll("input[type=radio]");
          radios.forEach(r => r.addEventListener("click", e => e.stopPropagation()));

          const feedback = contentContainer.querySelector(".feedback");
        const lessonText = contentContainer.querySelector(".lesson-text");
        const submitBtn = contentContainer.querySelector(".submit-answer");

        submitBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const selected = contentContainer.querySelector(`input[name="lesson-${courseId}-${idx}"]:checked`);

          if (!selected) {
            feedback.textContent = "Please select an answer!";
            return;
          }

          if (parseInt(selected.value) !== lessonObj.question.correctIndex) {
            feedback.textContent = "Wrong answer, try again!";
            return;
          }

          // Correct → show lesson content
          feedback.textContent = "";
          lessonText.style.display = "block";
          submitBtn.style.display = "none";
        });

        const completeBtn = contentContainer.querySelector(".complete-btn");
        completeBtn.addEventListener("click", (e) => {
          e.stopPropagation();

          lesson.classList.remove("unlocked");
          lesson.classList.add("completed");
          updateLessonIcon(lesson);

          // Unlock next lesson
          const nextLesson = lessons[idx + 1];
          if (nextLesson) {
            nextLesson.classList.remove("locked");
            nextLesson.classList.add("unlocked");
            updateLessonIcon(nextLesson);
          }

          // Close content after completion
          contentContainer.classList.remove("active");
          contentContainer.innerHTML = "";

          saveProgress();
        });
      }
    });
  });
}

  // Initialize courses
  ["animals", "earth", "health"].forEach(setupLessonClick);

  // Load saved progress
  loadProgress();

  // ===== Reset lessons button =====
  const resetBtn = document.getElementById("resetLessonsBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      localStorage.removeItem("learningProgress");

      document.querySelectorAll(".lesson").forEach(lesson => {
        lesson.classList.remove("completed", "unlocked");
        lesson.classList.add("locked");
        updateLessonIcon(lesson);
      });

      document.querySelectorAll(".course").forEach(course => {
        const firstLesson = course.querySelector(".lesson");
        if (firstLesson) {
          firstLesson.classList.remove("locked");
          firstLesson.classList.add("unlocked");
          updateLessonIcon(firstLesson);
        }
      });

      alert("All lesson progress has been reset!");
    });
  }

});