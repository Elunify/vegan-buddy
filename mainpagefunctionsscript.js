function animateCounter(spanId, newValue) {
  const el = document.getElementById(spanId);
  if (!el) return;

  const oldValue = el.textContent;

  if (oldValue === String(newValue)) return; // no change

  // Create a temporary element for the old number
  const oldEl = el.cloneNode(true);
  oldEl.textContent = oldValue;
  oldEl.classList.add('slide-up-old');
  el.parentNode.appendChild(oldEl);

  // Update the original element with new value and animate
  el.textContent = newValue;
  el.classList.add('slide-down-new');

  // Remove animation classes after animation ends
  el.addEventListener('animationend', () => el.classList.remove('slide-down-new'), { once: true });
  oldEl.addEventListener('animationend', () => oldEl.remove(), { once: true });
}

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
      lastGlobalImpact.co2_reduced !== data.co2_reduced ||
      lastGlobalImpact.donated !== data.donated
  ) {
    animateCounter('animalsSavedBottom', data.animals_saved);
    animateCounter('forestSavedBottom', data.forest_saved);
    animateCounter('waterSavedBottom', data.water_saved);
    animateCounter('co2SavedBottom', data.co2_reduced);
    animateCounter('donatedBottom', data.donated);

    lastGlobalImpact = data;
  }
}


function scheduleGlobalImpactRefresh() {
  const now = new Date();
  const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

  // First call at the start of next minute
  setTimeout(() => {
    refreshGlobalImpact();
    // Then every 60 seconds
    setInterval(refreshGlobalImpact, 60000);
  }, msToNextMinute);
}

// Call this on page load
document.addEventListener('DOMContentLoaded', () => {
  scheduleGlobalImpactRefresh();
});
