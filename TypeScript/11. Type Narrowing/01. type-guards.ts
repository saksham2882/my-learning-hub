// Type Narrowing :

// Type narrowing is the process of refining a variable's type within a conditional block of code. This allows you to write more precise and type-safe code.

// TypeScript provides several mechanisms for narrowing types
// 1. Type guards
// 2. instanceof Operator
// 3. Intersection types
// 4. Discriminated unions


// 1. Type guards : Type guards are mechanisms that help TypeScript understand and narrow down the types more precisely. One common type guard is the typeof Operator.

// Example :
type MyType = string | number;

// function with type guard
function example(value : MyType) : void {
    if(typeof value === "string"){                     // Type guard using typeof
        console.log(value.toUpperCase());              // within this block, TypeScript knows that 'value' is a string
    }
    else{
        console.log(value.toFixed(3));                 // within this block, TypeScript knows that 'value' is a number
    }
}

example("hello");                                       // Output : HELLO
example(374);                                           // Output : 374.000