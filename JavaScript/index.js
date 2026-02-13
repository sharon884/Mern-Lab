const add = function tax ( tax ) {
      return function reapyable ( amount ) {
            return tax * amount;
      };
};


const indianTax = add(0.18);
const usa = add(0.15);
console.log(indianTax(5000));
// console.log(indianTax(6000));
console.log(usa(5000));
