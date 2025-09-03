# Generics in TypeScript

Generics are a powerful feature of TypeScript that allow you to write reusable, type-safe code. They enable you to create components that work with a variety of data types, rather than a single one. This provides flexibility while still maintaining type checking at compile time.

## Why Use Generics?

1.  **Reusability**: Write functions, classes, or interfaces that can operate on different types without duplicating code.
2.  **Type Safety**: Ensure that the types used are consistent and valid, catching errors at compile time rather than runtime.
3.  **Flexibility**: Adapt components to work with new data types as your application evolves.

## Basic Generic Functions

Generics allow you to define a type variable that can be used in place of a concrete type. This type variable is then specified when the function is called.

**Example (from `01. first-generic.ts` and `02. second-generic.ts` concepts):**

```typescript
function identity<T>(arg: T): T {
    return arg;
}

// Usage with different types
let output1 = identity<string>("myString"); // type of output1 is string
let output2 = identity<number>(100);     // type of output2 is number
let output3 = identity(true);            // Type inference: type of output3 is boolean
```

In this example, `<T>` is a type variable. When `identity` is called, `T` is replaced with the actual type provided (e.g., `string`, `number`, `boolean`).

## Generics with Multiple Type Variables

You can use multiple type variables in a single generic definition when your component needs to work with different types that are related.

**Example (from `03. Generics-with-multiple-types.ts` concept):**

```typescript
function pair<T, U>(arg1: T, arg2: U): [T, U] {
    return [arg1, arg2];
}

let myPair = pair<string, number>("hello", 123); // myPair is of type [string, number]
console.log(myPair); // Output: ["hello", 123]
```

Here, `T` and `U` are two different type variables, allowing the `pair` function to work with two distinct types.

## Generic Classes

Generic classes are similar to generic functions, but they apply to the properties and methods of a class.

**Example (from `04. generic-classes.ts` concept):**

```typescript
class Box<T> {
    private value: T;

    constructor(initialValue: T) {
        this.value = initialValue;
    }

    getValue(): T {
        return this.value;
    }

    setValue(newValue: T): void {
        this.value = newValue;
    }
}

let stringBox = new Box<string>("Hello Generics");
console.log(stringBox.getValue()); // Output: "Hello Generics"
stringBox.setValue("TypeScript");
console.log(stringBox.getValue()); // Output: "TypeScript"

let numberBox = new Box<number>(123);
console.log(numberBox.getValue()); // Output: 123
```

The `Box` class can hold a value of any type `T`, specified when an instance of `Box` is created.

## Type Constraints

Sometimes you want to restrict the types that can be used with a generic. Type constraints allow you to define a set of requirements that a type argument must satisfy. This is done using the `extends` keyword.

**Example (from `05. Type-Constraints.ts` concept):**

```typescript
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // Now we know it has a .length property
    return arg;
}

// Works because string has a .length property
loggingIdentity("hello");

// Works because array has a .length property
loggingIdentity([1, 2, 3]);

// Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
// loggingIdentity(10);
```

In this example, `T extends Lengthwise` means that `T` must be a type that has a `length` property of type `number`. This ensures that `arg.length` is always accessible within the `loggingIdentity` function.
