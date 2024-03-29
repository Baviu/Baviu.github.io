// Define your questions and answers
const questions = [
  {
    question: "Intrebarea 1: Ce bătălie faimoasa a avut loc in timpul Epocii Napoleoniene?",
    options: {
      a: "Lupta de la Waterloo",
      b: "Lupta de la Gettysburg",
      c: "Lupta de la Stalingrad",
      d: "Lupta de la Normandy"
    },
    correctAnswer: "a"
  },
  {
    question: "Intrebarea 2: Despre ce declarație este vorba în contextul Războiul primei coaliții?",
    options: {
      a: "Declarația de la Versailles",
      b: "Declarația de la Paris",
      c: "Declarația de la Pillnitz",
      d: "Declarația de la Viena"
    },
    correctAnswer: "c"
  },
  {
  question: "Intrebarea 3: Care a fost domeniul în care Napoleon a demonstrat un talent deosebit după ce a fost tachinat de către ceilalți studenți la Academia Militară de la Brienne-le-Château?",
  options: {
    a: "Limba franceză",
    b: "Matematica",
    c: "Istoria",
    d: "Geografia"
  },
  correctAnswer: "b"
},

{
  question: "Intrebarea 4: Care a fost rezultatul bătăliei navale de la Nil din 1 august 1798, care a avut un impact semnificativ asupra campaniei franceze în Egipt?",
  options: {
    a: "Victoria flotei franceze",
    b: "Înfrângerea ambelor flote",
    c: "Un impas",
    d: "Victoria flotei britanicee"
  },
  correctAnswer: "d"
},
{
question: "Intrebarea 5: Când a avut loc lovitura de stat dată de către Napoleon?",
options: {
  a: "25 Vendémiaire",
  b: "18 Brumarie",
  c: "1 Pluviôse",
  d: "19 Mars"
},
correctAnswer: "b"
},

{
  question: "Intrebarea 6: Pentru a invada Rusia, câți soldați a utilizat Napoleon?",
  options: {
    a: "200.000 de soldați",
    b: "1.000.000 de soldați",
    c: "600.000 de soldați",
    d: "450.000"
  },
  correctAnswer: "c"
  },
  
  // intrebari daca vreau
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