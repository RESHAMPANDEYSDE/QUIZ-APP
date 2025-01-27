const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const progressBar = document.getElementById("progress-bar");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer-text");

let score = 0;
let currentQuestionIndex = 0;
let timerInterval;
let timeLeft = 30; // Time limit per question (seconds)

// Define questions
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correct: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "George Orwell", "Mark Twain"],
    correct: "Harper Lee",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correct: "Pacific Ocean",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Osmium", "Ozone", "Olivine"],
    correct: "Oxygen",
  },
  {
    question: "In which year did World War I begin?",
    options: ["1912", "1914", "1916", "1918"],
    correct: "1914",
  }
];

function startTimer() {
  timeLeft = 30; // Reset the timer
  timerEl.textContent = timeLeft; // Update timer display
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showNextQuestion();
    } else {
      timerEl.textContent = timeLeft; // Update timer on screen
    }
    updateProgressBar();
  }, 1000);
}

function updateProgressBar() {
  const percentage = ((30 - timeLeft) / 30) * 100;
  progressBar.style.width = `${percentage}%`;
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(button, option));
    optionsEl.appendChild(button);
  });

  startTimer();
}

function selectAnswer(button, answer) {
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = answer === currentQuestion.correct;

  if (isCorrect) {
    score++;
    scoreEl.textContent = score;
    button.style.backgroundColor = "#28a745"; // Green for correct answer
  } else {
    button.style.backgroundColor = "#dc3545"; // Red for incorrect answer
  }

  // Disable all options after answer is selected
  Array.from(optionsEl.children).forEach((btn) => {
    btn.disabled = true;
  });

  nextButton.style.display = "block"; // Show the next question button
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    showResults();
  } else {
    showQuestion();
  }
  nextButton.style.display = "none"; // Hide the next button
}

function showResults() {
  alert(`Quiz Over! Your score is ${score}`);
  // Optionally, add logic to restart the quiz or save results
}

nextButton.addEventListener("click", showNextQuestion);

// Initialize the quiz
showQuestion();
