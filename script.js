//questions array
var questionsArray = [
    {
        text: "What are variables used for in JavaScript Programs?",
        answer1: "A: Storing numbers, dates, or other values",
        answer2: "B: Varying randomly", 
        answer3: "C: Causing high-school algebra flashbacks", 
        answer4: "D: None of the above", 
        correctIndex: 0
    },
    {
        text: "Which of the following are capabilities of functions in JavaScript?",
        answer1: "A: Return a value",
        answer2: "B: Accept parameters and Return a value",
        answer3: "C: Accept parameters",
        answer4: "D:  None of the above", 
        correctIndex: 2
    },
    {
        text: "Which of the following is not a valid JavaScript variable name?",
        answer1: "A: 2names",
        answer2: "B: _first_and_last_names",
        answer3: "C: FirstAndLast",
        answer4: "D:  None of the above",     
        correctIndex: 0
    },
    {
        text: "What is the correct JavaScript syntax to write 'Hello World'?",
        answer1: "A: System.out.println('Hello World')",
        answer2: "B: println ('Hello World')",
        answer3: "C: document.write('Hello World')",
        answer4: "D: response.write('Hello World')", 
        correctIndex: 2
    },
    {
        text: "Inside which HTML element do we put the JavaScript?",
        answer1: "A: <js>",
        answer2: "B: <scripting>",
        answer3: "C: <script>",
        answer4: "D:  <javascript>", 
        correctIndex: 2
    }
    
]
//Variables
var startButtonEl = document.querySelector("#start-btn");
var currentQuestionIndex = 0;
//var timerEl = document.getElementById('countdown');



//FUNCTIONS-----------------------------------------------------------

function createCurrentQuestion() {
    //check if there are more questions, create a question element
    if (currentQuestionIndex < questionsArray.length) {
        var questionH2 = document.createElement('h2');
        questionH2.textContent = questionsArray[currentQuestionIndex].text;

        var optionBtn1 = document.createElement('button');
        optionBtn1.textContent = questionsArray[currentQuestionIndex].answer1;

        var optionBtn2 = document.createElement('button');
        optionBtn2.textContent = questionsArray[currentQuestionIndex].answer2

        var optionBtn3 = document.createElement('button');
        optionBtn3.textContent = questionsArray[currentQuestionIndex].answer3

        var optionBtn4 = document.createElement('button');
        optionBtn4.textContent = questionsArray[currentQuestionIndex].answer4



        
        
        var questionsDiv = document.querySelector(".questions");
        questionsDiv.append(questionH2);
        questionsDiv.append(optionBtn1);
        questionsDiv.append(optionBtn2);
        questionsDiv.append(optionBtn3);
        questionsDiv.append(optionBtn4);

        currentQuestionIndex++;


    }else {
        //run endGame()----enter initials, view high scores, retry
    }
    
    
    
    
    
    
    
    


    


        


        //append / replace last question with next
};


//function startQuiz() {
    createCurrentQuestion();
    //Start timer
    //startTimer();
//}

//startTimer(){

//}





startButtonEl.addEventListener('click', createCurrentQuestion);



//START----------------------------------------------------------------------
//startQuiz();




