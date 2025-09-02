// Getters & Setters:
// 1. They are used to access and modify class properties. Getters and Setters allow you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.


class MyClass{
    private num : number = 0;

    get getNum() : number {
        return this.num
    }

    set setNum(value : number){
        if(value < 0){
            throw new Error("value cannot be negative")
        }
        this.num = value;
    }
}

const num = new MyClass();

// use getter
console.log(`Current num: ${num.getNum}`)

// use setter
num.setNum = 10;
console.log(`Current num: ${num.getNum}`)