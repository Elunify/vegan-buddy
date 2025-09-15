// Function to update profile counters
function updateProfileCounters() {
  // Get data from localStorage
  const savedLevel = parseInt(localStorage.getItem("currentlevel")) || 0;
  const savedStreak = parseInt(localStorage.getItem("streak")) || 0;
  
  // Update the HTML elements
  const levelEl = document.getElementById("currentLevel");
  const streakEl = document.getElementById("streak-counter");
  
  if (levelEl) levelEl.textContent = savedLevel;
  if (streakEl) streakEl.textContent = savedStreak;
}

// Call the function when page loads
window.addEventListener("DOMContentLoaded", updateProfileCounters);
