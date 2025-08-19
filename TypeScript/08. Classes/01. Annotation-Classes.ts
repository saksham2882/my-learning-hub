// Class Property Annotations in TypeScript:

// - In TypeScript, you can define the type of class properties using annotations.
// - Property annotations ensure that the property will always hold the specified type.
// - If no initializer is given, TypeScript requires you to either initialize the property in the constructor or mark it with `!` (definite assignment assertion).
// - Access modifiers like public, private, and protected can be combined with annotations.
// - Properties can also be marked as readonly to prevent reassignment after initialization.
// - Class property types can be primitive (string, number, boolean), arrays, objects, or custom types.


class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const person = new Person('John Doe', 30);
console.log(person);                                // Output: Person { name: 'John Doe', age: 30 }
console.log(person.name);                           // Outputs: John Doe