//Selects the element and creates the timer where the time left in the quiz will be displayed
var timeElement = document.querySelector(".timer");

var mainEl = document.getElementById("main");

var takeQuizEl = document.querySelector("#take-quiz");

var allQuestions = [
  (question1 = {
    question: "Which mountain is the tallest in Colorado?",
    answers: ["Sunshine Peak", "Mount Evans", "Mount Massive", "Mount Elbert"],
    correctAnswer: "Mount Elbert",
  }),
  (question2 = {
    question: "How many 14k ft. mountains are there in Colorado?",
    answers: ["57", "48", "62", "53"],
    correctAnswer: "53",
  }),
  (question3 = {
    question: "Blanca Peak belongs to which group of mountain ranges?",
    answers: [
      "San Juan Mountains",
      "Sawatch Range",
      "Culebra Range",
      "Sangre de Cristo Range",
    ],
    correctAnswer: "Sangre de Cristo Range",
  }),
  (question4 = {
    question: "The worlds highest cog railway goes to the peak of which 14er?",
    answers: ["Mount Elbert", "Mount Lincoln", "Tabeguache Peak", "Pikes Peak"],
    correctAnswer: "Pikes Peak",
  }),
  (question5 = {
    question:
      "The Collegiate Peaks consist of Mount Harvard, Mount Yale, Mount Columbia, and which other mountain?",
    answers: [
      "Mount Brown",
      "Mount Cornell",
      "Dartmouth Peak",
      "Mount Princeton",
    ],
    correctAnswer: "Mount Princeton",
  }),
  (question6 = {
    question:
      "Which mountain was displayed on the Colorado State Quarter released in 2006?",
    answers: ["Mount Elbert", "Grays Peak", "Torreys Peak", "Longs Peak"],
    correctAnswer: "Longs Peak",
  }),
  (question7 = {
    question: "What is the height of Mount Antero?",
    answers: ["15213", "14440", "14216", "14276"],
    correctAnswer: "14276",
  }),
  (question8 = {
    question:
      "Unfortunately, this mountain came up short by 12 ft. and is the second tallest mountain in Colorado. That mountain is...?",
    answers: [
      "Crestone Peak",
      "Quandry Peak",
      "Mount Massive",
      "Mount Shavano",
    ],
    correctAnswer: "Mount Massive",
  }),
  (question9 = {
    question: "What was the original name of Mount Evans?",
    answers: ["Mount Rosalie", "Mount Bierstadt", "Echo Peak", "Mount Ouray"],
    correctAnswer: "Mount Rosalie",
  }),
  (question10 = {
    question: "Uncompahgre Peak was named by which Native American Tribe?",
    answers: [
      "Arapahoe nation",
      "Cheyenne nation",
      "Ute nation",
      "Pueblo nation",
    ],
    correctAnswer: "Ute nation",
  }),
];
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

// function sendMessage() {
//   mainEl.setAttribute("style", "display:none");
//   var endMsg = mainEl.createElement("div");
//   endMsg.textContent = "Quiz has ended";
//   mainEl.appendChild(endMsg);
// }

function quizQuestions() {
  for (var i = 0; i < allQuestions.length; i++) {
    //pull out each question individually that are objects
    //display question on the screen and the interaction with it
    //display correct or wrong
    //move to the next question
    //record the score if a correct answer is achieved
  }
}
