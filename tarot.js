const cards = [
    { name: 'The Fool', description: 'A new journey begins.' },
    { name: 'The Magician', description: 'You have the tools to manifest your dreams.' },
    { name: 'The High Priestess', description: 'Trust your intuition.' },
    // Add all 78 tarot cards here with their names and descriptions
];

let shuffledDeck = [];

const cardContainer = document.getElementById('card-container');
const cardInfo = document.getElementById('card-info');
const cardName = document.getElementById('card-name');
const cardDescription = document.getElementById('card-description');

function createCards() {
    shuffledDeck = shuffleDeck(cards);

    // Create card elements dynamically
    shuffledDeck.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.index = index;
        cardElement.addEventListener('click', () => flipCard(cardElement, card));
        cardContainer.appendChild(cardElement);
    });
}

function shuffleDeck(deck) {
    let shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
    }
    return shuffled;
}

function flipCard(cardElement, card) {
    if (cardElement.classList.contains('flipped')) return;

    cardElement.classList.add('flipped');
    
    // Show smoke effect
    const smoke = document.createElement('div');
    smoke.classList.add('smoke-effect');
    cardElement.appendChild(smoke);

    // Display card info
    cardName.textContent = card.name;
    cardDescription.textContent = card.description;
    cardInfo.style.display = 'block';

    // Hide cards after drawing 3 cards
    let drawnCards = document.querySelectorAll('.card.flipped');
    if (drawnCards.length >= 3) {
        const remainingCards = document.querySelectorAll('.card:not(.flipped)');
        remainingCards.forEach(card => card.style.display = 'none');
    }
}

// Call the function to create cards
createCards();
