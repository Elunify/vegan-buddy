// ===== Setup back button =====
document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "mainpage.html";
});

// Constants for comparisons
const sheetsPerTree = 8000;
const forestAreaPerTree = 10;
const showerWaterUse = 65;
const co2PerCarHour = 10;

// Helper function for comparison text
function generateComparisonText(animals_saved, forest_saved, water_saved, co2_saved) {
  const treesSaved = forest_saved / forestAreaPerTree;
  const paperEquivalent = Math.round(treesSaved * sheetsPerTree);
  const showerEquivalent = Math.round(water_saved / showerWaterUse);
  const carTimeEquivalent = (co2_saved / co2PerCarHour).toFixed(1);

  return `
    That's equivalent to:<br>
    • Not using ${paperEquivalent} sheets of paper<br>
    • Saving ${showerEquivalent} showers worth of water<br>
    • Avoiding ${carTimeEquivalent} hours spent in a car
  `;
}

// Show saved impact
function displaySavedImpact(impact) {
  document.getElementById("animals_saved").textContent = Math.round(impact.animals_saved || 0);
  document.getElementById("forest_saved").textContent = Math.round(impact.forest_saved || 0);
  document.getElementById("water_saved").textContent = Math.round(impact.water_saved || 0);
  document.getElementById("co2_saved").textContent = Math.round(impact.co2_saved || 0);
  document.getElementById("donated").textContent = Math.round(impact.donated || 0);

  document.getElementById("savedComparisonText").innerHTML = generateComparisonText(
    impact.animals_saved || 0,
    impact.forest_saved || 0,
    impact.water_saved || 0,
    impact.co2_saved || 0
  );
}

// Load from Supabase
async function loadImpact() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("User not logged in:", userError);
    return;
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("animals_saved, forest_saved, water_saved, co2_saved, donated") // make sure these columns exist
    .eq("id", user.id)
    .single();

  if (profileError) {
    console.error("Error fetching impact data:", profileError);
    return;
  }

  displaySavedImpact(profile);
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  loadImpact();
});
