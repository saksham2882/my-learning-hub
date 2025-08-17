// Union Types in TypeScript:

//   - Union types are used to represent a value that can be one of several types.
//   - They are defined using the '|' symbol, which is read as "or" or "union".
//   - For example, the type "string | number" represents a value that can be either a string or a number.


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