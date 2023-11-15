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
        question: "The condition in an if/else statement is enclosed with __",
        answers: [
            {text: "curly brackets", correct: false},
            {text: "parentheses", correct: true},
            {text: "quotes", correct: false},
            {text: "square brackets", correct: false}
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

]
const questionEl = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const allDoneText = document.getElementById("all-done");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector("#start-button");

let currentQuestionIndex = 0;
let score = 0;

// var correctCounter = 0;
// var incorrectCounter = 0;
var timer;
var timerCount;

const hideHeader = document.getElementById('header')

// function init () {
//     getCorrect();
//     getIncorrect();
// }

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    // correctCounter = 0;
    // incorrectCounter = 0;
    isCorrect = false;
    timerCount = 60;
    startButton.disabled = true;
    hideHeader.style.display = 'none';

    startTimer();
    showQuestion();
    selectAnswer();
    showScore();
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
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer => {
            currentQuestionIndex++;
            answerButton.innerHTML = '';
            showQuestion()
        })
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");

    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });
}

function showScore() {
    questionEl.innerHTML = `YOU SCORED ${score} out of ${questions.length}!`;

}


// function getResults() {
//     var allDone = document.createElement('h2');
//         allDone.textContent("All done!");
//         allDoneText.appendChild(allDone);
//     // currentQuestion.answers.forEach(answer => {
//     //     if(answer === true) {
//     //         alert("Correct!");
//     //     } else {
//     //         alert("Incorrect!")
//     //         timerCount -= 5;
//     //     }
//     // })
// }
// function getResults () {
//     if(questions === true) {
//         correct += 1;
//         console.log("Correct!");
//     };
//     if(questions === false) {
//         timerCount -= 5;
//         incorrect++;
//         console.log("Incorrect");
//     };
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
        }
      }
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        alert("You failed!");
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
    // correctCounter = 0;
    // incorrectCounter = 0;
    clearInterval(timer);
}

resetButton.addEventListener("click", resetQuiz);