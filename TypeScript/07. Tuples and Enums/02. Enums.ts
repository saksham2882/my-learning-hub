// Enums in TypeScript:

// - Enums are a way to define a set of named constants.
// - They make code more readable and organized by giving friendly names to numeric or string values.
// - There are two main types of enums: Numeric and String.
// - By default, numeric enums start with 0 and auto-increment.
// - You can manually assign values to enum members.
// - String enums require explicit values for each member.
// - Enums are compiled to plain JavaScript objects.
// - "const enum" can be used for more optimized code (inlined values).
// - Enums improve type safety by restricting values to the defined set.


// 1. Numeric Enum
enum WeatherConditions {
    sunny,         // 0
    cloudy,        // 1
    rainy,         // 2
}

console.log(WeatherConditions)              // Output: { '0': 'sunny', '1': 'cloudy', '2 ': 'rainy' }
console.log(WeatherConditions.sunny)        // Output: 0
console.log(WeatherConditions[0])           // Output: sunny
let weather : WeatherConditions = WeatherConditions.sunny;
console.log(weather)                        // Output: 0



// 2. String Enum
enum Colors {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}

console.log(Colors)                          // Output: { '0': 'RED', '1': ' GREEN', '2': 'BLUE' }
console.log(Colors.Red)                      // Output: RED
console.log(Colors["Red"])                   // Output: RED
let c : Colors = Colors.Red;
console.log(c)                               // Output: RED



// Const Enum: (faster, optimized)
const enum Status {
    Success, 
    Failure
}

let s : Status = Status.Success;
console.log(s)                                // Output: 0