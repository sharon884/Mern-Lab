let numbers = [3, 7, 2, 9, 4, 7, 2];


function doSome ( numbers )  {


for ( let i = 0 ; i < numbers.length ; i++ ) {
        for ( let j = i+1; j < numbers.length ; j++ ) {
               if ( numbers[i] == numbers[j] ) {
                      numbers.splice(j,1);
               }
        }
};


numbers.sort((a,b) => a -b );
return numbers;

}



console.log(doSome(numbers));
