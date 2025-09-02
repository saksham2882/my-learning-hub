// Interface with functions:

// Example 1:
interface mathOp{
    (x : number, y : number) : number;
}

const add : mathOp = (a, b) => a + b;
const subtract : mathOp = (a, b) => a - b;

console.log(add(4, 9));
console.log(subtract(4, 9));


// Example 2: 
interface Car{
    brand : string;
    model : string;
    year : number;
}

// function that accepts an object adhering to the Car interface
function info(car : Car) : void {
    console.log(`Brand: ${car.brand}, Model : ${car.model}, Year: ${car.year}`)
}

// create an object that adheres to the Car interface
const myCar : Car = {
    brand : "XYZ",
    model : "ABC",
    year : 2025
}

// call the function with object
info(myCar);