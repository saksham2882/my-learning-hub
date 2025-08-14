// Functions Parameter annotations in typescript are used to specify the expected types of the parameters that a function takes.


// 1. Regular Functions:
function addOne(num : number){
    return num + 1;
}

// const res = addOne("Hello");      // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
const res = addOne(7);
console.log(res);



// 2. Arrow Functions:
const multiply = (num1: number, num2: number) => {
    return num1 * num2;
}

const ans = multiply(5, 6);     
console.log(ans);                     // outputs: 30

// Errors and Warnings:
// 1. Type Error:
const ans1 = multiply("wwef", 6);     // Error: Argument of type 'string' is not assignable to parameter of type 'number'
console.log(ans1);                    // outputs: NaN 

// 2. More or Less Arguments:       
const ans2 = multiply(2, 5, 9);       // warning: Too many arguments provided for call to function multiply
console.log(ans2);                    // outputs: 10