// Tuples in TypeScript:

// - A tuple is a special type of array with fixed number of elements.
// - Each element in a tuple can have a different data type.
// - Tuples are defined using square brackets `[]`, not parentheses.
// - Tuples are mostly used for small, fixed-size collections (like [name, age]).
// - Tuples are mutable (values can be changed, new elements can be pushed).
// - Tuples can include any data type, including other tuples.


// Example 1.
let myTuple : [number, string];
myTuple = [1, "Hello World"];           // valid
// myTuple = ["Hello World", 1];        // Not valid
console.log(myTuple);


// Example 2. 
let myTuple2 : [number, string, boolean] =  [1, "Hello World", true];
console.log(myTuple2);


// Example 3.
const products : (number | string)[] = ["Item 1", 30];
console.log(products);


// Example 4. 
const games : [string, string, string] = ["game1", "game2", "game3"];
console.log(games);


// Destructuring Individual Element of Tuple:
let person : [string, number] = ["Harry", 9876543210];
let [username, phone] = person;
console.log(username);                  // Harry
console.log(phone);                     // 9876543210