document.getElementById('birth-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const date = document.getElementById('birth-date').value;
  const time = document.getElementById('birth-time').value;
  const datetime = new Date(`${date}T${time}:00Z`);
  const jd = Ephemeris.toJulianDate(datetime);

  const planets = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
  let output = `Julian Day: ${jd.toFixed(5)}\n\n`;

  planets.forEach(planet => {
    const pos = Ephemeris.getPlanetPosition(planet, jd);
    const deg = pos.longitude % 360;
    const signIndex = Math.floor(deg / 30);
    const sign = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"][signIndex];
    output += `${planet.charAt(0).toUpperCase() + planet.slice(1)}: ${sign} (${deg.toFixed(2)}°)\n`;
  });

  document.getElementById('output').textContent = output;
});
