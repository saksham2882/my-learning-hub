// 2. Class Fields

class Person1{
    name: string;
    age: number;
    // 👇
    location: string = "India"                      // class Field

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person1("Rohit", 20);
console.log(person1)
console.log(person1.location)                       // Output : India