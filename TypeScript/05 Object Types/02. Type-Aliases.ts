// Type Aliases in TypeScript:
//   - Type aliases are used to give a new name to an existing type.
//   - They are useful when you want to use a long type name in your code, but you want to give it a shorter name for convenience.

//   - Type aliases are defined using the 'type' keyword followed by the alias name, an equal sign (=), and the type it represents.


// type alias example: custom type alias
type User = {
    name: string;
    age: number;
    location: string;
}

const printUserInfo = (user: User) => {
    return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`;
}

const res = printUserInfo({name: "Rohit", age: 20, location: "India"});
console.log(res);