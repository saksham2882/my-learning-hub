// Generic Class
class Box<T> {
    private content : T;

    constructor(initialContent : T){
        this.content = initialContent;
    }

    getContent() : T {
        return this.content;
    }

    setContent(newContent : T) : void {
        this.content = newContent;
    }
}


// usage with string
const stringBox = new Box<string>("Hello, World!");
console.log(stringBox.getContent());

stringBox.setContent("New Content");
console.log(stringBox.getContent())


// usage with number
const numberBox = new Box<number>(38);
console.log(numberBox.getContent());

numberBox.setContent(45);
console.log(numberBox.getContent())