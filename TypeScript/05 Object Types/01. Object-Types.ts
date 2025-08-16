// Objects in TypeScript : 
// Objects in TypeScript are collections of key-value pairs. They are similar to JavaScript objects, but with  some additional features. 
// The properties of an object can have specific types, and the object itself can be annotated with a type, often defined using an interface or a type alias.
// TypeScript uses structural typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility.


// type varName (annotations / types) = {property: value}

// Example :
// 1. Object with string and number property
const person : {firstName : string; lastName: string; age: number} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20
}

console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);


// 2. using objects as function return value
function getPerson() : {firstName : string; lastName: string; age: number} {
    return {
        firstName: 'Sam',
        lastName: 'Doe',
        age: 19
    }
}

const res = getPerson();
console.log(`Name: ${res.firstName} ${res.lastName}, Age: ${res.age}`);


function printUserName(person : {firstName: string; lastName: string}) {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
}

printUserName({firstName: "Saksham", lastName: "Agrahari"});