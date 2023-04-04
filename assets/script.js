var containerStartEl = document.getElementById("start-container")
var containerStartEl = document.getElementById("question-container")
var btnStartEl = document.querySelector ("#start");
var timerEl = document.querySelector ("#timer");
var timeleft;
timerEl.innerText = 0;


var questions = [
     {
         question: "Commonly used data types DO NOT include:",
         choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
         answer: "c. alerts"
     },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
        answer: "d. <script>"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "b. other arrays"
    },
];
var startPage = function () {
    timerEl.textContent
}


var setTime = function () {
    timeleft = 60;

var timercheck = setInterval(function() {
    timerEl.innerText = timeleft;
    timeleft--

    if (gameover) {
        clearInterval(timercheck)
    }
   
    if (timeleft < 0) {
        showScore()
        timerEl.innerText = 0
        clearInterval(timercheck)
    }

    }, 1000)
}

