// Function Signature:

// Example 1: 
// function getRandomKeyValuePair<T>(obj: { [key: string]: T }): { key: string; value: T } { ... }
// The function is named getRandomKeyValuePair. It is a generic function denoted by <T>, meaning it can work with different types specified when calling the function.

// Parameters:
// obj: { [key: string]: T }: The function takes an object (obj) with keys of type string and values of type T.

// Function Body:
// const keys = Object.keys(obj); : Gets an array of keys from the input object using Object.keys.
// const randomKey = keys[Math.floor(Math.random() * keys.length)];: Randomly selects a key from the array of keys using a random index.
// return { key: randomKey, value: obj[randKey] };: Returns an object with two properties — key (the randomly chosen key) and value (the corresponding value from the input object).

// Return Type:
// : { key: string; value: T }: The function returns an object with a fixed structure — a key property of type string and a value property of type T.



// Generic function to get a random key-value pair from an object
function getRandomKeyValuePair<T>(obj : {[key : string] : T}) : {
    key : string;
    value : T;
} {
    const keys = Object.keys(obj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    return {key: randomKey, value: obj[randomKey]}
}

// usage with string
const stringObject = { a: "application", b: "bank"}
const randomStringPair = getRandomKeyValuePair<String>(stringObject)
console.log(randomStringPair)

// usage with number
const numberObject = { one: 1, two: 2, three: 3 }
const randomNumberPair = getRandomKeyValuePair<number>(numberObject)
console.log(randomNumberPair)

// using without giving Type
const inferredNumberPair = getRandomKeyValuePair(numberObject);
console.log(inferredNumberPair)




// Example 2: 
// Generic function to filter an array based on a condition
function filterArray<T>(array : T[], condition : (item : T) => boolean) : T[] {
    return array.filter((item) => condition(item));
}

// usage with an array of numbers
const numberArray = [1, 2, 4, 423, 45, 65, 89, 13, 46, 57];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers)

// usage with an array of strings
const stringArray = ["apple", "banana", "orange", "mango"]
const shortWords = filterArray<String>(stringArray, (word) => word.length > 5);
console.log(shortWords)




// Example 2. a:
// usage with an array of strings
interface Fruit {
    name : string;
    color : string;
}

const fruitArray : Fruit[] = [
    { name : "Apple", color : "Red" },
    { name : "Banana", color : "Yellow" },
    { name : "Cherry", color : "Red" },
]

const redFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === "Red");
console.log(redFruits)