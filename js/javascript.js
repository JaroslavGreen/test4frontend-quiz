"use strict"

/*Test4Dev: Перевір свої знання!*/



class Question {

    constructor(text, options, correctIndex) {
        this.text = text;
        this.options = options;
        this.correctIndex = correctIndex;
    }

    /*Створюємо питання і перевіряємо*/

    ask() {

        let optionList = '';
        for (let i = 0; i < this.options.length; i++) {
            optionList += `${i + 1}. ${this.options[i]}\n`;
        }

        let answer = prompt(`${this.text}\n${optionList}`);
        return Number(answer) - 1 === this.correctIndex;
    }
}

/*масив питань сама вікторина*/



class Quiz {

    constructor(questions, userInput) {
        this.questions = questions;
        this.score = 0;
        this.userInput = userInput;

    }

    /*запуск вікторина*/

    start() {
        for (let question of this.questions) {
            if (question.ask()) {
                alert("✅ You answered correctly");
                this.score++;
            }

            else { alert(`❌ Oops Wrong! The correct answer: ${question.options[question.correctIndex]}`); }
        }
        alert(`👏 ${this.userInput}, Congratulations! The test is now complete. Your result: ${this.score} з ${this.questions.length} `);

        if (confirm("Would you like to take the test again?")) {
            this.score = 0;
            this.start();
        }
    }
}


/*Питання*/

const questions = [new Question("What is HTML?",
    ["Styling language", "HyperText Markup Language", "Programming language"],
    1),
new Question(
    "Which tag is used to create a list?",
    ["<table>", "<ul>", "<div>"],
    1
), new Question(
    "How to link CSS to an HTML document?",
    ["<script>", "<style>", "<link>"],
    2
),
new Question(
    "What does the 'color' property do in CSS?",
    ["Sets font size", "Sets text color", "Sets padding"],
    1
),
new Question(
    "Which keyword is used to declare a variable in JS?",
    ["let", "int", "function"],
    0
),
new Question(
    "What will this output: console.log(2 + '2')?",
    ["4", "22", "NaN"],
    1
),
new Question(
    "Which tag is used to insert an image?",
    ["<image>", "<pic>", "<img>"],
    2
),
new Question(
    "Which CSS selector selects all elements with the class .menu?",
    ["#menu", ".menu", "menu"],
    1
),
new Question(
    "What is a variable in programming?",
    [
        "An action to perform",
        "A place to store data",
        "A style for an element"
    ],
    1
),
new Question(
    "Which tag defines a top-level heading?",
    ["<head>", "<header>", "<h1>"],
    2
), new Question(
    "Which keyword is used to declare a function in JS?",
    ["func", "function", "def"],
    1
),
new Question(
    "How do you declare an array in JS?",
    ["let arr = [];", "let arr = {};", "let arr = ()"],
    0
),
new Question(
    "How to get the number of elements in array arr?",
    ["arr.size", "arr.length", "arr.count()"],
    1
),
new Question(
    "Which data type has values true/false?",
    ["string", "boolean", "number"],
    1
),
new Question(
    "How to print a message to the console?",
    ["console.write()", "log.console()", "console.log()"],
    2
),
new Question(
    "What does the === operator do in JS?",
    [
        "Assignment",
        "Strict comparison of value and type",
        "Comparison of value only"
    ],
    1
),
new Question(
    "How to check if x is greater than 10?",
    ["x > 10", "x => 10", "x >= 10"],
    0
),
new Question(
    "How to create an object in JS?",
    [
        "let obj = ();",
        "let obj = [];",
        "let obj = {};"
    ],
    2
),
new Question(
    "What is the value of y after: let y = 5; y += 3;",
    ["8", "15", "53"],
    0
),
new Question(
    "Which keyword stops the execution of a loop?",
    ["return", "break", "stop"],
    1
),
new Question(
    "Which function converts a string to a number?",
    ["toNumber()", "parseInt()", "String()"],
    1
),
new Question(
    "How to write a single-line comment in JS?",
    ["<!-- comment -->", "// comment", "/* comment */"],
    1
),
new Question(
    "What is 'undefined' in JS?",
    [
        "An error type",
        "A variable with no assigned value",
        "A function"
    ],
    1
),
new Question(
    "Which array method adds an element to the end?",
    ["push()", "pop()", "shift()"],
    0
),
new Question(
    "How is the ternary operator written?",
    [
        "condition ? value1 : value2",
        "if (condition) { ... }",
        "while (condition) { ... }"
    ],
    0
),
new Question(
    "How to check the type of a variable in JS?",
    ["typeof x", "type(x)", "x.type"],
    0
)];


document.getElementById('startBtn').onclick = function () {
    document.getElementById('greeting').style.display = 'none';

    const userInput = prompt("Please enter your name:");

    const quiz = new Quiz(questions, userInput);
    quiz.start();

}


