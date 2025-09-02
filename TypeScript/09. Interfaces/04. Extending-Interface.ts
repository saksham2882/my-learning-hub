interface Shop{
    readonly name : string;
    ratings : number;
    printInfo(name : string, price : number, ratings: number) : string | number;
}

// extend interface
interface ShopTime extends Shop{
    timing : string;
}

const sp1 : ShopTime = {
    name: "ABC",
    ratings : 8.5,
    printInfo(name : string, price : number, ratings : number){
        return `Name: ${name}, Price: ${price}, Ratings: ${ratings}`
    },
    timing : "morning"
}

console.log(sp1)
const a = sp1.printInfo("CDE", 200, 8.9);
console.log(a);