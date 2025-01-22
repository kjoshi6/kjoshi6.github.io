const questions = [
    {
        question: "What’s your gut reaction to how you feel right now?",
        options: [
            "I feel restless and want a change of scenery.",
            "I just want to be cozy and comforted.",
            "I need to get things done but in a way that doesn’t feel overwhelming.",
            "I feel drained and need to turn my brain off for a while."
        ]
    },
    {
        question: "When was the last time you felt truly inspired?",
        options: [
            "When I explored someplace new.",
            "When I slowed down and savored a moment.",
            "When I accomplished something on my to-do list.",
            "When I let myself relax and didn’t force anything."
        ]
    },
    {
        question: "What sounds most appealing to you right now?",
        options: [
            "Watching the world go by through a train or car window.",
            "Wrapping my hands around a warm drink and sitting somewhere quiet.",
            "Sitting at a café surrounded by soft chatter and the smell of coffee.",
            "Sprawling on the couch with snacks and no expectations."
        ]
    },
    {
        question: "What’s your zodiac sign?",
        options: [
            "Fire sign - Aries, Leo, Sagittarius",
            "Earth sign - Taurus, Virgo, Capricorn",
            "Air sign - Gemini, Libra, Aquarius",
            "Water sign - Cancer, Scorpio, Pisces"
        ]
    }
];

let currentQuestionIndex = 0;

const questionTitle = document.getElementById("question-title");
const optionsContainer = document.getElementById("options-container");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionTitle.textContent = question.question;
    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.className = "option-button";
        button.textContent = option;
        button.onclick = () => selectOption(option);
        optionsContainer.appendChild(button);
    });
    backButton.disabled = currentQuestionIndex === 0;
    nextButton.textContent = currentQuestionIndex === questions.length - 1 ? "Submit" : "Next";
}

function selectOption(option) {
    console.log(`Selected: ${option}`); // Replace with point-adding logic
}

backButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Quiz completed!"); // Replace with result logic
    }
});

loadQuestion();
