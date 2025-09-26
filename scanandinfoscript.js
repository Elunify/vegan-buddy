function openTab(tabId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const section = document.getElementById(tabId);
  if (section) section.classList.add('active');

  if (tabId === "scan") {
  startCamera().then(detectBarcode);
} else {
  stopCamera();
}

  if (tabId === "map") {
  getUserLocation(userLocation => {
    if (!map) initMap(userLocation);
    else map.setCenter(userLocation);
  });
}
}

// Emoji buttons
document.getElementById("mapBtn").onclick = () => openTab("map");
document.getElementById("scanBtn").onclick = () => openTab("scan");

// Back button
document.getElementById('backBtn').addEventListener('click', () => {
  window.location.href = 'mainpage.html';
});

function getUserLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => callback({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      err => alert("Location access denied. Please allow location permissions.")
    );
  } else {
    alert("Geolocation not supported.");
  }
}


// SCAN
// SCAN
// SCAN
// SCAN

const video = document.getElementById('video');
const resultDiv = document.getElementById('scanResult');
const loader = document.getElementById('loader');

let stream = null;
let lastBarcode = null;
let cachedProducts = JSON.parse(localStorage.getItem('veganProducts')) || {};

// Start camera
async function startCamera() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      document.querySelector('#video').srcObject = stream;
    } catch (err) {
      alert("Camera access denied. Please allow camera permissions.");
    }
  } else {
    alert("Camera not supported.");
  }
}

function stopCamera() {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
  }
}

// Barcode detection
async function detectBarcode() {
  if (!('BarcodeDetector' in window)) {
    resultDiv.textContent = "Your browser does not support Barcode Detection API.";
    return;
  }

  const barcodeDetector = new BarcodeDetector({ formats: ['ean_13', 'upc_a', 'upc_e'] });

  const scanLoop = async () => {
    try {
      const barcodes = await barcodeDetector.detect(video);
      if (barcodes.length > 0) {
        const barcode = barcodes[0].rawValue;
        checkVegan(barcode);
      } else {
        requestAnimationFrame(scanLoop);
      }
    } catch (err) {
      console.error(err);
      requestAnimationFrame(scanLoop);
    }
  };

  scanLoop();
}

// Check vegan product
async function checkVegan(barcode) {
  if (barcode === lastBarcode) return; // skip duplicates
  lastBarcode = barcode;

  // Check cache first
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

// Display product
function displayProduct(product) {
  let html = `<div class="product-card">
    ${product.image ? `<img src="${product.image}" alt="${product.name}">` : ''}
    <h3>${product.name}</h3>
    <p>${product.vegan ? "✅ This product is vegan!" : "❌ Not vegan or unknown."}</p>
    <p><strong>Brands:</strong> ${product.brands}</p>
    <p><strong>Ingredients:</strong> ${product.ingredients}</p>
  `;

  if (product.nutriScore) {
    html += `<p><strong>Nutri-Score:</strong> <span class="nutri-score nutri-${product.nutriScore}">${product.nutriScore.toUpperCase()}</span></p>`;
  }

  html += `</div>`;

  resultDiv.innerHTML = html;
}

// MAP
// MAP
// MAP
// MAP
// MAP
let map;
let infowindow;
let lastFetchLocation = null;
let fetchTimeout = null;
const FETCH_INTERVAL = 1000; // 1 second
const MIN_MOVE_DISTANCE = 500; // meters

async function initMap() {
  infowindow = new google.maps.InfoWindow();

  // Try to get the user's current location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
map = new google.maps.Map(document.getElementById("mapContainer"), {
  center: userLocation,
  zoom: 14,
  mapId: "d69dd398ff7fbb3a41b37083" // <- add this
});

      // Fetch restaurants initially
      fetchRestaurants(userLocation);

      // Fetch again whenever the map moves or zooms
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
    }, () => {
      // fallback to Valencia
      const defaultLocation = { lat: 39.4699, lng: -0.3763 };
      map = new google.maps.Map(document.getElementById("mapContainer"), {
        center: defaultLocation,
        zoom: 14,
        mapId: "d69dd398ff7fbb3a41b37083"
      });
      infowindow = new google.maps.InfoWindow();
      fetchRestaurants(defaultLocation);
      lastFetchLocation = defaultLocation;
    });
  } else {
    alert("Your browser does not support geolocation.");
  }
}

// Haversine formula to calculate distance between two lat/lng points
function getDistanceMeters(loc1, loc2) {
  const R = 6371000; // radius of Earth in meters
  const toRad = x => x * Math.PI / 180;

  const dLat = toRad(loc2.lat - loc1.lat);
  const dLng = toRad(loc2.lng - loc1.lng);

  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(loc1.lat)) * Math.cos(toRad(loc2.lat)) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function fetchRestaurants(location) {
  const service = new google.maps.places.PlacesService(map);

  const request = {
    location: location,
    radius: 5000, // 5 km
    keyword: "vegan restaurant"
  };

  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      // Clear old markers
      map.markers?.forEach(m => m.setMap(null));
      map.markers = [];

      results.forEach(place => {
        const marker = createMarker(place);
        map.markers.push(marker);
      });
    } else {
      document.getElementById("mapResult").textContent = "No vegan restaurants found nearby.";
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: place.geometry.location,
    title: place.name
  });

  let content = '';
  if (place.photos && place.photos.length > 0) {
    const photoUrl = place.photos[0].getUrl({ maxWidth: 200, maxHeight: 150 });
    content += `<img src="${photoUrl}" ><br>`;
  }
  content += `<strong>${place.name}</strong><br>${place.vicinity || ''}`;

  marker.addListener("click", () => {
    infowindow.setContent(content);
    infowindow.open(map, marker);
  });

  return marker;
}


async function requestCameraAccess() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
    // camera access granted, you can use `stream` for your video element
    document.getElementById("video").srcObject = stream;
  } catch (err) {
    alert("Camera access denied. Cannot scan barcodes.");
    console.error(err);
  }
}

function requestLocationAccess() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        initMap(userLocation); // pass the user's location to your map
      },
      (err) => {
        alert("Location access denied. Showing default location.");
        console.error(err);
        const defaultLocation = { lat: 39.4699, lng: -0.3763 }; // fallback
        initMap(defaultLocation);
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
    const defaultLocation = { lat: 39.4699, lng: -0.3763 }; // fallback
    initMap(defaultLocation);
  }
}