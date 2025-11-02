// birthchart.js — stable version with Swiss Ephemeris + city dropdown

let swe;

// Initialize Swiss Ephemeris AFTER the library loads
function waitForSweph() {
  return new Promise((resolve, reject) => {
    const check = () => {
      if (window.sweph) {
        resolve(window.sweph);
      } else {
        setTimeout(check, 100);
      }
    };
    check();
  });
}

async function initializeSweph() {
  console.log("Initializing Swiss Ephemeris...");
  try {
    swe = await waitForSweph();
    await swe.swe_set_ephe_path(null);
    console.log("✅ Swiss Ephemeris initialized successfully!");
  } catch (error) {
    console.error("Failed to initialize Swiss Ephemeris:", error);
    alert("Error: Swiss Ephemeris not initialized. Please refresh the page.");
  }
}

initializeSweph();

// --- CITY AUTOCOMPLETE ---
const cityInput = document.getElementById("birth-city");
const dropdown = document.getElementById("city-dropdown");

cityInput.addEventListener("input", async () => {
  const query = cityInput.value.trim();
  if (query.length < 3) {
    dropdown.innerHTML = "";
    return;
  }

  try {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5`);
    const data = await res.json();

    dropdown.innerHTML = "";
    if (data.results) {
      data.results.forEach((city) => {
        const div = document.createElement("div");
        div.textContent = `${city.name}, ${city.country_code}`;
        div.style.padding = "8px";
        div.style.cursor = "pointer";
        div.style.background = "#1c1c1c";
        div.style.borderBottom = "1px solid #AE4169";
        div.addEventListener("click", () => {
          cityInput.value = city.name;
          dropdown.innerHTML = "";
        });
        dropdown.appendChild(div);
      });
    }
  } catch (err) {
    console.error("City lookup failed:", err);
  }
});

// --- FORM HANDLING ---
document.getElementById("birth-form").addEventListener("submit", async function (e) {
  e.preventDefault();

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

  const planets = [
    swe.SE_SUN, swe.SE_MOON, swe.SE_MERCURY, swe.SE_VENUS,
    swe.SE_MARS, swe.SE_JUPITER, swe.SE_SATURN,
    swe.SE_URANUS, swe.SE_NEPTUNE, swe.SE_PLUTO, swe.SE_ASC
  ];

  const names = [
    "Sun", "Moon", "Mercury", "Venus", "Mars",
    "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Ascendant"
  ];

  let output = `✨ Birth Chart for ${city}\n\n`;

  for (let i = 0; i < planets.length; i++) {
    try {
      const result = await swe.swe_calc_ut(jd, planets[i], swe.SEFLG_SPEED);
      if (result.rc === swe.ERR) {
        output += `${names[i]}: Error calculating position.\n`;
      } else {
        output += `${names[i]}: ${result.longitude.toFixed(2)}°\n`;
      }
    } catch (err) {
      output += `${names[i]}: Error - ${err.message}\n`;
    }
  }

  const resultsDiv = document.getElementById("results");
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = output;
  resultsDiv.style.display = "block";
});
