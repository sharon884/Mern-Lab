let arr = [10, 5, 20, 8, 15];

let first = -Infinity;
let second = -Infinity;
for ( let num of arr ) {

     if ( num > first ) {
        first = num;
     }else if ( num > second && num < first ) {
        second = num;
     };
};


console.log(second);