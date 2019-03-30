var alphabetChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesRemain = 9;
var guessesSoFar = [];


var guessLetter = document.getElementById("guess-space");
var winNum = document.getElementById("win-space");
var lossNum = document.getElementById("loss-space");
var guessRemaining = document.getElementById("remaining-space");
var guessAlready = document.getElementById("already-space");




document.onkeyup = function(event) {

    var userGuess = event.key;
    var randomGuess = alphabetChoice[Math.floor(Math.random() * alphabetChoice.length)]; 

    if (randomGuess === userGuess) {
        wins++;
        guessesRemain = 9;
        guessesSoFar = [];
    } else {
        guessesRemain--;
        guessesSoFar.push(userGuess);
    }
    if (guessesRemain === 0) {
        losses++;
        guessesRemain = 9;
        guessesSoFar = [];
    } 
    
    
   
    guessLetter.textContent =  userGuess;
    winNum.textContent =  wins;
    lossNum.textContent =  losses;
    guessRemaining.textContent = guessesRemain;
    guessAlready.textContent = guessesSoFar ;
  
}

