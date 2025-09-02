# TypeScript Classes

Classes in TypeScript provide a way to define blueprints for creating objects. They encapsulate data (properties) and behavior (methods) into a single unit. TypeScript classes are a powerful feature that brings object-oriented programming principles to JavaScript, offering features like type checking, access modifiers, and more.

## 1. Class Property Annotations

In TypeScript, you can explicitly define the type of class properties using type annotations. This ensures type safety and helps catch errors during development. If a property is not initialized in the constructor, it must either be given an initial value or marked with a definite assignment assertion (`!`).

```typescript
// 01. Annotation-Classes.ts
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person('John Doe', 30);
console.log(person);
console.log(person.name);
```

## 2. Class Fields

Class fields allow you to declare properties directly within the class body, outside the constructor. You can also assign default values to these fields at the point of declaration.

```typescript
// 02. Class-Field.ts
class Person1 {
    name: string;
    age: number;
    location: string = "India"; // Class Field with a default value

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person1("Rohit", 20);
console.log(person1);
console.log(person1.location);
```

## 3. Readonly Properties

The `readonly` modifier can be used on class properties to prevent them from being reassigned after their initial assignment, which typically happens in the constructor. This ensures that the property's value remains constant throughout the object's lifetime.

```typescript
// 03. Readonly-Properties.ts
class Person3 {
    readonly name: string; // readonly property
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person3 = new Person3('John Doe', 30);
console.log(person3.name);

// person3.name = "Rohit"; // Error: Cannot assign to 'name' because it is a read-only property.
```

## 4. Access Modifiers: `public`, `private`, `protected`

Access modifiers control the visibility and accessibility of class members (properties and methods).

### 4.1. `public` Modifier

Members marked as `public` are accessible from anywhere, both inside and outside the class. This is the default access modifier if none is specified.

```typescript
// 04. Public-Modifier.ts
class Student {
    public first: string;
    public readonly last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}

let s1 = new Student("Saksham", "Agrahari");
console.log(s1.first);
console.log(s1.last);
```

### 4.2. `private` Modifier

Members marked as `private` can only be accessed from within the class they are defined in. They are not accessible from instances of the class or from subclasses.

```typescript
// 05. Private-Modifier.ts
class Student1 {
    private first: string;
    public last: string;
    public age: number;

    constructor(first: string, last: string, age: number) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    private hello() {
        console.log(`Hello ${this.first}`);
    }

    getName(): string {
        return `${this.first} ${this.last} ${this.age}`;
    }
}

let s2 = new Student1("Saksham", "Agrahari", 20);
// console.log(s2.first); // Error: Property 'first' is private and only accessible within class 'Student1'.
// s2.hello();            // Error: Property 'hello' is private and only accessible within class 'Student1'
console.log(s2.last);
console.log(s2.getName());
```

### 4.3. `protected` Modifier

Members marked as `protected` can be accessed from within the class they are defined in, as well as from any subclasses that extend the class. They are not accessible from instances of the class directly.

```typescript
// 08. Protected.ts
class Student2 {
    constructor(
        public first: string,
        public last: string,
        protected age: number // protected property
    ) { }

    get StudentAge(): number {
        return this.age;
    }
}

// Inherit Class
class Employee extends Student2 {
    constructor(first: string, last: string, age: number) {
        super(first, last, age);
    }

    public isAdmin: boolean = true;
}

const e1 = new Employee("Vishal", "Gupta", 21);
console.log(e1);
// const s3 = new Student2("Saksham", "Agrahari", 20);
// console.log(s3.age); // Error: Property 'age' is protected and only accessible within class 'Student2' and its subclasses.
console.log(e1.StudentAge); // Accessible within subclass or via a getter
```

## 5. Getters and Setters

Getters and setters provide a way to control how class properties are accessed and modified. They allow you to define custom logic that runs when a property is read (getter) or written to (setter).

```typescript
// 06. Getters-and-Setters.ts
class MyClass {
    private num: number = 0;

    get getNum(): number {
        return this.num;
    }

    set setNum(value: number) {
        if (value < 0) {
            throw new Error("value cannot be negative");
        }
        this.num = value;
    }
}

const num = new MyClass();

// use getter
console.log(`Current num: ${num.getNum}`);

// use setter
num.setNum = 10;
console.log(`Current num: ${num.getNum}`);
```

## 6. Parameter Properties Shorthands

TypeScript offers a convenient shorthand for declaring class properties and initializing them directly within the constructor's parameter list. By adding an access modifier (`public`, `private`, or `protected`) to a constructor parameter, TypeScript automatically creates a class property with the same name and assigns the argument's value to it.

```typescript
// 07. parameters-properties-shorthands.ts
class Player {
    constructor(
        public first: string,
        public last: string,
        private score: number // This automatically creates a private 'score' property
    ) { }

    private hello(): void {
        console.log("Hello World!");
    }
}

const p = new Player("ABC", "DE", 10);
console.log(p.first);
console.log(p.last);
// console.log(p.score); // Error: Property 'score' is private
```
