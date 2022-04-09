// getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeText = document.querySelector(".timer .time_left_text");
const timeCount = document.querySelector(".time_sec");
const result_box = document.querySelector(".result_box");
const save_score = document.querySelector(".save_score");


var timeInterval;
var time = 75;
var score = 0;


// If Start Quiz Button Clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); // show the info box
}

// If Exit Quiz Button Clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); // hide the info box
}

// If Continue Quiz Button Clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); // hide the info box
    quiz_box.classList.add("activeQuiz"); // show the quiz box
    showQuestions(0); // calling showQuestions function
    queCounter(1); // passing 1 parameter to queCounter
    timeInterval = setInterval(startTimer, 1000); // calling startTimer function
}

let que_count = 0;
let que_numb = 1;
let counter;

const next_btn = document.querySelector(".next_btn");

// if Next Buton Clicked
next_btn.onclick = ()=> {
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
    }else{
        console.log("Questions completed");
        endQuiz();
    }
}



// getting questions and options from array
function showQuestions(index){
    if(index === questions.length){
        endQuiz();
    }
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for(let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>'
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>'

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length
    if(userAns == correctAns) {
        score++;
        answer.classList.add("correct");
    console.log("Answer is Correct");
    answer.insertAdjacentHTML ("beforeend", tickIcon);
} else {
    time -= 5;
    answer.classList.add("incorrect");
    console.log("Answer is Wrong");
    answer.insertAdjacentHTML ("beforeend", crossIcon);

    // if answer is incorrect then automatically select the correct answer
    for (let i = 0; i < allOptions; i++) {
        if(option_list.children[i].textContent == correctAns) {
            option_list.children[i].setAttribute("class", "option correct");
            option_list.children[i].insertAdjacentHTML ("beforeend", tickIcon);
        }
    }
}

//once user seleted disables all options
for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
}
}

function startTimer() {

    if (time > 0) {
        time--;
        timeCount.textContent = time;
        
    } else {
        endQuiz();
    }
    
}

// To Do: Look up how to store an array of objects into local storage. array.push(newScore)




function endQuiz(){
    quiz_box.classList.remove("activeQuiz"); // hide the info box
    result_box.classList.add("activeResult"); // show the quiz box
    var points = document.querySelector(".points");
    points.textContent = score;
}





save_score.addEventListener("click", function() {
    var initials = document.querySelector(".initials").value

    var newScore = {
        initials: initials,
        score: score
    }

    function populateStorage() {
        localStorage.setItem("initials", JSON.stringify(initials));
        localStorage.setItem("score", JSON.stringify(score));
    }

    populateStorage(newScore);
    
    
})





















function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}

