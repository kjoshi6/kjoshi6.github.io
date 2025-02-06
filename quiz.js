// Store vibe descriptions in an object for easy updates
const vibeDescriptions = {
    teaAndCake: {
        title: "Cake & Tea 🍰☕",
        description: `A vanilla cake with fruit and a mint tea—soft, delicate, and comforting. Coffee and cookies? Too intense. You’re in a cozy winter vibe, craving warmth and ease. Tea feels like a ritual, a moment to savor life’s simple joys. The British might be onto something with their little tea parties.\n\n🧘 Your vibe for the day: Slow down. Let yourself be comforted. Find the nearest bakery, buy three pastries, and eat them very slowly—maybe even share (or don’t).`
    },
    trainRide: {
        title: "Long Train Ride 🚂🌿",
        description: `You’ve got time to kill and don’t mind the commute. You’re in the mood for an extended moment of reflection, watching the world go by as you listen to your favorite playlist. You need at least 1-2 hours on the train—just enough time to lose yourself in thought but not get restless.\n\n🌍 Your vibe for the day: Seek out adventure and problem-solving. Find a botanical garden, an old bookstore, or a small-town café. Going somewhere new stimulates your brain, feeds your curiosity, and keeps your energy fresh.`
    },
    coffeeShop: {
        title: "Coffee Shop ☕📖",
        description: `Coffee shops have a mission-based energy. You don’t just wander into one; you come with a purpose—to work, journal, people-watch, text back that friend you’ve been ignoring, or just vibe with a book. There’s something about the atmosphere—a mix of background chatter, indie music, and the smell of roasted beans—that makes productivity feel more enjoyable.\n\n💻 Your vibe for the day: Get things done, but in a low-pressure, cozy way. Make a to-do list, read a few chapters, or just exist in the company of strangers while sipping something warm.`
    },
    couchRot: {
        title: "Couch Rot Mode 🍿📱💻",
        description: `Some days, you just need to shut your brain off and rot. You deserve a day of mindless indulgence—5 fun snacks, a couch, and at least three screens going at once. Maybe you’ll start a new show. Maybe you’ll doom-scroll while half-watching a comfort movie. Maybe you’ll let YouTube autoplay whatever weird niche videos the algorithm feeds you. Does it matter? No.\n\n🛋️ Your vibe for the day: Total guilt-free relaxation. You’re not being lazy—you’re recharging. Let yourself exist without expectations.`
    }
};

// Store answers and determine the result based on selections
let answers = [];

const answerButtons = document.querySelectorAll('.answer');
answerButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const selectedVibe = event.target.getAttribute('data-vibe');
        answers.push(selectedVibe);
        
        // Move to next question
        const currentQuestion = event.target.closest('.question');
        currentQuestion.style.display = 'none';
        
        const nextQuestion = currentQuestion.nextElementSibling;
        if (nextQuestion) {
            nextQuestion.style.display = 'block';
        } else {
            showResult();  // Show the result when all questions are answered
        }
    });
});

// Function to show the result
function showResult() {
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    
    // Determine which vibe to show based on the answers
    let resultVibe;
    if (answers.includes('restless') || answers.includes('adventure')) {
        resultVibe = vibeDescriptions.trainRide;
    } else if (answers.includes('cozy') || answers.includes('tea-joy')) {
        resultVibe = vibeDescriptions.teaAndCake;
    } else if (answers.includes('cafe') || answers.includes('productive-joy')) {
        resultVibe = vibeDescriptions.coffeeShop;
    } else {
        resultVibe = vibeDescriptions.couchRot;
    }

    // Set the result content dynamically
    resultText.innerHTML = `<h3>${resultVibe.title}</h3><p>${resultVibe.description}</p>`;
    resultContainer.style.display = 'block';
}


