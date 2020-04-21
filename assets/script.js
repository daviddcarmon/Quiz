function startQuiz() {
  console.log("clicked start button");
  startButton.classList.add("hide");
  scoreCardElement.classList.add("hide");
  submitButton.classList.add("hide");
  scoreCard = 0;
  //shuffle questions positive or negative number 50%
  shuffleQuest = questions.sort(() => Math.random() - 0.5);
  currentQuest = 0;
  questionContainer.classList.remove("hide");
  setQuestion();
}

function setQuestion() {
  resetQuestions();
  showQuestion(shuffleQuest[currentQuest]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  timerElement.classList.remove("hide");
  // looping answers for question creating buttons on answer return
  question.answer.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
  count();
}

function selectAnswer(event) {
  var selectedButton = event.target;
  //looking to see if clicked button holds true boolean value
  var correct = selectedButton.dataset.correct;
  setStatus(document.body, correct);
  // JSON.parse - compact function
  Array.from(answerButtons.children).forEach((button) => {
    setStatus(button, button.dataset.correct);
  });
  clearInterval(timerCount);
  if (correct === "true") {
    scoreCard = scoreCard + 10;
  }
  if (shuffleQuest.length > currentQuest + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerHTML = "Play again?";
    scoreCardElement.textContent = "Score: " + scoreCard;
    scoreCardElement.classList.remove("hide");
    scoreCardElement.appendChild(userName);
    startButton.classList.remove("hide");
    submitButton.classList.remove("hide");
    highScoreList();
  }
}

function resetQuestions() {
  nextButton.classList.add("hide");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function setStatus(element, correct) {
  element.removeEventListener("click", selectAnswer);
  clearStatus(element);
  if (correct) {
    element.classList.add("correct");
  }
  console.log("element" + correct);
}

function clearStatus(element) {
  element.classList.remove("wrong");
  element.classList.remove("correct");
  //   clearInterval(count);
}

// function highScoreList() {
//   highScoreUser.forEach((user) => {
//     var locUser = localStorage.getItem("user");
//   });
// }
function count() {
  var timeLeft = 10;
  timerElement.textContent = timeLeft;

  timerCount = setInterval(function () {
    timerElement.textContent = timeLeft;
    timeLeft--;
    if (timeLeft === 0) {
      alert("Out of time -5, correct answer " + "answer[0]");
      timerElement.textContent = "";
      clearInterval(timerCount);
    }
    //need to subtract when answered wrong
  }, 1000);
}

var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var submitButton = document.getElementById("submit-btn");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var shuffleQuest, currentQuest;
var timerElement = document.getElementById("timer");
var scoreCardElement = document.getElementById("scoreCard");
var scoreCard = 0;
var userName = document.createElement("input");
var timerCount;

var highScoreUser = localStorage.getItem("user");

var questions = [
  {
    question:
      "Jenson Button won the 2009 Formula One World Championship driving for which team?",
    answer: [
      { text: "a: Force India", correct: false },
      { text: "b: Brawn GP", correct: true },
      { text: "c: Red Bull Racing", correct: false },
      { text: "d: Scuderia Ferrai", correct: false },
    ],
    correctAnswer: "b: Brawn GP",
  },
  {
    question:
      "In 2016, who became F1 World Champion and then announced his retirement from the sport five days later?",
    answer: [
      { text: "a: Esteban Ocon", correct: false },
      { text: "b: Fernando Alonso", correct: false },
      { text: "c: Jolyon Palmer", correct: false },
      { text: "d: Nico Rosberg", correct: true },
    ],
    correctAnswer: "d",
  },
  {
    question: "Who was the first ever British Formula One World Champion?",
    answer: [
      { text: "a: Mike Hawthorne", correct: true },
      { text: "b: Stirling Moss", correct: false },
      { text: "c: Lewis Hamilton", correct: false },
      { text: "d: George Russell", correct: false },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "Sebastian Vettel won the championship in 2010, 2011, 2012 and 2013, with which racing team?",
    answer: [
      { text: "a: Force India", correct: false },
      { text: "b: Brawn GP", correct: false },
      { text: "c: Red Bull Racing", correct: true },
      { text: "d: Scurderia Ferrari", correct: false },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Which Argentinian racing driver dominated the first decade of Formula One racing?",
    answer: [
      { text: "a: Gastón Mazzacane", correct: false },
      { text: "b: Carlos Reutemann", correct: false },
      { text: "c: Juan Fangio", correct: true },
      { text: "d: Norberto Fontana", correct: false },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "How many Formula One World Championships did Michael Schumacher win?",
    answer: [
      { text: "a: Two", correct: false },
      { text: "b: Four", correct: false },
      { text: "c: Seven", correct: true },
      { text: "d: None", correct: false },
    ],
    correctAnswer: "b",
  },
];

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuest++;
  setQuestion();
});
submitButton.addEventListener("click", (event) => {
  var user = document.querySelector("input").value;
  localStorage.setItem(user, scoreCard);
  //   localStorage.setItem(highScoreUser);
  event.preventDefault();
});
