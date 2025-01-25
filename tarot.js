document.querySelectorAll('.tarot-card').forEach(card => {
  card.addEventListener('click', () => {
    const name = card.dataset.name;
    const description = card.dataset.description;

    // Flip the card
    card.style.transform = 'perspective(1000px) rotateY(180deg)';
    card.style.backgroundImage = 'url("front-placeholder.jpg")'; // Replace with card front image

    // Create smoke effect (placeholder for now)
    const smokeOverlay = document.createElement('div');
    smokeOverlay.className = 'smoke-overlay';
    smokeOverlay.innerHTML = `
      <div class="card-details">
        <h1>${name}</h1>
        <p>${description}</p>
      </div>
    `;
    document.body.appendChild(smokeOverlay);

    // Remove smoke overlay on click
    smokeOverlay.addEventListener('click', () => {
      smokeOverlay.remove();
      card.style.transform = 'perspective(1000px) rotateY(0deg)'; // Reset flip
    });
  });
});

