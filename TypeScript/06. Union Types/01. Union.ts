// Union Types in TypeScript:

// - Union types allow a value to be one of several types.
// - Defined using the '|' (pipe) symbol, read as "or".
// - Example: string | number means the value can be either a string or a number.
// - Very useful when a variable can accept multiple kinds of values.
// - TypeScript forces you to handle all possible cases when using unions.
// - Can be combined with literal types for stricter value control.
// - Often used with type narrowing (e.g., using typeof or in checks).


// Example 1: Simple Union Type
let password : string | number = '1234';    // password can be a string or a number


// Example 2: Union Type with Multiple Types
type UserInfo = {
    name : string;
    age : number;
}
type AccountDetails = {
    email : string;
    accountNo : number;
}

// type User = UserInfo | AccountDetails;    // User can be either UserInfo or AccountDetails
let user: UserInfo | AccountDetails = {      // User can be either UserInfo or AccountDetails
    name : "John",
    age : 30,
}   
console.log(user);


// Example 3: Union Type with Function Types
type MathOp = (a: number, b: number) => number;
type StringOp = (a: string, b: string) => string;
type Operation = MathOp | StringOp;               // Operation can be either MathOp or StringOp
let op: Operation = (a: number, b: number) => a + b;
console.log(op(10, 20));


// Example 4: Union Type with Array Types
const items: (string | number)[] = ['apple', 2, 'banana', 3];
console.log(items);