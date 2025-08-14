// Type Inference in typescript :

// 1. Type Inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its value. In other words, if you declare a variable without explicity specifying its type, typescript will try to infer the type based on the value you assign to it.
// 2. TypeScript can also infer the type of a variable, function, class based on its usage in the code.


// Here we're inferring the types!
let username = 'John Doe';       // inferred type is string
let age = 30;                    // inferred type is number
let isAdmin = true;              // inferred type is boolean

console.log(username, age, isAdmin);
console.log(typeof username, typeof age, typeof isAdmin);


// Error
// username = false
// age = "abc"