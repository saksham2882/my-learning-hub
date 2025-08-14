# Type Annotations in TypeScript

Type annotations are like labels you add to your code to tell TypeScript what kind of data a variable, function input (parameter), or function output (return value) is supposed to hold. This helps TypeScript understand your code better and catch mistakes early.

## Why use Type Annotations?
*   **Catch Errors Early:** TypeScript can spot type-related mistakes *before* you even run your code.
*   **Clearer Code:** It makes your code easier to read and understand because you clearly state what kind of data is expected.
*   **Better Tools:** Your code editor (like VS Code) can give you smarter suggestions, auto-complete code, and help you fix errors more easily.

## How to use Type Annotations (Syntax)

You add a colon (`:`) after the name of what you're annotating, followed by the type name.

### 1. Variable Type Annotations

This is how you tell TypeScript what kind of data a variable will store.

```typescript
let variableName: Type = value;
```

**Common Variable Types and Their Use:**

*   **`number`**: 
    *   **What it is:** For any kind of number (whole numbers, decimals).
    *   **Use:** When your variable will store numerical values like age, price, count, etc.
    ```typescript
    let age: number = 30;
    let price: number = 19.99;
    ```

*   **`string`**: 
    *   **What it is:** For text.
    *   **Use:** When your variable will store words, sentences, names, etc.
    ```typescript
    let userName: string = "Alice";
    let message: string = `Hello, ${userName}!`;
    ```

*   **`boolean`**: 
    *   **What it is:** For true/false values.
    *   **Use:** When your variable needs to represent a yes/no, on/off, or true/false state.
    ```typescript
    let isActive: boolean = true;
    let hasPermission: boolean = false;
    ```

*   **`array` (e.g., `number[]` or `Array<string>`)**: 
    *   **What it is:** For a list of items, where all items in the list are of the same type.
    *   **Use:** When you need to store a collection of similar items, like a list of numbers, names, or objects.
    ```typescript
    let numbers: number[] = [1, 2, 3]; // A list of numbers
    let names: Array<string> = ["Alice", "Bob"]; // A list of names (strings)
    ```

*   **`any`**: 
    *   **What it is:** A special type that can be *any* kind of data.
    *   **Use:** Use this *very carefully*! It tells TypeScript to skip type checking for that variable. It's sometimes used when you don't know the type (e.g., data from an external source) or when you're slowly converting JavaScript code to TypeScript.
    *   **Warning:** Using `any` too much defeats the purpose of TypeScript's type safety.
    ```typescript
    let data: any = "some value"; // Can be a string
    data = 123; // Can be a number
    data = { key: "value" }; // Can be an object
    ```

*   **`void`**: 
    *   **What it is:** Used for functions that do not return any value.
    *   **Use:** When a function performs an action but doesn't give back a result.
    ```typescript
    function logMessage(message: string): void {
        console.log(message);
    }
    // This function just prints a message, it doesn't return anything.
    ```

### 2. Function Parameter Type Annotations

This is how you tell TypeScript what kind of data a function expects as its inputs.

```typescript
function functionName(parameter1: Type1, parameter2: Type2): ReturnType {
    // function body
}
```

**Use:**
*   Ensures that when you use the function, you provide the correct type of data for each input.
*   Helps prevent errors by catching wrong input types early.
```typescript
function add(a: number, b: number): number { // 'a' and 'b' must be numbers
    return a + b;
}
let sum: number = add(5, 10); // Correct: 5 and 10 are numbers
// add("hello", 5); // Error: "hello" is not a number
```

### 3. Function Return Type Annotations

This is how you tell TypeScript what kind of data a function will give back as its result.

```typescript
function calculateArea(length: number, width: number): number {
    return length * width;
}
```

**Use:**
*   Makes it clear what type of value you can expect from a function.
*   Helps TypeScript check if the function actually returns the promised type.
```typescript
function getGreeting(name: string): string { // This function will return a string
    return `Hello, ${name}!`;
}
let greetingText: string = getGreeting("World"); // greetingText will be a string
```

### 4. Object Type Annotations

This is how you describe the structure of an object, specifying the type for each of its properties.

```typescript
let person: { name: string, age: number, isStudent: boolean } = {
    name: "Charlie",
    age: 25,
    isStudent: false
};
```

**Use:**
*   Ensures that an object has specific properties with specific types.
*   Helps maintain consistency in your data structures.
*   For more complex objects, you'll often use `interfaces` or `type aliases` (which you'll learn about later) for better organization.

### Conclusion

Type annotations are a core part of writing good TypeScript code. They make your code safer, easier to understand, and help you use your code editor's smart features to their fullest. While TypeScript can often guess types (called "type inference"), explicitly adding annotations is important for clarity and strictness when needed.

---

## Type Inference

Type inference is TypeScript's ability to automatically figure out the type of a variable, function return value, or other constructs without you explicitly telling it. This means you don't always need to use type annotations (`: type`) everywhere. TypeScript is smart enough to "infer" the type based on the value you assign.

### How Type Inference Works:

*   **Variable Initialization:** When you declare a variable and immediately assign it a value, TypeScript infers its type from that value.
    ```typescript
    let greeting = "Hello, TypeScript!"; // TypeScript infers 'greeting' as type 'string'
    let count = 10;                     // TypeScript infers 'count' as type 'number'
    let isActive = true;                // TypeScript infers 'isActive' as type 'boolean'
    ```
    In these cases, `greeting: string`, `count: number`, and `isActive: boolean` are automatically understood by TypeScript.

*   **Function Return Values:** TypeScript can often infer the return type of a function based on what the function returns.
    ```typescript
    function add(a: number, b: number) {
        return a + b; // TypeScript infers the return type as 'number'
    }
    let result = add(5, 3); // 'result' is inferred as 'number'
    ```

*   **Array Initialization:** When you initialize an array, TypeScript infers the type of elements it can contain.
    ```typescript
    let numbers = [1, 2, 3]; // TypeScript infers 'numbers' as type 'number[]'
    let names = ["Alice", "Bob"]; // TypeScript infers 'names' as type 'string[]'
    ```

### When to Rely on Type Inference:

*   **Simple Assignments:** For straightforward variable declarations where the type is obvious from the assigned value.
*   **Local Variables:** Often, for variables used within a small scope, inference is sufficient and keeps the code concise.

### When to Use Explicit Type Annotations (Even with Inference):

*   **Clarity:** When the inferred type might not be immediately obvious to someone reading the code, or if you want to be extra clear.
*   **Function Parameters:** TypeScript *cannot* infer the types of function parameters. You *must* annotate them.
    ```typescript
    // function greet(name) { ... } // Error: Parameter 'name' implicitly has an 'any' type.
    function greet(name: string) { // Annotation is required here
        return `Hello, ${name}!`;
    }
    ```
*   **Empty Array/Variable Declaration:** When you declare a variable or an empty array without an initial value, TypeScript might infer `any` or a less specific type. Annotating helps here.
    ```typescript
    let items: string[] = []; // Explicitly tells TypeScript this array will hold strings
    let value: number;       // Explicitly tells TypeScript 'value' will be a number
    ```
*   **Complex Types:** For objects with specific structures, or when dealing with union types, interfaces, or custom types, explicit annotations improve readability and ensure correctness.
*   **Preventing Errors:** If you intend a variable to be of a specific type, but an initial assignment might lead to a broader inference (e.g., `any`), an annotation can prevent accidental type changes later.

### Conclusion on Type Inference:

Type inference is a powerful feature that makes TypeScript less verbose and more enjoyable to write. It allows you to get the benefits of type safety without always having to write out explicit types. However, understanding when to let TypeScript infer and when to provide explicit annotations is key to writing effective and maintainable TypeScript code.