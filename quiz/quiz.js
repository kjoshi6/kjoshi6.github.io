// Store vibe descriptions in an object for easy updates
const vibeDescriptions = {
    teaAndCake: {
        title: "Cake & Tea ☕",
        description: `Sometimes you do not want a coffee and a cookie, it’s too intense. You want something soft and easy. it kind of feels like a delicacy. Coffee and tea is so lovely, I understand why the British are have little tea parties. the warm tea is also very comforting. when you have cake and tea, you are looking to enjoy the simple moments of life. to slow down, and to savor. so this is the vibe of the day. you need to slow down and have a tea and soothe your woes. Find your nearest bakery and go buy 3 pastries and eat them all very slowly. Maybe share them with your roommate/s. `
    },
    trainRide: {
        title: "Long Train Ride",
        description: `You have a lot of time to kill and don’t mind the commute. You want to go somewhere pretty or new, and get away from the city. Find a garden that is between an 1 -2 hour commute. Anything less won’t give you enough time to ponder. Any more time, you will get restless/hungry/sleeepy/tired. You don’t want to kill your vibe, you want to find a good vibe and keep it going. My personal favorite is the snug harbor garden on staten island. It’s best in the summer/spring/fall. Honestly it can also be a difficult place to navigate. Today you are looking for adventure and problem solving. Going to new places stimulates a dopamine boost, keeps your brain sharp, reduces your natural fear of uncertainty. It’s both energizing and satisfying.`
    },
    coffeeShop: {
        title: "Coffee Shop Time",
        description: `People go to a coffee shops for many reasons. But going to a coffee shop usually means business. You are going there because you want to get something, whether it’s making to do lists, processing your emotions while journaling, reading a book, texting all your friends back, making a new spotify playlist, working, etc. List goes on. The thing is about a coffee shop, you go there for the motivation to get something done. But you wanna get it done with people around you. Every time i go to a coffee shop, I am either there with a book, laptop, planner, journal, or all of the above. Coffee shop in America (at least) is to get a few things done in the company of other people while someone else makes you a lovely beverage. If I am sitting my ass down at a coffee shop, I am getting something done. `
    },
    couchRot: {
        title: "Couch Rot Mode",
        description: `Okay somedays you need to actually shut your brain off and simply rot. It is time to go to the store, get like 5 fun food/drinks and sit your ass on the couch. Turn on the tv and your ipad and phone and your laptop all at once. Different activity on each one and alternate between them. or you could turn on a show to get really invested in for the next 3 hours/days/weeks/months.`
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


