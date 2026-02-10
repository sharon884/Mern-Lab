let arr =  [ 2,2,2,4,5,22,44,22,44,6,7,8];

let freq = {};
let uniq = [];


for ( num of arr ) {
    freq[ num ] = ( freq[num] | 0 ) +1;

};



for ( key in freq ) {
    console.log(freq[key]);

    if ( freq[key] == 1 ) {
        uniq.push(key);
    };
};


console.log(uniq);