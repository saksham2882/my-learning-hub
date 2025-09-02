// readonly property: 

class Person3{
    readonly name: string;                           // readonly
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const person3 = new Person3('John Doe', 30);
console.log(person3);                                // Output: Person { name: 'John Doe', age: 30 }
console.log(person3.name);                           // Outputs: John Doe

// person3.name = "Rohit";                           // Error : Cannot assign to 'name' because it is a read-only property.
console.log(person3.name)