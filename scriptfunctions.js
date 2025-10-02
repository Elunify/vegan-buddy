import { supabase } from "./supabaseClient.js";
import { DailyCheckInPool } from "./scriptpools.js"; // pool file
import { HealthIssuesPool } from "./scriptpools.js";
import { extralessonsData } from "./scriptpools.js";
import { loadProfile } from './scriptreads.js';
import { openChatWindow } from './scriptreads.js';

// Helper: get current logged-in user
async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error("supabase.auth.getUser error:", error);
    return null;
  }
  return data?.user || null;
}

//characters random popup:
function showRandomAvatar() {
  const avatars = ['elunaThought','eluneThought','petThought'];
  const choice = avatars[Math.floor(Math.random() * avatars.length)];
  document.getElementById('avatarRow').classList.remove('hidden');
  document.querySelectorAll('.thought-bubble').forEach(b => b.style.display = 'none');
  document.getElementById(choice).style.display = 'block';
}

// First after 1 hour, then repeat every X hours
setTimeout(() => {
  showRandomAvatar();
  setInterval(showRandomAvatar, 1000 * 60 * 60 * 3); // every 3 hours
}, 1000 * 60 * 60);

// ------- Daily CheckIn----------
// ------- Daily CheckIn----------
// ------- Daily CheckIn----------
// ------- Daily CheckIn ----------

let yesterdayQuiz = []; // top-level scope

document.addEventListener("DOMContentLoaded", async () => {
    checkAndToggleMentorUI();
    loadMentors();


  // 1️⃣ Get current logged-in user
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("Not logged in:", userError);
    return;
  }

  // 2️⃣ Fetch profile
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profileError || !profile) {
    console.error("Error fetching profile:", profileError);
    return;
  }

  let userData = profile;

  // Ensure goals exist and are valid
if (!userData.goals || !Array.isArray(userData.goals) || userData.goals.length === 0) {
  userData.goals = Object.keys(DailyCheckInPool.goals);
}
// Filter out goals without lessons
const validGoals = userData.goals.filter(goal => DailyCheckInPool.goals[goal] && DailyCheckInPool.goals[goal].length > 0);
if (validGoals.length === 0) {
  console.error("User has no valid goals with lessons.");
  return;
}

const todayGoalIndex = userData.day_counter % validGoals.length;
const todayGoal = validGoals[todayGoalIndex];

if (!userData.goal_progress) userData.goal_progress = {};
const todayLessonIndex = userData.goal_progress[todayGoal] ?? 0;

// Bound check
const lessonsForGoal = DailyCheckInPool.goals[todayGoal];

if (!lessonsForGoal || lessonsForGoal.length === 0) {
  console.warn(`No lessons for goal: ${todayGoal}. Picking from all available goals.`);

  // Flatten all lessons from all goals
  const allLessons = Object.values(DailyCheckInPool.goals).flat();
  const fallbackLessonIndex = userData.day_counter % allLessons.length;
  const todayLesson = allLessons[fallbackLessonIndex];

  document.getElementById("dailyLessonDCI").innerHTML = `
    <p class="lesson-text">${todayLesson.lesson}</p>
  `;
} else {
  // Normal case
  if (todayLessonIndex >= lessonsForGoal.length) {
    console.error(`Lesson index out of bounds for goal: ${todayGoal}`);
    return;
  }
  const todayLesson = lessonsForGoal[todayLessonIndex];

  document.getElementById("dailyLessonDCI").innerHTML = `
    <p class="lesson-text">${todayLesson.lesson}</p>
  `;
}

  // 4️⃣ Yesterday’s quiz
const quizContainer = document.getElementById("quizDCI");

// If last_lesson exists, show its quiz
if (userData.last_lesson) {
  const { goal: yesterdayGoal, lessonIndex: yesterdayLessonIndex } = userData.last_lesson;
  const yesterdayQuiz = DailyCheckInPool.goals[yesterdayGoal][yesterdayLessonIndex].quiz;

  quizContainer.style.display = "block"; // make sure it's visible
  quizContainer.innerHTML = `<label class="bigLabelDCI">Last lesson's quiz:</label>`;

  yesterdayQuiz.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "quiz-itemDCI";
    div.innerHTML = `
      <p class="quiz-questionDCI">${q.question}</p>
      <div class="quiz-optionsDCI">
        ${q.options.map(opt => `
          <label class="checkbox-labelDCI">
            <input type="radio" name="q${i}" value="${opt}"> ${opt}
          </label>`).join("")}
      </div>
    `;
    quizContainer.appendChild(div);
  });
} else {
  // first day, hide quiz
  quizContainer.style.display = "none";
}

  // 5️⃣ Handle submit
  window.handleSubmit = async function () {
  // Only do quiz check if day_counter > 0
  if (userData.day_counter > 0) {
    let allAnswered = true;
    let allCorrect = true;

    yesterdayQuiz.forEach((q, i) => {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (!selected) {
        allAnswered = false;
      } else if (selected.value !== q.answer) {
        allCorrect = false;
      }
    });

    if (!allAnswered) {
      alert("Please answer all quiz questions!");
      return;
    }
    if (!allCorrect) {
      alert("Some answers are incorrect. Try again!");
      return;
    }
  }

  // Meal check (always required)
  const mealAnswer = document.querySelector('input[name="mealsDCI"]:checked');
  if (!mealAnswer) {
    alert("Please select your diet from yesterday!");
    return;
  }

    // 6️⃣ Impact calculation
    const mealValue = parseInt(mealAnswer.value);
    let impactMultiplier = [0, 0.3, 0.7, 1][mealValue - 1];

    const baseImpact = {
      animals_saved: 0.7,
      forest_saved: 0.5,
      water_saved: 660,
      co2_saved: 4,
      donated: 0,
    };

    const impactIncrement = {
      animals_saved: baseImpact.animals_saved * impactMultiplier,
      forest_saved: baseImpact.forest_saved * impactMultiplier,
      water_saved: baseImpact.water_saved * impactMultiplier,
      co2_saved: baseImpact.co2_saved * impactMultiplier,
      donated: 0,
    };

    // 7️⃣ Update profile
    const updatedProfile = {
      day_counter: userData.day_counter + 1,
      streak: (userData.streak || 0) + 1,
      total_xp: (userData.total_xp || 0) + 30,
      goal_progress: {
        ...userData.goal_progress,
        [todayGoal]:
          (todayLessonIndex + 1) % DailyCheckInPool.goals[todayGoal].length,
      },
    last_lesson: {
    goal: todayGoal,
    lessonIndex: todayLessonIndex
    },
      animals_saved: (userData.animals_saved || 0) + impactIncrement.animals_saved,
      forest_saved: (userData.forest_saved || 0) + impactIncrement.forest_saved,
      water_saved: (userData.water_saved || 0) + impactIncrement.water_saved,
      co2_saved: (userData.co2_saved || 0) + impactIncrement.co2_saved,
      donated: (userData.donated || 0),
      last_checkin_date: new Date().toISOString().split("T")[0],
    };

    const { error: updateError } = await supabase
      .from("profiles")
      .update(updatedProfile)
      .eq("id", user.id);

    if (updateError) {
      console.error("Update failed:", updateError);
      alert("Something went wrong. Please try again.");
      return;
    }

    // Update global impact
    await addToGlobalImpact(impactIncrement);

    // Refresh the home page content
await loadProfile();

    // Hide Daily Check-in container
document.getElementById("dailycheck-in").classList.add("hidden");

// Show Home container
document.getElementById("home").classList.remove("hidden");
  };
});

// 🛠️ Global impact RPC
async function addToGlobalImpact(change) {
  const { error } = await supabase.rpc("add_global_impact", {
    add_animals: change.animals_saved || 0,
    add_forest: change.forest_saved || 0,
    add_water: change.water_saved || 0,
    add_co2: change.co2_saved || 0,
    add_donated: change.donated || 0,
  });
  if (error) console.error("Global impact update failed:", error);
}

// ------- Daily CheckIn END----------
// ------- Daily CheckIn END----------
// ------- Daily CheckIn END----------
// ------- Daily CheckIn END----------


// ------- Health issues----------
// ------- Health issues----------
export async function initHealthPaths() {
  const user = await getCurrentUser();
  if (!user) return;

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();
  if (!profile) return;

  const userData = profile;
  const healthIssues = userData.health_issues || []; // array of user's health issues

  // Grab elements
  const title = document.querySelector(".YourHealthIssueTitle");
  const allButtons = document.querySelectorAll("#healthissues .path-btn");
  const allCourses = document.querySelectorAll("#healthissues .course");

  // --- RESET STATE ---
  if (title) title.classList.remove("hidden");          // always show title first
  allButtons.forEach(b => b.classList.add("hidden"));   // hide all buttons initially
  allCourses.forEach(c => c.classList.add("hidden"));   // hide all courses initially

  // Show only the buttons for the user's health issues
  allButtons.forEach(btn => {
    if (healthIssues.includes(btn.dataset.path)) {
      btn.classList.remove("hidden");
    }
  });

  // If user has only 1 health issue → auto-click it and hide title/buttons
  if (healthIssues.length === 1) {
    const btn = document.querySelector(
      `#healthissues .path-btn[data-path="${healthIssues[0]}"]`
    );
    if (btn) {
      // Hide title + buttons section
      if (title) title.classList.add("hidden");
      allButtons.forEach(b => b.classList.add("hidden"));

      // Auto-open the single health issue
      btn.click();
    }
  }

  // Wire click events to show selected course
  allButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const path = btn.dataset.path;

      // Hide all courses first
      allCourses.forEach(c => c.classList.add("hidden"));

      // Show selected course
      const selectedCourse = document.getElementById(path);
      if (selectedCourse) selectedCourse.classList.remove("hidden");

      // Render lessons for this course (from your lessonsData for health)
      renderLessonsForHealthIssue(
  path,
  Array.isArray(userData.health_progress?.[path]) ? userData.health_progress[path] : [],
  userData,
  user.id
);
    });
  });

  // If user has only 1 health issue → auto-click it
  if (healthIssues.length === 1) {
    const btn = document.querySelector(`#healthissues .path-btn[data-path="${healthIssues[0]}"]`);
    if (btn) btn.click();
  }
}

// Render lessons for a specific health issue
function renderLessonsForHealthIssue(issue, completedLessons = [], userData, userId) {

  const course = document.getElementById(issue);
  if (!course) return;
  const lessonList = course.querySelector(".lesson-list");
  lessonList.innerHTML = "";

  const lessons = HealthIssuesPool.health.filter(l => l.issue === issue);

  lessons.forEach((lesson, index) => {
    const li = document.createElement("li");

    // Determine class
    let className = "lesson locked";
    if (completedLessons.includes(index + 1)) {
      className = "lesson completed";
    } else if (completedLessons.includes(index) || index === 0) {
      // Unlock the next lesson after the last completed or first lesson
      className = "lesson unlocked";
    }

    li.dataset.step = index + 1;
    li.className = className;

    li.innerHTML = `
      <div class="lesson-title">
        <span class="lesson-icon">${
          li.classList.contains("completed") ? "✅" :
          li.classList.contains("unlocked") ? "🟢" : "🔒"
        }</span>
        ${lesson.title}
      </div>
      <div class="lesson-content"></div>
    `;
    lessonList.appendChild(li);

    setupLessonClickForHealth(li, lesson, index, issue, userData, userId);
  });
}


initHealthPaths();


function setupLessonClickForHealth(li, lesson, index, issue, userData, userId) {
  const lessonTab = document.getElementById("healthylesson-tab");
  const lessonTitle = document.getElementById("lesson-title");
  const lessonContent = document.getElementById("lesson-content");
  const quizContainer = document.getElementById("quiz-container");

  li.addEventListener("click", () => {
    if (li.classList.contains("locked")) return; // locked lessons cannot be opened

    // Fill lesson content
    lessonTitle.textContent = lesson.title;
    lessonContent.innerHTML = `<p>${lesson.content}</p>`;

    // Start Quiz button
    const startQuizBtn = document.createElement("button");
    startQuizBtn.textContent = "Start Quiz 📝";
    startQuizBtn.id = "start-quiz-btn";
    lessonContent.appendChild(startQuizBtn);

    quizContainer.innerHTML = "";

    // Show lesson tab and hide main health tab
    lessonTab.classList.remove("hidden");
    document.getElementById("healthissues").classList.add("hidden");

    // Start Quiz click
    startQuizBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      quizContainer.classList.remove("hidden");
      quizContainer.innerHTML = `
        <p><strong>Quiz:</strong> ${lesson.quiz.question}</p>
        ${lesson.quiz.options
          .map((opt, i) => `<button class="quiz-option" data-index="${i}">${opt}</button>`)
          .join("")}
        <div id="quiz-feedback"></div>
      `;

      // Quiz option click
quizContainer.querySelectorAll(".quiz-option").forEach((answerBtn) => {
  answerBtn.addEventListener("click", async (e) => {
    const chosenIndex = parseInt(answerBtn.dataset.index, 10);
    const feedback = quizContainer.querySelector("#quiz-feedback");

    if (chosenIndex === lesson.quiz.answer) {
      feedback.textContent = "✅ Correct! Lesson completed.";
      feedback.style.color = "green";

      // Initialize progress
      if (!userData.health_progress) userData.health_progress = {};
      if (!userData.health_progress[issue]) userData.health_progress[issue] = [];
      if (!userData.health_progress[issue].includes(index + 1)) {
        userData.health_progress[issue].push(index + 1);

        // Update Supabase
        const { error } = await supabase
          .from("profiles")
          .update({
            total_xp: (userData.total_xp || 0) + 2,
            health_progress: userData.health_progress
          })
          .eq("id", userId);
        if (error) console.error("Failed to update lesson completion:", error);

        // Rerender course lessons with updated progress
        renderLessonsForHealthIssue(
          issue,
          userData.health_progress[issue],
          userData,
          userId
        );

        // ✅ Delay before switching back
        setTimeout(() => {
          // Hide lesson tab and show main tab
          lessonTab.classList.add("hidden");
          const mainTab = document.getElementById("healthissues");
          mainTab.classList.remove("hidden");

          // Scroll to next lesson
          const courseList = document.querySelector(`#${CSS.escape(issue)} .lesson-list`);
          const nextLesson = courseList.querySelectorAll(".lesson")[index + 1];
          if (nextLesson) nextLesson.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 1300); // 1000 ms = 1 second
      }
    } else {
      feedback.textContent = "❌ Incorrect. Try again!";
      feedback.style.color = "red";
    }
  });
});   
    });
  });
}

// -------- EXTRA LESSONS
// -------- EXTRA LESSONS
// -------- EXTRA LESSONS
// -------- EXTRA LESSONS
// -------- EXTRA LESSONS

// -------- EXTRA LESSONS

function renderExtraLessons() {
  Object.keys(extralessonsData).forEach(courseKey => {
    const course = document.getElementById(courseKey);
    if (!course) return;

    const lessonList = course.querySelector(".extralesson-list");
    if (!lessonList) return;

    lessonList.innerHTML = ""; // clear

    extralessonsData[courseKey].forEach((lesson, index) => {
      const li = document.createElement("li");
      li.dataset.step = index + 1;
      li.className = index === 0 ? "extralesson unlocked" : "extralesson locked";
      li.innerHTML = `
        <div class="extralesson-title">
          <span class="extralesson-icon">${index === 0 ? "🟢" : "🔒"}</span>
          ${lesson.title}
        </div>
        <div class="extralesson-content"></div>
      `;
      lessonList.appendChild(li);
    });
  });
}

function setupExtraLessonClicks() {
  ["animals", "earth", "health"].forEach(courseId => {
    const course = document.getElementById(courseId);
    if (!course) return;
    const lessons = course.querySelectorAll(".extralesson");

    lessons.forEach((lesson, idx) => {
      const contentContainer = lesson.querySelector(".extralesson-content");
      const title = lesson.querySelector(".extralesson-title");
      if (!title) return;

      title.addEventListener("click", () => {
        if (lesson.classList.contains("locked")) return;

        // Close others
        lessons.forEach(l => {
          if (l !== lesson) {
            l.querySelector(".extralesson-content")?.classList.remove("active");
          }
        });

        contentContainer.classList.toggle("active");

        // Determine which question to show
        let questionObj = null;
        if (idx > 0) { // first lesson has no question
          questionObj = extralessonsData[courseId][idx - 1].question; // take previous lesson's question
        }

        if (contentContainer.innerHTML.trim() === "") {
          let innerHTML = "";

          if (questionObj) {
            innerHTML += `
              <p><strong>${questionObj.text}</strong></p>
              ${questionObj.options.map((opt, i) => `
                <label style="display:block; margin-bottom:0.3rem;">
                  <input type="radio" name="extraquiz-${courseId}-${idx}" value="${i}"> ${opt}
                </label>`).join("")}
              <button class="extraquiz-submit">Submit Answer</button>
              <div class="extraquiz-feedback" style="margin:0.5rem 0; color:red;"></div>
            `;
          }

          innerHTML += `
            <div class="extralesson-text" style="margin-top:0.5rem;">
              <p>${extralessonsData[courseId][idx].content}</p>
              <button class="complete-btn">I have read it ✅</button>
            </div>
          `;

          contentContainer.innerHTML = innerHTML;

          // Handle quiz submit (if question exists)
          if (questionObj) {
            const submitBtn = contentContainer.querySelector(".extraquiz-submit");
            const feedback = contentContainer.querySelector(".extraquiz-feedback");
            const lessonText = contentContainer.querySelector(".extralesson-text");

            submitBtn.addEventListener("click", e => {
              e.stopPropagation();
              const selected = contentContainer.querySelector(`input[name="extraquiz-${courseId}-${idx}"]:checked`);
              if (!selected) { feedback.textContent = "Please select an answer!"; return; }
              if (parseInt(selected.value) !== questionObj.correctIndex) { feedback.textContent = "Wrong answer, try again!"; return; }

              feedback.textContent = "";
              lessonText.style.display = "block";
              submitBtn.style.display = "none";
            });
          }

          // Complete button (works for all lessons)
          const completeBtn = contentContainer.querySelector(".complete-btn");
          completeBtn.addEventListener("click", async e => {
            e.stopPropagation();

            lesson.classList.remove("unlocked");
            lesson.classList.add("completed");

            // Save progress
            await saveExtraLessonProgress();

            // Re-render the course immediately
            renderExtraLessons();
            setupExtraLessonClicks();
            await loadExtraLessonProgress();

            // Scroll to next lesson
            const nextLesson = document.querySelector(`#${CSS.escape(courseId)} .extralesson[data-step="${idx + 2}"]`);
            if (nextLesson) nextLesson.scrollIntoView({ behavior: "smooth", block: "center" });

            // Close content after completion
            contentContainer.classList.remove("active");
            contentContainer.innerHTML = "";
          });
        }
      });
    });
  });
}

// Re-render the course immediately
            renderExtraLessons();       // refresh <li> elements
            setupExtraLessonClicks();   // re-add click handlers
            await loadExtraLessonProgress(); // apply updated progress

async function saveExtraLessonProgress() {
  const user = await getCurrentUser();
  if (!user) return;

  // Fetch current progress and XP
  const { data: profileData, error: fetchError } = await supabase
    .from("profiles")
    .select("extra_lesson, total_xp")
    .eq("id", user.id)
    .single();

  if (fetchError) { console.error(fetchError); return; }

  const previousProgress = profileData?.extra_lesson || {};
  let totalXp = profileData?.total_xp || 0;

  const progress = {};
  let newLessonsCompleted = 0;

  Object.keys(extralessonsData).forEach(courseId => {
    progress[courseId] = [];
    const lessons = document.querySelectorAll(`#${courseId} .extralesson`);
    lessons.forEach((lesson, idx) => {
      if (lesson.classList.contains("completed")) {
        progress[courseId].push(idx + 1);

        // Count only new completions to add XP
        if (!previousProgress[courseId] || !previousProgress[courseId].includes(idx + 1)) {
          newLessonsCompleted++;
        }
      }
    });
  });

  // Add +2 XP for each new completed lesson
  totalXp += newLessonsCompleted * 2;

  const { error } = await supabase
    .from("profiles")
    .update({ extra_lesson: progress, total_xp: totalXp })
    .eq("id", user.id);

  if (error) console.error("Error saving extra lesson progress:", error);
  loadProfile();
}


async function loadExtraLessonProgress() {
  const user = await getCurrentUser();
  if (!user) return;

  const { data, error } = await supabase
    .from("profiles")
    .select("extra_lesson")
    .eq("id", user.id)
    .single();

  if (error) { console.error(error); return; }

  const progress = data?.extra_lesson || {};

  Object.keys(progress).forEach(courseId => {
    const lessons = document.querySelectorAll(`#${courseId} .extralesson`);
    const completedLessons = progress[courseId] || [];
    lessons.forEach((lesson, idx) => {
      if (completedLessons.includes(idx + 1)) lesson.className = "extralesson completed";
      else if (idx === 0 || completedLessons.includes(idx)) lesson.className = "extralesson unlocked";
      else lesson.className = "extralesson locked";
      lesson.querySelector(".extralesson-icon").textContent = lesson.classList.contains("completed") ? "✅" : lesson.classList.contains("unlocked") ? "🟢" : "🔒";
    });
  });
}

// Wire buttons to show/hide courses
document.querySelectorAll(".learning-path-buttons .path-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const path = btn.dataset.path;
    document.querySelectorAll(".course").forEach(c => c.classList.add("hidden"));
    document.getElementById(path)?.classList.remove("hidden");
  });
});


// Recipes
// Recipes
// Recipes
// Recipes
// Recipes

// Constants for comparisons
const sheetsPerTree = 8000;
const forestAreaPerTree = 10; // m²
const showerWaterUse = 65; // liters
const co2PerCarHour = 10; // kg

function injectComparisonSentences(profile) {
  const animals = Math.round(profile.animals_saved || 0);
  const forest  = Math.round(profile.forest_saved || 0);
  const water   = Math.round(profile.water_saved || 0);
  const co2     = Math.round(profile.co2_saved || 0);

  // Calculate equivalents
  const treesSaved = forest / forestAreaPerTree;
  const paperEquivalent = Math.round(treesSaved * sheetsPerTree);
  const showerEquivalent = Math.round(water / showerWaterUse);
  const carTimeEquivalent = (co2 / co2PerCarHour).toFixed(1);

  // Inject into separate blocks with highlighted values
document.getElementById("animalsSentence").innerHTML =
  `Because of you, <span class="highlight">${animals}</span> animals are safe — imagine them as happy friends roaming, swimming, and enjoying life freely!`;

document.getElementById("forestSentence").innerHTML =
  `With your choices, you’ve protected <span class="highlight">${forest}</span> m² of forest — that’s like saving <span class="highlight">${paperEquivalent}</span> sheets of paper from ever being used!`;

document.getElementById("waterSentence").innerHTML =
  `By choosing plant-based meals, you’ve saved <span class="highlight">${water}</span> liters of water — enough for <span class="highlight">${showerEquivalent}</span> refreshing showers!`;

document.getElementById("co2Sentence").innerHTML =
  `Your actions cut down <span class="highlight">${co2}</span> kg of CO₂ emissions — the same as avoiding <span class="highlight">${carTimeEquivalent}</span> hours of car travel!`;
}

// 🔥 load profile first, then inject
loadProfile().then(profile => {
  if (profile) {
    injectComparisonSentences(profile);
  }
});

document.getElementById('calculateImpactBtn').addEventListener('click', () => {
  const years = parseInt(document.getElementById('years').value) || 0;
  const months = parseInt(document.getElementById('months').value) || 0;
  const totalMonths = years * 12 + months;

  // Impact per month constants
  const animalsSavedPerMonth = 21;
  const forestSavedPerMonth = 15; // m²
  const waterSavedPerMonth = 2000; // liters
  const co2SavedPerMonth = 120; // kg

  // Calculate total impact
  const animalsSaved = animalsSavedPerMonth * totalMonths;
  const forestSaved = forestSavedPerMonth * totalMonths;
  const waterSaved = waterSavedPerMonth * totalMonths;
  const co2Saved = co2SavedPerMonth * totalMonths;

  // Inject results and show container
  document.getElementById('calcAnimals').textContent = animalsSaved;
  document.getElementById('calcForest').textContent = forestSaved;
  document.getElementById('calcWater').textContent = waterSaved;
  document.getElementById('calcCO2').textContent = co2Saved;

  document.getElementById('impactResults').classList.remove('hidden');
});

// --- MENTORSHIP ---
// --- MENTORSHIP ---
// --- MENTORSHIP ---
// --- MENTORSHIP ---

// --- Show popup ---
const applyBtn = document.getElementById("applyMentorBtn");

applyBtn.addEventListener("click", () => {
  document.getElementById("mentor-popup").classList.remove("mentor-hidden");
});


// --- Cancel popup ---
document.getElementById("mentor-cancel").addEventListener("click", () => {
  document.getElementById("mentor-popup").classList.add("mentor-hidden");
});

// --- Submit handler ---
const mentorSubmitBtn = document.getElementById("mentor-submit");

mentorSubmitBtn.addEventListener("click", async () => {
  mentorSubmitBtn.disabled = true; // disable right away

  const years = document.getElementById("mentor-years").value;

  if (years === "" || isNaN(years)) {
    alert("Please enter how many years you’ve been vegan.");
    mentorSubmitBtn.disabled = false; // re-enable on error
    return;
  }

  // 1. Get logged-in user
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    alert("You must be logged in.");
    mentorSubmitBtn.disabled = false;
    return;
  }

  // Fetch their profile row
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("name, profile_photo, email")
    .eq("id", user.id)
    .single();

  if (profileError) {
    console.error(profileError);
    mentorSubmitBtn.disabled = false;
  }

  // Insert into mentors
  const { error: insertError } = await supabase
    .from("mentors")
    .insert({
      user_id: user.id,
      name: profile?.name,
      profile_photo: profile?.profile_photo || "",
      email: profile?.email,
      years_vegan: parseInt(years, 10)
    });

  if (insertError) {
    console.error(insertError);
    alert("Something went wrong while saving.");
    mentorSubmitBtn.disabled = false; // re-enable on failure
    return;
  }

  alert("Mentor application submitted!");
  loadMentors();
  checkAndToggleMentorUI();
  document.getElementById("mentor-popup").classList.add("mentor-hidden");

  // Optionally keep it disabled permanently after success:
  // mentorSubmitBtn.disabled = true;
  // Or re-enable if you want users to be able to try again:
  mentorSubmitBtn.disabled = false;
});


async function loadMentors() {
   const { data: { user } } = await supabase.auth.getUser();
  const { data: mentorRecord } = await supabase
    .from("mentors")
    .select("*")
    .eq("user_id", user.id)
    .maybeSingle();

  const isMentor = !!mentorRecord;
  const mentorsList = document.getElementById("mentorsList");
  mentorsList.innerHTML = "<li>Loading mentors...</li>";

  const { data: mentors, error } = await supabase
    .from("mentors")
    .select("id, user_id, name, profile_photo, years_vegan");

  if (error) {
    console.error(error);
    mentorsList.innerHTML = "<li>Error loading mentors.</li>";
    return;
  }

  mentorsList.innerHTML = "";

  mentors.forEach((mentor) => { 
    const li = document.createElement("li");
    li.className = "mentor-item";

    li.innerHTML = `
      <img src="${mentor.profile_photo}" alt="${mentor.name}" class="mentor-photo">
      <div class="mentor-info">
        <p class="mentor-name">${mentor.name}</p>
        <p class="mentor-years">${mentor.years_vegan} years vegan</p>
      </div>
      <button class="mentor-message-btn" data-id="${mentor.id}">Message</button>
    `;

    mentorsList.appendChild(li);

  

    // Select the button **inside this li**
  const msgBtn = li.querySelector(".mentor-message-btn");
  msgBtn.addEventListener("click", () => {
    // pass the mentor as "friend" to your existing function
    startChatWithMentor(mentor);
  });

  // Hide button if current user is a mentor
  if (isMentor) {
    msgBtn.style.display = "none";
  }
  });
}

async function checkAndToggleMentorUI() {
  // 1. Get current logged-in user
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("No logged-in user or error:", userError);
    return;
  }

  const userId = user.id;

  // 2. Check if user exists in mentors table
  const { data: mentorRecord, error: mentorError } = await supabase
    .from("mentors")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle(); // get only one record

  if (mentorError && mentorError.code !== "PGRST116") { // ignore "no rows" error
    console.error("Error checking mentor:", mentorError);
    return;
  }

  const isMentor = !!mentorRecord;

  // 3. Show/hide sections based on mentor status
  const applyBtn = document.getElementById("applyMentorBtn");
  const alreadyMentorSection = document.getElementById("alrdymentor");
  const connectwithmentor = document.getElementById("ConnectWithAMentor");


  if (isMentor) {
    applyBtn.style.display = "none";              // hide apply button
    alreadyMentorSection.style.display = "flex";  // show mentor section
    connectwithmentor.style.display = "none";

  } else {
    applyBtn.style.display = "inline-block";      // show apply button
    alreadyMentorSection.style.display = "none";  // hide mentor section
  }

  // 4. Handle "End mentorship" button click
  const endBtn = document.getElementById("endmentorship");
  endBtn.addEventListener("click", async () => {
    const { error } = await supabase
      .from("mentors")
      .delete()
      .eq("user_id", userId);

    if (error) {
      console.error(error);
      alert("Failed to end mentorship.");
      return;
    }

    alert("Mentorship ended.");
    // Update UI
    applyBtn.style.display = "inline-block";
    alreadyMentorSection.style.display = "none";
    loadMentors();
  });
}


async function startChatWithMentor(mentor) {
    // 1. Get logged-in user
  const { data: { user: currentUser }, error } = await supabase.auth.getUser();

  if (error || !currentUser) {
    alert("You must be logged in to start a chat.");
    return;
  }

  if (!mentor || !mentor.user_id) {
    alert("Cannot start chat: mentor user ID is missing.");
    return;
  }

  try {
    // 2. Check if chat already exists
    const orQuery = `and(user1_id.eq.${currentUser.id},user2_id.eq.${mentor.user_id}),and(user1_id.eq.${mentor.user_id},user2_id.eq.${currentUser.id})`;

    const { data: existingChats, error: chatError } = await supabase
      .from('chats')
      .select('*')
      .or(orQuery)
      .limit(1);

    if (chatError) {
      console.error("Error checking existing chat:", chatError);
      return;
    }

    let chatId = existingChats?.[0]?.id;

    // 3. If no chat exists, create one
    if (!chatId) {
      const { data: newChat, error: insertError } = await supabase
        .from('chats')
        .insert({
          user1_id: currentUser.id,
          user2_id: mentor.user_id,
          user1_name: currentUser.user_metadata?.name || currentUser.email,
          user2_name: mentor.name,
          user1_profile_photo: currentUser.user_metadata?.avatar_url || "",
          user2_profile_photo: mentor.profile_photo || "",
        })
        .select('id')
        .single();

      if (insertError) {
        return;
      }

      chatId = newChat.id;
    }

    // 4. Open the chat window
    openChatWindow(chatId, mentor);

  } catch (err) {
  }
}

