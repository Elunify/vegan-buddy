document.addEventListener('DOMContentLoaded', async () => {
  // Get current user
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) {
    console.error("Not logged in:", error);
    return;
  }

  // ===== Load personal profile =====
  const { data: profile, error: fetchError } = await supabase
    .from('profiles')
    .select('animals_saved, forest_saved, water_saved, co2_saved, donated, streak, current_level,total_xp')
    .eq('id', user.id)
    .single();

  if (fetchError) {
    console.error('Error loading profile:', fetchError);
  } else {
    document.getElementById('savedAnimals').textContent = formatNumber(Math.round(profile.animals_saved || 0));
    document.getElementById('savedForest').textContent  = formatNumber(Math.round(profile.forest_saved || 0));
    document.getElementById('savedWater').textContent   = formatNumber(Math.round(profile.water_saved || 0));
    document.getElementById('savedCO2').textContent     = formatNumber(Math.round(profile.co2_saved || 0));
    document.getElementById('savedDonated').textContent = formatNumber(Math.round(profile.donated || 0));

    // Streak and level (no need to format as number, just display)
  document.getElementById('streak-counter').textContent = profile.streak || 0;
  // Call your XP calculation + UI function
  updateUI(profile);  // <-- this will calculate level, XP progress, and fill the level bar
  }

  // ===== Load global impact =====
  const { data: globalImpact, error: globalError } = await supabase
    .from('global_impact')
    .select('animals_saved, forest_saved, water_saved, co2_saved, donated')
    .single();

  if (globalError) {
    console.error('Error loading global impact:', globalError);
  } else {
    document.getElementById('animalsSavedBottom').textContent = formatNumber(Math.round(globalImpact.animals_saved || 0));
    document.getElementById('forestSavedBottom').textContent  = formatNumber(Math.round(globalImpact.forest_saved || 0));
    document.getElementById('waterSavedBottom').textContent   = formatNumber(Math.round(globalImpact.water_saved || 0));
    document.getElementById('co2SavedBottom').textContent     = formatNumber(Math.round(globalImpact.co2_saved || 0));
    document.getElementById('donatedBottom').textContent = formatNumber(Math.round(globalImpact.donated || 0));
  }
});

// ===== Helper to format numbers =====
function formatNumber(value) {
  value = Math.round(value); // round to nearest whole number
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(1) + 'B';
  } else if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1) + 'M';
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(1) + 'k';
  } else {
    return value.toString();
  }
}

// ===== Animate counter with formatted numbers =====
function animateCounter(spanId, newValue) {
  const el = document.getElementById(spanId);
  if (!el) return;

  const formattedNewValue = formatNumber(newValue);
  const oldValue = el.textContent;

  if (oldValue === formattedNewValue) return; // no change

  // Create a temporary element for the old number
  const oldEl = el.cloneNode(true);
  oldEl.textContent = oldValue;
  oldEl.classList.add('slide-up-old');
  el.parentNode.appendChild(oldEl);

  // Update the original element with new formatted value and animate
  el.textContent = formattedNewValue;
  el.classList.add('slide-down-new');

  // Remove animation classes after animation ends
  el.addEventListener('animationend', () => el.classList.remove('slide-down-new'), { once: true });
  oldEl.addEventListener('animationend', () => oldEl.remove(), { once: true });
}

// ===== Global impact refresh =====
let lastGlobalImpact = null;

async function refreshGlobalImpact() {
  const { data, error } = await supabase
    .from('global_impact')
    .select('*')
    .eq('id', 'global')
    .single();

  if (error || !data) return;

  // Only update if numbers changed
  if (!lastGlobalImpact || 
      lastGlobalImpact.animals_saved !== data.animals_saved ||
      lastGlobalImpact.forest_saved !== data.forest_saved ||
      lastGlobalImpact.water_saved !== data.water_saved ||
      lastGlobalImpact.co2_saved !== data.co2_saved ||
      lastGlobalImpact.donated !== data.donated
  ) {
    animateCounter('animalsSavedBottom', data.animals_saved);
    animateCounter('forestSavedBottom', data.forest_saved);
    animateCounter('waterSavedBottom', data.water_saved);
    animateCounter('co2SavedBottom', data.co2_saved);
    animateCounter('donatedBottom', data.donated);

    lastGlobalImpact = data;
  }
}

// ===== Schedule refresh every minute =====
function scheduleGlobalImpactRefresh() {
  const now = new Date();
  const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

  // First call at the start of next minute
  setTimeout(() => {
    refreshGlobalImpact();
    setInterval(refreshGlobalImpact, 60000);
  }, msToNextMinute);
}

// Call on page load
document.addEventListener('DOMContentLoaded', () => {
  scheduleGlobalImpactRefresh();
});


