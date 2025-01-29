const cards = [
    { name: 'The Fool', image: 'path/to/the-fool.jpg', description: 'A new journey begins.' },
    { name: 'The Magician', image: 'path/to/the-magician.jpg', description: 'You have the tools to manifest your dreams.' },
    { name: 'The High Priestess', image: 'path/to/the-high-priestess.jpg', description: 'Trust your intuition.' },
    // Add all 78 tarot cards here with their image paths and descriptions
];

let shuffledDeck = [];

const cardContainer = document.getElementById('card-container');
const cardInfo = document.getElementById('card-info');
const cardName = document.getElementById('card-name');
const cardDescription = document.getElementById('card-description');

function createCards() {
    shuffledDeck = shuffleDeck(cards);

    shuffledDeck.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.index = index;

        const frontFace = document.createElement('div');
        frontFace.classList.add('front');

        const backFace = document.createElement('div');
        backFace.classList.add('back');
        backFace.style.backgroundImage = `url(${card.image})`;

        cardElement.appendChild(frontFace);
        cardElement.appendChild(backFace);

        cardElement.addEventListener('click', () => flipCard(cardElement, card));
        cardContainer.appendChild(cardElement);
    });
}

function shuffleDeck(deck) {
    let shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function flipCard(cardElement, card) {
    if (
::contentReference[oaicite:0]{index=0}
 
