//creating gamewords array - list of 5 countries around the world

var gamewords = ["colombia", "india", "netherlands", "germany", "hungaray"];

//create a randomWord function - It should take a single argument, an array of words, and should return a random word from that array

function randomWord() {
    
$("gamewords")[Math.floor(Math.random() * gamewords.length)];
}

    


