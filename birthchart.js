document.getElementById('birth-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
swe.set_ephe_path("/ephe");

  
  const date = document.getElementById('birth-date').value;
  const time = document.getElementById('birth-time').value;
  const datetime = new Date(`${date}T${time}:00Z`);
  const jd = Ephemeris.toJulianDate(datetime);

  const planets = ['sun', 'moon'];
  const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
                 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

  let output = `Julian Day: ${jd.toFixed(5)}\n\n`;

  planets.forEach(planet => {
    const pos = Ephemeris.getPlanetPosition(planet, jd);
    const deg = pos.longitude % 360;
    const sign = signs[Math.floor(deg / 30)];
    output += `${planet.charAt(0).toUpperCase() + planet.slice(1)}: ${sign} (${deg.toFixed(2)}°)\n`;
  });

  // Quick & dirty Ascendant (Rising sign) approximation based on local sidereal time
  const lst = (jd * 1.002737909) % 360;
  const risingSign = signs[Math.floor(lst / 30)];
  output += `\nRising Sign (approx): ${risingSign} (${lst.toFixed(2)}°)\n`;

  document.getElementById('output').textContent = output;
});
