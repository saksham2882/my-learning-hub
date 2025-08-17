# Tuples and Enums in TypeScript

TypeScript provides specialized types like Tuples and Enums to help you work with structured data and collections of related constants more effectively.

## 1. Tuples

Tuples are a special type of array that allow you to express an array with a fixed number of elements, where each element has a known type, but the types can be different. Tuples are useful when you want to represent a record with a fixed structure.

### a. Defining Tuples

You define a tuple by specifying the types of its elements in order, enclosed in square brackets `[]`.

```typescript
// A tuple representing a [string, number] pair (e.g., [name, age])
let user: [string, number] = ["John Doe", 30];

// A tuple representing an RGB color [number, number, number]
let rgbColor: [number, number, number] = [255, 0, 128];

// A tuple for a point in 2D space [x, y]
let point: [number, number] = [10, 20];
```

### b. Accessing Tuple Elements

You can access tuple elements using their index, just like with arrays.

```typescript
let user: [string, number] = ["John Doe", 30];

console.log(user[0]); // Output: "John Doe" (type: string)
console.log(user[1]); // Output: 30 (type: number)
```

### c. Immutability and Readonly Tuples

While tuples have a fixed length and ordered types, their elements are mutable by default. To make a tuple truly immutable, you can use the `readonly` keyword.

```typescript
let mutableTuple: [string, number] = ["Alice", 25];
mutableTuple[0] = "Alicia"; // Allowed

let readonlyTuple: readonly [string, number] = ["Bob", 40];
// readonlyTuple[0] = "Robert"; // Error: Cannot assign to '0' because it is a read-only property.
```

### d. Destructuring Tuples

Tuples can be easily destructured into individual variables, which can improve readability.

```typescript
let product: [string, number, boolean] = ["Laptop", 1200, true];

let [productName, price, inStock] = product;

console.log(productName); // "Laptop"
console.log(price);       // 1200
console.log(inStock);     // true
```

## 2. Enums (Enumerations)

Enums allow you to define a set of named constants. Using enums can make your code more readable and maintainable by providing meaningful names for a set of numeric or string values.

### a. Numeric Enums

By default, enums are numeric. The first member is initialized to `0`, and each subsequent member is incremented by `1`.

```typescript
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

let playerDirection: Direction = Direction.Up;
console.log(playerDirection); // Output: 0
console.log(Direction.Left);  // Output: 2
```

You can also manually initialize enum members:

```typescript
enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(StatusCode.Success);    // Output: 200
console.log(StatusCode.NotFound);   // Output: 404
```

### b. String Enums

String enums are similar to numeric enums, but their values are initialized with string literals. This can be more readable at runtime, as the enum value itself is a meaningful string.

```typescript
enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}

let currentUserRole: UserRole = UserRole.Admin;
console.log(currentUserRole); // Output: "ADMIN"

function checkAccess(role: UserRole) {
    if (role === UserRole.Admin) {
        console.log("Full access granted.");
    } else {
        console.log("Limited access.");
    }
}

checkAccess(UserRole.Editor); // Output: "Limited access."
```

### c. Heterogeneous Enums (Mixed Numeric and String)

While possible, it's generally discouraged to mix numeric and string enum members as it can lead to confusion.

```typescript
enum Mixed {
    No = 0,
    Yes = "YES",
    Maybe = 1 // If 'Yes' was not initialized, 'Maybe' would be 1. Here it's 1 because 'No' is 0.
}

console.log(Mixed.No);    // 0
console.log(Mixed.Yes);   // "YES"
console.log(Mixed.Maybe); // 1
```

### d. Const Enums

`const` enums are a special type of enum that are completely removed during compilation. They are useful when you need a set of constants but don't want to incur the overhead of generating JavaScript objects at runtime.

```typescript
const enum Colors {
    Red,
    Green,
    Blue
}

let myColor: Colors = Colors.Red;
// In compiled JavaScript, 'myColor' will directly become '0'
// console.log(Colors.Green); // This would be '1' in compiled JS
```
**Note:** You cannot access `const` enum members at runtime if they are not inlined.

---

Tuples and Enums are valuable tools in TypeScript for creating more structured, type-safe, and readable code, especially when dealing with fixed-size collections of mixed types or sets of related constants.
