let arr = [10, 20, 30, 40, 50];

let mid = Math.floor(arr.length / 2);


for (let i = 0; i < mid; i++) {
    console.log();
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;

};

console.log(arr)