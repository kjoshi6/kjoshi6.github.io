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
