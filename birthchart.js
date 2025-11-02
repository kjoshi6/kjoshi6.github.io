// birthchart.js — fixed version, keeps your structure intact

let swe;

// Initialize Swiss Ephemeris properly for browser (async)
async function initializeSweph() {
  console.log("Page loaded, initializing Swiss Ephemeris...");
  try {
    // Wait for WASM module to finish loading
    swe = await window.sweph;
    await swe.swe_set_ephe_path(null);
    console.log("Swiss Ephemeris initialized successfully 🌟");
  } catch (error) {
    console.error("Failed to initialize Swiss Ephemeris:", error);
    alert("Error: Swiss Ephemeris not initialized. Please refresh the page.");
  }
}

// Call the init function on page load
initializeSweph();

// Handle form submission
document.getElementById("birth-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  // Make sure Swiss Ephemeris is ready before continuing
  if (!swe) {
    alert("Error: Swiss Ephemeris not initialized. Please refresh the page.");
    return;
  }

  const date = document.getElementById("birth-date").value;
  const time = document.getElementById("birth-time").value;
  const city = document.getElementById("birth-city").value;

  if (!date || !time || !city) {
    alert("Please fill in all fields.");
    return;
  }

  const dateObj = new Date(`${date}T${time}`);
  const jd = await swe.swe_julday(
    dateObj.getUTCFullYear(),
    dateObj.getUTCMonth() + 1,
    dateObj.getUTCDate(),
    dateObj.getUTCHours() + dateObj.getUTCMinutes() / 60,
    swe.SE_GREG_CAL
  );

  console.log("Julian day:", jd);

  const planets = [
    swe.SE_SUN,
    swe.SE_MOON,
    swe.SE_MERCURY,
    swe.SE_VENUS,
    swe.SE_MARS,
    swe.SE_JUPITER,
    swe.SE_SATURN,
    swe.SE_URANUS,
    swe.SE_NEPTUNE,
    swe.SE_PLUTO,
    swe.SE_ASC
  ];

  const planetNames = [
    "Sun",
    "Moon",
    "Mercury",
    "Venus",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
    "Ascendant"
  ];

  let output = ` Birth Chart for ${city}\n\n`;

  // Loop through planets and calculate positions
  for (let i = 0; i < planets.length; i++) {
    try {
      const result = await swe.swe_calc_ut(jd, planets[i], swe.SEFLG_SPEED);
      if (result.rc === swe.ERR) {
        output += `${planetNames[i]}: Error calculating position.\n`;
      } else {
        output += `${planetNames[i]}: ${result.longitude.toFixed(2)}°\n`;
      }
    } catch (err) {
      output += `${planetNames[i]}: Error - ${err.message}\n`;
    }
  }

  // Display results
  const resultsDiv = document.getElementById("results");
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = output;
  resultsDiv.style.display = "block";
});
