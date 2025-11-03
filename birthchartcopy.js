const { Origin, Horoscope } = window.CircularNatalHoroscopeJs;

let selectedLocation = null;

const cityInput = document.getElementById("city");
const cityDropdown = document.getElementById("city-dropdown");

let searchTimeout;

// 🧭 City search via Nominatim (OpenStreetMap)
cityInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();

  if (query.length < 3) {
    cityDropdown.style.display = "none";
    selectedLocation = null;
    return;
  }

  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5`
      );
      const results = await response.json();

      if (results.length === 0) {
        cityDropdown.innerHTML = `<div class="dropdown-item">No results found</div>`;
        cityDropdown.style.display = "block";
        return;
      }

      cityDropdown.innerHTML = results
        .map(
          (r) =>
            `<div class="dropdown-item" data-lat="${r.lat}" data-lon="${r.lon}" data-name="${r.display_name}">
              ${r.display_name}
            </div>`
        )
        .join("");

      cityDropdown.style.display = "block";

      document.querySelectorAll(".dropdown-item").forEach((item) => {
        item.addEventListener("click", () => {
          selectedLocation = {
            lat: parseFloat(item.dataset.lat),
            lon: parseFloat(item.dataset.lon),
            name: item.dataset.name,
          };
          cityInput.value = item.dataset.name;
          cityDropdown.style.display = "none";
        });
      });
    } catch (error) {
      console.error("Error fetching city data:", error);
      cityDropdown.innerHTML = `<div class="dropdown-item">Error searching. Try again.</div>`;
      cityDropdown.style.display = "block";
    }
  }, 500);
});

// Hide dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!cityInput.contains(e.target) && !cityDropdown.contains(e.target)) {
    cityDropdown.style.display = "none";
  }
});

// 🌞 Horoscope calculation
document.getElementById("birth-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!selectedLocation) {
    alert("Please select a city from the dropdown first.");
    return;
  }

  const date = new Date(document.getElementById("birth-date").value);
  const time = document.getElementById("birth-time").value.split(":");
  const year = date.getFullYear();
  const month = date.getMonth(); // 0 = Jan
  const day = date.getDate();
  const hour = parseInt(time[0]);
  const minute = parseInt(time[1]);

  const latitude = selectedLocation.lat;
  const longitude = selectedLocation.lon;

  try {
    const origin = new Origin({
      year,
      month,
      date: day,
      hour,
      minute,
      latitude,
      longitude,
    });

    const horoscope = new Horoscope({
      origin,
      houseSystem: "whole-sign",
      zodiac: "tropical",
      aspectPoints: ["bodies", "points", "angles"],
      aspectWithPoints: ["bodies", "points", "angles"],
      aspectTypes: ["major"],
      language: "en",
    });

    const output = document.getElementById("output");
    output.textContent = JSON.stringify(horoscope.CelestialBodies, null, 2);
    document.getElementById("results").style.display = "block";
  } catch (err) {
    alert("Error generating chart: " + err.message);
    console.error(err);
  }
});
