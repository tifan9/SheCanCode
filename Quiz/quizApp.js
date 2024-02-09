const prompt = require('prompt')
//Load questions from a JSON file.
const questions = [
    {
        question: "Which of the following is not a JavaScript keyword?",
        options: ["var", "let", "const", "function"],
        answer: "let"
    },
    {
        question: "what is Javascript",
        options: ["it is a programming language", "it is a word"],
        answer: "it is a programming language"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'quiz.js'?",
        options: ["<script src='quiz.js'></script>", "<script>quiz.js</script>"],
        answer: "<script src='quiz.js'></script>"
    },
    {
        question: "What is HTML in full",
        options: ["Hyper Text Markup Language", "Hyper Tell Make Language"],
        answer: "Hyper Text Markup Language"
    }
]
let currentQuestion = 0
let score = 0
// Display one question at a time.
const display = () => {
    const {question, options} = questions[currentQuestion]
    console.log(question)
    options.forEach((option, index) => console.log(`${index + 1}. ${option}`))
    console.log('')
}
// start quiz
const startQuiz = () =>{
    console.log("")
    console.log("***************************")
    console.log("Welcome to the Quiz App!")
    console.log("***************************")
    console.log("")
    currentQuestion = 0
    score = 0
    askQuestion()
    
}
// Ask for user input and check if it is valid.
const askQuestion = () => {
    if(currentQuestion < questions.length){
        display()
        prompt.get(['answer'], (err, result) => {
            const answer = parseInt(result.answer)
            if(!(answer >=1 && answer <=4)){
                console.log("Invalid input: Please enter a number between 1 and 4")
            }else{
                checkanswer(answer)
            }
            askQuestion()
        })
    }else{
        showResult()
    }
}

// check answers
const checkanswer = (answer) => {
    const {options, answer: correctAnswer} = questions[currentQuestion]
    if(options[answer - 1] === correctAnswer) {
        score++
        console.log('')
        console.log('correct!')
        console.log('')
    }else{
        console.log('')
        console.log('wrong answer')
        console.log('')
    }
    currentQuestion++
}
// Display the final score at the end.
const showResult = () => {
    console.log('')
    console.log(`Your Score: ${score} out of ${questions.length}`)
    console.log('')
    process.exit()
}    

prompt.start()
startQuiz()
