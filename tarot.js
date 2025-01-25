// Array to store all 78 tarot cards (replace with actual image paths)
const tarotDeck = [
  { name: "The Fool", img: "path_to_the_fool_image.jpg", description: "A new beginning, a leap of faith." },
  { name: "The Magician", img: "path_to_the_magician_image.jpg", description: "Manifestation, power, skill." },
  { name: "The High Priestess", img: "path_to_the_high_priestess_image.jpg", description: "Intuition, mystery, inner wisdom." },
  // ... Add all 78 cards here ...
];

// Function to shuffle the tarot deck
function shuffleDeck() {
  const shuffledDeck = [...tarotDeck].sort(() => Math.random() - 0.5); // Random shuffle
  return shuffledDeck;
}

// Function to draw a card
function drawCard() {
  const deck = shuffleDeck();
  const card = deck[0]; // Draw the first card

  // Create the card element and show it flipped with description
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.dataset.name = card.name;
  cardElement.dataset.description = card.description;
  cardElement.dataset.img = card.img;

  // Show the card as face down initially
  document.getElementById('card-container').appendChild(cardElement);

  // Add flip effect when clicked
  cardElement.addEventListener('click', function() {
    cardElement.classList.add('flipped');

    // Display card name and description after flip
    const cardName = document.getElementById('card-name');
    const cardDescription = document.getElementById('card-description');

    cardName.textContent = cardElement.dataset.name;
    cardDescription.textContent = cardElement.dataset.description;
  });
}

// Add event listener to shuffle deck when clicked
document.getElementById('deck-shuffle').addEventListener('click', drawCard);

// Optional: Add event listener to limit maximum of 3 cards drawn
let drawnCardCount = 0;
document.getElementById('deck-shuffle').addEventListener('click', function() {
  if (drawnCardCount < 3) {
    drawCard();
    drawnCardCount++;
  } else {
    alert("You can only draw 3 cards.");
  }
});
