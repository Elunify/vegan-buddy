document.addEventListener("DOMContentLoaded", async () => {
  const tabs = document.querySelectorAll(".main-tab");
  const tabContents = document.querySelectorAll(".main-tab-content");

  if (tabs.length === 0 || tabContents.length === 0) return; // safety check

  // ===== Tab Switching =====
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      tabContents.forEach(content => {
        if (content) content.style.display = "none";
      });

      const tabId = tab.getAttribute("data-tab");
      const selectedContent = document.getElementById(tabId);
      if (selectedContent) {
        selectedContent.style.display = "block";
      }

      if (tabId === "current-participants") {
        updateUploadVisibility();
      }
    });
  });

  // Show default tab
  const defaultTab = tabs[0];
  if (defaultTab) defaultTab.click();

  // ===== Upload / Vote Buttons =====
  const uploadBtn = document.getElementById("uploadBtn");
  const voteBtn = document.getElementById("voteBtn");

  if (uploadBtn && voteBtn) {
    const today = new Date().getDay(); // Sunday=0, Monday=1
    if (today === 1) {
      // Monday → Vote button
      voteBtn.style.display = "inline-block";
      uploadBtn.style.display = "none";
    } else {
      // Other days → Upload button
      uploadBtn.style.display = "inline-block";
      uploadnote.style.display = "inline-block";
      voteBtn.style.display = "none";
    }

    // Button navigation
    uploadBtn.addEventListener("click", () => {
      if (!uploadBtn.classList.contains("locked")) {
        window.location.href = "mealupload.html";
      }
    });

    voteBtn.addEventListener("click", () => {
      window.location.href = "mealvote.html";
    });
  }

  // ===== Unlock Logic for Upload Button =====
  if (uploadBtn) {
    // Fetch current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) return;

    // Fetch profile
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("is_pro, current_level")
      .eq("id", user.id)
      .single();

    if (profileError || !profile) return;

    // Check unlock conditions
    if (profile.is_pro === true || profile.current_level >= 10) {
      uploadBtn.classList.remove("locked");
      uploadBtn.removeAttribute("data-unlock");
      uploadBtn.style.pointerEvents = "auto";
      uploadBtn.style.opacity = "1";
    }
  }

  // ===== Back to Community Button =====
  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "community.html";
    });
  }
});

