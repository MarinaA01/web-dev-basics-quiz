const questions = [
    {
        question: "Arrays in JavaScript can be used to store ___",
        answers: [
            {text: "numbers and strings", correct: false},
            {text: "other arrays", correct: false},
            {text: "booleans", correct: false},
            {text: "all of the above", correct: true}
        ]
    },
    {
        question: "Commonly used data types DO NOT include",
        answers: [
            {text: "strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ___",
        answers: [
            {text: "numbers and strings", correct: false},
            {text: "other arrays", correct: false},
            {text: "booleans", correct: false},
            {text: "all of the above", correct: true}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ___",
        answers: [
            {text: "numbers and strings", correct: false},
            {text: "other arrays", correct: false},
            {text: "booleans", correct: false},
            {text: "all of the above", correct: true}
        ]
    }

];
const questionEl = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector("#start-button");

let currentQuestionIndex = 0;

var questionResult = ""

var incorrectCounter = 0;
var isCorrect = false;
var timer;
var timerCount;

const hideHeader = document.getElementById('header')

function init () {
    getCorrect();
    getIncorrect();
}

function startQuiz() {
    currentQuestionIndex = 0;
    correctCounter = 0;
    incorrectCounter = 0;
    isCorrect = false;
    timerCount = 60;
    startButton.disabled = true;
    hideHeader.style.display = 'none';
    
    // nextButton.innerHTML = "Next";
    startTimer();
    showQuestion();
}

// for loop through questions array
// append answers
// click listener for answers and if/else statement for correct answers

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.textContent = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        button.addEventListener("click", () => {
            currentQuestionIndex++;
            answerButton.innerHTML = '';
            showQuestion()
        })
    });
}

nextButton.addEventListener('click', function() {
    console.log(answers);
})

// function correctAnswer() {
//     document.getElementById('correct').textContent("Correct!");
//     correctCounter++;
//     startButton.disabled = false;
//     // setCorrectAnswers()
// }

// function failQuiz() {
//     questionResult.textContent("Incorrect answer");
//     incorrectCounter++;
//     startButton.disabled = false;
//     // setIncorrectAnswers()
// }

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isCorrect && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          correctAnswer();
        }
      }
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        // getIncorrect();
      }
    }, 1000);
}

// function setCorrectAnswers() {
//     correct.textContent = correctCounter;
//     localStorage.setItem("correctCount", correctCounter);
// }

// function setIncorrectAnswers() {
//     incorrect.textContent = incorrectCounter;
//     localStorage.setItem("incorrectCount", incorrectCounter);
// }

// function getCorrect() {
//     var storedCorrect = localStorage.getItem("correctCount");

//     if (storedCorrect === null) {
//         correctCounter = 0;
//     } else {
//         correctCounter = storedCorrect;
//     }
// }

// function getIncorrect() {
//     var storedIncorrect = localStorage.getItem("incorrectCount");

//     if(storedIncorrect === null) {
//         incorrectCounter = 0;
//     } else {
//         incorrectCounter = storedIncorrect;
//     }
//     incorrect.textContent = incorrectCounter;
// }




startButton.addEventListener("click", startQuiz);

var resetButton = document.querySelector(".reset-button");

function resetQuiz() {
    correctCounter = 0;
    incorrectCounter = 0;
}