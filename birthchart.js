document.getElementById('birth-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const date = document.getElementById('birth-date').value;
  const time = document.getElementById('birth-time').value;
  const lat = parseFloat(document.getElementById('lat').value);
  const lon = parseFloat(document.getElementById('lon').value);

  const birthDateTime = new Date(`${date}T${time}:00Z`);

  document.getElementById('output').textContent =
    `You entered:\n${birthDateTime.toISOString()}\nLat: ${lat}, Lon: ${lon}\n\n(Chart coming soon...)`;
});
//
import * as swe from 'https://unpkg.com/sweph@0.1.3/dist/sweph.mjs';

document.getElementById('birth-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get input values
  const date = document.getElementById('birth-date').value;
  const time = document.getElementById('birth-time').value;
  const lat = parseFloat(document.getElementById('lat').value);
  const lon = parseFloat(document.getElementById('lon').value);
  const datetime = new Date(`${date}T${time}:00Z`);

  // Convert to Julian Day
  const jd = swe.utcToJulianDay(datetime.getUTCFullYear(), datetime.getUTCMonth() + 1, datetime.getUTCDate(), datetime.getUTCHours(), datetime.getUTCMinutes(), 0);

  // Load Swiss Ephemeris data
  await swe.load();

  const planets = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  const planetCodes = {
    Sun: swe.SUN,
    Moon: swe.MOON,
    Mercury: swe.MERCURY,
    Venus: swe.VENUS,
    Mars: swe.MARS,
    Jupiter: swe.JUPITER,
    Saturn: swe.SATURN,
    Uranus: swe.URANUS,
    Neptune: swe.NEPTUNE,
    Pluto: swe.PLUTO,
  };

  let output = `Julian Day: ${jd}\n\n`;

  for (let planet of planets) {
    const result = swe.calc(jd, planetCodes[planet]);
    const deg = result.longitude % 360;
    const signIndex = Math.floor(deg / 30);
    const sign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'][signIndex];
    output += `${planet}: ${sign} (${deg.toFixed(2)}°)\n`;
  }

  // Ascendant and Houses
  const houseResult = swe.houses(jd, lat, lon, 'P'); // 'P' = Placidus system
  const asc = houseResult.ascendant;
  const risingSign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'][Math.floor((asc % 360) / 30)];

  output += `\nRising Sign (Ascendant): ${risingSign} (${asc.toFixed(2)}°)\n`;

  for (let i = 0; i < 12; i++) {
    const cusp = houseResult.houses[i];
    const sign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'][Math.floor((cusp % 360) / 30)];
    output += `House ${i + 1}: ${sign} (${cusp.toFixed(2)}°)\n`;
  }

  document.getElementById('output').textContent = output;
});
