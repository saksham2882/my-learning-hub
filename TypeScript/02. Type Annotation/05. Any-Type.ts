// Any Type in TypeScript:

//   - TypeScript has a special any type that can be used to represent any type. When a variable is annotated with the any type, TypeScript will allow it to have 'any value' and disable al type checking for that variable and its properties.
//   - It is a type that can represent any value, including objects, arrays, functions, and primitive values like numbers, strings, and booleans.
//   - It is a type that can also represent null and undefined.

// WARNING : while the any type can be useful in certain situations, it should be used sparingly. overuse of any can lead to untyped code and make it harder to catch type-related bugs during development. It's generally better to use more specific types whenever possible to get benefits of TypeScript's type checking.


let color : any = 'red';
console.log(color);        // Outputs: red
console.log(color.length)  // Outputs : 3

color = 123;
console.log(color);        // Outputs: 123

// color();