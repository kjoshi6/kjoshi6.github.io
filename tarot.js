const cards = [
    { name: 'The Fool', image: 'https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MDkvMTIvMzEvcndzLXRhcm90LTAwLWZvb2wtMDAzNzgwLTEwMjQuanBn/240/418/webp', description: 'A new journey begins.' },
    { name: 'The Magician', image: 'https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MDkvMTIvMzEvcndzLXRhcm90LTAxLW1hZ2ljaWFuLWQ3NjUxZS0xMDI0LmpwZw%3D%3D/240/422/webp', description: 'You have the tools to manifest your dreams.' },
    { name: 'The High Priestess', image: 'https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MDkvMTIvMzEvcndzLXRhcm90LTAyLWhpZ2gtcHJpZXN0ZXNzLWU4MDliOS0xMDI0LmpwZw%3D%3D/240/416/webp', description: 'Trust your intuition.' },
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
 
