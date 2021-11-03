//questions array
var questionsArray = [
  {
    text: "What are variables used for in JavaScript Programs?",
    answer1: "A: Storing numbers, dates, or other values",
    answer2: "B: Varying randomly",
    answer3: "C: Causing high-school algebra flashbacks",
    answer4: "D: None of the above",
    correctAnswer: "A: Storing numbers, dates, or other values",
  },
  {
    text: "Which of the following are capabilities of functions in JavaScript?",
    answer1: "A: Return a value",
    answer2: "B: Accept parameters and Return a value",
    answer3: "C: Accept parameters",
    answer4: "D:  None of the above",
    correctAnswer: "B: Accept parameters and Return a value",
  },
  {
    text: "Which of the following is not a valid JavaScript variable name?",
    answer1: "A: 2names",
    answer2: "B: _first_and_last_names",
    answer3: "C: FirstAndLast",
    answer4: "D:  None of the above",
    correctAnswer: "A: 2names",
  },
  {
    text: "What is the correct JavaScript syntax to write 'Hello World'?",
    answer1: "A: System.out.println('Hello World')",
    answer2: "B: println ('Hello World')",
    answer3: "C: document.write('Hello World')",
    answer4: "D: response.write('Hello World')",
    correctAnswer: "C: document.write('Hello World')",
  },
  {
    text: "Inside which HTML element do we put the JavaScript?",
    answer1: "A: <js>",
    answer2: "B: <scripting>",
    answer3: "C: <script>",
    answer4: "D:  <javascript>",
    correctAnswer: "C: <script>",
  },
];
//Variables
var startButtonEl = document.querySelector("#start-btn");
var currentQuestionIndex = 0;
var time = 120;
var s

//FUNCTIONS-----------------------------------------------------------

//SELECT ANSWER
function selectAnswer() {
  var questionsDiv = document.querySelector(".questions");
  if (this.textContent === questionsArray[currentQuestionIndex].correctAnswer) {
    console.log("correct");
    var correctSelection = document.createElement('h3')
    correctSelection.textContent = ("correct!");
    questionsDiv.append(correctSelection);
  } else {
    console.log("incorrect");
    var incorrectSelection = document.createElement('h3')
    incorrectSelection.textContent = ("Incorrect!");
    questionsDiv.append(incorrectSelection);
    time-=10;
  } 
  currentQuestionIndex++;
  var questionsDiv = document.querySelector(".questions");

  function reset() {
    questionsDiv.innerHTML = "";
    createCurrentQuestion();
  }
  setTimeout(reset,500)
}

//CREATE CURRENT QUESTION
function createCurrentQuestion() {
    
  //create a question element
  var questionH2 = document.createElement("h2");
  questionH2.textContent = questionsArray[currentQuestionIndex].text;

  var optionBtn1 = document.createElement("button");
  optionBtn1.textContent = questionsArray[currentQuestionIndex].answer1;

  var optionBtn2 = document.createElement("button");
  optionBtn2.textContent = questionsArray[currentQuestionIndex].answer2;

  var optionBtn3 = document.createElement("button");
  optionBtn3.textContent = questionsArray[currentQuestionIndex].answer3;

  var optionBtn4 = document.createElement("button");
  optionBtn4.textContent = questionsArray[currentQuestionIndex].answer4;

  optionBtn1.addEventListener("click", selectAnswer);
  optionBtn2.addEventListener("click", selectAnswer);
  optionBtn3.addEventListener("click", selectAnswer);
  optionBtn4.addEventListener("click", selectAnswer);

  //append question and answers
  var questionsDiv = document.querySelector(".questions");
  questionsDiv.append(questionH2);
  questionsDiv.append(optionBtn1);
  questionsDiv.append(optionBtn2);
  questionsDiv.append(optionBtn3);
  questionsDiv.append(optionBtn4);
}

//START QUIZ
function startQuiz() {
  function timer () {
    time--;
    var countdownTime = document.querySelector('#countdown');
    countdownTime.textContent = time
    
    if (time < 0) {
      clearInterval(time);
      alert("you ran out of time!");
      endQuiz();
    } else if (currentQuestionIndex === questionsArray.length) {
      clearInterval(time);
    }
  }
  setInterval(timer, 1000 );
  

  createCurrentQuestion();
  var introText = document.querySelector(".intro-text");
  introText.style.display = "none";
  startButtonEl.style.display = "none";

}

//END QUIZ
function endQuiz() {
    return;
//input high score 
};

//EVENT LISTENERS----------------------------------------------------------
startButtonEl.addEventListener("click", startQuiz);

//TRIALS--------------------------------------
//if (currentQuestionIndex < questionsArray.length) {
//}else {
//run endGame()
//}
