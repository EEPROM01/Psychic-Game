
//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess=null;


var letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(letterToGuess);

var updateGuessesLeft = function() {
  document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateGuessesSoFar = function() {
  document.getElementById('letters').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

//
var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  letterToGuess=null;

  updateLetterToGuess()
  updateGuessesLeft()
  updateGuessesSoFar()
};

document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  guessedLetters.push(userGuess);
  updateGuessesLeft()
  updateGuessesSoFar()

        if (guessesLeft > 0){
            if (userGuess === letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                reset();
            }
        }else if(guessesLeft == 0){
                losses++;
                document.querySelector('#losses').innerHTML = "Losses: " + losses;
                reset();
        }

  
  // document.querySelector("#game").innerHTML = html;

}
