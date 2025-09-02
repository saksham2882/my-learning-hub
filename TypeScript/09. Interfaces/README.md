# TypeScript Interfaces

Interfaces in TypeScript are powerful constructs that define contracts within your code. They specify the shape that an entity (like an object, function, or class) must adhere to. Interfaces are primarily used for type-checking during development and are completely removed during compilation to JavaScript, meaning they have no runtime impact.

## 1. What is an Interface?

An interface defines the syntax that any entity must follow. It's a way to describe the properties and methods that an object should have. Think of it as a blueprint for an object's structure.

### Example: Basic Object Interface (`01. Interface.ts`)

```typescript
interface Computer {
    name: string;
    ram: number;
    hdd: number;
}

const c1: Computer = {
    name: "i5",
    ram: 16,
    hdd: 100,
};

console.log(c1.name); // Output: i5
```

## 2. Readonly and Optional Properties

Interfaces allow you to define properties as `readonly` (cannot be modified after creation) or `optional` (may or may not be present).

### Example: Readonly and Optional Properties (`01. Interface.ts`)

```typescript
interface Movie {
    readonly name: string; // readonly property
    ratings: number;
    year?: number;         // Optional property
}

const movie1: Movie = {
    name: "XYZ",
    ratings: 9
};

console.log(movie1.name); // Output: XYZ
// movie1.name = "ABC"; // Error: Cannot assign to 'name' because it is a read-only property.
```

## 3. Interface for Functions

Interfaces can also describe the shape of functions, specifying their parameters and return type.

### Example: Interface for Functions (`02. Interface-for-function.ts`)

```typescript
interface MathOperation {
    (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(4, 9));     // Output: 13
console.log(subtract(4, 9)); // Output: -5
```

## 4. Interface with Methods

You can define methods within an interface, specifying their signature (parameters and return type).

### Example: Interface with Methods (`03. Interface-with-method.ts`)

```typescript
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    sayHello(): void; // Method signature
}

const saksham: Person = {
    firstName: "Saksham",
    lastName: "Agrahari",
    age: 20,
    sayHello() {
        console.log("Hi, there!");
    }
};

saksham.sayHello(); // Output: Hi, there!
```

## 5. Extending Interfaces

Interfaces can extend one or more existing interfaces, inheriting their members. This promotes reusability and organization.

### Example: Extending Interfaces (`04. Extending-Interface.ts`)

```typescript
interface Shop {
    readonly name: string;
    ratings: number;
}

interface ShopTime extends Shop { // ShopTime extends Shop
    timing: string;
}

const sp1: ShopTime = {
    name: "ABC",
    ratings: 8.5,
    timing: "morning"
};

console.log(sp1.name); // Output: ABC
console.log(sp1.timing); // Output: morning
```

## 6. Implementing Interfaces in Classes

Classes can `implement` interfaces, ensuring that the class adheres to the contract defined by the interface. This is a common pattern for enforcing specific behavior in classes.

### Example: Implementing Interfaces in Classes (`05. Interface-for-classes.ts`)

```typescript
interface Vehicle {
    start(): void;
    stop(): void;
}

class Car1 implements Vehicle { // Car1 implements Vehicle
    start(): void {
        console.log("Car Started");
    }

    stop(): void {
        console.log("Car Stopped");
    }
}

const myCar1 = new Car1();
myCar1.start(); // Output: Car Started
```

## 7. Declaration Merging (Interface Extension)

TypeScript allows "declaration merging" for interfaces. If you declare an interface with the same name multiple times, TypeScript will merge their definitions into a single interface. This is useful for extending existing interfaces, even those from third-party libraries.

### Example: Declaration Merging (`06. Interface-Extension.ts`)

```typescript
interface Product {
    id: number;
    name: string;
}

interface Product { // Merges with the above Product interface
    price: number;
    description: string;
}

const product1: Product = {
    id: 1,
    name: "Laptop",
    price: 1200,
    description: "Powerful laptop for work and gaming"
};

console.log(product1.name); // Output: Laptop
console.log(product1.price); // Output: 1200
```
