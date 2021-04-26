//Selects the element and creates the timer where the time left in the quiz will be displayed
var timeElement = document.querySelector(".timer");

var mainEl = document.getElementById("main");

var takeQuizEl = document.querySelector("#take-quiz");

var question1 = {
  question: "Which mountain is the tallest in Colorado?",
  wrongAnswers: ["Sunshine Peak", "Mount Evans", "Mount Massive"],
  correctAnswer: "Mount Elbert",
};
var question2 = {
  question: "How many 14k ft. mountains are there in Colorado?",
  wrongAnswers: [57, 48, 62],
  correctAnswer: 53,
};
var question3 = {
  question: "Blanca Peak belongs to which group of mountain ranges?",
  wrongAnswers: ["San Juan Mountains", "Sawatch Range", "Culebra Range"],
  correctAnswer: "Sangre de Cristo Range",
};
var question4 = {
  question: "The worlds highest cog railway goes to the peak of which 14er?",
  wrongAnswers: ["Mount Elbert", "Mount Lincoln", "Tabeguache Peak"],
  correctAnswer: "Pikes Peak",
};
var question5 = {
  question:
    "The Collegiate Peaks consist of Mount Harvard, Mount Yale, Mount Columbia, and which other mountain?",
  wrongAnswers: ["Mount Brown", "Mount Cornell", "Dartmouth Peak"],
  correctAnswer: "Mount Princeton",
};
var question6 = {
  question:
    "Which mountain was displayed on the Colorado State Quarter released in 2006?",
  wrongAnswers: ["Mount Elbert", "Grays Peak", "Torreys Peak"],
  correctAnswer: "Longs Peak",
};
var question7 = {
  question: "What is the height of Mount Antero?",
  wrongAnswers: [15213, 14440, 14216],
  correctAnswer: 14276,
};
var question8 = {
  question:
    "Unfortunately, this mountain came up short by 12 ft. and is the second tallest mountain in Colorado. That mountain is...?",
  wrongAnswers: ["Crestone Peak", "Quandry Peak", "Mount Shavano"],
  correctAnswer: "Mount Massive",
};
var question9 = {
  question: "What was the original name of Mount Evans?",
  wrongAnswers: ["Mount Bierstadt", "Echo Peak", "Mount Ouray"],
  correctAnswer: "Mount Rosalie",
};
var question10 = {
  question: "Uncompahgre Peak was named by which Native American Tribe?",
  wrongAnswers: ["Arapahoe nation", "Pueblo nation", "Cheyenne nation"],
  correctAnswer: "Ute nation",
};

var allQuestions = [];
//Creates variable for how long the quiz will last
var timeRemaining = 60;

takeQuizEl.addEventListener("click", function () {
  startQuiz();
});

//Funtion that will create the timer for how long you create it for
function startQuiz() {
  takeQuizEl.setAttribute("style", "display:none");
  var timeInterval = setInterval(function () {
    timeRemaining--;
    timeElement.textContent = "Time Remaining: " + timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(timeInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  mainEl.setAttribute("style", "display:none");
  var endMsg = mainEl.createElement("div");
  endMsg.textContent = "Quiz has ended";
  mainEl.appendChild(endMsg);
}

function quizQuestions() {}
