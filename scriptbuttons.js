//bottom navigation buttons:
document.querySelectorAll('.dropdown > button').forEach(btn => {
  btn.addEventListener('click', () => {
    const dropdown = btn.nextElementSibling; // the .dropdown-content
    const isOpen = dropdown.classList.contains('open');

    // Close all other dropdowns
    document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('open'));

    // Toggle current dropdown
    if (!isOpen) {
      dropdown.classList.add('open');
    }
  });
});
