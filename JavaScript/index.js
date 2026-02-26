let a =  "AEIOUxyz";
let arr = [ "a","e","i","o","u"];
let ar = [];
function check (  a ) {
   for ( let i = 0 ; i < a.length; i++ ) {
    let b = a[i].toLowerCase();
     if ( arr.includes(b)) {
         ar.push(arr[i])
     }
   };

  return  console.log(ar);
}

check ( a)

console.log("e".toUpperCase())