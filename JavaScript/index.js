let Str = "Hello world" ;
let vowels = ["a","e","i","o","u"];
let result = "";

for ( let char of Str ) {
      if ( !vowels.includes(char) ) {
         result = result + char;
      };
};


console.log(result);