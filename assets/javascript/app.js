startButton = document.getElementById('start-btn')
nextButton = document.getElementById('next-btn')
questionContainerElement = document.getElementById('question-container')
questionElement = document.getElementById('question')
answerButtonsElement = document.getElementById('answer-buttons')
timerElement = document.getElementById("timer")
resultsElement = document.getElementById("results")
let questions = [
    {
        question: '"Keep the change, Ya filthy animal"', 
        answers: [
            { text: 'Home Alone', correct: true},
            { text: 'The God Father', correct: false},
            { text: 'GoodFellas', correct: false},

        ]
    },
    {
        question: '"Hasta La Vista, Baby"', 
        answers: [
            { text: 'Live Free or Die Hard', correct: false},
            { text: 'Terminator 2', correct: true},
            { text: 'A Few Good Men', correct: false},

        ]
    },
    {
        question: '"Your Killin Me Smalls"', 
        answers: [
            { text: 'The Sandlot', correct: true},
            { text: 'Home Alone', correct: false},
            { text: 'A Few Good Men', correct: false},

        ]
    },
    {
        question: '"To Infinity and Beyond"', 
        answers: [
            { text: 'Distric 9', correct: false},
            { text: 'Independence Day', correct: false},
            { text: 'Toy Story', correct: true},

        ]
    },
    {
        question: '"Show Me The Money', 
        answers: [
            { text: 'The God Father', correct: false},
            { text: 'Jerry Mcquire', correct: true},
            { text: 'The Usual Suspects', correct: false},

        ]
    },
]

let correctRes = 0;
let wrongRes = 0;
let shuffledQuestions, currentQuestionIndex
let counter = questions.length*6
timerElement.innerText = counter

function countdown(){
    counter--
    timerElement.innerText = counter
    if(counter === 0){
       
            showresults()

    }

}

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
if (currentQuestionIndex > questions.length -1){  
    showresults()
}else{
    // if end go to showresults
    setNextQuestion()
}
})

function startGame() {
    timerId = setInterval(countdown, 1000)
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    selectedButton = e.target
    correct = selectedButton.dataset.correct
    if(correct){
        correctRes++
    }
    else{
        wrongRes++
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    // if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
        
        
    // } else {
    //     startButton.innerText = 'Restart'
    //     startButton.classList.remove('hide')
    // }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
       
    } else {
        element.classList.add('wrong')
    
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function showresults() {
    clearInterval(timerId)
    questionContainerElement.classList.add('hide')
    nextButton.classList.add('hide')
    resultsElement.classList.remove('hide')
    document.getElementById("correct").innerText = correctRes
    document.getElementById("wrong").innerText = wrongRes
    document.getElementById("unanswered").innerText = questions.length - correctRes -  wrongRes
    
}