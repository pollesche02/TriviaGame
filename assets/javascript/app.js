 var start = document.getElementById("start");
 var quiz = document.getElementById("quiz");
 var quote = document.getElementById("quote");
 var choiceA = document.getElementById("A");
 var choiceB = document.getElementById("B");
 var choiceC = document.getElementById("C");
 var counter = document.getElementById("counter");
 var timeGauge = document.getElementById("timeGauge");
 var progress = document.getElementById("progress");
 var scoreDiv = document.getElementById("scoreContainer");

// put all my questions inside an array

var quote = [
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

];


var lastQuote = quote.lenth -1;
var runningquote = 0;
var count = 0;
var quoteTime = 10;
var gaugueWidth = 150;
var gaugeUnit = gaugueWidth / quoteTime;
var Timer;
var score = 0;

function renderQuote(){
    var q = quote[runningquote];

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
    Timer = setInterval(renderCounter,1000);
}

function renderProgress(){
    for(var qIndex = 0; qIndex <= lastquote; qIndex++){
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
    if(runningquote < lastQuote){
        runningQuote++;
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

    let img = (scorePerCent >= 80) image1 = new image1("winnerwinner.png")
              (scorePerCent >= 60) image2 = new image2("Winner.png")
              (scorePerCent >= 40) image3 = new image3("palm.png")
              (scorePerCent >= 20) image4 = new image4("mad face.png")

    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}