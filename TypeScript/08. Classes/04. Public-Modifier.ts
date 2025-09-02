// Access Modifiers:

// In TypeScript, you can use access modifiers to control the visibility od class members (properties and methods). Access modifiers determine the ways in which class members can be accessed from within and outside the class.

// three types od access modifiers : public, private, protected


// 1. Public: 
// Members marked as public can be accessed from anywhere, both inside and outside the class.

class Student{
    public first : string;
    public readonly last : string;

    constructor(first: string, last: string){
        this.first = first;
        this.last = last;
    }
}

let s1 = new Student("Saksham", "Agrahari");
console.log(s1)
console.log(s1.first)
console.log(s1.last)