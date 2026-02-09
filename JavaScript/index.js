let employees = [
  { name: "A", salary: 2000 },
  { name: "B", salary: 3000 },
  { name: "C", salary: 4000 }
];


let a = employees.reduce((a,c) => {
    a = a + c.salary;

    return a ;
},0);

console.log(a)