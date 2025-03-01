const questions = [
  {
    question: "Which of the following is a primitive data type in JavaScript?",
    answers: [
      { text: "string", correct: true },
      { text: "Object", correct: false },
      { text: "Array", correct: false },
      { text: "Function", correct: false },
    ],
  },
  {
    question:
      "Which method is used to add an element to the end of an array in JavaScript?",
    answers: [
      { text: "pop()", correct: false },
      { text: "push()", correct: true },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "What is the output of the following code? print(4 + 3 * 2)",
    answers: [
      { text: "14", correct: false },
      { text: "11", correct: false },
      { text: "10", correct: true },
      { text: "15", correct: false },
    ],
  },
  {
    question: "Which of these is not a type of database model?",
    answers: [
      { text: "Relational", correct: false },
      { text: "Object-oriented", correct: false },
      { text: "Network", correct: false },
      { text: "Binary", correct: true },
    ],
  },
  // {
  //   question:
  //     "Which of the following data structures is used to implement a LIFO system?",
  //   answers: [
  //     { text: "Array", correct: false },
  //     { text: "Linked List", correct: false },
  //     { text: "Stack", correct: true },
  //     { text: "Queue", correct: false },
  //   ],
  // },
  // {
  //   question:
  //     "Which of the following is a valid way to import a module in Python?",
  //   answers: [
  //     { text: "import module_name", correct: true },
  //     { text: "import 'module_name'", correct: false },
  //     { text: "include module_name", correct: false },
  //     { text: "use module_name", correct: false },
  //   ],
  // },
  // {
  //   question: "What will the following code print? console.log(2 + '2')",
  //   answers: [
  //     { text: "4", correct: false },
  //     { text: "undefined", correct: false },
  //     { text: "22", correct: true },
  //     { text: "NaN", correct: false },
  //   ],
  // },
  // {
  //   question: "What is a foreign key in DBMS?",
  //   answers: [
  //     {
  //       text: "A key that uniquely identifies a row in a table",
  //       correct: false,
  //     },
  //     { text: "A primary key in a database", correct: false },
  //     { text: "A key that links two tables together", correct: true },
  //     { text: "A key to create a table", correct: false },
  //   ],
  // },
  // {
  //   question: "What does DBMS stand for?",
  //   answers: [
  //     { text: "Dynamic Base Management System", correct: false },
  //     { text: "Data Binary Management System", correct: false },
  //     { text: "Data Base Management Software", correct: false },
  //     { text: "Database Management System", correct: true },
  //   ],
  // },
  // {
  //   question: "Which of the following is used to define a function in Python?",
  //   answers: [
  //     { text: "def", correct: true },
  //     { text: "method", correct: false },
  //     { text: "function", correct: false },
  //     { text: "define", correct: false },
  //   ],
  // },
  // {
  //   question: "Which command is used to remove a table in SQL?",
  //   answers: [
  //     { text: "DELETE", correct: false },
  //     { text: "ALTER", correct: false },
  //     { text: "REMOVE", correct: false },
  //     { text: "DROP", correct: true },
  //   ],
  // },
  // {
  //   question: "Which of the following is a primitive data type in JavaScript?",
  //   answers: [
  //     { text: "string", correct: true },
  //     { text: "Object", correct: false },
  //     { text: "Array", correct: false },
  //     { text: "Function", correct: false },
  //   ],
  // },
  // {
  //   question: "Which of the following is a primitive data type in JavaScript?",
  //   answers: [
  //     { text: "string", correct: true },
  //     { text: "Object", correct: false },
  //     { text: "Array", correct: false },
  //     { text: "Function", correct: false },
  //   ],
  // },
  // {
  //   question: "What is the use of the 'this' keyword in JavaScript?",
  //   answers: [
  //     { text: "Refers to the current function", correct: false },
  //     { text: "Refers to the global object", correct: false },
  //     { text: "Refers to the current object", correct: true },
  //     { text: "Refers to the previous object", correct: false },
  //   ],
  // },
  // {
  //   question: "Which of these is not a type of linked list?",
  //   answers: [
  //     { text: "Singly Linked List", correct: false },
  //     { text: "Circular Linked List", correct: false },
  //     { text: "Doubly Linked List", correct: false },
  //     { text: "Triply Linked List", correct: true },
  //   ],
  // },
  // {
  //   question:
  //     "Which of the following is an example of a primary key in a relational database?",
  //   answers: [
  //     { text: "EmployeeName", correct: false },
  //     { text: "EmployeeID", correct: true },
  //     { text: "EmployeeAddress", correct: false },
  //     { text: "EmployeePhone", correct: false },
  //   ],
  // },
  // {
  //   question: "Which of the following is a primitive data type in JavaScript?",
  //   answers: [
  //     { text: "string", correct: true },
  //     { text: "Object", correct: false },
  //     { text: "Array", correct: false },
  //     { text: "Function", correct: false },
  //   ],
  // },
  // {
  //   question: "What does JSON stand for?",
  //   answers: [
  //     { text: "JavaScript Object Notation", correct: true },
  //     { text: "Java Syntax Object Notation", correct: false },
  //     { text: "Java Standard Object Notation", correct: false },
  //     { text: "Java Source Object Notation", correct: false },
  //   ],
  // },
  // {
  //   question: "Which of the following is a primitive data type in JavaScript?",
  //   answers: [
  //     { text: "string", correct: true },
  //     { text: "Object", correct: false },
  //     { text: "Array", correct: false },
  //     { text: "Function", correct: false },
  //   ],
  // },
  // {
  //   question: "Which of these data types is not mutable in Python?",
  //   answers: [
  //     { text: "List", correct: false },
  //     { text: "Dictionary", correct: false },
  //     { text: "String", correct: true },
  //     { text: "Set", correct: false },
  //   ],
  // },
  // {
  //   question: "Which of the following is a primitive data type in JavaScript?",
  //   answers: [
  //     { text: "string", correct: true },
  //     { text: "Object", correct: false },
  //     { text: "Array", correct: false },
  //     { text: "Function", correct: false },
  //   ],
  // },
  // {
  //   question: "Which of the following is a primitive data type in JavaScript?",
  //   answers: [
  //     { text: "string", correct: true },
  //     { text: "Object", correct: false },
  //     { text: "Array", correct: false },
  //     { text: "Function", correct: false },
  //   ],
  // },
  // {
  //   question: "Which operator is used to calculate the exponent in Python?",
  //   answers: [
  //     { text: "^", correct: false },
  //     { text: "", correct: true },
  //     { text: "//", correct: false },
  //     { text: "%", correct: false },
  //   ],
  // },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("anwser-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuize() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuize();
  }
});

startQuize();
