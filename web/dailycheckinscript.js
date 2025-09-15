document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = 'mainpage.html'; // Or wherever you want the back button to lead
    });

    function handleSubmit() {
  // Get checked inputs
  const quizAnswer = document.querySelector('input[name="quiz"]:checked');
  const mealAnswer = document.querySelector('input[name="meals"]:checked');

  // Make sure both are answered
  if (!quizAnswer || !mealAnswer) {
    alert("Please answer all questions before proceeding!");
    return;
  }

  // Save answers to localStorage
  const answers = JSON.parse(localStorage.getItem("veganBuddyAnswers")) || {};
  answers.dailyQuiz = quizAnswer.value;
  answers.dailyMeal = mealAnswer.value;
  localStorage.setItem("veganBuddyAnswers", JSON.stringify(answers));

  // Redirect to mainpage
  window.location.href = "mainpage.html";
}
