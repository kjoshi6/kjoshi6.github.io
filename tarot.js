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
const drawButton = document.getElementById('draw-button'); // Add a button for shuffling and drawing cards

function createDeckPlaceholder() {
    // Show a single card deck image
    const deckPlaceholder = document.createElement('div');
    deckPlaceholder.id = 'deck-placeholder';
    deckPlaceholder.classList.add('deck-placeholder');
    deckPlaceholder.addEventListener('click', shuffleAndDraw);
    cardContainer.appendChild(deckPlaceholder);
}

function shuffleAndDraw() {
    // Shuffle the deck and animate the shuffle
    shuffledDeck = shuffleDeck(cards);
    animateShuffle();

    // Allow users to draw a card after shuffle animation
    setTimeout(() => {
        drawButton.style.display = 'block'; // Show draw button
    }, 1500); // Wait for shuffle animation to complete
}

function shuffleDeck(deck) {
    let shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
    }
    return shuffled;
}

function animateShuffle() {
    const deckPlaceholder = document.getElementById('deck-placeholder');
    deckPlaceholder.classList.add('shuffle-animation');
    setTimeout(() => {
        deckPlaceholder.classList.remove('shuffle-animation');
    }, 1500);
}

function drawCard() {
    if (shuffledDeck.length === 0) {
        alert('No cards left in the deck!');
        return;
    }

    const card = shuffledDeck.pop(); // Draw the top card from the shuffled deck

    // Create card element with smoke effect
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'flipped');
    const smoke = document.createElement('div');
    smoke.classList.add('smoke-effect');
    cardElement.appendChild(smoke);

    // Add card info to the DOM
    const cardImage = document.createElement('div'); // Placeholder for image
    cardImage.classList.add('card-image');
    cardElement.appendChild(cardImage);

    const cardNameElement = document.createElement('h2');
    cardNameElement.textContent = card.name;
    cardElement.appendChild(cardNameElement);

    const cardDescriptionElement = document.createElement('p');
    cardDescriptionElement.textContent = card.description;
    cardElement.appendChild(cardDescriptionElement);

    // Add to card container and hide deck placeholder if all cards are drawn
    cardContainer.appendChild(cardElement);

    if (shuffledDeck.length === 0) {
        document.getElementById('deck-placeholder').style.display = 'none';
    }
}

// Initialize the placeholder deck
createDeckPlaceholder();
