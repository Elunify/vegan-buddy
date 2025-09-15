document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = 'mainpage.html'; // Or wherever you want the back button to lead
    });

    // Constants for comparisons
    const sheetsPerTree = 8000;
    const forestAreaPerTree = 10;
    const showerWaterUse = 65;
    const co2PerCarHour = 10;

    // Load saved impact from localStorage or fallback default
    const savedImpact = JSON.parse(localStorage.getItem('savedImpact')) || {
      animals: 0,
      forest: 0,
      water: 0,
      co2: 0,
      donated: 0,
    };

    // Helper function for comparison text
    function generateComparisonText(animals, forest, water, co2) {
      const treesSaved = forest / forestAreaPerTree;
      const paperEquivalent = Math.round(treesSaved * sheetsPerTree);
      const showerEquivalent = Math.round(water / showerWaterUse);
      const carTimeEquivalent = (co2 / co2PerCarHour).toFixed(1);

      return `
        That's equivalent to:<br>
        • Not using ${paperEquivalent} sheets of paper<br>
        • Saving ${showerEquivalent} showers worth of water<br>
        • Avoiding ${carTimeEquivalent} hours spent in a car
      `;
    }

     const answers = JSON.parse(localStorage.getItem("veganBuddyAnswers")) || {};

    document.getElementById("profileName").textContent = answers.profileName || "-";
    if (answers.year && answers.month && answers.day) {
        document.getElementById("dob").textContent = `${answers.day}/${answers.month}/${answers.year}`;
    }
    
    // Goals
    const goalsList = document.getElementById("goalsList");
    if (answers.goals && answers.goals.length > 0) {
        answers.goals.forEach(goal => {
            const li = document.createElement("li");
            li.textContent = goal;
            goalsList.appendChild(li);
        });
    }

    // Health issues
    const healthList = document.getElementById("healthIssuesList");
    if (answers.healthIssues && answers.healthIssues.length > 0) {
        answers.healthIssues.forEach(h => {
            const li = document.createElement("li");
            li.textContent = h;
            healthList.appendChild(li);
        });
    }

    // Digestion details
    const digestionList = document.getElementById("digestionDetailsList");
    if (answers.digestionDetails && answers.digestionDetails.length > 0) {
        answers.digestionDetails.forEach(d => {
            const li = document.createElement("li");
            li.textContent = d;
            digestionList.appendChild(li);
        });
    }

    // Allergies / Dislikes
    const allergyList = document.getElementById("allergiesList");
    if (answers.dislikes && answers.dislikes.length > 0) {
        answers.dislikes.forEach(a => {
            const li = document.createElement("li");
            li.textContent = a;
            allergyList.appendChild(li);
        });
    }

    // Profile photo
    const profilePhoto = document.getElementById("profilePhoto");
    if (answers.profilePhoto) profilePhoto.src = answers.profilePhoto;

    // Pet details
    document.getElementById("petName").textContent = answers.petName || "-";
    const petPhoto = document.getElementById("petPhoto");
    if (answers.petPhoto) petPhoto.src = answers.petPhoto;
  
    document.querySelectorAll(".details-list").forEach(list => {
  if (!list.hasChildNodes() || list.children.length === 0) {
    // hide the title and the list together
    list.previousElementSibling.style.display = "none"; // hide the <div class="section-title">
    list.style.display = "none"; // hide the empty <ul>
  }
});


