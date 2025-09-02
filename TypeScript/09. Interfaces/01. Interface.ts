// Interface: 

// 1. Interface is a way to define a contract for the shape of an object. It specifies the properties and their types that an object must have. Interfaces are a powerful tool for enforcing a certain structure in your code.

// 2. While Interfaces are commonly used to define the structure of objects, they are not limited to just objects. Interfaces in TypeScript can also be used to describe the shape of functions and classes.


// Interface Definition:
interface Computer{
    name: string;
    ram: number;
    hdd: number;
}

// Usage of interface
const c1 : Computer = {
    name : "i5",
    ram : 16,
    hdd : 100,
};

console.log(c1.name)
console.log(c1.ram)
console.log(c1.hdd)



// More Example:
interface Movie{
    readonly name: string;                  // readonly property
    ratings: number;
    year?: number;                          // Optional property
}

const movie1 : Movie = {
    name: "XYZ",
    ratings: 9
}

console.log(movie1)
console.log(movie1.ratings)
// movie1.name = "ABC"                      // Error