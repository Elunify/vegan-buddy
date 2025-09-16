// --- Initialize Supabase ---
const supabaseUrl = 'https://pqrgvelzxmtdqrofxujx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxcmd2ZWx6eG10ZHFyb2Z4dWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMTc0ODAsImV4cCI6MjA3MTY5MzQ4MH0.s8JZLDdzIS1wBLln0Zs3LK_9BHelUcbRhyAC_0-5sos';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

function setupMenuButtons() {
  const menuBtn = document.getElementById("menuButton");
  const menu = document.getElementById("sideMenu");
  const resetBtn = document.querySelector(".menu-item.reset");
  const addBtn = document.querySelector(".menu-item.add");

  // Toggle side menu
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  // Reset button: keep using localStorage
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      localStorage.clear();
      alert("Data has been cleared.");
      location.href = "survey.html";
    });
  }

  // Add button: keep using localStorage
  if (addBtn) {
    addBtn.addEventListener("click", addImpact);
  }

  // Side menu navigation
  const pageMap = {
    topListsBtn: "leaderboards.html",
    aboutUsBtn: "aboutus.html",
    helpusgrowBtn: "helpusgrow.html",
    sourcesBtn: "sources.html"
  };

  Object.entries(pageMap).forEach(([id, url]) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        window.location.href = url;
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        localStorage.clear();
        window.location.href = "index.html";
      } catch (err) {
        console.error("Logout error:", err);
        alert("Something went wrong while logging out.");
      }
    });
  }
});
}
