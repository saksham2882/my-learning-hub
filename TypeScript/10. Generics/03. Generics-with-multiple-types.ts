// Generic with multiple Types : 


// Example 1: 
// Generic function to reverse the order of the values
function reversePair<T, U>(value1 : T, value2 : U) : [U, T] {
    return [value2, value1];
}

const pair = reversePair("Hello", 45);
console.log(pair);                                     // Output : [ 45, "Hello" ]



// Example 2: 
// Generic function to combine two values into an array
function combineValues<T, U>(value1 : T, value2 : U) : [T, U] {
    return [value1, value2]
}

const combineStringAndNumber = combineValues("Hello", 59);
console.log(combineStringAndNumber)

const combineBooleanAndArray = combineValues(true, [3, 9, 7]);
console.log(combineBooleanAndArray)