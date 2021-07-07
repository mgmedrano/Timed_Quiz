var score = 0;
var questionIndex = 0;
var secondsLeft = 100;
var penalty = 15;

var currentTime = document.getElementById("currentTime");
var timer = document.getElementById("startTime");
var questionsAsked = document.getElementById("questionsAsked");

var questions = [
    {
        quizQuestion: "True or False statements are what type of primitives?",
        quizAnswers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "booleans"
    }
    {
        quizQuestion: "The first index of an array is _____________",
        quizAnswers: ["-1", "0", "1", "2"],
        correctAnswer: "0"
    },
];

var container = document.getElementById("container");
var questionList = document.createElement("ul");

timer.addEventListener("click", function () {
    if (secondsLeft === 100) {
        timer = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time remaining: " +secondsLeft;

            if (secondsLeft = 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time is up!";
            }
        }, 1000);
    });
    render(questionIndex);
    
});

function render(questionIndex) {
    quizQuestion.textContent = " ";
    quizAnswers.textContent = " ";

    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].quizQuestion;
        var userChoices = questions[questionIndex].quizAnswers;
        questionsAsked.textContent = userQuestion;
        questionsAsked.textContent = userChoices;
    };
