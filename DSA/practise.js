let arr = [ 2,3,4,5,6,7,8];

function binarySerach ( arr, target ) {

     let left = 0; 
     let right = arr.length-1;
      
     while ( left <= right ) {
          
        let mid = Math.floor(left+right/2);
   
           
             if ( arr[mid] == target  ) return true;

             if ( arr[ mid] >  target ) {
                   right = mid - 1;


             }else if ( arr[mid] < target ) {
                 left = mid + 1;
             };

     };

      return false;
};


console.log(binarySerach(arr,2));