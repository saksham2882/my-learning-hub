# Object Types in TypeScript

TypeScript provides powerful mechanisms for defining and enforcing the structure of objects, which are fundamental data structures in JavaScript and TypeScript. Objects in TypeScript are essentially collections of key-value pairs, where each key is a string (or symbol) and each value can be of any type. The primary goal of using object types in TypeScript is to ensure type safety, improve code readability, and enable better tooling support like autocompletion and error checking.

A key concept in TypeScript's type system is **structural typing**. This means that when comparing two different types, TypeScript only cares about the *shape* or *structure* of the types, specifically the properties and methods they contain. If two objects have the same properties with compatible types, they are considered compatible, regardless of where they were defined.

## 1. Basic Object Types

In TypeScript, you can explicitly define the expected shape of an object by specifying the names and types of its properties. This is done using a type annotation that describes the object's structure.

**Syntax:**
You define an object type by listing its properties and their corresponding types within curly braces `{}`.

```typescript
// Syntax: { propertyName1: Type1; propertyName2: Type2; ... }
```

**Key Characteristics:**
*   **Property Names:** Each property name is followed by a colon (`:`) and its type.
*   **Separators:** Properties are typically separated by semicolons (`;`) or commas (`,`).
*   **Strictness:** By default, all properties defined in an object type are required. If an object literal is missing a required property, TypeScript will raise an error.

**Common Use Cases:**
*   **Direct Annotation:** You can directly annotate an object literal or a variable that will hold an object.
*   **Function Parameters:** Defining the expected shape of objects passed as arguments to functions.
*   **Function Return Values:** Specifying the structure of objects returned by functions.

**Examples:**

```typescript
// 1. Direct annotation of an object literal
// This 'person' object is strictly typed to have 'firstName' (string), 'lastName' (string), and 'age' (number).
const person: { firstName: string; lastName: string; age: number } = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20
};

console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

// 2. Using object types as function return values
// The 'getPerson' function is declared to return an object that conforms to the specified shape.
function getPerson(): { firstName: string; lastName: string; age: number } {
    return {
        firstName: 'Sam',
        lastName: 'Doe',
        age: 19
    };
}

const resultPerson = getPerson();
console.log(`Name: ${resultPerson.firstName} ${resultPerson.lastName}, Age: ${resultPerson.age}`);

// 3. Object types in function parameters
// The 'printUserName' function expects an argument 'person' that must have 'firstName' and 'lastName' properties, both of type string.
function printUserName(person: { firstName: string; lastName: string }) {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
}

printUserName({ firstName: "Saksham", lastName: "Agrahari" });
// printUserName({ firstName: "Saksham" }); // Error: Property 'lastName' is missing
```

## 2. Type Aliases for Objects

While direct object type annotations are useful for simple, one-off cases, they can become cumbersome and repetitive for more complex or frequently used object shapes. **Type aliases** provide a way to give a new name to any type, including object types. This significantly improves code readability, reusability, and maintainability.

**Syntax:**
Type aliases are defined using the `type` keyword, followed by the alias name, an equals sign (`=`), and the type definition.

```typescript
type AliasName = TypeDefinition;
```

**Key Benefits:**
*   **Readability:** Complex object structures can be given descriptive names, making the code easier to understand.
*   **Reusability:** Once defined, a type alias can be used in multiple places throughout your codebase, reducing duplication.
*   **Maintainability:** If the structure of an object changes, you only need to update its definition in one place (the type alias), and all usages will automatically reflect the change.

**Example:**

```typescript
// Defining a type alias named 'User' for a specific object structure.
// This 'User' type now represents an object with 'name' (string), 'age' (number), and 'location' (string).
type User = {
    name: string;
    age: number;
    location: string;
};

// The 'printUserInfo' function now uses the 'User' type alias for its parameter,
// making the function signature cleaner and more expressive.
const printUserInfo = (user: User) => {
    return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`;
};

// We can now create objects that conform to the 'User' type.
const user1: User = { name: "Rohit", age: 20, location: "India" };
console.log(printUserInfo(user1));

// const user2: User = { name: "Alice", age: 25 }; // Error: Property 'location' is missing
```

## 3. Optional Properties

By default, all properties defined within an object type are considered mandatory. However, there are many scenarios where certain properties might not always be present in an object. **Optional properties** allow you to define properties that can either exist or be absent.

**Syntax:**
To mark a property as optional, append a question mark (`?`) after the property name in its type definition.

```typescript
type MyObject = {
    requiredProp: string;
    optionalProp?: number; // This property is optional
};
```

**Behavior:**
*   If an optional property is not provided when creating an object, its value will be `undefined` at runtime.
*   TypeScript will not raise an error if an optional property is omitted.

**Example:**

```typescript
// Defining a type 'UserWithOptionalAge' where 'age' is an optional property.
type UserWithOptionalAge = {
    name: string;
    age?: number; // 'age' can be a number or undefined
    location: string;
};

// Case 1: Object with the optional 'age' property present.
const userWithAge: UserWithOptionalAge = {
    name: 'John',
    age: 20,
    location: 'New York'
};
console.log(`Name: ${userWithAge.name}, Age: ${userWithAge.age}, Location: ${userWithAge.location}`);

// Case 2: Object with the optional 'age' property absent.
// TypeScript allows this as 'age' is marked optional.
const userWithoutAge: UserWithOptionalAge = {
    name: 'Sam',
    location: 'New York'
};
console.log(`Name: ${userWithoutAge.name}, Location: ${userWithoutAge.location}`);
// When 'age' is absent, accessing it will result in 'undefined'.
console.log(`Name: ${userWithoutAge.name}, Age: ${userWithoutAge.age}, Location: ${userWithoutAge.location}`); // age will be undefined
```

## 4. Readonly Properties

In some cases, you might want to ensure that certain properties of an object cannot be modified after the object has been initialized. **Readonly properties** provide this immutability. Once a `readonly` property is set during object creation, its value cannot be reassigned.

**Syntax:**
To declare a property as `readonly`, use the `readonly` keyword before the property name in its type definition.

```typescript
type MyImmutableObject = {
    id: string;
    readonly createdAt: Date; // This property is readonly
};
```

**Key Characteristics:**
*   **Initialization Only:** A `readonly` property can only be assigned a value when the object is first created (during initialization).
*   **No Reassignment:** Any subsequent attempt to reassign a value to a `readonly` property will result in a compile-time error.
*   **Shallow Immutability:** It's important to note that `readonly` provides *shallow* immutability. If a `readonly` property holds an object, the object itself can still be modified (e.g., its properties can be changed), but the reference to the object cannot be changed.

**Example:**

```typescript
// Defining a 'Person' type with a 'readonly' location property.
type Person = {
    name: string;
    age: number;
    readonly location: string; // 'location' can only be set once
};

const person1: Person = {
    name: 'John',
    age: 20,
    location: 'New York' // 'location' is initialized here
};
console.log(`Name: ${person1.name}, Age: ${person1.age}, Location: ${person1.location}`);

// Attempting to change the 'location' property after initialization will cause a TypeScript error:
// person1.location = 'Los Angeles'; // Error: Cannot assign to 'location' because it is a read-only property.

// Other properties that are not readonly can still be modified:
// person1.age = 21; // This is allowed
```

## 5. Intersection Types

**Intersection types** in TypeScript allow you to combine multiple existing types into a single new type. The resulting type will possess all the properties from all the types that are being intersected. This is particularly useful for composing complex types from simpler, reusable building blocks.

**Syntax:**
Intersection types are created using the ampersand (`&`) operator between the types you want to combine.

```typescript
type CombinedType = TypeA & TypeB & TypeC;
```

**Behavior:**
*   The new type will have all the properties of `TypeA`, `TypeB`, and `TypeC`.
*   If there are properties with the same name in the intersected types, and their types are compatible, the resulting property will have the combined type (if applicable) or the most specific type. If their types are incompatible (e.g., `string` and `number` for the same property name), the resulting type for that property will be `never`, making it impossible to create an object that satisfies the intersection.

**Common Use Cases:**
*   **Combining Interfaces/Types:** Creating a comprehensive type by merging properties from several distinct interfaces or type aliases.
*   **Mixins:** Implementing mixin patterns where an object gains properties and methods from multiple sources.

**Examples:**

```typescript
// Define two base types: 'UserInfo' for personal details and 'AccountDetails' for account-specific information.
type UserInfo = {
    name: string;
    age: number;
};

type AccountDetails = {
    email: string;
    password: string;
};

// Create an intersection type 'UserAccount' that combines all properties from 'UserInfo' and 'AccountDetails'.
// An object of type 'UserAccount' must have 'name', 'age', 'email', and 'password'.
type UserAccount = UserInfo & AccountDetails;

const Sam: UserAccount = {
    name: 'Sam',
    age: 25,
    email: 'sam@gmail.com',
    password: 'password123',
};

console.log(`Name: ${Sam.name}, Age: ${Sam.age}, Email: ${Sam.email}, Password: ${Sam.password}`);

```