let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

let freq = {};

for ( num of arr ) {
    freq[num] = (freq[num] || 0 ) +1;
};

console.log(freq);




let f = {};
for ( let i = 0 ;i < arr.length; i++ ) {
    let count = 1;

    if ( !f[arr[i]] ) {
       
          for ( let j = i+1; j < arr.length; j++ ) {
        if ( arr[i] === arr[j] ) {
             count++;
        };


        f[arr[i]] = count;
    };

    }
  
   
};

console.log(f);