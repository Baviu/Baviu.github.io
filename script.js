// Define your questions and answers
const questions = [
  {
    question: "Question 1: Which famous battle took place during the Napoleonic era?",
    options: {
      a: "Battle of Waterloo",
      b: "Battle of Gettysburg",
      c: "Battle of Stalingrad",
      d: "Battle of Normandy"
    },
    correctAnswer: "a"
  },
  {
    question: "Question 2: Who was the leader of France during the Napoleonic era?",
    options: {
      a: "Napoleon Bonaparte",
      b: "Louis XVI",
      c: "Marie Antoinette",
      d: "Robespierre"
    },
    correctAnswer: "a"
  },
  // Add more questions here...
];

let currentQuestionIndex = 0;
let score = 0;

// Display the current question
function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  // Clear previous options
  optionsElement.innerHTML = '';

  // Add new options for this question
  for (const option in currentQuestion.options) {
    const optionElement = document.createElement('input');
    optionElement.type = "radio";
    optionElement.name = "answer";
    optionElement.value = option;
    optionElement.id = "option" + option.toUpperCase();
    optionsElement.appendChild(optionElement);
  
    const labelElement = document.createElement('label');
    labelElement.htmlFor = "option" + option.toUpperCase();
    labelElement.textContent = currentQuestion.options[option];
    optionsElement.appendChild(labelElement);
  
    optionsElement.appendChild(document.createElement('br'));
  }
}

// Submit the user's answer and check correctness
function submitAnswer() {
  event.preventDefault(); // prevent form submission

  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const userAnswer = selectedOption.value;
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer === currentQuestion.correctAnswer) {
      score++;
    }

    selectedOption.checked = false;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      displayFinalScore();
    }
  }
}

// Display the final score when all questions have been answered
function displayFinalScore() {
  const quizContainer = document.querySelector('.rar');
  quizContainer.innerHTML = '';
  const scoreElement = document.createElement('p');
  scoreElement.textContent = 'Final Score: ' + score;
  quizContainer.appendChild(scoreElement);
}



// Start the quiz
displayQuestion();