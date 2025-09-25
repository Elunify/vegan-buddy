document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = 'mainpage.html'; // Or wherever you want the back button to lead
    });

    
  document.getElementById("mapBtn").onclick = () => openTab("map");

  // Example pet toggle logic
const petAvatar = document.getElementById('petAvatar');
const thoughtToggle = document.getElementById('thoughtToggle');
const petBubble = document.getElementById('petThought');
const dailyTip = document.getElementById('dailyTip');
const petNameSpan = document.getElementById('petName');

async function loadUserPetTip() {
  // Fetch current user pet from Supabase
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return;

  const { data: pet, error } = await supabase
    .from('profiles')
    .select('pet_name, pet_photo')
    .eq('id', user.id)
    .single();

  if (error || !pet) return;

  // Inject pet photo
  petAvatar.innerHTML = `<img src="${pet.pet_photo}" alt="${pet.pet_name}">`;
  petNameSpan.textContent = pet.pet_name;

  // Example lessons/tips
  const tips = [
    "This product is vegan, but not cruelty-free.",
    "Check for the cruelty-free label on cosmetics.",
    "Some vegan products still test on animals.",
    "Look for ethical brands to support!"
  ];

  // Set initial tip
  dailyTip.textContent = tips[Math.floor(Math.random() * tips.length)];

  // Toggle bubble
  thoughtToggle.addEventListener('click', () => {
    petBubble.classList.toggle('hidden');
    // Optionally rotate tip on each toggle
    if (!petBubble.classList.contains('hidden')) {
      dailyTip.textContent = tips[Math.floor(Math.random() * tips.length)];
    }
  });
}

// Run on page load
loadUserPetTip();

// Unlock sections at level 15
async function unlockSections() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return;

  const { data: profile } = await supabase
    .from('profiles')
    .select('current_level')
    .eq('id', user.id)
    .single();

  if (profile && profile.current_level >= 15) {
    document.getElementById('cosmetics').classList.remove('blocked');
    document.getElementById('beyondFood').classList.remove('blocked');
  }
}

unlockSections();
