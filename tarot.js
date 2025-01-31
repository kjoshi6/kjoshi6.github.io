document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("card-container");
    const card = document.createElement("div");
    card.classList.add("card");

    // 1. Create front face with a general image (this is static)
    const frontFace = document.createElement("div");
    frontFace.classList.add("front");
    frontFace.style.backgroundImage = "url('https://opengameart.org/sites/default/files/card%20back%20purple.png')";
    frontFace.style.backgroundSize = "cover"; // Make sure it covers the front properly

    // 2. Create back face (which will show the randomized card)
    const backFace = document.createElement("div");
    backFace.classList.add("back");

    // Tarot cards array
    const cards = [
        { name: "The Fool", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MDkvMTIvMzEvcndzLXRhcm90LTAwLWZvb2wtMDAzNzgwLTEwMjQuanBn/240/418/webp", description: "A new journey begins." },
        { name: "The Magician", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MDkvMTIvMzEvcndzLXRhcm90LTAxLW1hZ2ljaWFuLWQ3NjUxZS0xMDI0LmpwZw%3D%3D/240/422/webp", description: "You have the tools to manifest your dreams." },
        { name: "The High Priestess", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MDkvMTIvMzEvcndzLXRhcm90LTAyLWhpZ2gtcHJpZXN0ZXNzLWU4MDliOS0xMDI0LmpwZw%3D%3D/240/416/webp", description: "Trust your intuition." },
        // Add all 78 tarot cards here
    ];

    const cardInfo = document.getElementById("card-info");
    const cardName = document.getElementById("card-name");
    const cardDescription = document.getElementById("card-description");

    function getRandomCard() {
        return cards[Math.floor(Math.random() * cards.length)];
    }

    card.addEventListener("click", function () {
        if (!card.classList.contains("flipped")) {
            const randomCard = getRandomCard();
            backFace.style.backgroundImage = `url(${randomCard.image})`;
            cardName.textContent = randomCard.name;
            cardDescription.textContent = randomCard.description;
            cardInfo.style.display = "block";
            card.classList.add("flipped");
        } else {
            card.classList.remove("flipped");
            cardInfo.style.display = "none";
        }
    });

    card.appendChild(frontFace);
    card.appendChild(backFace);
    cardContainer.appendChild(card);
});
