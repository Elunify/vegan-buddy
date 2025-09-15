document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = 'mainpage.html'; // Or wherever you want the back button to lead
    });

    // Constants for comparisons
    const sheetsPerTree = 8000;
    const forestAreaPerTree = 10;
    const showerWaterUse = 65;
    const co2PerCarHour = 10;

    // Load saved impact from localStorage or fallback default
    const savedImpact = JSON.parse(localStorage.getItem('savedImpact')) || {
      animals: 0,
      forest: 0,
      water: 0,
      co2: 0,
      donated: 0,
    };

    // Helper function for comparison text
    function generateComparisonText(animals, forest, water, co2) {
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

    // Show saved impact on page load
    function displaySavedImpact() {
      document.getElementById('savedAnimals').textContent = savedImpact.animals;
      document.getElementById('savedForest').textContent = savedImpact.forest;
      document.getElementById('savedWater').textContent = savedImpact.water;
      document.getElementById('savedCO2').textContent = savedImpact.co2;
      document.getElementById('savedDonated').textContent = savedImpact.donated;

      document.getElementById('savedComparisonText').innerHTML = generateComparisonText(
        savedImpact.animals,
        savedImpact.forest,
        savedImpact.water,
        savedImpact.co2
      );
    }

    // Initialize display
    document.addEventListener('DOMContentLoaded', () => {
      displaySavedImpact();
    });
  ;