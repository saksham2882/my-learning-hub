# Union Types in TypeScript

Union types are a powerful feature in TypeScript that allow you to declare a variable that can hold values of *more than one* type. This provides flexibility while still maintaining type safety.

## 1. What are Union Types?

A union type describes a value that can be one of several types. You define a union type using the `|` (pipe) symbol, which signifies "or".

For example, `string | number` means a variable can be either a `string` or a `number`.

## 2. Basic Syntax and Examples

### a. Simple Union Types

You can apply union types directly to variables, function parameters, or return types.

```typescript
// Example: A variable that can be a string or a number
let userId: string | number;

userId = "abc-123"; // Valid
userId = 12345;     // Valid
// userId = true;   // Error: Type 'boolean' is not assignable to type 'string | number'.
```

From `01. Union.ts`:

```typescript
// Example 1: Simple Union Type
let password : string | number = '1234';    // password can be a string or a number
```

### b. Union Types with Custom Types (Interfaces/Type Aliases)

You can combine custom types (like interfaces or type aliases) using union types. This is useful when an object can conform to different structures.

```typescript
type UserInfo = {
    name : string;
    age : number;
}

type AccountDetails = {
    email : string;
    accountNo : number;
}

// A variable that can be either UserInfo or AccountDetails
let user: UserInfo | AccountDetails = {
    name : "John",
    age : 30,
};

// You could also assign an AccountDetails object
let adminAccount: UserInfo | AccountDetails = {
    email: "admin@example.com",
    accountNo: 1001,
};
```

### c. Union Types with Function Signatures

Union types can also be used to define functions that accept different types of arguments or return different types of values.

```typescript
// Example: A function that can accept a string or a number
function printId(id: string | number) {
    console.log(`Your ID is: ${id}`);
}

printId("2024-A");
printId(500);
```

From `01. Union.ts`:

```typescript
type MathOp = (a: number, b: number) => number;
type StringOp = (a: string, b: string) => string;

// Operation can be either MathOp or StringOp
type Operation = MathOp | StringOp;

let op: Operation = (a: number, b: number) => a + b;
console.log(op(10, 20)); // Works as MathOp

// If you try to assign a string operation, it must match the signature
let concatOp: Operation = (s1: string, s2: string) => s1 + s2;
console.log(concatOp("Hello", "World")); // Works as StringOp
```

### d. Union Types in Arrays

An array can contain elements of multiple different types by using union types within the array type annotation.

```typescript
// Array that can contain numbers or strings
let mixedData: (number | string)[] = [1, "hello", 2, "world", "TypeScript"];

// Using generic syntax for union types in arrays
let anotherMixedArray: Array<number | boolean> = [1, true, 2, false];
```

From `01. Union.ts`:

```typescript
const items: (string | number)[] = ['apple', 2, 'banana', 3];
console.log(items);
```

## 3. Narrowing Union Types

When you have a union type, TypeScript needs to know which specific type a variable holds at a given point in your code to allow you to perform type-specific operations. This process is called "narrowing".

Common narrowing techniques include:

-   **Type Guards (e.g., `typeof`, `instanceof`):**
    ```typescript
    function printIdAndLength(id: string | number) {
        if (typeof id === "string") {
            // 'id' is now narrowed to 'string'
            console.log(id.length);
        } else {
            // 'id' is now narrowed to 'number'
            console.log(id);
        }
    }
    ```
-   **Truthiness Narrowing:**
    ```typescript
    function greet(name: string | null | undefined) {
        if (name) {
            // 'name' is narrowed to 'string' (not null or undefined)
            console.log(`Hello, ${name.toUpperCase()}`);
        } else {
            console.log("Hello, Guest!");
        }
    }
    ```
-   **Equality Narrowing:**
    ```typescript
    type SuccessResponse = { status: "success", data: any };
    type ErrorResponse = { status: "error", message: string };

    function handleResponse(response: SuccessResponse | ErrorResponse) {
        if (response.status === "success") {
            // 'response' is narrowed to 'SuccessResponse'
            console.log("Data:", response.data);
        } else {
            // 'response' is narrowed to 'ErrorResponse'
            console.log("Error:", response.message);
        }
    }
    ```

## 4. Literal Types (A Special Case of Union Types)

Literal types allow you to define a type that is a specific, exact value (e.g., the string `"red"`, the number `10`, or the boolean `true`). When combined with union types, they become very powerful for creating highly specific and constrained types.

From `02. Literal-Types.ts`:

```typescript
// Example 1. String Literal Type
let color : "red" | "blue" | "green";
color = "red";                     // This is allowed
// color = "yellow";               // This will cause an error

// Example 2. Boolean Literal Type
let isAdmin : true | false; // This is effectively the 'boolean' type, but explicitly shows literal usage
isAdmin = true;                    // This is allowed
// isAdmin = 1;                    // This will cause an error

// Example 3. Number Literal Type
let age : 18 | 21 | 30;
age = 18;                          // This is allowed
// age = 25;                       // This will cause an error

// Example: Literal Type with a Specific value
let theme: 'red' = 'red';         // This is a literal type with a specific value 'red'
// theme = 'yellow';              // This will cause an error
console.log(theme);
```

Literal types are often used in conjunction with union types to create enums-like behavior or to restrict function parameters to a predefined set of values.

---

Union types are a cornerstone of flexible and type-safe programming in TypeScript, allowing you to write code that can handle various data shapes gracefully. Mastering them, along with narrowing techniques, is essential for building robust applications.
