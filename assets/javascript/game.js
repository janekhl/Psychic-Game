var wins = 0;
var losses = 0;
var guesses = 5;
var guessesSoFar = [];
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var compChoice = alpha[Math.floor(Math.random()*alpha.length)];


document.onkeyup=function(event) {
    var userGuess = event.key;
    console.log(userGuess);
    console.log(compChoice);
    if (userGuess === compChoice) {
        wins++
        alert ("Good Job, That's Right!  You Must Be a Psychic!");
        guesses = 5;
        guessesSoFar.length = 0;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        compChoice = alpha[Math.floor(Math.random()*alpha.length)];
        document.querySelector('#guesses').innerHTML = "Guesses Left: " + guesses;
        
    }
    else if (guesses === 1) {
        losses ++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert ("Loser, you're barely cognizant")
        guessesSoFar.length = 0;
        document.querySelector('#guessesSoFar').innerHTML = "Letters You've Guessed So Far: ";
        guesses = 5;
        compChoice = alpha[Math.floor(Math.random()*alpha.length)];
        document.querySelector('#guesses').innerHTML = "Guesses Left: " + guesses;
    }

    else if (userGuess !== compChoice) {
        guesses --;
        guessesSoFar.push(userGuess);
        document.querySelector('#guessesSoFar').innerHTML = "Letters You've Guessed So Far: " + guessesSoFar.join(", ");
        document.querySelector('#guesses').innerHTML = "Guesses Left: " + guesses;
        
    }
}



