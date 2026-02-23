// // let numbers = [3, 7, 2, 9, 4, 7, 2];


// // function doSome ( numbers )  {


// // for ( let i = 0 ; i < numbers.length ; i++ ) {
// //         for ( let j = i+1; j < numbers.length ; j++ ) {
// //                if ( numbers[i] == numbers[j] ) {
// //                       numbers.splice(j,1);
// //                }
// //         }
// // };


// // numbers.sort((a,b) => a -b );
// // return numbers;

// // }



// // console.log(doSome(numbers));
// let nums = [10, 5, 8, 20, 15];

// function find ( nums ) {
//          let first = -Infinity;
//          let second = -Infinity;

//        for ( let i = 0 ;  i < nums.length; i++ ) {
          
//               if ( nums[i] >  first  ){ 
//                      first = nums[i];
                   
//               } else if ( nums[i] < first && nums[i] > second ) {
//                       second = nums[i];
//               };

//        };

//        return second;
// };

// console.log(find( nums ));



// class Stack {
//        constructor () {
//                this.items = [];
               
//        };


//        push ( value ) {
            
//               this.items.push(value);
//        };


//        pop ( value ) {
//                this.items.pop();
//        };


//        isEmpty () {
//                return this.items.length === 0;
//        };

//        size () {
//                return this.items.length;
//        };

//        peek () {
//               return this.items[this.items.length-1];
//        };

//        print() {
//                return this.items;
//        }
// }


class Node {
       constructor (data) {
              this.data = data,
              this.next = null ;
       };
};


class List {
       constructor () {
              this.head = null;
       };

       append ( value ) {
              const newNode = new Node(value);

              if ( !this.head ) {
                     this.head = newNode;
                     return;
              };


              let current = this.head;
              while ( !current.next ) {
                      current = current.next;
              };

              current.next = newNode;
       };


       printList () {
              let current = this.head;
              let result = "";
              while ( current ) {
                     
                     result = result + current.data+ "->";
                     current = current.next;

              };

              result = result + null;
              console.log( result);
              return;
       };



}