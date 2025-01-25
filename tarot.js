const deckImages = [
    // Example of how each card would look - Replace with actual images
    'path/to/card1.jpg', 'path/to/card2.jpg', 'path/to/card3.jpg', // etc...
    // Continue until all 78 tarot cards are included
];

let drawnCards = [];
let maxCards = 3;

function shuffleDeck() {
    if (drawnCards.length >= maxCards) return; // Allow only up to 3 cards to be drawn
    
    // Shuffle deck logic (using Fisher-Yates shuffle)
    let shuffledDeck = [...deckImages];
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    
    // Start drawing a card
    drawCard(shuffledDeck[0]);
}

function drawCard(cardImage) {
    if (drawnCards.length >= maxCards) return; // If 3 cards are drawn, do nothing
    
    // Create a div for the new card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.style.backgroundImage = `url(${cardImage})`;
    
    // Apply the flip animation and smoke effect
    cardDiv.classList.add('flip-card', 'smoke-effect');
    
    // Append card to the drawn-cards section
    document.getElementById('drawn-cards').appendChild(cardDiv);
    
    // Add the card to drawnCards array to keep track
    drawnCards.push(cardImage);
    
    // Set the card's name and description
    setCardInfo(cardImage);
}

function setCardInfo(cardImage) {
    const cardName = getCardName(cardImage);
    const cardDescription = getCardDescription(cardImage);
    
    document.getElementById('card-name').textContent = cardName;
    document.getElementById('card-description').textContent = cardDescription;
}

function getCardName(cardImage) {
    // Return the name based on the image, for now it's just an example
    if (cardImage.includes('card1')) return 'The Fool';
    if (cardImage.includes('card2')) return 'The Magician';
    if (cardImage.includes('card3')) return 'The High Priestess';
    return 'Unknown Card';
}

function getCardDescription(cardImage) {
    // Return the description for the card, for now it's just an example
    if (cardImage.includes('card1')) return 'A new beginning, full of potential.';
    if (cardImage.includes('card2')) return 'Mastery, skill, and creativity.';
    if (cardImage.includes('card3')) return 'Intuition and wisdom.';
    return 'A mysterious force at work.';
}

