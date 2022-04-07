// getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

// If Start Quiz Button Clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
    console.log(start);
}


