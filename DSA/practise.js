let arr = [2, 4, 6, 8, 10]
let  target = 5



function binarySearch ( arr, target ) {
    let left = 0 ; 
    let right = arr.length -1;

    while ( left <= right ) {
        let mid = Math.floor((left + right ) /2);

        if ( arr[ mid] == target ) return mid;

        if ( arr[mid] > target ) {
            right = mid -1;

        } else {
            left = mid + 1;
        }
    };

    return -1;
};


console.log(binarySearch(arr,target));