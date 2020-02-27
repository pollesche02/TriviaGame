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

let questions = [
    {
        quote : "Keep the Change, Ya Filthy Animal",
        choiceA : "GodFather",
        choiceB : "HomeAlone",
        choiceC : "GoodFellas",
        correct : "B"
    },
    {
        quote : "Hasta La Vista, Baby",
        choiceA : "Terminator 2",
        choiceB : "Live Free or Die Hard",
        choiceC : "A Few Good Men",
        correct : "A"
    }
]