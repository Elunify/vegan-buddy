

//bottom navigation buttons:
function showSection(sectionId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}


