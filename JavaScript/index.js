let arr2 =  [1, 2, 3];
let arr1 =  [2, 3, 4];

let arr = [...arr2];

for ( let i = 0 ; i < arr1.length; i++ ) {
     let flag = true;
     for ( let j = 0 ; j < arr.length; j++ ) {
          if ( arr1[i] == arr[j] ) {
              flag = false;
          };
     };

     if ( flag ) {
        arr.push(arr1[i]);
     };
};


console.log(arr)