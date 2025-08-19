// Literal Types in TypeScript:

// - Literal types let you define a type that is exactly a specific value.
// - They can be string, number, or boolean values.
// - Useful when you want to restrict a variable to a fixed set of values.
// - Often combined with union types (e.g., "red" | "blue" | "green").
// - The `as const` assertion can be used to infer literal types from values automatically.

//  - Literal types allows you to specify a value that can only be 'one specific literal value'. This means that a variable with a literal type can only have one specific value and no other value.


// Example 1. String Literal Type
let color : "red" | "blue" | "green";
color = "red";                     // This is allowed
// color = "yellow";               // This will cause an error


// Example 2. Boolean Literal Type
let isAdmin : true | false;
isAdmin = true;                    // This is allowed
// isAdmin = 1;                    // This will cause an error


// Example 3. Number Literal Type
let age : 18 | 21 | 30;
age = 18;                          // This is allowed
// age = 25;                       // This will cause an error


// Example 1. Literal Type with a Specific value
let theme: 'red' = 'red';         // This is a literal type with a specific value 'red'
// theme = 'yellow';              // This will cause an error
console.log(theme)