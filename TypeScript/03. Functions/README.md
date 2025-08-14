# Function Annotations

Function annotations in TypeScript allow you to specify the types of a function's parameters (inputs) and its return value (output). This is crucial for ensuring type safety and clarity in your functions.

## 1. Parameter Type Annotations

*   **What it is:** You tell TypeScript what type of data each argument (parameter) a function expects.
*   **Use:** Ensures that when you call the function, you pass arguments of the correct type. This helps catch errors early and makes your function's expected inputs clear.
*   **Syntax:** Add a colon (`:`) followed by the type after each parameter name.

```typescript
function functionName(parameter1: Type1, parameter2: Type2): ReturnType {  // function body
}

// Example:
function add(a: number, b: number) { // 'a' must be a number, 'b' must be a number
    return a + b;
}

add(5, 10); // Valid: Both arguments are numbers
// add("hello", 10); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

## 2. Return Type Annotations

*   **What it is:** You tell TypeScript what type of data the function is expected to return.
*   **Use:** Makes it clear what kind of value you can expect from the function. TypeScript will check if the function's actual return value matches this declared type.
*   **Syntax:** Add a colon (`:`) followed by the return type after the function's parameter list (and before the opening curly brace `{`).

```typescript
function functionName(parameter1: Type1, parameter2: Type2): ReturnType {  // function body
}

// Example:
function multiply(x: number, y: number): number { // This function must return a number
    return x * y;
}

let product: number = multiply(4, 5); // 'product' will be 20 (a number)

function greet(name: string): string { // This function must return a string
    return `Hello, ${name}!`;
}

function logMessage(message: string): void { // This function returns nothing (void)
    console.log(message);
}
```

## 3. Optional Parameters

*   **What it is:** Parameters that don't have to be provided when the function is called.
*   **Use:** Useful when a function has arguments that are not always necessary.
*   **Syntax:** Add a question mark (`?`) after the parameter name. Optional parameters must come after all required parameters.

```typescript
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
}

console.log(buildName("John"));         // Output: "John"
console.log(buildName("John", "Doe"));  // Output: "John Doe"
```

## 4. Default Parameters

*   **What it is:** Parameters that have a default value if no argument is provided for them.
*   **Use:** Provides a fallback value for parameters, making function calls more flexible.
*   **Syntax:** Assign a default value using the equals sign (`=`) after the parameter type.

```typescript
function greetWithDefault(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}

console.log(greetWithDefault());        // Output: "Hello, Guest!"
console.log(greetWithDefault("Alice")); // Output: "Hello, Alice!"
```

## 5. Rest Parameters

*   **What it is:** Allows a function to accept an indefinite number of arguments as an array.
*   **Use:** When you don't know how many arguments of a certain type will be passed to a function.
*   **Syntax:** Use the spread operator (`...`) before the parameter name, which must be an array type.

```typescript
function sumAll(first: number, ...restOfNumbers: number[]): number {
    let total = first;
    for (let num of restOfNumbers) {
        total += num;
    }
    return total;
}

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15 (1 + 2 + 3 + 4 + 5)
```

## 6. Void Type

*   **What it is:** The `void` type is used to indicate that a function does not return any value. It's commonly used for functions that perform side effects (e.g., logging to the console, modifying external state) but don't produce a meaningful return value.
*   **Use:** When a function's purpose is solely to execute some code without providing a result that needs to be captured or used.
*   **Syntax:** Annotate the function's return type with `: void`.

```typescript
function logMessage(message: string): void {
    console.log(`Log: ${message}`);
}

logMessage("This is a void function example."); // This function call returns nothing.

// Attempting to assign the result of a void function to a variable will result in an error.
// let result: string = logMessage("Hello"); // Error: Type 'void' is not assignable to type 'string'.
```

## 7. Never Type

*   **What it is:** The `never` type represents a value that will *never* occur. It's used for functions that never return (e.g., they throw an error, or they contain an infinite loop) or for variables that can never have a value.
*   **Use:**
    *   To indicate that a function will always throw an exception.
    *   To indicate that a function will never terminate (e.g., an infinite loop).
    *   For exhaustive checking in `switch` statements, ensuring all possible cases are handled.
*   **Syntax:** Annotate the function's return type with `: never`.

```typescript
// Function that always throws an error
function throwError(message: string): never {
    throw new Error(message);
}

// Example usage:
try {
    throwError("Something critical went wrong!");
} catch (e: any) {
    console.error(e.message); // Output: Something critical went wrong!
}

// Function with an infinite loop (never terminates)
function infiniteLoop(): never {
    while (true) {
        // This loop will run forever
    }
}

// The following line will never be reached if infiniteLoop() is called
// console.log("This will never be logged if infiniteLoop is called directly.");

// Example of exhaustive checking with 'never'
type Shape = "circle" | "square";

function getArea(shape: Shape): number | never {
    switch (shape) {
        case "circle":
            return Math.PI * 5 * 5; // Example area for a circle
        case "square":
            return 10 * 10; // Example area for a square
        default:
            // This line should ideally be unreachable if all cases are handled
            // The 'never' type here ensures that if a new 'Shape' is added
            // and not handled, TypeScript will flag an error.
            const exhaustiveCheck: never = shape;
            return exhaustiveCheck;
    }
}

console.log(getArea("circle")); // Output: 78.53981633974483
console.log(getArea("square")); // Output: 100
// getArea("triangle"); // This would cause a TypeScript error if 'triangle' was added to Shape
```