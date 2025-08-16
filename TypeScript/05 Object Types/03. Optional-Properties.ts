// Optional Properties in typeScript:

//  - Optional properties are properties that can be either present or absent in an object.
//  - We can use the '?' symbol after the property name to indicate that a property is optional.
//  - For example, let's say we have a person object with a name and an age property. The age property is optional.


// example of optional property:
type User = {
    name: string;
    age?: number;           // optional property, can be either present or absent
    location: string;
}


//  - create an object of type User and assign it a value. The age property present here
const user1 : User = {
    name: 'John',
    age: 20,
    location: 'New York'
}
console.log(` Name: ${user1.name}, Age: ${user1.age}, Location: ${user1.location}`);


//  - create an object of type User and assign it a value. The age property absent here
const user2 : User = {
    name: 'Sam',
    location: 'New York'
}
console.log(` Name: ${user2.name}, Location: ${user2.location}`);
console.log(` Name: ${user2.name}, Age: ${user2.age}, Location: ${user2.location}`);