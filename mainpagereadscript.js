async function loadProfile() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("Not logged in:", userError);
    return;
  }

  // Fetch the user's profile record
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("profile_photo, pet_photo, pet_name, last_checkin_date, badge, streak")
    .eq("id", user.id)
    .single();

  if (profileError) {
    console.error("Error fetching profile:", profileError);
    return;
  }

  // Set profile photo
  if (profile.profile_photo) {
    document.getElementById("profilePhoto").src = profile.profile_photo;
  }

  // Render pet
  const petDisplay = document.getElementById("petDisplay");
  const petAvatar = document.getElementById("petAvatar");

  function renderPet(container) {
    if (!container) return;
    container.innerHTML = "";
    if (profile.pet_photo) {
      const petImg = document.createElement("img");
      petImg.src = profile.pet_photo;
      petImg.alt = profile.pet_name || "Pet";
      petImg.classList.add("pet-photo");
      container.appendChild(petImg);
    } else if (profile.pet_name) {
      container.textContent = profile.pet_name;
    }
  }

  renderPet(petDisplay);
  renderPet(petAvatar);

  // ===== Daily Check-in Tab Logic =====
  const dailyTab = document.getElementById("daily-checkin-tab");
  if (!dailyTab) return;

  const todayStr = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];

  async function handleStreakSave() {
    const save = confirm("Do you want to save your streak for 10 badges?");
    if (!save) {
      alert("Your streak will reset.");
      await supabase.from("profiles").update({ streak: 0, last_checkin_date: yesterday }).eq("id", user.id);
      return false;
    }

    if ((profile.badge || 0) >= 10) {
      await supabase.from("profiles").update({
        badge: profile.badge - 10,
        last_checkin_date: yesterday
      }).eq("id", user.id);
      alert("Streak saved by spending 10 badges!");
      return true;
    } else {
      const pay = confirm("You don't have enough badges. Do you want to save your streak for 1€?");
      if (pay) {
        // Integrate payment logic here
        alert("Redirecting to payment...");
        return true;
      } else {
        alert("Your streak will reset.");
        await supabase.from("profiles").update({ streak: 0, last_checkin_date: yesterday }).eq("id", user.id);
        return false;
      }
    }
  }

  // Check last check-in
  if (profile.last_checkin_date === todayStr) {
    // Already checked in today
    dailyTab.style.pointerEvents = "none";
    dailyTab.style.opacity = 0.6;
    dailyTab.textContent = "✅ Daily Check-in";
  } else if (profile.last_checkin_date < yesterdayStr) {
    // Missed yesterday
    const streakSaved = await handleStreakSave();
    if (streakSaved) {
      dailyTab.style.pointerEvents = "none";
      dailyTab.style.opacity = 0.6;
      dailyTab.textContent = "✅ Daily Check-in";
    }
  }
}

// Run on page load
loadProfile();
