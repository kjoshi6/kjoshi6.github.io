// Deck of 78 cards
const tarotDeck = [
  { name: 'The Fool', description: 'A new beginning, innocence, adventure', img: 'https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MDkvMTIvMzEvcndzLXRhcm90LTAwLWZvb2wtMDAzNzgwLTEwMjQuanBn/240/418/webp' },
  { name: 'The Magician', description: 'Manifestation, willpower, resourcefulness', img: 'images/magician.jpg' },
  // Add the rest of the cards with name, description, and img (image paths)
];

// Function to shuffle the deck
function shuffleDeck() {
  const shuffledDeck = [...tarotDeck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]]; // Swap elements
  }
  return shuffledDeck;
}

// Function to draw a card
function drawCard() {
  const shuffledDeck = shuffleDeck();
  const drawnCard = shuffledDeck[0]; // Draw the first card from shuffled deck

  // Create the card element and set its content
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.dataset.name = drawnCard.name;
  cardElement.dataset.description = drawnCard.description;
  cardElement.dataset.img = drawnCard.img;

  // Set initial face-down card image (can be a generic back image for now)
  cardElement.style.backgroundImage = 'url("images/card_back.jpg")'; // Set path to your card back image
  document.getElementById('card-container').appendChild(cardElement);

  // Add an event listener to flip the card when clicked
  cardElement.addEventListener('click', function() {
    cardElement.classList.add('flipped');
    const cardName = document.getElementById('card-name');
    const cardDescription = document.getElementById('card-description');
    cardName.textContent = drawnCard.name;
    cardDescription.textContent = drawnCard.description;

    // Change card's background to front image when clicked (flip)
    cardElement.style.backgroundImage = `url('${drawnCard.img}')`; // Set path to front image
  });
}

// Initialize the page
document.getElementById('draw-card-btn').addEventListener('click', drawCard);
