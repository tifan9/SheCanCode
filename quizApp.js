const quiz =[
    {
        question: "Which of the following is not a JavaScript keyword?",
        answers: ["var", "let", "const", "function"],
        correctAnswer: "let"
    },
    {
        question: "what is Javascript",
        answers: ["it is a programming language", "it is a word"],
        correctAnswer: "it is a programming language"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'quiz.js'?",
        answers: ["<script src='quiz.js'></script>", "<script>quiz.js</script>"],
        correctAnswer: "<script src='quiz.js'></script>"
    },
    {
        question: "What is HTML in full",
        answers: ["Hyper Text Markup Language", "Hyper Tell Make Language"],
        correctAnswer: "Hyper Text Markup Language"
    }
]
// Display one question at a time.

const displayQuestion = (index) => {
    console.log(quiz[index].question)
}
displayQuestion(0)

//Allow users to select answers.

const selectAnswer = (index) => {
    console.log(quiz[index].answers)
}
selectAnswer(1)
//Display the final score at the end.

const displayScore = (index) => {
    console.log(quiz[index].correctAnswer)
}
displayScore(2)
//Provide feedback on correct/incorrect answers.

const feedback = (index) => {
    console.log(quiz[index].correctAnswer)
}
feedback(3)

let currentIndex = 0;

const nextQuestion = () => {
    currentIndex++;
    if (currentIndex < quiz.length) {
        displayQuestion(currentIndex);
        selectAnswer(currentIndex);
        displayScore(currentIndex);
        feedback(currentIndex);
    } else {
        console.log("You have completed the quiz!")
    }
}
nextQuestion()
