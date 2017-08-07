//create variables for the HTML elements needed in JavaScript
var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var lives = document.getElementById("livesRemaining");
var guesses = document.getElementById("guessesList");

//create a variable to store number of lives remaining, and write it to the HTML
var livesRemaining = 10;
lives.innerHTML = livesRemaining;

//create a variable to store guesses and write it to the HTML
var guessArray = [ ];
guesses.innerHTML = guessArray;


//create an array with possible words for computer to use
var words = ["borathean", "stark", "lannister", "targaryean", "dothraki", "dragon", "wall", 
"throne", "crown", "sword", "hand", "king", "queen"];


//function executing when start button is clicked
startButton.onclick = function play() {
  //choose a random word from the words array and log it to the console
  var chosenWord = words[Math.floor(Math.random() * words.length)];
  console.log(chosenWord);

  //create a different variable underscores that will have an underscore for every character
  //in the chosen word 
  var wordLength = chosenWord.length;
  var underscores = "";
  for(i=0; i<wordLength; i++) {
    underscores = underscores + "_ "
  }

  //write the underscores variable to the page
  document.getElementById("wordHolder").innerHTML = underscores;

  //function that executes when a key is pressed
  document.onkeyup = function(event) {
    //get the key that the user pressed and store it to a variable
    var userGuess = event.key; 
    console.log(userGuess);
    guessArray.push(userGuess);
    guesses.innerHTML = guessArray;
    console.log(guessArray);
  
    //loop through the length of the word
    for (i = 0; i < chosenWord.length; i++){

      var characterCounter = chosenWord.length;

      for (c = 0; c < characterCounter; c++){
        var index = chosenWord.indexOf(userGuess);
        console.log(index);
        // if (chosenWord.charAt(c) === userGuess{

        // }
      }
    }

  }
  // resetButton.onclick = function() reset {
  //   guessArray = [ ];
  //   livesRemaining = 10;
  // }

}





//there is an array that houses the possible words to guess 
//a word is presented to the user when the page loads, and a new one is given when the user wins or loses 
//the word is represented by _ _ _ _ , etc. based on length 

// when a user selects a key, that letter is guessed
// --> when the letter guessed is a letter that has been guessed before, nothing happens
// --> when the letter guessed is new