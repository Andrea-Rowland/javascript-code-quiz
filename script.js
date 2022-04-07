

// // select all elements
// const start = document.getElementById("start");
// const quiz = document.getElementById("quiz");
// const question = document.getElementById("question");
// const qImg = document.getElementById("qImg");
// const choiceA = document.getElementById("A");
// const choiceB = document.getElementById("B");
// const choiceC = document.getElementById("C");
// const choiceD = document.getElementById("D");
// const counter = document.getElementById("counter");
// const timeGauge = document.getElementById("timeGauge");
// const progress = document.getElementById("progress");
// const scoreDiv = document.getElementById("scoreContainer");

// // create questions
// let questions = [
//     {
//         question: "Javascript is a(n) ____ language?",
//         imgSrc: "img.js.png",
//         choiceA: "Object-Oriented",
//         choiceB: "Object-based",
//         choiceC: "Procedural",
//         choiceD: "None of the above",
//         correct: "A"
//     },
//     {
//         question: "Which of the following methods is used to access HTML elements using Javascript?",
//         imgSrc: "img/js.png",
//         choiceA: "getElementbyId()",
//         choiceB: "getElementsByClassName()",
//         choiceC: "Both A and B",
//         choiceD: "None of the above",
//         correct: "C"
//     },
//     {
//         question: "Which of the following keywords is used to define a variable in Javascript?",
//         imgSrc: "img/js.png",
//         choiceA: "var",
//         choiceB: "let",
//         choiceC: "Both A & B",
//         choiceD: "None of the above",
//         correct: "C"
//     },
//     {
//         question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
//         imgSrc: "img/js.png",
//         choiceA: "Throws an error",
//         choiceB: "Ignores the statement",
//         choiceC: "Gives a warning",
//         choiceD: "None of the above",
//         correct: "B"
//     },
//     {
//         question: "Which of the following methods can be used to display data in some form using Javascript?",
//         imgSrc: "img.js.png",
//         choiceA: "document.write()",
//         choiceB: "console.log()",
//         choiceC: "window.alert()",
//         choiceD: "All of the above",
//         correct: "D"
//     }]

// // create variables
// const lastQuestion = questions.length - 1;
// let runningQuestion = 0;

// // render a question
// function renderQuestion() {
//     let q = questions[runningQuestion];

//     question.innerHTML = "<p>"+ q.question +"</p>";
//     qImg.innerHTML = "<img src="+ q.imgScr +">";
//     choiceA.innerHTML = q.choiceA;
//     choiceB.innerHTML = q.choiceB;
//     choiceC.innerHTML = q.choiceC;
//     choiceD.innerHTML = q.choiceD;
// }

// start.style.display = "none";
// renderQuestion();
// quiz.style.display = "block";

// // render progress
// function renderProgress() {
//     for(let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
//         progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
//     }
// }
// function answerIsCorrect(){
//     document.getElementById(runningQuestion).style.backgroundColor = "green"
// }

// function answerIsWrong(){
//     document.getElementById(runningQuestion).style.backgroundColor = "red";
// }

