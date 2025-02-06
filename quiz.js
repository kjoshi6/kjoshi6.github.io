document.addEventListener('DOMContentLoaded', () => {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(button => {
        button.addEventListener('click', function() {
            const vibe = this.getAttribute('data-vibe');
            showVibeResult(vibe);
        });
    });
});

function showVibeResult(vibe) {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result');
    
    if (vibe === 'tea-cake') {
        resultContainer.innerHTML = `
            <p class="vibe-name tea-cake-animation">Tea & Cake</p>
            <p class="vibe-description">A cozy afternoon with warm tea and cake.</p>
        `;
    } else if (vibe === 'train-ride') {
        resultContainer.innerHTML = `
            <p class="vibe-name train-ride-animation">Train Ride</p>
            <p class="vibe-description">A journey through a mystical land.</p>
        `;
    } else if (vibe === 'cafe') {
        resultContainer.innerHTML = `
            <p class="vibe-name cafe-animation">Café</p>
            <p class="vibe-description">A quiet moment in a dark academia hotel café.</p>
        `;
    } else if (vibe === 'rot-day') {
        resultContainer.innerHTML = `
            <p class="vibe-name rot-day-animation">Rot Day</p>
            <p class="vibe-description">A chill gamer aesthetic with some Y2K vibes.</p>
        `;
    }
    
    document.getElementById('quiz-container').appendChild(resultContainer);
}

