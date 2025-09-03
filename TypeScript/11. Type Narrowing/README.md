# Type Narrowing in TypeScript

Type Narrowing is a fundamental concept in TypeScript that allows you to refine the type of a variable within a specific code block. This process helps TypeScript understand the more precise type of a variable at a given point, enabling you to write safer and more robust code by accessing type-specific properties and methods without type assertions.

TypeScript provides several mechanisms for narrowing types:

1.  **Type Guards (`typeof`, `instanceof`, `in` operator)**
2.  **Truthiness Narrowing**
3.  **Equality Narrowing**
4.  **Discriminated Unions**
5.  **User-Defined Type Guards**

---

## 1. Type Guards

Type guards are special checks that tell the TypeScript compiler about the type of a variable within a certain scope.

### a. `typeof` Operator

The `typeof` operator is used to check the primitive type of a variable (e.g., `'string'`, `'number'`, `'boolean'`, `'undefined'`, `'object'`, `'function'`, `'symbol'`, `'bigint'`).

**Theory:** When `typeof` is used in a conditional block (like `if` or `else if`), TypeScript narrows the type of the variable accordingly.

**Example (from `01. type-guards.ts`):**

```typescript
type MyType = string | number;

function example(value: MyType): void {
    if (typeof value === "string") {
        // Within this block, TypeScript knows that 'value' is a string
        console.log(value.toUpperCase());
    } else {
        // Within this block, TypeScript knows that 'value' is a number
        console.log(value.toFixed(3));
    }
}

example("hello"); // Output: HELLO
example(374);     // Output: 374.000
```

### b. `instanceof` Operator

The `instanceof` operator is used to check if an object is an instance of a particular class or constructor function.

**Theory:** When `instanceof` is used in a conditional block, TypeScript narrows the type of the variable to the specific class type.

**Example (from `02. instanceof-operator.ts`):**

```typescript
class Dog {
    bark(): void {
        console.log("Woof!");
    }
}

class Cat {
    meow(): void {
        console.log("Meow!");
    }
}

function animalSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        // Within this block, TypeScript knows that 'animal' is an instance of Dog
        animal.bark();
    } else {
        // Within this block, TypeScript knows that 'animal' is an instance of Cat
        animal.meow();
    }
}

const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog); // Output: Woof!
animalSound(myCat); // Output: Meow!
```

### c. `in` Operator

The `in` operator is used to check if a property exists on an object.

**Theory:** When `in` is used in a conditional block, TypeScript narrows the type of the object based on the presence of the property.

**Example:**

```typescript
interface Car {
    drive(): void;
}

interface Boat {
    sail(): void;
}

function operateVehicle(vehicle: Car | Boat): void {
    if ("drive" in vehicle) {
        // TypeScript knows 'vehicle' is a Car here
        vehicle.drive();
    } else {
        // TypeScript knows 'vehicle' is a Boat here
        vehicle.sail();
    }
}

// Example usage (assuming you have implementations for Car and Boat)
// class MyCar implements Car { drive() { console.log("Driving car"); } }
// class MyBoat implements Boat { sail() { console.log("Sailing boat"); } }
// operateVehicle(new MyCar());
// operateVehicle(new MyBoat());
```

---

## 2. Truthiness Narrowing

**Theory:** In JavaScript (and thus TypeScript), values like `0`, `null`, `undefined`, `''` (empty string), `NaN`, and `false` are considered "falsy". All other values are "truthy". TypeScript uses this knowledge to narrow types in conditional statements.

**Example:**

```typescript
function printLength(str: string | null | undefined): void {
    if (str) {
        // 'str' is narrowed to 'string' because null/undefined are falsy
        console.log(str.length);
    } else {
        console.log("String is null or undefined.");
    }
}

printLength("hello"); // Output: 5
printLength(null);    // Output: String is null or undefined.
printLength(undefined); // Output: String is null or undefined.
```

---

## 3. Equality Narrowing

**Theory:** TypeScript can narrow types based on equality checks (`==`, `===`, `!=`, `!==`). When you compare a variable to a literal value or another variable, TypeScript can infer a more specific type.

**Example:**

```typescript
function processValue(value: string | number): void {
    if (value === "hello") {
        // 'value' is narrowed to 'string'
        console.log("It's the string 'hello'.");
    } else if (typeof value === "number") {
        // 'value' is narrowed to 'number'
        console.log("It's a number: " + value);
    } else {
        // 'value' is narrowed to 'string' (any string other than "hello")
        console.log("It's another string.");
    }
}

processValue("hello"); // Output: It's the string 'hello'.
processValue(123);     // Output: It's a number: 123
processValue("world"); // Output: It's another string.
```

---

## 4. Discriminated Unions

**Theory:** Discriminated unions are a powerful pattern for type narrowing. They involve a union type where each member has a common, literal property (the "discriminant") that TypeScript can use to distinguish between the members.

**Example:**

```typescript
interface Circle {
    kind: "circle"; // Discriminant property
    radius: number;
}

interface Square {
    kind: "square"; // Discriminant property
    sideLength: number;
}

interface Triangle {
    kind: "triangle"; // Discriminant property
    base: number;
    height: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            // 'shape' is narrowed to 'Circle'
            return Math.PI * shape.radius ** 2;
        case "square":
            // 'shape' is narrowed to 'Square'
            return shape.sideLength * shape.sideLength;
        case "triangle":
            // 'shape' is narrowed to 'Triangle'
            return 0.5 * shape.base * shape.height;
        default:
            // This case should ideally not be reached if all union members are handled
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

const myCircle: Circle = { kind: "circle", radius: 10 };
const mySquare: Square = { kind: "square", sideLength: 5 };
const myTriangle: Triangle = { kind: "triangle", base: 4, height: 6 };

console.log("Circle Area:", getArea(myCircle));   // Output: Circle Area: 314.159...
console.log("Square Area:", getArea(mySquare));   // Output: Square Area: 25
console.log("Triangle Area:", getArea(myTriangle)); // Output: Triangle Area: 12
```

---

## 5. User-Defined Type Guards

**Theory:** Sometimes, TypeScript's built-in narrowing isn't enough. You can create your own type guard functions using a special return type called a "type predicate" (`parameterName is Type`).

**Example:**

```typescript
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

// User-defined type guard
function isBird(pet: Bird | Fish): pet is Bird {
    return (pet as Bird).fly !== undefined;
}

function getPetActivity(pet: Bird | Fish): void {
    if (isBird(pet)) {
        // 'pet' is narrowed to 'Bird'
        pet.fly();
    } else {
        // 'pet' is narrowed to 'Fish'
        pet.swim();
    }
}

// Example usage (assuming implementations for Bird and Fish)
// class Sparrow implements Bird { fly() { console.log("Flying!"); } layEggs() {} }
// class Salmon implements Fish { swim() { console.log("Swimming!"); } layEggs() {} }
// getPetActivity(new Sparrow());
// getPetActivity(new Salmon());
```

---

## Intersection Types and Narrowing (Clarification)

While `03. Intersection-types.ts` introduces intersection types, it's important to clarify their role in narrowing.

**Theory:** Intersection types (`&`) combine multiple types into a single type that has all the properties of each individual type. They are primarily a tool for *composing* types, not for runtime narrowing in the same way as type guards.

However, when you use an intersection type, TypeScript *narrows* the possible properties of an object to include all properties from all intersected types. This is a compile-time narrowing of the type definition, ensuring that any variable assigned to it satisfies all the properties of the intersected types.

**Example (from `03. Intersection-types.ts`):**

```typescript
type Employee = {
    id: number;
    name: string;
}

type Manager = {
    department: string;
    role: string;
}

// Create an intersection type
type ManagerWithEmployeeInfo = Employee & Manager;

// Example usage
const manager: ManagerWithEmployeeInfo = {
    id: 143,
    name: "ABC",
    department: "Engineering",
    role: "Team Leader"
}

console.log(manager.id);
console.log(manager.name);
console.log(manager.department);
console.log(manager.role);
```

In this example, `ManagerWithEmployeeInfo` is *narrowed* to a type that *must* have `id`, `name`, `department`, and `role`. This is a form of type refinement at the definition level.

---

Understanding Type Narrowing is crucial for writing robust and type-safe TypeScript applications. It allows you to work with union types effectively and leverage the full power of TypeScript's static analysis.
