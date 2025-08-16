// Intersection Types in TypeScript:

//   - Intersection types are used to combine multiple types into a single type.
//   - They are denoted by the '&' operator.
//   - The resulting type will have all the properties of the types being intersected.
//   - If there are any duplicate properties, the type of the last property will be used.
//   - Intersection types are useful when you want to create a type that has all the properties of multiple types.


// first type
type UserInfo = {
    name: string;
    age: number;
}

// second type
type AccountDetails = {
    email: string;
    password: string;
}

// intersection type
type UserAccount = UserInfo & AccountDetails;

const Sam : UserAccount = {
    name: 'Sam',
    age: 25,
    email: 'sam@gmail.com',
    password: 'password123',
}

console.log(` Name : ${Sam.name}, Age: ${Sam.age}, Email: ${Sam.email}, Password: ${Sam.password}`);