 const start = document.getElementById("start");
 const quiz = document.getElementById("quiz");
 const quote = document.getElementById("quote");
 const timeGauge = document.getElementById("timegauge");
 const choiceA = document.getElementById("A");
 const choiceB = document.getElementById("B");
 const choiceC = document.getElementById("C");
 const progress = document.getElementById("progress");
 const scoreContainer = document.getElementById("scoreContainer");

// put all my questions inside an array

let quotes = [
    {
        quote : "Keep the Change, Ya Filthy Animal",
        choiceA : "The GodFather",
        choiceB : "Home Alone",
        choiceC : "GoodFellas",
        correct : "B"
    },
    {
        quote : "Hasta La Vista, Baby",
        choiceA : "Terminator 2",
        choiceB : "Live Free or Die Hard",
        choiceC : "A Few Good Men",
        correct : "A"
    },
    {
        quote : "Your Killin Me Smalls",
        choiceA : "The Sandlot",
        choiceB : "Home Alone",
        choiceC : "A Few Good Men",
        correct : "A"
    },
    {
        quote : "To Infinity and Beyone",
        choiceA : "District 9",
        choiceB : "Independence Day",
        choiceC : "Toy Store",
        correct : "C"
    },
    {
        quote : "Show Me The Money",
        choiceA : "The Godfather",
        choiceB : "Jerry Mcguire",
        choiceC : "The Usual Suspects",
        correct : "B"
    },
    {
        quote : "Never hate your enemies. It affects your judgment",
        choiceA : "The Godfather",
        choiceB : "GoodFellas",
        choiceC : "The Usual Suspects",
        correct : "A"
    },

]


const lastquote = quote.lenth -1;
let runningquoteIndex = 0;
let count = 0;
const quoteTime = 10;
const gaugueWidth = 150;
const gaugeUnit = gaugueWidth / quoteTime;
let Timer;
let score = 0;

function renderQuote(){
    let q = quote[runningquote];

    quote.innerHTML = "<p>" + q.quote +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuote();
    quiz.style.direction = "block";
    renderProgress();
    renderCounter();
    Timer = setInterval(renderCounter, 1000);
}

function progressRender(){
    for(let qIndex = 0; qIndex <= lastquote; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex +"></div>";
    }
}

function renderCounter(){
    if(count <= quoteTime){
        counterRender.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        answerIsWrong(); // this changes to red cause they got the answer wrong
        if(runningquote < lastquote){
            runningquote++;
            renderQuote();
        }else{
            clearInterval(Timer);
            scoreRender(); // this will show the final score to the person playing the game
        }
    }
}


function checkAnswer(answer){
    if( answer == quote[runningquote].correct){
        score++
        answerIsCorrect(); // this is will the person playing got the right answer
    }else{
        answerIsWrong(); 
    }
    count = 0;
    if(runningquote < lastquote){
        runningquote++;
        renderQuote();
    }else{
        clearInterval(Timer);
        scoreRender(); // this will show the final score again I think.
    }
}

function answerIsCorrect(){
    document.getElementById(runningquote).style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    document.getElementById(runningquote).style.backgroundColor = "#f00";
}

function scoreRender() {
    scoreDiv.style.display = "block";
    const scorePerCent = Math.round(100 * score/quote.lenth);

    let img = (scorePerCent >= 80) ? "img" :
              (scorePerCent >= 60) ? "img" :
              (scorePerCent >= 40) ? "img" :
              (scorePerCent >= 20) ? "img" :

    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>" + scorePerCent +"%</p>";
}