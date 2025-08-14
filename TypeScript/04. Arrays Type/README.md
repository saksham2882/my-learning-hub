# Array Type Annotations in TypeScript

Arrays are fundamental data structures in programming, and TypeScript provides powerful ways to define and enforce the types of elements within arrays. This ensures type safety and helps prevent common errors.

## 1. Basic Array Types

There are two primary ways to annotate basic array types in TypeScript:

### a. Element Type followed by `[]`

This is the most common and straightforward way to declare an array of a specific type. It indicates that the array can only contain elements of the specified type.

```typescript
// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Array of strings
let names: string[] = ["Alice", "Bob", "Charlie"];

// Array of booleans
let flags: boolean[] = [true, false, true];

// You can also declare an empty array and add elements later
let emptyNumbers: number[] = [];
emptyNumbers.push(10);
// emptyNumbers.push("hello"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### b. Generic Array Type (`Array<ElementType>`)

This uses the generic `Array` type, where `ElementType` is the type of elements the array will hold. It's functionally equivalent to the `ElementType[]` syntax but is often preferred in more complex scenarios or when working with generics.

```typescript
// Array of numbers using generic type
let scores: Array<number> = [90, 85, 92];

// Array of strings using generic type
let cities: Array<string> = ["New York", "London", "Paris"];
```

## 2. Union Types in Arrays

If an array can contain elements of multiple different types, you can use union types.

```typescript
// Array that can contain numbers or strings
let mixedArray: (number | string)[] = [1, "hello", 2, "world"];

// Using generic syntax for union types
let anotherMixedArray: Array<number | boolean> = [1, true, 2, false];
```

## 3. Readonly Arrays

TypeScript allows you to declare arrays that cannot be modified after creation. This is useful for ensuring data immutability.

### a. `readonly` keyword

```typescript
let readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
// readonlyNumbers[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading.
```

### b. `ReadonlyArray<ElementType>` generic type

```typescript
let readonlyNames: ReadonlyArray<string> = ["Anna", "Ben"];
// readonlyNames.pop(); // Error: Property 'pop' does not exist on type 'ReadonlyArray<string>'.
```

## 4. Tuple Types

Tuples are special types of arrays that allow you to express an array with a fixed number of elements, where each element has a known type, but the types can be different. Tuples are useful when you want to represent a record with a fixed structure.

```typescript
// A tuple representing a [string, number] pair
let user: [string, number] = ["John Doe", 30];

// Accessing tuple elements
console.log(user[0]); // Output: John Doe
console.log(user[1]); // Output: 30

// Attempting to assign incorrect types will result in an error
// let invalidUser: [string, number] = [30, "John Doe"]; // Error: Type 'number' is not assignable to type 'string'.

// Tuples with optional elements (TypeScript 3.0+)
let optionalTuple: [string, number?];
optionalTuple = ["Alice"];
optionalTuple = ["Bob", 25];

// Tuples with rest elements (TypeScript 3.0+)
let restTuple: [number, ...string[]] = [1, "a", "b", "c"];
```

## 5. Common Array Operations and Type Inference

TypeScript is smart enough to infer array types in many cases, especially when initializing arrays with values. However, explicit type annotations are good practice for clarity and to catch potential errors early.

```typescript
let inferredNumbers = [1, 2, 3]; // TypeScript infers: number[]
// inferredNumbers.push("four"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

let inferredMixed = [1, "two"]; // TypeScript infers: (string | number)[]

// Array methods like map, filter, reduce also respect type annotations
let doubledNumbers: number[] = numbers.map(num => num * 2);
let evenNumbers: number[] = numbers.filter(num => num % 2 === 0);
```

Understanding and correctly applying array type annotations is crucial for writing robust and maintainable TypeScript code, especially when dealing with collections of data.