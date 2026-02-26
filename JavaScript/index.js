let arr = "malayalaam";


function check ( arr ) {
    for ( let i = 0 ; i < Math.floor(arr.length/2); i++ ) {
      if ( arr[i] != arr[arr.length-i-1]) {
        return false;
      }
    };

    return true;
}

console.log(check(arr));