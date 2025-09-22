document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".main-tab");
  const tabContents = document.querySelectorAll(".main-tab-content");

  if (tabs.length === 0 || tabContents.length === 0) return; // safety check

  // Function to switch main tabs
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Hide all tab contents safely
      tabContents.forEach(content => {
        if (content) content.style.display = "none";
      });

      // Show selected tab content safely
      const tabId = tab.getAttribute("data-tab");
      const selectedContent = document.getElementById(tabId);
      if (selectedContent) {
        selectedContent.style.display = "block";
      }

      // Update upload visibility only for Current Participants
      if (tabId === "current-participants") {
        updateUploadVisibility();
      }
    });
  });

  // Show default tab
  const defaultTab = tabs[0];
  if (defaultTab) defaultTab.click();

  const uploadBtn = document.getElementById("uploadBtn");
  const voteBtn = document.getElementById("voteBtn");

  if (!uploadBtn || !voteBtn) return;

  const today = new Date().getDay(); // Sunday=0, Monday=1

  if (today === 2) {  // <-- Monday should be 1, not 2
    // Monday → show Vote button
    voteBtn.style.display = "inline-block";
    uploadBtn.style.display = "none";
  } else {
    // Other days → show Upload button
    uploadBtn.style.display = "inline-block";
    voteBtn.style.display = "none";
  }

  if (uploadBtn) {
    uploadBtn.addEventListener("click", () => {
      window.location.href = "mealupload.html";
    });
  }

  if (voteBtn) {
    voteBtn.addEventListener("click", () => {
      window.location.href = "mealvote.html";
    });
  }
});
