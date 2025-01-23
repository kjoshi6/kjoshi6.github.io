document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.tarot-card');
    const cardNameElement = document.getElementById('card-name');
    const cardDescriptionElement = document.getElementById('card-description');

    // Shuffle Cards (Simple version)
    const shuffleDeck = () => {
        const cardContainer = document.querySelector('.card-container');
        const cardsArray = Array.from(cards);
        for (let i = cardsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            cardContainer.appendChild(cardsArray[j]);
        }
    };

    // Shuffle on page load
    shuffleDeck();

    // Handle Card Click
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardName = card.getAttribute('data-card-name');
            const cardDescription = card.getAttribute('data-card-description');

            // Show card name and description
            cardNameElement.textContent = cardName;
            cardDescriptionElement.textContent = cardDescription;

            // Apply smoke animation (for effect)
            card.classList.add('highlight-card');
        });
    });
});

