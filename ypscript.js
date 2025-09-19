document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = 'mainpage.html'; // Or wherever you want the back button to lead
    });

     async function loadProfile() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("Not logged in:", userError);
    return;
  }

  // Fetch profile record with all needed fields
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select(`
      profile_photo,
      name,
      birth_date,
      goals,
      health_issues,
      pet_photo,
      pet_name,
      streak,
      current_level,
      badge
    `)
    .eq("id", user.id)
    .single();

  if (profileError) {
    console.error("Error fetching profile:", profileError);
    return;
  }

  // Profile photo
  if (profile.profile_photo) {
    document.getElementById("profilePhoto").src = profile.profile_photo;
  }

  // Name + birth date
  document.getElementById("profileName").textContent = profile.name || "-";
  document.getElementById("dob").textContent = profile.birth_date || "-";

  // Streak + level + badge
  document.getElementById("streak-counter").textContent = profile.streak || 0;
  document.getElementById("currentLevel").textContent = profile.current_level || 0;
  document.getElementById("badge").textContent = profile.badge || 0;

  // Goals
const goalsList = document.getElementById("goalsList");
goalsList.innerHTML = "";
if (profile.goals) {
  let goals = profile.goals;

  // If it's an object, convert to array of values
  if (!Array.isArray(goals)) {
    goals = Object.values(goals);
  }

  goals.forEach(goal => {
    const li = document.createElement("li");
    li.textContent = goal;
    goalsList.appendChild(li);
  });
}

// Health Issues
const healthList = document.getElementById("healthIssuesList");
healthList.innerHTML = "";
if (profile.health_issues) {
  let issues = profile.health_issues;

  if (!Array.isArray(issues)) {
    issues = Object.values(issues);
  }

  issues.forEach(issue => {
    const li = document.createElement("li");
    li.textContent = issue;
    healthList.appendChild(li);
  });
}

  // Pet
  if (profile.pet_photo) {
    document.getElementById("petPhoto").src = profile.pet_photo;
  }
  document.getElementById("petName").textContent = profile.pet_name || "-";

  document.querySelectorAll(".details-list").forEach(list => {
  // Only count <li> elements, ignore whitespace/text nodes
  if (list.querySelectorAll("li").length === 0) {
    list.previousElementSibling.style.display = "none"; // hide the section title
    list.style.display = "none"; // hide the list itself
  }
});


}

// Run when page loads
loadProfile();
  
  


