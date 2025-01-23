// Elements
const deckContainer = document.getElementById("deck-container");
const cardReveal = document.getElementById("card-reveal");
const grainOfSalt = document.getElementById("grain-of-salt");

// Tarot Cards Data
const tarotCards = [
  { name: "The Fool", upright: "New beginnings, spontaneity", reversed: "Carelessness, risk-taking" },
  { name: "The Magician", upright: "Willpower, creation", reversed: "Manipulation, poor planning" },
  { name: "The High Priestess", upright: "Intuition, mystery", reversed: "Secrets, withdrawal" },
  { name: "The Empress", upright: "Fertility, abundance", reversed: "Dependence, creative block" },
  { name: "The Emperor", upright: "Authority, structure", reversed: "Tyranny, rigidity" },
  { name: "The Hierophant", upright: "Tradition, spirituality", reversed: "Rebellion, subversiveness" },
  { name: "The Lovers", upright: "Love, harmony", reversed: "Disharmony, imbalance" },
  { name: "The Chariot", upright: "Victory, determination", reversed: "Lack of direction, obstacles" },
  { name: "Strength", upright: "Courage, inner strength", reversed: "Self-doubt, weakness" },
  { name: "The Hermit", upright: "Introspection, solitude", reversed: "Isolation, loneliness" },
  { name: "Wheel of Fortune", upright: "Luck, cycles", reversed: "Misfortune, resistance to change" },
  { name: "Justice", upright: "Truth, fairness", reversed: "Dishonesty, lack of accountability" },
  { name: "The Hanged Man", upright: "Pause, surrender", reversed: "Resistance, indecision" },
  { name: "Death", upright: "Transformation, endings", reversed: "Resistance to change, stagnation" },
  { name: "Temperance", upright: "Balance, patience", reversed: "Excess, imbalance" },
  { name: "The Devil", upright: "Addiction, materialism", reversed: "Freedom, detachment" },
  { name: "The Tower", upright: "Sudden upheaval, chaos", reversed: "Avoidance of disaster, fear of change" },
  { name: "The Star", upright: "Hope, inspiration", reversed: "Despair, disconnection" },
  { name: "The Moon", upright: "Illusion, intuition", reversed: "Clarity, fear" },
  { name: "The Sun", upright: "Joy, success", reversed: "Negativity, arrogance" },
  { name: "Judgment", upright: "Reflection, awakening", reversed: "Self-doubt, inner critic" },
  { name: "The World", upright: "Completion, wholeness", reversed: "Lack of closure, delays" },
  { name: "Ace of Cups", upright: "Emotional fulfillment, love", reversed: "Blocked emotions, emptiness" },
  { name: "Two of Cups", upright: "Partnership, unity", reversed: "Breakup, imbalance" },
  { name: "Three of Cups", upright: "Celebration, friendship", reversed: "Overindulgence, gossip" },
  { name: "Four of Cups", upright: "Apathy, contemplation", reversed: "Awareness, acceptance" },
  { name: "Five of Cups", upright: "Loss, regret", reversed: "Acceptance, moving on" },
  { name: "Six of Cups", upright: "Nostalgia, childhood", reversed: "Stuck in the past, naivety" },
  { name: "Seven of Cups", upright: "Choices, illusion", reversed: "Clarity, decisiveness" },
  { name: "Eight of Cups", upright: "Walking away, search for meaning", reversed: "Fear of change, avoidance" },
  { name: "Nine of Cups", upright: "Contentment, satisfaction", reversed: "Greed, dissatisfaction" },
  { name: "Ten of Cups", upright: "Happiness, harmony", reversed: "Disconnection, misalignment" },
  { name: "Page of Cups", upright: "Creative beginnings, curiosity", reversed: "Emotional immaturity, insecurity" },
  { name: "Knight of Cups", upright: "Romantic proposals, charm", reversed: "Moodiness, jealousy" },
  { name: "Queen of Cups", upright: "Compassion, intuition", reversed: "Emotional insecurity, dependency" },
  { name: "King of Cups", upright: "Balance, generosity", reversed: "Manipulation, volatility" },
  { name: "Ace of Pentacles", upright: "Opportunity, prosperity", reversed: "Missed chances, instability" },
  { name: "Two of Pentacles", upright: "Balance, adaptability", reversed: "Overwhelm, imbalance" },
  { name: "Three of Pentacles", upright: "Collaboration, teamwork", reversed: "Lack of cooperation, disharmony" },
  { name: "Four of Pentacles", upright: "Security, conservatism", reversed: "Greed, materialism" },
  { name: "Five of Pentacles", upright: "Poverty, isolation", reversed: "Recovery, rebuilding" },
  { name: "Six of Pentacles", upright: "Generosity, charity", reversed: "Strings attached, inequality" },
  { name: "Seven of Pentacles", upright: "Perseverance, investment", reversed: "Impatience, lack of growth" },
  { name: "Eight of Pentacles", upright: "Mastery, craftsmanship", reversed: "Perfectionism, lack of focus" },
  { name: "Nine of Pentacles", upright: "Luxury, self-sufficiency", reversed: "Overindulgence, dependence" },
  { name: "Ten of Pentacles", upright: "Wealth, legacy", reversed: "Loss, lack of stability" },
  { name: "Page of Pentacles", upright: "Ambition, diligence", reversed: "Lack of progress, procrastination" },
  { name: "Knight of Pentacles", upright: "Hard work, responsibility", reversed: "Stubbornness, laziness" },
  { name: "Queen of Pentacles", upright: "Nurturing, practicality", reversed: "Neglect, imbalance" },
  { name: "King of Pentacles", upright: "Abundance, discipline", reversed: "Greed, overindulgence" },
  { name: "Ace of Swords", upright: "Clarity, breakthrough", reversed: "Confusion, miscommunication" },
  { name: "Two of Swords", upright: "Indecision, stalemate", reversed: "Resolution, clarity" },
  { name: "Three of Swords", upright: "Heartbreak, sorrow", reversed: "Healing, forgiveness" },
  { name: "Four of Swords", upright: "Rest, recovery", reversed: "Burnout, restlessness" },
  { name: "Five of Swords", upright: "Conflict, tension", reversed: "Reconciliation, resolution" },
  { name: "Six of Swords", upright: "Transition, change", reversed: "Resistance, stagnation" },
  { name: "Seven of Swords", upright: "Deception, strategy", reversed: "Revealed secrets, self-deception" },
  { name: "Eight of Swords", upright: "Restriction, fear", reversed: "Empowerment, freedom" },
  { name: "Nine of Swords", upright: "Anxiety, worry", reversed: "Relief, hope" },
  { name: "Ten of Swords", upright: "Betrayal, defeat", reversed: "Resilience, recovery" },
  { name: "Page of Swords", upright: "Curiosity, new ideas", reversed: "Gossip, lack of planning" },
  { name: "Knight of Swords", upright: "Action, speed", reversed: "Recklessness, haste" },
  { name: "Queen of Swords", upright: "Perception, honesty", reversed: "Bitterness, criticism" },
  { name: "King of Swords", upright: "Logic, authority", reversed: "Manipulation, coldness" },
  { name: "Ace of Wands", upright: "Inspiration, potential", reversed: "Lack of direction, delays" },
  { name: "Two of Wands", upright: "Planning, progress", reversed: "Fear of change, indecision" },
  { name: "Three of Wands", upright: "Expansion, foresight", reversed: "Obstacles, delays" },
  { name: "Four of Wands", upright: "Celebration, stability", reversed: "Disconnection, instability" },
  { name: "Five of Wands", upright: "Conflict, competition", reversed: "Resolution, avoidance" },
  { name: "Six of Wands", upright: "Victory, recognition", reversed: "Egotism, lack of confidence" },
  { name: "Seven of Wands", upright: "Defense, perseverance", reversed: "Exhaustion, giving up" },
  { name: "Eight of Wands", upright: "Momentum, progress", reversed: "Delays, frustration" },
  { name: "Nine of Wands", upright: "Resilience, courage", reversed: "Paranoia, hesitation" },
  { name: "Ten of Wands", upright: "Burden, responsibility", reversed: "Relief, delegation" },
  { name: "Page of Wands", upright: "Exploration, enthusiasm", reversed: "Insecurity, impatience" },
  { name: "Knight of Wands", upright: "Adventure, action", reversed: "Impulsiveness, recklessness" },
  { name: "Queen of Wands", upright: "Confidence, warmth", reversed: "Jealousy, selfishness" },
  { name: "King of Wands", upright: "Leadership, vision", reversed: "Impulsiveness, arrogance" },
];

// On Page Load: Spread Cards
window.addEventListener("load", () => {
  setTimeout(spreadCards, 1000);
});

function spreadCards() {
  tarotCards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.className = "tarot-card";
    cardElement.style.transform = `rotate(${index * 2 - 30}deg) translateX(${index * 10}px)`;
    cardElement.addEventListener("click", () => revealCard(card));
    deckContainer.appendChild(cardElement);
  });
}

// Reveal a Card
function revealCard(card) {
  deckContainer.innerHTML = ""; // Clear the deck
  cardReveal.innerHTML = `
        <div class="selected-card">
            <h2>${card.name}</h2>
            <p>${Math.random() > 0.5 ? card.upright : card.reversed}</p>
        </div>
    `;
  grainOfSalt.classList.remove("hidden"); // Show footer message
}
