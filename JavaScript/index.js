let num1 = 9;
let num2 = 19;
let nums = [ 3,4,1,3,1];

const arrow = ( ...nums)=> {

    let sum = 0;

    nums.reduce((a,b) => {
        
        sum =  sum + b;
    },0)


     return sum;

};


console.log(arrow(num1,num2,2,4,2,3,2,1,34));
