// Wait for sweph to load
let swe;
let selectedLocation = null;

// Initialize Swiss Ephemeris when page loads
window.addEventListener('load', () => {
  console.log('Page loaded, initializing sweph...');
  try {
    swe = new sweph();
    swe.set_ephe_path("/ephe");
    console.log('Swiss Ephemeris initialized successfully');
  } catch (error) {
    console.error('Error initializing sweph:', error);
  }
});

// City search functionality
const cityInput = document.getElementById('birth-city');
const cityDropdown = document.getElementById('city-dropdown');

let searchTimeout;
cityInput.addEventListener('input', (e) => {
  const query = e.target.value.trim();
  
  if (query.length < 3) {
    cityDropdown.style.display = 'none';
    selectedLocation = null;
    return;
  }

  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(async () => {
    try {
      console.log('Searching for:', query);
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5`);
      const results = await response.json();
      console.log('Search results:', results);
      
      if (results.length === 0) {
        cityDropdown.innerHTML = '<div class="dropdown-item" style="color: #333;">No results found</div>';
        cityDropdown.style.display = 'block';
        return;
      }

      cityDropdown.innerHTML = results.map(result => `
        <div class="dropdown-item" data-lat="${result.lat}" data-lon="${result.lon}" data-name="${result.display_name}" style="color: #333;">
          ${result.display_name}
        </div>
      `).join('');
      
      cityDropdown.style.display = 'block';

      // Add click handlers to dropdown items
      document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
          selectedLocation = {
            lat: parseFloat(item.dataset.lat),
            lon: parseFloat(item.dataset.lon),
            name: item.dataset.name
          };
          cityInput.value = item.dataset.name;
          cityDropdown.style.display = 'none';
          console.log('Selected location:', selectedLocation);
        });
      });

    } catch (error) {
      console.error('Geocoding error:', error);
      cityDropdown.innerHTML = '<div class="dropdown-item" style="color: #333;">Error searching. Try again.</div>';
      cityDropdown.style.display = 'block';
    }
  }, 500);
});

// Hide dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!cityInput.contains(e.target) && !cityDropdown.contains(e.target)) {
    cityDropdown.style.display = 'none';
  }
});

// Form submission
document.getElementById('birth-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const output = document.getElementById('output');
  const resultsDiv = document.getElementById('results');
  
  output.textContent = '✨ Calculating your cosmic blueprint... ✨';
  resultsDiv.style.display = 'block';
  
  console.log('Form submitted');

  try {
    if (!swe) {
      throw new Error('Swiss Ephemeris not initialized. Please refresh the page.');
    }

    if (!selectedLocation) {
      output.textContent = '⚠️ Please select a city from the dropdown';
      return;
    }

    const dateInput = document.getElementById('birth-date').value;
    const timeInput = document.getElementById('birth-time').value;
    
    const lat = selectedLocation.lat;
    const lon = selectedLocation.lon;
    const locationName = selectedLocation.name;
    
    console.log('Using location:', { lat, lon, locationName });

    const [year, month, day] = dateInput.split('-').map(Number);
    const [hour, minute] = timeInput.split(':').map(Number);
    const decimalTime = hour + (minute / 60);
    console.log('Date/time:', { year, month, day, hour, minute });

    console.log('Calculating Julian Day...');
    const jd = swe.utc_to_jd(year, month, day, decimalTime, 0, 0);
    console.log('Julian Day:', jd);

    const planets = [
      { name: '☉ Sun', id: swe.SUN },
      { name: '☽ Moon', id: swe.MOON },
      { name: '☿ Mercury', id: swe.MERCURY },
      { name: '♀ Venus', id: swe.VENUS },
      { name: '♂ Mars', id: swe.MARS },
      { name: '♃ Jupiter', id: swe.JUPITER },
      { name: '♄ Saturn', id: swe.SATURN },
      { name: '♅ Uranus', id: swe.URANUS },
      { name: '♆ Neptune', id: swe.NEPTUNE },
      { name: '♇ Pluto', id: swe.PLUTO }
    ];

    const signs = ["♈ Aries", "♉ Taurus", "♊ Gemini", "♋ Cancer", "♌ Leo", "♍ Virgo", 
                   "♎ Libra", "♏ Scorpio", "♐ Sagittarius", "♑ Capricorn", "♒ Aquarius", "♓ Pisces"];

    let result = `📍 ${locationName}\n\n`;

    console.log('Calculating planetary positions...');
    for (const planet of planets) {
      const calc = swe.calc_ut(jd, planet.id);
      const deg = calc.longitude % 360;
      const sign = signs[Math.floor(deg / 30)];
      const degInSign = deg % 30;
      result += `${planet.name}: ${sign} ${degInSign.toFixed(1)}°\n`;
    }

    // Rising Sign (Ascendant)
    console.log('Calculating rising sign...');
    const houses = swe.houses(jd, lat, lon, 'P');
    const asc = houses.ascendant % 360;
    const risingSign = signs[Math.floor(asc / 30)];
    const ascDegInSign = asc % 30;
    result += `\n⬆️ Rising Sign: ${risingSign} ${ascDegInSign.toFixed(1)}°`;

    output.textContent = result;
    console.log('Calculation complete! ✨');
    
  } catch (error) {
    output.textContent = `❌ Error: ${error.message}\n\nTry refreshing the page or check the console for details.`;
    console.error('Full error:', error);
  }
});
