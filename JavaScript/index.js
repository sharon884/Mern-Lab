// let numbers = [3, 7, 2, 9, 4, 7, 2];


// function doSome ( numbers )  {


// for ( let i = 0 ; i < numbers.length ; i++ ) {
//         for ( let j = i+1; j < numbers.length ; j++ ) {
//                if ( numbers[i] == numbers[j] ) {
//                       numbers.splice(j,1);
//                }
//         }
// };


// numbers.sort((a,b) => a -b );
// return numbers;

// }



// console.log(doSome(numbers));
let nums = [10, 5, 8, 20, 15];

function find ( nums ) {
         let first = -Infinity;
         let second = -Infinity;

       for ( let i = 0 ;  i < nums.length; i++ ) {
          
              if ( nums[i] >  first  ){ 
                     first = nums[i];
                   
              } else if ( nums[i] < first && nums[i] > second ) {
                      second = nums[i];
              };

       };

       return second;
};

console.log(find( nums ));