//Selects the element and creates the timer where the time left in the quiz will be displayed
var timeElement = document.querySelector(".timer");

var mainEl = document.getElementById("main");

var takeQuizEl = document.querySelector("#take-quiz");
//Creates variable for how long the quiz will last
var timeRemaining = 60;

takeQuizEl.addEventListener("click", function () {
  settime();
});

//Funtion that will create the timer for how long you create it for
function settime() {
  takeQuizEl = " ";
  var timeInterval = setInterval(function () {
    timeRemaining--;
    timeElement.textContent = "Quiz timer: " + timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(timeInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  mainEl.textContent = "";
  var endMsg = mainEl.createElement("div");
  endMsg.textContent = "Quiz has ended";
  mainEl.appendChild(endMsg);
}
