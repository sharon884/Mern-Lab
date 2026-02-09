let arr = [1, 2, 3, 4, 5, 6];

let obj = {
    even : [],
    odd : [],
};

for ( num of arr ) {
    if ( num % 2 == 0 ) {
        obj.even.push(num);
    }else {
        obj.odd.push(num);
    }
};

console.log(obj)