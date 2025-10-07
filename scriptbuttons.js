// Function to hide all pages and show the selected one
function showSection(sectionId) {
  // Get all elements with class "page"
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    if (page.id === sectionId) {
      page.classList.remove('hidden'); // Show selected page
    } else {
      page.classList.add('hidden'); // Hide others
    }
  });

  // Close side menu if open
  const sideMenu = document.getElementById('sideMenu');
  if (sideMenu && sideMenu.classList.contains('open')) {
    sideMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
}

// --- Settings Page Trigger ---
const profileWrapper = document.querySelector('.profile-wrapper');
if (profileWrapper) {
  profileWrapper.addEventListener('click', () => showSection('settings'));
}

// --- Side Menu Toggle ---
const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');

menuButton.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  document.body.classList.toggle('menu-open'); // overlay
});

// Optional: close menu when clicking outside
document.body.addEventListener('click', e => {
  if (sideMenu.classList.contains('open') && !sideMenu.contains(e.target) && e.target !== menuButton) {
    sideMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
});


// --- Side Menu Buttons ---
const helpUsGrowBtn = document.getElementById('helpusgrowBtn');
if (helpUsGrowBtn) {
  helpUsGrowBtn.addEventListener('click', () => showSection('supportus'));
}

const aboutUsBtn = document.getElementById('aboutUsBtn');
if (aboutUsBtn) {
  aboutUsBtn.addEventListener('click', () => showSection('aboutus'));
}

// --- Bottom Navigation Buttons ---

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

// Helper: close all dropdowns when a section button is clicked
function closeDropdowns() {
  document.querySelectorAll('.dropdown-content.open').forEach(d => {
    d.classList.remove('open');
  });
}

// Lessons, Recipes, Recommendations, Sources
const learnButtons = ['lessons','recipes','recommendations','sources'];
learnButtons.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) {
    btn.addEventListener('click', () => {
      showSection(id);
      closeDropdowns(); // close dropdown
    });
  }
});

// Explore: Restaurants, Scan
const exploreButtons = ['restaurants','scan'];
exploreButtons.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) {
    btn.addEventListener('click', () => {
      showSection(id);
      closeDropdowns(); // close dropdown
    });
  }
});

// Community: Local, Events, Forum, Friends, Mentorship, Success
const communityButtons = ['local','forum','friends','messages','mentorship'];
communityButtons.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) {
    btn.addEventListener('click', () => {
      showSection(id);
      closeDropdowns(); // close dropdown
    });
  }
});

// Playground: Avatar, Shop, Leaderboards, Challenges
const playgroundButtons = ['profilecard','avatar','shop','leaderboards','challenges'];
playgroundButtons.forEach(id => {
  const btn = document.querySelector(`button[onclick="showSection('${id}')"]`);
  if (btn) {
    btn.addEventListener('click', () => {
      showSection(id);
      closeDropdowns(); // close dropdown
    });
  }
});

// Close dropdowns when clicking outside
document.body.addEventListener('click', e => {
  // Select all dropdown buttons and their corresponding contents
  const dropdowns = document.querySelectorAll('.dropdown');
  const openDropdowns = document.querySelectorAll('.dropdown-content.open');

  openDropdowns.forEach(dropdown => {
    const parent = dropdown.parentElement; // the .dropdown container
    const button = parent.querySelector('button');

    // If click is outside the dropdown container and the button
    if (!parent.contains(e.target) && e.target !== button) {
      dropdown.classList.remove('open');
    }
  });
});


// Home button
const homeBtn = document.querySelector('.bottom-nav button[onclick="showSection(\'home\')"]');
if (homeBtn) {
  homeBtn.addEventListener('click', () => {
    showSection('home');
    closeDropdowns();
  });
  }

// --- Top buttons on main page ---
const checkinBtn = document.getElementById('checkinBtn');
if (checkinBtn) {
  checkinBtn.addEventListener('click', () => showSection('dailycheck-in'));
}

const healthBtn = document.getElementById('healthBtn');
if (healthBtn) {
  healthBtn.addEventListener('click', () => showSection('healthissues'));
}

// --- Quick Access Buttons ---
const lessonsBtn = document.getElementById('lessonsBtn');
if (lessonsBtn) {
  lessonsBtn.addEventListener('click', () => showSection('lessons'));
}

const recipesBtn = document.getElementById('recipesBtn');
if (recipesBtn) {
  recipesBtn.addEventListener('click', () => showSection('recipes'));
}

// --- Meal-Art Winners H3 Sections ---
const mealartBtn = document.querySelectorAll('.mealartBtn');
mealartBtn.forEach(link => {
  link.style.cursor = 'pointer'; // shows it’s clickable
  link.addEventListener('click', () => showSection('mealartcontest'));
});

// --- Function to open a popup and close others ---
function openPopup(popupId) {
  // Close all other popups
  document.querySelectorAll('.popup').forEach(p => p.classList.add('hidden'));

  // Open the requested popup
  const popup = document.getElementById(popupId);
  if (popup) popup.classList.remove('hidden');
}

// --- Impact Cards Popups ---
const impactMap = {
  'youAnimals': 'popupAnimals',
  'youForest': 'popupForest',
  'youWater': 'popupWater',
  'youCO2': 'popupCO2'
};

// Attach click listeners to each card
document.querySelectorAll('.impact-cards .card').forEach(card => {
  card.addEventListener('click', () => {
    // Find a <strong> in this card whose ID is in impactMap
    const strong = Array.from(card.querySelectorAll('strong'))
                        .find(s => impactMap[s.id]);
    if (strong) {
      openPopup(impactMap[strong.id]);
    }
  });
});

// --- Impact Calculator Links (all popups) ---
// Use a class "openCalculator" for all links inside popups
document.querySelectorAll('.openCalculator').forEach(link => {
  link.addEventListener('click', () => openPopup('impactcalculator'));
});

// --- Close popup on X button ---
document.querySelectorAll('.popup-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const popup = btn.closest('.popup');
    if (popup) popup.classList.add('hidden');
  });
});

// --- Optional: close popup when clicking outside content ---
document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('click', e => {
    if (e.target === popup) popup.classList.add('hidden');
  });
});

// --- Meal-Art Winners Popups ---
const mealArtMap = {
  'amateurImage': 'popupAmateur',
  'proImage': 'popupProfessional',
};

// Attach click listeners to the images
Object.keys(mealArtMap).forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener('click', () => openPopup(mealArtMap[id]));
  }
});

// Amateur Recipe Trigger
  const amateurRecipe = document.getElementById('amateurRecipe');
  if (amateurRecipe) {
    amateurRecipe.addEventListener('click', () => openPopup('recipeModal'));
  }

  // Pro Recipe Trigger
  const proRecipe = document.getElementById('professionalRecipe');
  if (proRecipe) {
    proRecipe.addEventListener('click', () => openPopup('recipeModal'));
  }

  // HomePage END
  // HomePage END
  // HomePage END
  // HomePage END
  // HomePage END

  // TOPBAR
  // TOPBAR
  // TOPBAR
  // TOPBAR
  // TOPBAR

  // Grab elements
const editBtn = document.querySelector('.editprofile');
const containerSettings = document.querySelector('.containersettings');
const containerEdit = document.querySelector('.containeredit');

editBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent default link navigation
  containerSettings.classList.add('hidden'); // hide settings
  containerEdit.classList.remove('hidden');  // show edit form
});

function toggleMemberships() {
    const list = document.getElementById("membership-list");
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }


//  Health Lesson
//  Health Lesson
//  Health Lesson
//  Health Lesson

  // Back button logic
document.getElementById("close-lesson").addEventListener("click", () => {
  const lessonTab = document.getElementById("healthylesson-tab");
  const mainTab = document.getElementById("healthissues");

  // Hide lesson tab and show main health issues tab
  lessonTab.classList.add("hidden");
  mainTab.classList.remove("hidden");

  // Optionally: scroll back to the course/lesson that was open
  const openLesson = document.querySelector("#healthissues .lesson.unlocked, #healthissues .lesson.completed");
  if (openLesson) {
    openLesson.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});





//  Scan and Map
//  Scan and Map
//  Scan and Map
//  Scan and Map

// =======================
// GLOBAL VARIABLES
// =======================
let stream = null;
let scanning = false; // NEW FLAG
let lastBarcode = null;
let cachedProducts = JSON.parse(localStorage.getItem('veganProducts')) || {};
let scanTimeout = null;

let map;
let infowindow;
let lastFetchLocation = null;
let fetchTimeout = null;
const FETCH_INTERVAL = 1000; // ms
const MIN_MOVE_DISTANCE = 500; // meters

// Start camera and barcode detection
async function startCameraWithTimeout() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert("Camera not supported in this browser.");
    return;
  }

  try {
    if (!stream) {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      video.srcObject = stream;
    }

    scanning = true;
    detectBarcode();

    // Auto-stop camera after 10 seconds
    if (scanTimeout) clearTimeout(scanTimeout);
    scanTimeout = setTimeout(() => {
      stopCamera();
      // Reset UI
      startScanBtn.classList.remove("hidden");
      scanContainer.classList.add("hidden");
      resultDiv.innerHTML = "";
      lastBarcode = null;
    }, 10000); // 10 seconds

  } catch (err) {
    alert("Camera access denied. Please allow camera permissions.");
    console.error(err);
  }
}

// =======================
// SCAN ELEMENTS
// =======================
const startScanBtn = document.getElementById("startScanBtn");
const scanContainer = document.getElementById("scanContainer");
const video = document.getElementById('scanVideo');
const resultDiv = document.getElementById('scanResult');
const loader = document.getElementById('scanLoader');

// =======================
// SCAN FUNCTIONS
// =======================

// Start camera
async function startCamera() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert("Camera not supported in this browser.");
    return;
  }
  try {
    if (!stream) {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      video.srcObject = stream;
    }
  } catch (err) {
    alert("Camera access denied. Please allow camera permissions.");
    console.error(err);
  }
}


let scanLoopId = null; // store requestAnimationFrame ID

// Start barcode detection loop
async function detectBarcode() {
  if (!('BarcodeDetector' in window)) {
    resultDiv.textContent = "Your browser does not support the Barcode Detection API.";
    return;
  }

  const barcodeDetector = new BarcodeDetector({ formats: ['ean_13', 'upc_a', 'upc_e'] });

  async function scanLoop() {
    if (!scanning) return; // STOP the loop if camera is off
    try {
      const barcodes = await barcodeDetector.detect(video);
      if (barcodes.length > 0) {
        stopCamera(); // stop camera when barcode is found
        checkVegan(barcodes[0].rawValue);
        return;
      }
      scanLoopId = requestAnimationFrame(scanLoop);
    } catch (err) {
      console.error(err);
      requestAnimationFrame(scanLoop);
    }
  }

  scanLoop();
}

// Stop camera
function stopCamera() {
  scanning = false;
  if (scanTimeout) {
    clearTimeout(scanTimeout);
    scanTimeout = null;
  }
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
    video.srcObject = null;
  }
}

// Fetch product info
async function checkVegan(barcode) {
  if (barcode === lastBarcode) return;
  lastBarcode = barcode;

  if (cachedProducts[barcode]) {
    displayProduct(cachedProducts[barcode]);
    return;
  }

  loader.style.display = "block";
  resultDiv.innerHTML = "";

  try {
    const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
    const data = await response.json();
    loader.style.display = "none";

    if (data.status === 0) {
      resultDiv.textContent = "Product not found in database.";
      return;
    }

    const product = data.product;
    const productData = {
      name: product.product_name || "Unknown product",
      brands: product.brands || "N/A",
      ingredients: product.ingredients_text || "Ingredients info not available",
      vegan: product.labels_tags?.includes("en:vegan") || product.ingredients_text?.toLowerCase().includes("vegan"),
      nutriScore: product.nutriscore_grade ? product.nutriscore_grade.toLowerCase() : null,
      image: product.image_url || null
    };

    cachedProducts[barcode] = productData;
    localStorage.setItem('veganProducts', JSON.stringify(cachedProducts));

    displayProduct(productData);

  } catch (error) {
    loader.style.display = "none";
    resultDiv.textContent = "Error fetching product info.";
    console.error(error);
  }
}

// Display product info with "Scan Again" button
function displayProduct(product) {
  let html = `<div class="recommendation-product-card">
    ${product.image ? `<img src="${product.image}" alt="${product.name}">` : ''}
    <h3>${product.name}</h3>
    <p>${product.vegan ? "✅ This product is vegan!" : "❌ Not vegan or unknown."}</p>
    <p><strong>Brands:</strong> ${product.brands}</p>
    <p><strong>Ingredients:</strong> ${product.ingredients}</p>`;

  if (product.nutriScore) {
    html += `<p><strong>Nutri-Score:</strong> <span class="nutri-score nutri-${product.nutriScore}">${product.nutriScore.toUpperCase()}</span></p>`;
  }

  html += `</div>
    <button id="scanAgainBtn" class="scan-again-btn">🔄 Scan Again</button>`;

  resultDiv.innerHTML = html;

  const scanAgainBtn = document.getElementById("scanAgainBtn");
  if (scanAgainBtn) {
    scanAgainBtn.addEventListener("click", () => {
      lastBarcode = null;
      resultDiv.innerHTML = "";
      startCamera().then(detectBarcode);
    });
  }
}

// =======================
// SCAN BUTTON CLICK
// =======================
// Scan button
startScanBtn.addEventListener("click", () => {
  startScanBtn.classList.add("hidden");
  scanContainer.classList.remove("hidden");
  startCameraWithTimeout();
});

// =======================
// MAP FUNCTIONS
// =======================
function getDistanceMeters(loc1, loc2) {
  const R = 6371000;
  const toRad = x => x * Math.PI / 180;
  const dLat = toRad(loc2.lat - loc1.lat);
  const dLng = toRad(loc2.lng - loc1.lng);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(loc1.lat)) * Math.cos(toRad(loc2.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function fetchRestaurants(location) {
  const service = new google.maps.places.PlacesService(map);
  const mapResult = document.getElementById("mapResult");

  service.nearbySearch({ location, radius: 5000, keyword: "vegan restaurant" }, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      map.markers.forEach(m => m.setMap(null));
      map.markers = [];
      results.forEach(place => {
        const marker = createMarker(place);
        if (marker) map.markers.push(marker);
      });
      mapResult.textContent = "";
    } else {
      mapResult.textContent = "No vegan restaurants found nearby.";
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return null;
  const marker = new google.maps.marker.AdvancedMarkerElement({ map, position: place.geometry.location, title: place.name });
  let content = place.photos?.length > 0 ? `<img src="${place.photos[0].getUrl({ maxWidth:200,maxHeight:150 })}" style="border-radius:8px;"><br>` : '';
  content += `<strong>${place.name}</strong><br>${place.vicinity || ''}`;
  marker.addListener("click", () => { infowindow.setContent(content); infowindow.open(map, marker); });
  return marker;
}

window.initMap = async function() {
  infowindow = new google.maps.InfoWindow();
  const mapContainer = document.getElementById("mapContainer");

  function setupMap(location) {
    map = new google.maps.Map(mapContainer, { center: location, zoom: 14, mapId: "d69dd398ff7fbb3a41b37083" });
    map.markers = [];
    fetchRestaurants(location);

    map.addListener("idle", () => {
      if (fetchTimeout) clearTimeout(fetchTimeout);
      fetchTimeout = setTimeout(() => {
        const center = map.getCenter();
        const currentLocation = { lat: center.lat(), lng: center.lng() };
        if (!lastFetchLocation || getDistanceMeters(lastFetchLocation, currentLocation) > MIN_MOVE_DISTANCE) {
          fetchRestaurants(currentLocation);
          lastFetchLocation = currentLocation;
        }
      }, FETCH_INTERVAL);
    });
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => setupMap({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => setupMap({ lat: 39.4699, lng: -0.3763 }) // fallback
    );
  } else {
    setupMap({ lat: 39.4699, lng: -0.3763 });
  }
};

// =======================
// TAB SWITCHING
// =======================
let currentTab = 'home'; // default tab

function openTab(tabId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  const page = document.getElementById(tabId);
  if (page) page.classList.remove('hidden');

  // Stop camera if leaving scan tab
  if (currentTab === 'scan' && tabId !== 'scan') {
    stopCamera();
  }

  currentTab = tabId;

  // Initialize scan/map if necessary
  if (tabId === "scan") {
    startScanBtn.classList.remove("hidden");
    scanContainer.classList.add("hidden"); // hide camera until button click
  }
  if (tabId === "restaurants" && !map) initMap();
}

// --- Global click listener to stop camera on page change ---
document.body.addEventListener('click', e => {
  const clickedTab = e.target.closest('button[data-tab]');
  if (clickedTab && clickedTab.dataset.tab !== 'scan') {
    stopCamera();
  }
});

// =======================
// BUTTON HANDLERS
// =======================
const scanBtn = document.getElementById("scanBtn");
const mapBtn = document.getElementById("mapBtn");

if (scanBtn) scanBtn.addEventListener('click', () => openTab("scan"));
if (mapBtn) mapBtn.addEventListener('click', () => openTab("restaurants"));

// Friends -->
// Friends -->
// Friends -->
// Friends -->
// Friends -->

// === Popup controls ===
const searchPopup = document.getElementById("searchPopup");
document.getElementById("openSearchPopup").addEventListener("click", () => {
  searchPopup.style.display = "flex";
});
document.getElementById("closeSearchPopup").addEventListener("click", () => {
  searchPopup.style.display = "none";
});
window.addEventListener("click", e => {
  if (e.target === searchPopup) searchPopup.style.display = "none";
});


// LeaderBoard
// LeaderBoard
// LeaderBoard
// LeaderBoard

function toggleListLeader(header) {
  const ul = header.nextElementSibling;
  ul?.classList.toggle('visible');
  header.classList.toggle('active'); // rotates arrow
}












  // Trigger profile photo file input
document.getElementById('changeProfilePhotoBtn').addEventListener('click', () => {
  document.getElementById('profilePhotoUpload').click();
});

// Trigger pet photo file input
document.getElementById('changePetPhotoBtn').addEventListener('click', () => {
  document.getElementById('petPhotoUpload').click();
});

    
    // --- IMAGE RESIZE & CROP TO SQUARE FUNCTION ---
async function resizeImage(file, maxSize = 600, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = e => img.src = e.target.result;

    img.onload = () => {
      // Determine the square crop (centered)
      const minSide = Math.min(img.width, img.height);
      const startX = (img.width - minSide) / 2;
      const startY = (img.height - minSide) / 2;

      const canvas = document.createElement('canvas');
      canvas.width = maxSize;
      canvas.height = maxSize;

      const ctx = canvas.getContext('2d');

      // Draw the cropped square scaled to maxSize x maxSize
      ctx.drawImage(
        img,
        startX, startY,          // start of crop
        minSide, minSide,        // size of crop
        0, 0,                    // start position on canvas
        maxSize, maxSize          // size on canvas
      );

      canvas.toBlob(
        blob => {
          if (!blob) return reject("Canvas is empty");
          resolve(new File([blob], file.name, { type: blob.type }));
        },
        "image/jpeg",
        quality
      );
    };

    img.onerror = err => reject(err);
    reader.readAsDataURL(file);
  });
}


// --- PROFILE PHOTO PREVIEW ---
const profilePhotoInput = document.getElementById('profilePhotoUpload');
const profilePhotoPreview = document.getElementById('profilePhotoPreview');
let newProfilePhotoFile = null;

profilePhotoInput.addEventListener('change', async e => {
  let file = e.target.files[0];
  if (!file) return;

  file = await resizeImage(file, 600, 0.7);
  newProfilePhotoFile = file;

  profilePhotoPreview.src = URL.createObjectURL(file);
});

// --- PET PHOTO PREVIEW ---
const petPhotoInput = document.getElementById('petPhotoUpload');
const petPhotoPreview = document.getElementById('petPhotoPreview');
let newPetPhotoFile = null;

petPhotoInput.addEventListener('change', async e => {
  let file = e.target.files[0];
  if (!file) return;

  file = await resizeImage(file, 300, 0.7);
  newPetPhotoFile = file;

  petPhotoPreview.src = URL.createObjectURL(file);
});

