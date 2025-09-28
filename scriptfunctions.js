import { supabase } from "./supabaseClient.js";



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

