// 'never' type in TypeScript

// 1. The 'never' keyword is used to indicate that a function will 'not return anything', or that a variable can never have a value. The never type is useful for indicating that certain code paths should 'never be reached', or that certain values are impossible. It can help catch errors at compile-time instead of runtime.  
// 2. The 'never' type is a special type in TypeScript that represents a value that never occurs.

// When use never:
// 1. Error Handling: You can use the 'never' type to indicate that a function will always throw an error, or that a certain code path should never be reached. This can help catch errors at compile-time instead of runtime.
// 2. Type Guards: You can use the 'never' type to create a type guard that checks if a value is of a certain type, and if not, throws an error.
// 3. Function Return Types: You can use the 'never' type to indicate that a function will never return a value, or that a certain code path should never be reached.
// 4. Type Inference: You can use the 'never' type to help the TypeScript compiler infer the types of variables and function return values.


// Example: 

// 1. -> A function that always throws an error
function throwError(msg: string): never {
    throw new Error(msg);
}
console.log(` Error: ${throwError('Something went wrong')}`);   // Output: Error: Something went wrong...


// 2. -> A function that has an infinite loop
function infiniteLoop(): never {
    while (true) {}
}
console.log(` Infinite Loop: ${infiniteLoop()}`);               // Output: Infinite Loop: undefined (Note: This will not be reached because the function will never return)


// 3. -> A variable that can never have a value.
let x : never;

function neverReturns() : never{
    while (true) {}
}

x = neverReturns();   // this line will cause a compile-line error because the function never returns
console.log(x);       // this line will never be reached.