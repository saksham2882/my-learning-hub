// Generics in TScript:

// In TScript, Generics allow to create reusable components that can work with a variety of Ts. 
// Generics make it possible for you to define functions, classes and interfaces that can work with different data Ts without having to duplicate code.


// Example:
// ---------------- Without Generics -------------------

function printNumber (item: number, Value: number) : [number, number] {
    return [item, Value];
}
function printString (item: string, Value: string) : [string, string] {
    return [item, Value];
}
function printBoolean (item: boolean, Value: boolean) : [boolean, boolean] {
    return [item, Value];
}

const num = printNumber(20, 8);
const str = printString("Hello", "World");
const bool = printBoolean(true, false);

console.log(num)                                // Output : [20, 8]
console.log(str)                                // Output : ['Hello', 'World]
console.log(bool)                               // Output : [true, false]



// --------------- With Generics ----------------------
function combineDataTypeFunc<T> (item: T, Value: T) : [T, T] {
    return [item, Value]
}

const num1 = combineDataTypeFunc<number>(10, 20);
const str1 = combineDataTypeFunc<string>("Hello", "World");
const bool1 = combineDataTypeFunc<boolean>(true, false);

console.log(num1)
console.log(str1)
console.log(bool1)



// ------------ Example usage with a custom type -----------
interface Dog{
    name: string;
    breed: string;
}

const dogPair = combineDataTypeFunc<Dog> ({name: "Tommy", breed: "Unknown"}, {name: "Jack", breed: "German"});
console.log(dogPair)