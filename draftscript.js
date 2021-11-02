
var startBtn = document.querySelector("#start");
console.log(startBtn);
const startingMinutes = 2;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("#countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countdownEl.innerHTML = '2:00';
    time--;
}


const questionsArray = [
    {
        text: "This is question 1",
        options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4"
        ]
    },
    {
        text: "This is question 2",
        options: [
            "Option 1 of q2",
            "Option 2 of q2",
            "Option 3",
            "Option 4"
        ]
    }
]

let currentQuestionNumber = 0;

function createQuestionElements () {
    var questionH2 = document.createElement('h2');
    questionH2.textContent = questionsArray[currentQuestionNumber].text;

    var optionBtn1 = document.createElement('button');
    optionBtn1.textContent = "Option 1"

    var optionBtn2 = document.createElement('button');
    optionBtn2.textContent = "Option 2"

    var optionBtn3 = document.createElement('button');
    optionBtn1.textContent = "Option 3"

    var optionBtn4 = document.createElement('button');
    optionBtn2.textContent = "Option 4"

    var questionsDiv = document.querySelector(".questions");
    questionsDiv.append(questionH2);
    questionsDiv.append(optionBtn1);
    questionsDiv.append(optionBtn2);
    questionsDiv.append(optionBtn3);
    questionsDiv.append(optionBtn4);
    var timer = 

    currentQuestionNumber++;
}



//click start button

function startQuiz (){
    createQuestionElements();
    var questions = document.querySelector(".questions");
    questions.style.display = "block";
    var beginningText = document.querySelector(".beginningText");
    beginningText.style.display = "none";
};

//show first question

//timer begin

startBtn.addEventListener("click", startQuiz)
var nextBtn = document.querySelector('#nextBtn')
nextBtn.addEventListener("click", createQuestionElements)