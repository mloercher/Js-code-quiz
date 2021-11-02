//questions array
var questionsArray = [
    {
        "question 1": "What are variables used for in JavaScript Programs?",
        "answers": ["A: Storing numbers, dates, or other values", "B: Varying randomly", "C: Causing high-school algebra flashbacks", "D:  None of the above"], 
        "correctIndex": 0
    },
    {
        "question 2": "Which of the following are capabilities of functions in JavaScript?",
        "answers": ["A: Return a value", "B: Accept parameters and Return a value", "C: Accept parameters", "D:  None of the above"], 
        "correctIndex": 2
    },
    {
        "question 3": "Which of the following is not a valid JavaScript variable name?",
        "answers": ["A: 2names", "B: _first_and_last_names", "C: FirstAndLast", "D:  None of the above"], 
        "correctIndex": 0
    },
    {
        "question 4": "What is the correct JavaScript syntax to write 'Hello World'?",
        "answers": ["A: System.out.println('Hello World')", "B: println ('Hello World')", "C: document.write('Hello World')", "D:  response.write('Hello World')"], 
        "correctIndex": 2
    },
    {
        "question 5": "Inside which HTML element do we put the JavaScript?",
        "answers": ["A: <js>", "B: <scripting>", "C: <script>", "D:  <javascript>"], 
        "correctIndex": 2
    }
    
]
//Variables
var startButtonEl = document.querySelector("#start-btn");
console.log(startButtonEl)

//fucntions
function handleCLick() {
    console.log('clicked')
}

function main() {
    //add start click event listener
    startButtonEl.addEventListener('click', handleCLick);
}



//START
main();


// show first question, start timer 
// if more questions, move to next question
//else
    //high score page
    //save score to local storage




