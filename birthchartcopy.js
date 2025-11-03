// Access the library via global window object
const { Origin, Horoscope } = window.CircularNatalHoroscopeJs;

let selectedLocation = null;

// City search
const cityInput = document.getElementById('birth-city');
const cityDropdown = document.getElementById('city-dropdown');
let searchTimeout;

cityInput.addEventListener('input', () => {
  const query = cityInput.value.trim();
  if (query.length < 3) {
    cityDropdown.style.display = 'none';
    selectedLocation = null;
    return;
  }

  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(async () => {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5`);
      const results = await res.json();

      if (results.length === 0) {
        cityDropdown.innerHTML = '<div class="dropdown-item">No results found</div>';
        cityDropdown.style.display = 'block';
        return;
      }

      cityDropdown.innerHTML = results.map(r => `
        <div class="dropdown-item" data-lat="${r.lat}" data-lon="${r.lon}" data-name="${r.display_name}">
          ${r.display_name}
        </div>
      `).join('');

      cityDropdown.style.display = 'block';

      document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
          selectedLocation = {
            lat: parseFloat(item.dataset.lat),
            lon: parseFloat(item.dataset.lon),
            name: item.dataset.name
          };
          cityInput.value = item.dataset.name;
          cityDropdown.style.display = 'none';
        });
      });

    } catch (err) {
      cityDropdown.innerHTML = '<div class="dropdown-item">Error searching. Try again.</div>';
      cityDropdown.style.display = 'block';
    }
  }, 500);
});

document.addEventListener('click', (e) => {
  if (!cityInput.contains(e.target) && !cityDropdown.contains(e.target)) {
    cityDropdown.style.display = 'none';
  }
});

// Form submit
document.getElementById('birth-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const output = document.getElementById('output');
  const resultsDiv = document.getElementById('results');
  resultsDiv.style.display = 'block';

  if (!selectedLocation) {
    output.textContent = "⚠️ Please select a city from the dropdown";
    return;
  }

  const [year, month, day] = document.getElementById('birth-date').value.split('-').map(Number);
  const [hour, minute] = document.getElementById('birth-time').value.split(':').map(Number);

  try {
    const origin = new Origin({
      year,
      month: month - 1, // JS months are 0-based for this library
      date: day,
      hour,
      minute,
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lon
    });

    const horoscope = new Horoscope({
      origin,
      houseSystem: 'whole-sign',
      zodiac: 'tropical',
      aspectPoints: ['bodies', 'points', 'angles'],
      aspectWithPoints: ['bodies', 'points', 'angles'],
      aspectTypes: ['major', 'minor'],
      customOrbs: {},
      language: 'en'
    });

    let resultText = `📍 ${selectedLocation.name}\n\n`;

    // Planets
    const bodies = ['sun','moon','mercury','venus','mars','jupiter','saturn','uranus','neptune','pluto','chiron'];
    for (const body of bodies) {
      if(horoscope.CelestialBodies[body]){
        const deg = horoscope.CelestialBodies[body].longitude.toFixed(1);
        const sign = horoscope.CelestialBodies[body].sign;
        resultText += `${body.toUpperCase()}: ${sign} ${deg}°\n`;
      }
    }

    // Rising sign
    const asc = horoscope.Ascendant.sign;
    const ascDeg = horoscope.Ascendant.longitude.toFixed(1);
    resultText += `\n⬆️ Rising Sign: ${asc} ${ascDeg}°`;

    output.textContent = resultText;

  } catch (err) {
    output.textContent = `❌ Error: ${err.message}`;
    console.error(err);
  }
});
