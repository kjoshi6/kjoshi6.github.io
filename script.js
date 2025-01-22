// Question Data and Scoring
const answers = {
  train: 0,
  tea: 0,
  coffee: 0,
  couch: 0,
};

// Capture User's Answers
const questionElements = document.querySelectorAll('.question');
let currentQuestion = 0;

document.querySelector('.start-button').addEventListener('click', () => {
  document.querySelector('.quiz-intro').style.display = 'none';
  document.querySelector('.quiz-content').style.display = 'block';
});

// Handle Answer Selection
document.querySelectorAll('.quiz-options button').forEach(button => {
  button.addEventListener('click', () => {
    const vibe = button.dataset.vibe;
    answers[vibe]++;
    currentQuestion++;

    if (currentQuestion < questionElements.length) {
      questionElements[currentQuestion - 1].style.display = 'none';
      questionElements[currentQuestion].style.display = 'block';
    } else {
      calculateResult();
    }
  });
});

// Calculate Result
function calculateResult() {
  const result = Object.keys(answers).reduce((a, b) => 
    answers[a] > answers[b] ? a : b
  );

  document.querySelector('.quiz-content').style.display = 'none';
  const resultContainer = document.querySelector('.result');
  resultContainer.classList.add(`result-background-${result}`);
  resultContainer.querySelector('.vibe-title').textContent = result;
  resultContainer.style.display = 'block';
}
