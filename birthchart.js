import * as swe from './sweph.mjs';

const GEOCODE_API_KEY = '819e2a93512f4a75b0921490b0e080c8';

async function getCoordsFromCity(cityName) {
  const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(cityName)}&key=${GEOCODE_API_KEY}`);
  const data = await response.json();
  if (!data.results.length) {
    throw new Error("Could not find location");
  }
  const { lat, lng } = data.results[0].geometry;
  return { lat, lon: lng };
}

document.getElementById('birth-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const date = document.getElementById('birth-date').value;
    const time = document.getElementById('birth-time').value;
    const city = document.getElementById('birth-city').value;
    const { lat, lon } = await getCoordsFromCity(city);

    const datetime = new Date(`${date}T${time}:00Z`);
    const jd = swe.utcToJulianDay(datetime.getUTCFullYear(), datetime.getUTCMonth() + 1, datetime.getUTCDate(), datetime.getUTCHours(), datetime.getUTCMinutes(), 0);

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

    const houseResult = swe.houses(jd, lat, lon, 'P');
    const asc = houseResult.ascendant;
    const risingSign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'][Math.floor((asc % 360) / 30)];
    output += `\nRising Sign (Ascendant): ${risingSign} (${asc.toFixed(2)}°)\n`;

    for (let i = 0; i < 12; i++) {
      const cusp = houseResult.houses[i];
      const sign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'][Math.floor((cusp % 360) / 30)];
      output += `House ${i + 1}: ${sign} (${cusp.toFixed(2)}°)\n`;
    }

    document.getElementById('output').textContent = output;

  } catch (err) {
    document.getElementById('output').textContent = `Error: ${err.message}`;
  }
});
