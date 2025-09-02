// 3. Protected Access Modifiers:
// Members marked as protected can be accessed from within the class they are defined in, as well as any subclassses that extend the class.


class Student2{
    // public first : string;
    // public last : string;
    // protected age : number;

    // constructor(first : string, last : string, age : number){
    //     this.first = first;
    //     this.last = last;
    //     this.age = age;
    // }

    constructor(
        public first: string, 
        public last: string, 
        protected age: number
    ){}

    get StudentAge() : number{
        return this.age
    }
}


// Inherit Class
class Employee extends Student2{
    constructor(first: string, last: string, age: number){
        super(first, last, age);
    }

    public isAdmin : boolean = true;
}

const e1 = new Employee("Vishal", "Gupta", 21);
console.log(e1);
console.log(e1.isAdmin)