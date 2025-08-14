// Void in TypeScript:
// Void is a type represents that absence of any value. It is often used as the return type for functions that do not return a value.

// example 1. It's not returning anything, so it's void
function message(msg : string) {
    console.log(`This is my message: ${msg}`);
}

message("Hello, World!");


// example 2. 
function message1(msg : string) : void {
    console.log(`This is new message: ${msg}`);

    // Error: 👇 You can't return anything from a function that returns type void
    // return "Hello";
}

message1("Hello, World!");