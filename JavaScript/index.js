let users = [
  { name: "A", age: 20 },
  { name: "B", age: 30 },
  { name: "C", age: 25 },
  { name: "D", age: 40 }
];

let arr = [];

for ( num of users ) {
    console.log(num.age);
    if ( num.age > 25 )  arr.push(num.name);
};

console.log(arr)