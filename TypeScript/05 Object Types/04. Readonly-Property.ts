// Readonly property in TypeScript :

//  - A readonly property is a property that cannot be changed once it is set (read only not changed).
//  - It is declared using the readonly keyword before the property name.
//  - The readonly keyword can be used with both class and interface properties.

type Person = {
    name: string;
    age: number;
    readonly location: string;        // readonly
}

const person1 : Person = {
    name: 'John',
    age: 20,
    location: 'New York'
}
console.log(` Name: ${person1.name}, Age: ${person1.age}, Location: ${person1.location}`);


// want to change the location
// person1.location = 'Los Angeles';     // Error: Cannot assign to 'location' because it is a read-only property.

console.log(` Name: ${person1.name}, Age: ${person1.age}, Location: ${person1.location}`);
