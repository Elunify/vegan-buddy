
//characters random popup:
function showRandomAvatar() {
  const avatars = ['elunaThought','eluneThought','petThought'];
  const choice = avatars[Math.floor(Math.random() * avatars.length)];
  document.getElementById('avatarRow').classList.remove('hidden');
  document.querySelectorAll('.thought-bubble').forEach(b => b.style.display = 'none');
  document.getElementById(choice).style.display = 'block';
}

// First after 1 hour, then repeat every X hours
setTimeout(() => {
  showRandomAvatar();
  setInterval(showRandomAvatar, 1000 * 60 * 60 * 3); // every 3 hours
}, 1000 * 60 * 60);

// ===== Helper: Calculate level from XP =====
function getLevelFromXP(totalXP) {
  let level = 1;
  let xpNeededForNext = 100;
  let xpLeft = totalXP;

  while (xpLeft >= xpNeededForNext && level < 100) {
    xpLeft -= xpNeededForNext;
    level++;
    xpNeededForNext = Math.floor(xpNeededForNext * 1.05);
  }

  return { level, xpTowardsNextLevel: xpLeft, xpNeededForNextLevel: xpNeededForNext };
}