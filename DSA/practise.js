let arr = [ 3,5,2,7,1];

let swapped = true;

function bubble ( arr ) {
    for ( let i = 0 ; i < arr.length -1 ; i++ ) {
         swapped = false;
         for ( let j = 0 ;  j < arr.length-1; j++ ) {
              if ( arr[j] > arr[j+1] ) {
                 let temp = arr[j];
                 arr[j] = arr[j+1];
                 arr[j+1] = temp;
                 swapped = true;
                };
            }
            console.log(arr)

         if ( !swapped ) {
            break;
         };
    };

    return arr;
};


bubble(arr);