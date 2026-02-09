let arr = [1, 2, 2, 3, 4, 4, 5];

let arr1 = [];
// let c = new Set(arr);
// console.log(c)

// for ( num of arr ) {
//     if ( !arr1.includes(num) ) {
//         arr1.push(num);
//     }
// };


// console.log(arr1);

for ( let i = 0 ; i < arr.length-1; i++ ) {
     for ( let j = i+1 ; j < arr.length-1; j++ ) {
        if ( arr[i] === arr[j] ) {
            arr.splice(j,1);
        }
     }
};


console.log(arr);

