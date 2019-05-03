//creating gamewords array - list of 5 countries around the world

var gameWords = ["colombia", "india", "netherlands", "germany", "hungary"];

console.log(gamewords.length);
console.log(gamewords[2]);

// 1.1 - randomWord function
// Create a function named randomWord. It should take a single argument, an array of words, and should return a random word from that array.


function randomWord(words) {
      var random =  Math.floor(Math.random() * words.length);
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

function isCorrectGuess(word, letter ) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      return true;
    }
  }
  return false;
}

