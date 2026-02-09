let employees = [
  { name: "A", dept: "IT", salary: 3000 },
  { name: "B", dept: "HR", salary: 2000 },
  { name: "C", dept: "IT", salary: 4000 },
  { name: "D", dept: "HR", salary: 2500 },
  { name: "E", dept: "Sales", salary: 3500 }
];


let obj = {};

for ( let num of employees ) {
    if ( !obj[num.dept] ) {
        obj[num.dept] = 0;
    }
   obj[num.dept] = obj[num.dept] + num.salary;
};

console.log(obj);