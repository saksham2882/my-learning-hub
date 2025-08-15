// Arrays Types:

// Arrays are a type of object that can store multiple values of the same data type. 
// Arrays in Typescript are typed, which means you can specify the types of values that an array can hold.

// Basic Array Types in Typescript: 
// 1. Bracket notation [] : To indicate an array of a specific type.
// 2. Generic Array<type> notation : To indicate an array of a specific type.


// Types :
// 1. Basic Array Types
// 2. Mixed Type Array
// 3. Arrays of object
// 4. Readonly Arrays
// 5. Tuple Types
// 6. Union Types


// Example:
// 1. Basic Array Types
const arr : number[] = [1, 2, 3, 4, 5];
console.log(arr);                              // Output: [1, 2, 3, 4]


const items : string[] = [];
items.push("Apple");
// items.push(14);
// items.push(true);
console.log(items);


// Alternate - Syntax :
const arr1 : Array<number> = [1, 4, 8];
arr1.push(38);
// arr1.push("Hello");
console.log(arr1);