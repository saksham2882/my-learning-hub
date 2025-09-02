class Player{
    // public readonly first: string;
    // public readonly last: string;
    // private score: number = 0;

    constructor(
        public first : string,
        public last : string,
        private score : number
    ){}

    private hello() : void {
        console.log("Hello World!")
    }
}

const p = new Player("ABC", "DE", 10);
console.log(p.first)
console.log(p.last)
// p.hello();