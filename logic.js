//creating gamewords array - list of 5 countries around the world

var gameWords = ["colombia", "india", "netherlands", "germany", "hungary"];

console.log(gameWords.length);
console.log(gameWords[2]);

// 1.1 - randomWord function
// Create a function named randomWord. It should take a single argument, an array of words, and should return a random word from that array.


function randomWord(words) {
  var random = Math.floor(Math.random() * words.length);
  return words[random];
}
//  1.2 - isCorrectGuess function

// Next, you're going to need to have some way to check if a guessed letter is "correct". That is, if the guessed letter is in the current word.

// Write a function named isCorrectGuess that takes two arguments, a word and a letter (in that order). This function should return true if the letter is in the word, and false otherwise.
// For example:
// // returns true
// isCorrectGuess('farewell', 'e');

// // returns false
// isCorrectGuess('adios', 'e');

function isCorrectGuess(word, letter) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      return true;
    }
  }
  return false;
}

// 1.3 - getBlanks function
// You're going to need some code to generate "blanks" ("_" characters) based on the length of the word.
// To do this, create a function named getBlanks that takes one parameter: the word. It should return an array of "_" (underscore) characters with length equal to the length of the word.
// For example:
// // returns ["_", "_", "_", "_", "_"]
// getBlanks("hello");

//Creating getBlanks function
function getBlanks(word) {

  //Declaring blanksArr, assigning value []

  var blanksArr = [];
  //For loop to determine no. of blanks

  for (var i = 0; i < word.length; i++) {
    blanksArr.push("_");
  }
  return blanksArr;
}

// 1.4 - fillBlanks function
// The final "utility" you'll need is one which will fill a blanks array in the correct locations given a letter and the word that array was built from.
// For example:
// // returns ["h", "_", "_", "_", "_"]
// fillBlanks("hello", ["_", "_", "_", "_", "_"], "h");

// // returns ["_", "e", "l", "l", "_"]
// fillBlanks("hello", ["_", "e", "_", "_", "_"], "l");
// Name your function fillBlanks, and have it take three arguments: the word string, the array of the current puzzle state, and the letter that is going to be filled in (arguments in that order).

//Create fillBlanks function with 3 arguments
function fillBlanks(word, puzzleArray, guess) {
  //Create for loop 
  for (var i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === guess.toLowerCase()) {
      puzzleArray[i] = guess;
    } 
  }
  return puzzleArray;
}

// 1.5 - setupRound function
// To start the game logic, you're going to need a way to track all of the information associated with an individual "round" of the game.
// Create function named setupRound which will be used to create the "round" object. It should take a single argument: the word.
// The function should return an object with the following properties and values:


// word - set to the word passed in as an argument

// guessesLeft - set to 9 to start

// wrongGuesses - an empty array to start (since there haven't been any guesses yet)

// puzzleState - array of blanks representation of word to start. You can update this later when someone makes a correct guess.

// For this and the following functions, think about how you can use functions we've already created!

function setupRound(word){
  var wordObj = {
    word: word,
    guessesLeft: 9,
    wrongGuesses: [],
    puzzleState: getBlanks(word)
  }
  return wordObj;
}

// 1.6 - updateRound function
// Now that you can create rounds, you want to be able to update that round every time the user guesses a letter.
// Write a function named updateRound that takes two arguments: the round object and the string letter guessed.
// This function should, based on the letter guessed, update all relevant aspects of the round object passed as an argument.

function updateRound(roundObject, stringLetter){
  if(roundObject.word.indexOf(stringLetter) != -1){
    roundObject.puzzleState = fillBlanks(roundObject.word, roundObject.puzzleState, stringLetter)
  } else {
    roundObject.guessesLeft--;
    roundObject.wrongGuesses.push(stringLetter)
  }
}

//   1.7 - hasWon function
// To know when you need to start a new round, you're going to need to check if the game has been won or lost. Let's start with checking if the round has been won.
// For this, use a function named hasWon, that takes the array puzzleState as the only argument.
// How can you tell if the round has been won with this information?
// The function should return true if the round is won, false otherwise.

function hasWon(puzzleState) {
  if (puzzleState.indexOf("_") !== -1){
  return false;
  } return true; 
}


// 1.8 - hasLost function
// Next, use a function named hasLost to check if the round is lost. This function should take as the only argument the number guessesLeft.
// How can you tell if the round has been lost with this information?
// This function should return true if the round is lost, false otherwise.

function hasLost(guessesLeft) {
  if (guessesLeft === 0) {
    return true;
  } return false;
}

// 1.9 - isEndOfRound function
// Finally, to allow us to know if you need to start a new round, create a function to check if the round is over. Name it isEndOfRound. It should take the round object as an argument, and return true if the round is over, and false otherwise.
// You'll want to use this function later to trigger starting a new round.

 function isEndOfRound(roundObject) {
  if (roundObject.puzzleState.indexOf("_") !== -1){
    return true;
    } return false; 
  }
 

  // var doesExist = false;

  // for(var i = 0; i < roundObject.word.length; i++){
  //   if(roundObject.word[i] === stringLetter){
  //     doesExist = true;
  //   }
  // }

  // if(doesExist === true){
  //   roundObject.puzzleState = fillBlanks(roundObject.word, roundObject.puzzleState, stringLetter)
  // } else {
  //   roundObject.guessesLeft--;
  //   roundObject.wrongGuesses.push(stringLetter)
  // }

