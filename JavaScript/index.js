// // // // let numbers = [3, 7, 2, 9, 4, 7, 2];


// // // // function doSome ( numbers )  {


// // // // for ( let i = 0 ; i < numbers.length ; i++ ) {
// // // //         for ( let j = i+1; j < numbers.length ; j++ ) {
// // // //                if ( numbers[i] == numbers[j] ) {
// // // //                       numbers.splice(j,1);
// // // //                }
// // // //         }
// // // // };


// // // // numbers.sort((a,b) => a -b );
// // // // return numbers;

// // // // }



// // // // console.log(doSome(numbers));
// // // let nums = [10, 5, 8, 20, 15];

// // // function find ( nums ) {
// // //          let first = -Infinity;
// // //          let second = -Infinity;

// // //        for ( let i = 0 ;  i < nums.length; i++ ) {
          
// // //               if ( nums[i] >  first  ){ 
// // //                      first = nums[i];
                   
// // //               } else if ( nums[i] < first && nums[i] > second ) {
// // //                       second = nums[i];
// // //               };

// // //        };

// // //        return second;
// // // };

// // // console.log(find( nums ));



// // // class Stack {
// // //        constructor () {
// // //                this.items = [];
               
// // //        };


// // //        push ( value ) {
            
// // //               this.items.push(value);
// // //        };


// // //        pop ( value ) {
// // //                this.items.pop();
// // //        };


// // //        isEmpty () {
// // //                return this.items.length === 0;
// // //        };

// // //        size () {
// // //                return this.items.length;
// // //        };

// // //        peek () {
// // //               return this.items[this.items.length-1];
// // //        };

// // //        print() {
// // //                return this.items;
// // //        }
// // // }


// // class Node {
// //        constructor (data) {
// //               this.data = data,
// //               this.next = null ;
// //        };
// // };


// // class List {
// //        constructor () {
// //               this.head = null;
// //        };

// //        append ( value ) {
// //               const newNode = new Node(value);

// //               if ( !this.head ) {
// //                      this.head = newNode;
// //                      return;
// //               };


// //               let current = this.head;
// //               while ( !current.next ) {
// //                       current = current.next;
// //               };

// //               current.next = newNode;
// //        };


// //        printList () {
// //               let current = this.head;
// //               let result = "";
// //               while ( current ) {
                     
// //                      result = result + current.data+ "->";
// //                      current = current.next;

// //               };

// //               result = result + null;
// //               console.log( result);
// //               return;
// //        };



// // // }
// // class StackNode {
// //        constructor ( data) {
// //               this.data = data;
// //               this.next = null;
// //        }
// // };

// // class StackList {
// //        constructor () {
// //               this.head = null;
// //        };


// //        push ( element ) {


// //               const newNode = new StackNode(element);


// //               if ( this.head == null ) {
// //                      this.head = newNode;
// //               };

// //                newNode.next = this.head;
// //                this.head = newNode;
// //        };

// //        pop ( ) {
// //               if  ( !this.head ) return null;

// //               let temp = this.head.data;
// //               this.head = this.head.next;
// //               return temp;
// //        };


// //       peek () {
// //           return console.log(this.head.data);
// //       };

      


// // }


//  let num = 38;

// if ( nums)


const users = [
  { id: 1, name: "A", department: "IT", salary: 60000, projects: ["A1", "A2"] },
  { id: 2, name: "B", department: "HR", salary: 40000, projects: ["H1"] },
  { id: 3, name: "C", department: "IT", salary: 75000, projects: ["A1"] },
  { id: 4, name: "D", department: "Sales", salary: 50000, projects: [] },
  { id: 5, name: "E", department: "HR", salary: 45000, projects: ["H1", "H2"] }
];

let it = [];
let hr = [];
let sales = [];
let obj = {
    
}

for ( let key in users  ) {
 
   if ( users[key].department == "IT" )  {
     it.push(users[key]);
   }

    if ( users[key].department == "HR" )  {
     hr.push(users[key]);
   }

    if ( users[key].department == "Sales" )  {
     sales.push(users[key]);
   }
}
 

function  find ( dept  ) {
    let totalSalary = null;
    let avgSalary = null;
    let totalProjects = null;
     for ( let key in dept ) {
       

        totalSalary = totalSalary + dept[key].salary;
        totalProjects = totalProjects + dept[key].projects.length;

     }

     avgSalary = totalSalary  % dept.length;

    

}


find( it )