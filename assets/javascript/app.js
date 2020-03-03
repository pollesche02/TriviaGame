 var start = document.getElementById("start");
 var quiz = document.getElementById("quiz");
 var question = document.getElementById("quote");
 var choiceA = document.getElementById("A");
 var choiceB = document.getElementById("B");
 var choiceC = document.getElementById("C");
 var counter = document.getElementById("counter");
 var timeGauge = document.getElementById("timeGauge");
 var progress = document.getElementById("progress");
 var scoreDiv = document.getElementById("scoreContainer");
console.log("progress")
// put all my questions inside an array

let quote = [
    {
        quote : "Keep the Change, Ya Filthy Animal",
        choiceA : "The GodFather",
        choiceB : "Home Alone",
        choiceC : "GoodFellas",
        correct : "B"
    },{
        quote : "Hasta La Vista, Baby",
        choiceA : "Terminator 2",
        choiceB : "Live Free or Die Hard",
        choiceC : "A Few Good Men",
        correct : "A"
    },{
        quote : "Your Killin Me Smalls",
        choiceA : "The Sandlot",
        choiceB : "Home Alone",
        choiceC : "A Few Good Men",
        correct : "A"
    },{
        quote : "To Infinity and Beyone",
        choiceA : "District 9",
        choiceB : "Independence Day",
        choiceC : "Toy Store",
        correct : "C"
    },{
        quote : "Show Me The Money",
        choiceA : "The Godfather",
        choiceB : "Jerry Mcguire",
        choiceC : "The Usual Suspects",
        correct : "B"
    },{
        quote : "Never hate your enemies. It affects your judgment",
        choiceA : "The Godfather",
        choiceB : "GoodFellas",
        choiceC : "The Usual Suspects",
        correct : "A"
    }
];

console.log("choice?")

var lastQuote = quote.length -1;
let runningQuote = 0;
let count = 0;
var quoteTime = 10;
var gaugeWidth = 150;
var gaugeUnit = gaugeWidth / quoteTime;
let Timer;
let score = 0;
console.log("quote")

function Quote(){
    let q = quote[runningQuote];

    quote.innerHTML = "<p>" + q.quote +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
console.log("quote?")

start.addEventListener("click", start);
console.log("start")

function Progress(){  
    for(let qIndex = 0; qIndex <= lastquote; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function Counter(){
    if(count <= quoteTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        answerIsWrong(); // this changes to red cause they got the answer wrong
        if(runningquote < lastquote){
            runningquote++;
            Quote();
        }else{
            clearInterval(Timer);
            scoreRender(); // this will show the final score to the person playing the game
        }
    }
}


function checkAnswer(answer){
    if( answer == quote[runningquote].correct){
        score++;
        document.getElementById(runningquote).style.backgroundColor = "#0f0"; // this is will the person playing got the right answer
    }else{
        document.getElementById(runningquote).style.backgroundColor = "#f00"; 
    }
    count = 0;
    if(runningquote < lastQuote){
        runningQuote++;
        Quote();
    }else{
        clearInterval(Timer);
        score(); // this will show the final score again I think.
    }

function scoreDiv() {
    scoreDiv.style.display = "block";
    const scorePerCent = Math.round(100 * score/quote.length);

    scoreDiv.innerHTML = "<img src="+ winnerwinner +">";
    scoreDiv.innerHTML += "<p>" +scorePerCent +"%</p>";
}}
console.log("running?")