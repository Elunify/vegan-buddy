function openTab(tabId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const section = document.getElementById(tabId);
  if (section) section.classList.add('active');

  if (tabId === "scan") {
    startCamera().then(detectBarcode);
  } else {
    stopCamera();
  }

  if (tabId === "map" && !map) {
    initMap();
  }
}

// Emoji buttons
document.getElementById("mapBtn").onclick = () => openTab("map");
document.getElementById("scanBtn").onclick = () => openTab("scan");

// Back button
document.getElementById('backBtn').addEventListener('click', () => {
  window.location.href = 'mainpage.html';
});


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
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    video.srcObject = stream;
  } catch (err) {
    resultDiv.textContent = "Camera not accessible: " + err;
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

let map;
let userMarker;
let restaurantLayer; // marker layer for caching
const mapResult = document.getElementById('mapResult');
const apiKey = '430608aeb5bb4c958d7c9101669859c3'; // Replace with your key
let lastFetchCenter = null;
let fetchTimeout = null;
const fetchDelay = 1000; // 1 second debounce
const minDistance = 0.005; // ~0.5 km, adjust as needed

// Initialize the map
function initMap() {
  map = L.map('mapContainer').setView([0, 0], 13);

  // Tile layer
  L.tileLayer(`https://maps.geoapify.com/v1/tile/osm-carto/{z}/{x}/{y}.png?apiKey=${apiKey}`, {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19,
  }).addTo(map);

  // Layer group for restaurant markers
  restaurantLayer = L.layerGroup().addTo(map);

  // Get user location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      map.setView([lat, lon], 14);

      userMarker = L.marker([lat, lon]).addTo(map)
        .bindPopup('You are here')
        .openPopup();

      fetchVeganRestaurants(lat, lon);

      // Refresh restaurants when map moves
      map.on('moveend', () => {
  const center = map.getCenter();

  // Check distance from last fetch
  if (lastFetchCenter) {
    const distance = Math.sqrt(
      Math.pow(center.lat - lastFetchCenter.lat, 2) +
      Math.pow(center.lng - lastFetchCenter.lng, 2)
    );
    if (distance < minDistance) return; // too close, skip
  }

  // Debounce API call
  if (fetchTimeout) clearTimeout(fetchTimeout);
  fetchTimeout = setTimeout(() => {
    fetchVeganRestaurants(center.lat, center.lng);
    lastFetchCenter = center;
  }, fetchDelay);
});

    }, () => {
      mapResult.textContent = 'Could not get your location.';
    });
  } else {
    mapResult.textContent = 'Geolocation not supported by your browser.';
  }
}

const veganRegex = /vegan|plant[\s-]?based|vegetarian/i; // flexible keyword matching

async function fetchVeganRestaurants(lat, lon) {
  restaurantLayer.clearLayers(); // clear old markers
  mapResult.textContent = 'Fetching vegan restaurants...';

  const radius = 5000; // 5 km
  const apiKey = "AIzaSyAwHL9UaF4A7qSZt_qkW2QrZVnQWXeVFNs"; // <-- replace with your key

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=${radius}&keyword=vegan&type=restaurant&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      mapResult.textContent = 'No vegan restaurants found nearby.';
      return;
    }

    let count = 0;
    data.results.forEach(place => {
      if (!place.geometry || !place.geometry.location) return;

      const lat = place.geometry.location.lat;
      const lng = place.geometry.location.lng;
      const name = place.name || "Unknown";
      const address = place.vicinity || "";
      const placeId = place.place_id;

      const popupContent = `
        <strong>${name}</strong><br>
        ${address}<br>
        <a href="https://www.google.com/maps/place/?q=place_id:${placeId}" target="_blank">View on Google Maps</a>
      `;

      L.marker([lat, lng]).addTo(restaurantLayer).bindPopup(popupContent);
      count++;
    });

    mapResult.textContent = count === 0 
      ? 'No vegan restaurants found nearby.' 
      : `Found ${count} vegan restaurants nearby.`;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    mapResult.textContent = 'Error fetching restaurant data.';
  }
}

