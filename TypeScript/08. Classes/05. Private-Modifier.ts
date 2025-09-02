// 2. Private Access Modifiers:
// Members marked as private can only be accessed from within the class they are defined in.


class Student1{
    private first : string;
    public last : string;
    public age : number;

    constructor(first: string, last: string, age: number){
        this.first = first;
        this.last = last;
        this.age = age;
    }

    private hello(){
        console.log(`Hello ${this.first}`)
    }

    getName() : string{
        return `${this.first} ${this.last} ${this.age}`
    }
}


let s2 = new Student1("Saksham", "Agrahari", 20);
// console.log(s2.first);                                    // Error : Property 'first' is private and only accessible within class 'Student1'.
// s2.hello();                                               // Error : Property 'hello' is private and only accessible within class 'Student1'
console.log(s2.last);
console.log(s2.getName());