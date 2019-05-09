//creating gamewords array - list of 5 countries around the world

var gameWords = ["colombia", "india", "netherlands", "germany", "hungary"];


function randomWord(words) {
  var random = Math.floor(Math.random() * words.length);
  return words[random];
}

//  1.2 - isCorrectGuess function

function isCorrectGuess(word, letter) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      return true;
    }
  }
  return false;
}

// 1.3 - getBlanks function


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

function setupRound(word) {
  var wordObj = {
    word: word,
    guessesLeft: 9,
    wrongGuesses: [],
    puzzleState: getBlanks(word)
  }
  return wordObj;
}

// 1.6 - updateRound function

function updateRound(roundObject, stringLetter) {
  if (roundObject.word.indexOf(stringLetter) != -1) {
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
  if (puzzleState.indexOf("_") !== -1) {
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

function isEndOfRound(wordObj) {

  if (wordObj.guessesLeft === 0) {
    return true;
  } else if (hasWon(wordObj.puzzleState)) {
    return true;
  }
  return false;
}

// 1.10 - setupGame function

function setupGame(gameWords, numberWins, numberLosses) {
  var gameObj = {
    words: gameWords,
    wins: numberWins,
    losses: numberLosses,
    round: setupRound(randomWord(gameWords)),
  }
  return gameObj;
}

//  1.11 - startNewRound function


function startNewRound(gameObj) {
  if (hasWon(gameObj.round.puzzleState)) {
    gameObj.wins++;
    alert("You won " + gameObj.round.word + " !");

  } else {
  gameObj.losses++
    alert("You lost " + gameObj.round.word + " !");
  }
}


//  1.12 - myGame variable


var myGame = {
  words: gameWords,
  wins: 0,
  losses: 0,
  round: setupRound(randomWord(gameWords))
}

document.getElementById("puzzle-state").innerText = myGame.round.puzzleState.join(" ")

document.addEventListener("keypress", function(event){
  console.log(myGame.round.word)
  console.log(String.fromCharCode(event.keyCode))

})