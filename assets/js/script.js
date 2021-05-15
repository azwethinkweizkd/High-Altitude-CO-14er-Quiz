//Selects the element and creates the timer where the time left in the quiz will be displayed
let timeElement = document.querySelector(".timer");
let mainEl = document.getElementById("main");
let takeQuizEl = document.querySelector("#take-quiz");
let currQuest = document.querySelector("#question");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
let intro = document.getElementById("intro");
let scores = document.getElementById("scores");
//Creates variable for how long the quiz will last
let timeRemaining = 60;
let currentQuestIndex = 0;
let userScore = 0;
let highScores = [];
let allQuestions = [
  {
    question: "Which mountain is the tallest in Colorado?",
    answers: ["Mount Elbert", "Sunshine Peak", "Mount Evans", "Mount Massive"],
    correctAnswer: "Mount Elbert",
  },
  {
    question: "How many 14k ft. mountains are there in Colorado?",
    answers: ["57", "48", "53", "62"],
    correctAnswer: "53",
  },
  {
    question: "Blanca Peak belongs to which group of mountain ranges?",
    answers: [
      "Sangre de Cristo Range",
      "San Juan Mountains",
      "Sawatch Range",
      "Culebra Range",
    ],
    correctAnswer: "Sangre de Cristo Range",
  },
  {
    question: "The worlds highest cog railway goes to the peak of which 14er?",
    answers: ["Mount Elbert", "Mount Lincoln", "Tabeguache Peak", "Pikes Peak"],
    correctAnswer: "Pikes Peak",
  },
  {
    question:
      "The Collegiate Peaks consist of Mount Harvard, Mount Yale, Mount Columbia, and which other mountain?",
    answers: [
      "Mount Brown",
      "Mount Princeton",
      "Mount Cornell",
      "Dartmouth Peak",
    ],
    correctAnswer: "Mount Princeton",
  },
  {
    question:
      "Which mountain was displayed on the Colorado State Quarter released in 2006?",
    answers: ["Longs Peak", "Mount Elbert", "Grays Peak", "Torreys Peak"],
    correctAnswer: "Longs Peak",
  },
  {
    question: "What is the height of Mount Antero?",
    answers: ["15213", "14440", "14276", "14216"],
    correctAnswer: "14276",
  },
  {
    question:
      "Unfortunately, this mountain came up short by 12 ft. and is the second tallest mountain in Colorado. That mountain is...?",
    answers: [
      "Crestone Peak",
      "Quandry Peak",
      "Mount Massive",
      "Mount Shavano",
    ],
    correctAnswer: "Mount Massive",
  },
  {
    question: "What was the original name of Mount Evans?",
    answers: ["Mount Rosalie", "Mount Bierstadt", "Echo Peak", "Mount Ouray"],
    correctAnswer: "Mount Rosalie",
  },
  {
    question: "Uncompahgre Peak was named by which Native American Tribe?",
    answers: [
      "Arapahoe nation",
      "Cheyenne nation",
      "Ute nation",
      "Pueblo nation",
    ],
    correctAnswer: "Ute nation",
  },
];

takeQuizEl.addEventListener("click", function () {
  startQuiz();
});
//Function that will create the timer for how long you create it for
function startQuiz() {
  takeQuizEl.setAttribute("style", "display:none");
  intro.setAttribute("style", "display:none");
  displayQuestion();
  //let currentQuestIndex = currentQuestIndex + 1;
  let timeInterval = setInterval(function () {
    timeRemaining--;
    timeElement.textContent = "Time Remaining: " + timeRemaining;
    if (currentQuestIndex === allQuestions.length) {
      clearInterval(timeInterval);
      endQuiz();
    }
    if (timeRemaining === 0) {
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);
}
function displayQuestion() {
  console.log();
  // alert(currentQuestIndex);
  currQuest.innerHTML = allQuestions[currentQuestIndex].question;
  ans1.setAttribute("style", "visibility:visible");
  ans1.innerHTML = allQuestions[currentQuestIndex].answers[0];
  ans2.setAttribute("style", "visibility:visible");
  ans2.innerHTML = allQuestions[currentQuestIndex].answers[1];
  ans3.setAttribute("style", "visibility:visible");
  ans3.innerHTML = allQuestions[currentQuestIndex].answers[2];
  ans4.setAttribute("style", "visibility:visible");
  ans4.innerHTML = allQuestions[currentQuestIndex].answers[3];
}
ans1.addEventListener("click", function () {
  // alert(ans1.innerHTML);
  // score(ans1.innerHTML);
  //if(this.inputMode("You selected " + ans1.innerHTML + " continue..y/n"))

  // compare selected answser with the correct answer for this given index
  // if they are matching then increase correct answer + 1,
  // if not wronasnger+1

  if (ans1.innerHTML === allQuestions[currentQuestIndex].correctAnswer) {
    userScore++;
  }
  if (ans1.innerHTML !== allQuestions[currentQuestIndex].correctAnswer) {
    timeRemaining--;
  }
  // if(ans1.innerHTML==allquestions[currentQuestIndex].correctAnswer)
  // c=c+1;
  // else
  // w=w+1
  currentQuestIndex++;
  if (currentQuestIndex === allQuestions.length) {
    endQuiz();
  } else {
    displayQuestion(currentQuestIndex);
  }
});

ans2.addEventListener("click", function () {
  // alert(ans2.innerHTML);
  // displayQuestion(currentQuestIndex);

  if (ans2.innerHTML === allQuestions[currentQuestIndex].correctAnswer) {
    userScore++;
  }
  if (ans2.innerHTML !== allQuestions[currentQuestIndex].correctAnswer) {
    timeRemaining--;
  }
  currentQuestIndex++;
  if (currentQuestIndex === allQuestions.length) {
    endQuiz();
  } else {
    displayQuestion(currentQuestIndex);
  }
});

ans3.addEventListener("click", function () {
  // alert(ans3.innerHTML);
  // displayQuestion(currentQuestIndex);

  if (ans3.innerHTML === allQuestions[currentQuestIndex].correctAnswer) {
    userScore++;
  }
  if (ans3.innerHTML !== allQuestions[currentQuestIndex].correctAnswer) {
    timeRemaining--;
  }
  currentQuestIndex++;
  if (currentQuestIndex === allQuestions.length) {
    endQuiz();
  } else {
    displayQuestion(currentQuestIndex);
  }
});

ans4.addEventListener("click", function () {
  // alert(ans4.innerHTML);
  // displayQuestion(currentQuestIndex);

  if (ans4.innerHTML === allQuestions[currentQuestIndex].correctAnswer) {
    userScore++;
  }
  if (ans4.innerHTML !== allQuestions[currentQuestIndex].correctAnswer) {
    timeRemaining--;
  }
  currentQuestIndex++;
  if (currentQuestIndex === allQuestions.length) {
    endQuiz();
  } else {
    displayQuestion(currentQuestIndex);
  }
});

function score() {
  //logic
}

function endQuiz() {
  timeElement.setAttribute("style", "display:none");
  mainEl.setAttribute("style", "display:none");
  var endMsg = document.createElement("p");
  endMsg.textContent = "Quiz has ended, lets see how you did!";
  scores.appendChild(endMsg);
}
