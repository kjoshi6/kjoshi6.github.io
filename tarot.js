document.addEventListener('DOMContentLoaded', () => {
    const cardDeck = document.getElementById('card-deck');
    const cardDetails = document.getElementById('card-details');
    const cardName = document.getElementById('card-name');
    const cardDescription = document.getElementById('card-description');

    // List of card details (name and image placeholders for now)
    const cardInfo = [
        { name: "The Fool", image: "card-fool.jpg", description: "The Fool represents new beginnings, innocence, and spontaneity." },
        { name: "The Magician", image: "card-magician.jpg", description: "The Magician symbolizes skill, resourcefulness, and power." },
        { name: "The High Priestess", image: "card-high-priestess.jpg", description: "The High Priestess embodies intuition, wisdom, and mystery." },
        { name: "The Empress", image: "card-empress.jpg", description: "The Empress represents abundance, nurturing, and creativity." },
        { name: "The Emperor", image: "card-emperor.jpg", description: "The Emperor signifies authority, structure, and leadership." },
        { name: "The Hierophant", image: "card-hierophant.jpg", description: "The Hierophant represents tradition, spirituality, and guidance." },
        { name: "The Lovers", image: "card-lovers.jpg", description: "The Lovers card represents love, harmony, and partnership." },
        { name: "The Chariot", image: "card-chariot.jpg", description: "The Chariot represents control, determination, and victory." },
        { name: "Strength", image: "card-strength.jpg", description: "Strength symbolizes courage, bravery, and inner strength." },
        { name: "The Hermit", image: "card-hermit.jpg", description: "The Hermit represents introspection, solitude, and inner wisdom." },
        { name: "Wheel of Fortune", image: "card-wheel-of-fortune.jpg", description: "The Wheel of Fortune symbolizes cycles, fate, and change." },
        { name: "Justice", image: "card-justice.jpg", description: "Justice represents fairness, balance, and legal matters." },
        { name: "The Hanged Man", image: "card-hanged-man.jpg", description: "The Hanged Man symbolizes sacrifice, patience, and new perspectives." },
        { name: "Death", image: "card-death.jpg", description: "Death represents transformation, endings, and new beginnings." },
        { name: "Temperance", image: "card-temperance.jpg", description: "Temperance symbolizes balance, moderation, and harmony." },
        { name: "The Devil", image: "card-devil.jpg", description: "The Devil represents temptation, addiction, and materialism." },
        { name: "The Tower", image: "card-tower.jpg", description: "The Tower symbolizes destruction, chaos, and revelation." },
        { name: "The Star", image: "card-star.jpg", description: "The Star represents hope, inspiration, and serenity." },
        { name: "The Moon", image: "card-moon.jpg", description: "The Moon symbolizes illusion, mystery, and intuition." },
        { name: "The Sun", image: "card-sun.jpg", description: "The Sun represents joy, success, and positivity." },
        { name: "Judgement", image: "card-judgement.jpg", description: "Judgement represents rebirth, renewal, and self-reflection." },
        { name: "The World", image: "card-world.jpg", description: "The World symbolizes completion, wholeness, and accomplishment." }
    ];

    // Dynamically create the card elements and add them to the deck
    cardInfo.forEach((card, index) => {
        const cardElement = document.createElement('img');
        cardElement.src = card.image;  // Replace with actual image path
        cardElement.alt = card.name;
        cardElement.classList.add('tarot-card');
        cardElement.setAttribute('data-index', index);
        cardDeck.appendChild(cardElement);
    });

    // Shuffle and spread out cards
    function shuffleAndSpreadCards() {
        const cards = document.querySelectorAll('.tarot-card');
        cards.forEach((card) => {
            card.style.transition = "transform 0.8s, opacity 0.8s";
            card.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
            card.style.opacity = 1;
        });
    }

    shuffleAndSpreadCards();

    // Add smoke effect and card selection
    const cards = document.querySelectorAll('.tarot-card');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            const cardIndex = card.getAttribute('data-index');
            const selectedCard = cardInfo[cardIndex];

            // Apply smoke effect (use CSS animation or a library)
            card.classList.add('smoke-animation');
            cardDetails.style.display = "block";

            // Display card details
            cardName.textContent = selectedCard.name;
            cardDescription.textContent = selectedCard.description;

            // Highlight the selected card
            card.style.transform = "scale(1.2)";
            setTimeout(() => {
                card.style.transform = "scale(1)";
            }, 500);
        });
    });
});
