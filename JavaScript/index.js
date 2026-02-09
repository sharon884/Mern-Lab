let arr = [1, 2, 3, 4, 5, 6];

let c = arr.filter((a ) => a % 2 == 0 );
console.log(c)
function findSum ( arr ) {
    let sum = 0;

    for ( num of arr ) {
        sum = sum + num;
    };

    return sum ;
};

console.log(findSum(c));