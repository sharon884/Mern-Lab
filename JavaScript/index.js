let arr = [1, 2, 2, 3, 4, 4, 5];

let arr1 = [];
// let c = new Set(arr);
// console.log(c)

for ( num of arr ) {
    if ( !arr1.includes(num) ) {
        arr1.push(num);
    }
};


console.log(arr1);