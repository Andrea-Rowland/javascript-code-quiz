// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementByID("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score");

// create questions
var questions = [
    {
        problem: "Javascript is an ____ language?\n(a) Object-Oriented\n(b) Object-based\n(c) Procedural\n(d) None of the above",
        imgSrc: "img.js.png",
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        choiceD: "Wrong",
        correct: "A"
    },
    {
        problem: "Which of the following methods is used to access HTML elements using Javascript?\n(a) getElementbyId()\n(b) getElementsByClassName()\n(c) Both A and B\n(d) None of the above",
        imgSrc: "img.js.png",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        choiceD: "Wrong",
        correct: "C"
    },
    {
        problem: "Which of the following keywords is used to define a variable in Javascript?\n(a) var\n(b) let\n(c) Both A and B\n(d) None of the above",
        imgSrc: "img.js.png",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        choiceD: "Wrong",
        correct: "C"
    },
    {
        problem: "Upon encountering empty statements, what does the Javascript Interpreter do?\n(a) Throws an error\n(b) Ignores the statements\n(c) Gives a warning\n(d) None of the above",
        imgSrc: "img.js.png",
        choiceA: "Wrong",
        choiceB: "Correct",
        choiceC: "Wrong",
        choiceD: "Wrong",
        correct: "B"
    },
    {
        problem: "Which of the following methods can be used to display data in some form using Javascript?\n(a) document.write()\n(b) console.log()\n(c) window.alert()\n(d) All of the above",
        imgSrc: "img.js.png",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Wrong",
        choiceD: "Correct",
        correct: "D"
    }]

// create variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "img src="+ q.imgScr +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.style.display = "none";
renderQuestion();
quiz.style.display = "block";

// render progress
function renderProgress() {
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}