// Wait for sweph to load
let swe;

function initSweph() {
  swe.set_ephe_path("/:ephe:/");
  console.log('Swiss Ephemeris initialized');
}

// Initialize when page loads
window.addEventListener('load', initSweph);

document.getElementById('birth-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const output = document.getElementById('output');
  output.textContent = 'Loading...';
  console.log('Form submitted');

  try {
    const dateInput = document.getElementById('birth-date').value;
    const timeInput = document.getElementById('birth-time').value;
    const city = document.getElementById('birth-city').value;
    console.log('Inputs:', { dateInput, timeInput, city });

    // Geocode the city to get coordinates
    console.log('Fetching geocode...');
    const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`);
    const geoData = await geoResponse.json();
    console.log('Geocode result:', geoData);
    
    if (!geoData || geoData.length === 0) {
      output.textContent = 'City not found. Please try again with a different format (e.g. "Dahanu, India" or "Mumbai, India")';
      return;
    }

    const lat = parseFloat(geoData[0].lat);
    const lon = parseFloat(geoData[0].lon);
    const locationName = geoData[0].display_name;
    console.log('Coordinates:', { lat, lon });

    const [year, month, day] = dateInput.split('-').map(Number);
    const [hour, minute] = timeInput.split(':').map(Number);
    const decimalTime = hour + (minute / 60);
    console.log('Date/time parsed:', { year, month, day, hour, minute });

    console.log('Calculating Julian Day...');
    const jd = swe.utc_to_jd(year, month, day, decimalTime, 0, 0);
    console.log('Julian Day:', jd);

    const planets = [
      { name: 'Sun', id: swe.SUN },
      { name: 'Moon', id: swe.MOON },
      { name: 'Mercury', id: swe.MERCURY },
      { name: 'Venus', id: swe.VENUS },
      { name: 'Mars', id: swe.MARS },
      { name: 'Jupiter', id: swe.JUPITER },
      { name: 'Saturn', id: swe.SATURN },
      { name: 'Uranus', id: swe.URANUS },
      { name: 'Neptune', id: swe.NEPTUNE },
      { name: 'Pluto', id: swe.PLUTO }
    ];

    const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

    let result = `Location: ${locationName}\nCoordinates: ${lat.toFixed(4)}°, ${lon.toFixed(4)}°\n`;
    result += `Julian Day: ${jd.toFixed(5)}\n\n`;

    for (const planet of planets) {
      const calc = swe.calc_ut(jd, planet.id);
      const deg = calc.longitude % 360;
      const sign = signs[Math.floor(deg / 30)];
      const degInSign = deg % 30;
      result += `${planet.name}: ${sign} ${degInSign.toFixed(2)}°\n`;
    }

    // Rising Sign
    const houses = swe.houses(jd, lat, lon, 'P');
    const asc = houses.ascendant % 360;
    const risingSign = signs[Math.floor(asc / 30)];
    const ascDegInSign = asc % 30;
    result += `\nRising Sign: ${risingSign} ${ascDegInSign.toFixed(2)}°`;

    output.textContent = result;
  } catch (error) {
    output.textContent = `Error: ${error.message}\n\nPlease check:\n- Birth city format (try "City, State" or "City, Country")\n- Ephemeris files are in /ephe folder\n- Check browser console for details`;
    console.error('Full error:', error);
  }
});
