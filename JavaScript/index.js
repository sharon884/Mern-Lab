let word = "malayaladadfam";

let word2 = "";

let reversed = word.split("").reverse().join("");


for ( let i = word.length -1 ; i >= 0; i-- ) {
       word2 = word2 + word[i];
};

console.log(word2); 


console.log(word == word2);