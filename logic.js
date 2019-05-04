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

// 1.3 - getBlanks function
// You're going to need some code to generate "blanks" ("_" characters) based on the length of the word.
// To do this, create a function named getBlanks that takes one parameter: the word. It should return an array of "_" (underscore) characters with length equal to the length of the word.
// For example:
// // returns ["_", "_", "_", "_", "_"]
// getBlanks("hello");


// function getBlanks (word) {
//    //computer generates random word from words array
//    var lettersInWord = randomIndex.split("");
//    var blanksArr = [];
//    //store length of word in blanks, for later use
//    var getBlanks = lettersInWord.length;

//    //creating a loop to generate "_" for each letter in array stored in blanks
//    for (var i = 0; i < getBlanks; i++) {
//        blanksArr.push("_");
//    }
//    return blanksArr[getBlanks];
// }


  function getBlanks(word) {
    var blanksArr = [];
    var lettersInWord = randomIndex.split("");
    for (var i = 0; i < getBlanks.length; i++) {
      blanksArr.push("_");
  }
    return blanksArr[word];
}


// function getBlanks(word ) {
//   expect(getBlanks(word)).to.deep.equal(blanksUtil(word));
//   return word["_", "_", "_", "_", "_", "_"]; 

// }
// function randomWord(words) {
//       var random =  Math.floor(Math.random() * words.length);
//       return words[random];

// 1.4 - fillBlanks function
// The final "utility" you'll need is one which will fill a blanks array in the correct locations given a letter and the word that array was built from. 
// For example:
// // returns ["h", "_", "_", "_", "_"]
// fillBlanks("hello", ["_", "_", "_", "_", "_"], "h");

// // returns ["_", "e", "l", "l", "_"]
// fillBlanks("hello", ["_", "e", "_", "_", "_"], "l");
// Name your function fillBlanks, and have it take three arguments: the word string, the array of the current puzzle state, and the letter that is going to be filled in (arguments in that order).

// function fillBlanks (wordString, [], letter)