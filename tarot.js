// Tarot Cards Data
const tarotCards = [
    {
        name: "The Fool",
        upright: "Beginnings, innocence, spontaneity, a free spirit.",
        reversed: "Recklessness, taken advantage of, inconsideration.",
        image: "" // Add the URL for The Fool card here
    },
    {
        name: "The Magician",
        upright: "Power, skill, concentration, action, resourcefulness.",
        reversed: "Manipulation, poor planning, untapped talent.",
        image: "" // Add the URL for The Magician card here
    },
    {
        name: "The High Priestess",
        upright: "Intuition, sacred knowledge, divine feminine.",
        reversed: "Secrets, disconnected intuition, withdrawal.",
        image: "" // Add the URL for The High Priestess card here
    }
    // Add all remaining cards similarly
];

// Glittery Cursor
document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("cursor");
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Pick a Tarot Card Functionality
document.getElementById("pick-card").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[randomIndex];

    // Randomize Upright or Reversed
    const isUpright = Math.random() > 0.5;

    // Update Card Display
    document.getElementById("card-image").src = card.image;
    document.getElementById("card-name").textContent = card.name + (isUpright ? " (Upright)" : " (Reversed)");
    document.getElementById("card-meaning").textContent = isUpright ? card.upright : card.reversed;
    document.getElementById("card-display").style.display = "block";
});
