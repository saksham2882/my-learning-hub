// Type Narrowing using instanceof operator

// instanceof operator - type guard
// It allows you to check whether an object is an instance of a particular class or constructor function. 


// Example:
class Dog {
    bark() : void {
        console.log("Woof!")
    }
}

class Cat {
    meow() : void {
        console.log("Meow!")
    }
}

// function with instanceof type guard
function animalSound(animal : Dog | Cat) : void {
    
    if(animal instanceof Dog){            
        animal.bark();                                     // within this block, TypeScript knows that 'animal' is an instance of Dog
    }
    else{
        animal.meow();                                     // within this block, TypeScript knows that 'animal' is an instance of Cat
    }
}

const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog);                                         // Output : Woof!
animalSound(myCat);                                         // Output : Meow!