// Declaration merging:

// Once an interface is declared, it cannot be directly modified.
// However, TypeScript allows what is informally referred to as "declaration merging" or "interface extension", which is often misconstructed as "re-opening".

// Declaration merging in TypeScript refers to the ability to extend or augment an existing declaration, including interfaces. This can be useful when you want to add new properties or methods to an existing interface without modifying the original declaration. 



// Example 1:
interface CarInfo {
    brand : string;
    start() : void;
}

// Declaration merging (interface extension)
interface CarInfo{
    model : string;
    stop() : void;
}

// Usage of the extended interface
const myCar2 : CarInfo = {
    brand : "ABC",
    model : "M series",
    start() {
        console.log("Car Started");
    },
    stop() {
        console.log("Car Stopped")
    },
}

console.log(myCar2)
myCar2.start();
myCar2.stop();