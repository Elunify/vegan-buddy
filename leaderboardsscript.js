// Back button
document.getElementById('backBtn')?.addEventListener('click', () => {
  window.location.href = 'mainpage.html';
});

function toggleList(header) {
  const ul = header.nextElementSibling;
  ul?.classList.toggle('visible');
  header.classList.toggle('active'); // rotates arrow
}

// Helper function to render a leaderboard into a <ul> by ID
function renderLeaderboard(ulId, data, type) {
  const ul = document.getElementById(ulId);
  if (!ul) return;

  ul.innerHTML = data.map((user, index) => {
    switch(type) {
      case 'streak':
        return `<li>${index + 1}. ${user.name} 🌱 – ${user.streak} days</li>`;
      case 'level':
        return `<li>${index + 1}. ${user.name} 💫 – Level ${user.level}</li>`;
      case 'donators':
        return `<li>${index + 1}. ${user.name} 🤝 – €${user.donated || 0}</li>`;
      case 'impact':
        return `<li>${index + 1}. ${user.name} 🌿 – ${user.animals_saved || 0} animals, ${user.water_saved || 0}L water, ${user.forest_saved || 0} trees, ${user.co2_saved || 0}kg CO₂</li>`;
      default:
        return `<li>${index + 1}. ${user.name}</li>`;
    }
  }).join('');
}

// Fetch leaderboard from Supabase RPC
async function fetchLeaderboard(leaderboardType, ulId, limitCount = 10) {
  // Adjust RPC for each type if you have separate SQL functions
  let rpcName = 'get_leaderboard'; // default RPC for streak/impact/donators
  if (leaderboardType === 'level') rpcName = 'get_leaderboard_level';

  const { data, error } = await supabase.rpc(rpcName, { limit_count: limitCount });

  if (error) {
    console.error(`Error fetching ${leaderboardType} leaderboard:`, error);
    return;
  }

  renderLeaderboard(ulId, data, leaderboardType);
}

// Fetch all leaderboards
async function fetchAllLeaderboards() {
  // Overall
  await fetchLeaderboard('impact', 'overall-impact');
  await fetchLeaderboard('level', 'overall-level');
  await fetchLeaderboard('streak', 'overall-streak');
  await fetchLeaderboard('donators', 'overall-donators');

  // Monthly
  await fetchLeaderboard('donators', 'monthly-donators');

  // Weekly
  await fetchLeaderboard('donators', 'weekly-donators');
}

// Run when page loads
fetchAllLeaderboards();
