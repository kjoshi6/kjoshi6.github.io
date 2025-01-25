// JavaScript for Tarot Card Interactivity
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".tarot-card");
  
  // Shuffle cards on page load
  const container = document.querySelector(".card-container");
  cards.forEach(card => container.appendChild(card)); // Randomize order
  
  // Highlight card when clicked
  cards.forEach(card => {
    card.addEventListener("click", () => {
      // Remove highlights from other cards
      cards.forEach(c => c.classList.remove("selected"));

      // Highlight selected card
      card.classList.add("selected");

      // Add smoke effect (replace with animation logic)
      card.style.boxShadow = "0 0 30px rgba(255, 0, 255, 0.8)";
    });
  });
});

