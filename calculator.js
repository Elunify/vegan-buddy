document.getElementById('backtomainpage').addEventListener('click', () => {
    window.location.href = 'mainpage.html';
  });

// Constants for comparisons
  const sheetsPerTree = 8000;
  const forestAreaPerTree = 10; // m²
  const showerWaterUse = 65; // liters
  const co2PerCarHour = 10; // kg

  function generateComparisonText(forest, water, co2) {
    const treesSaved = forest / forestAreaPerTree;
    const paperEquivalent = Math.round(treesSaved * sheetsPerTree);
    const showerEquivalent = Math.round(water / showerWaterUse);
    const carTimeEquivalent = (co2 / co2PerCarHour).toFixed(1);

    return `
      That's equivalent to:<br>
      • Not using ${paperEquivalent} sheets of paper<br>
      • Saving ${showerEquivalent} showers worth of water<br>
      • Avoiding ${carTimeEquivalent} hours spent in a car
    `;
  }

  document.getElementById('calculateImpactBtn').addEventListener('click', () => {
    const years = parseInt(document.getElementById('years').value) || 0;
    const months = parseInt(document.getElementById('months').value) || 0;
    const totalMonths = years * 12 + months;

    // Impact per month constants
    const animalsSavedPerMonth = 21;
    const forestSavedPerMonth = 15; // m²
    const waterSavedPerMonth = 2000; // liters
    const co2SavedPerMonth = 120; // kg

    // Calculate total impact
    const animalsSaved = Math.round(animalsSavedPerMonth * totalMonths);
    const forestSaved = Math.round(forestSavedPerMonth * totalMonths);
    const waterSaved = Math.round(waterSavedPerMonth * totalMonths);
    const co2Saved = Math.round(co2SavedPerMonth * totalMonths);

    // Show results
    document.getElementById('calculatorResults').innerHTML = `
      🐾 Animals saved: ${animalsSaved}<br>
      🌲 Forest saved: ${forestSaved} m²<br>
      💧 Water saved: ${waterSaved} L<br>
      🌬️ CO₂ reduced: ${co2Saved} kg
    `;

    // Show comparison
    document.getElementById('calculatorComparison').innerHTML = generateComparisonText(
      forestSaved, waterSaved, co2Saved
    );

    // Hide form, show results
    document.getElementById('impactForm').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
  });

  document.getElementById('recalculateBtn').addEventListener('click', () => {
    // Hide results, show form
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('impactForm').style.display = 'block';
  });