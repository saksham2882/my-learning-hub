function greet(person: string = "Anonymous"){
    return `Hello, ${person}!`;
}


// Use the greet function without arguments
const res = greet();
console.log(res);

// Use the greet function with an argument
const res2 = greet("John");
console.log(res2);