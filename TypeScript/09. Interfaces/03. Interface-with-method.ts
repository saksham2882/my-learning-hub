// Interface for method
interface Person{
    firstName : string;
    lastName : string;
    age: number;
    sayHello() : void;
}

function greet(person : Person) : void {
    console.log(`Hello, ${person.firstName} ${person.lastName}`)
    person.sayHello();
}

const saksham : Person = { 
    firstName : "Saksham",
    lastName : "Agrahari",
    age : 20,
    sayHello() {
        console.log("hi, there!")
    }
}

// call function
greet(saksham)




// Interface with method property
interface Song{
    songName : string;
    singerName? : string;
    printSongInfo(songName : string, singerName : string) : string;
}

const song1 : Song = {
    songName : "ABC",
    singerName : "XYZ",

    printSongInfo : (songName, singerName) => {
        return `Song: (${songName}), Singer: (${singerName})`
    } 
}

console.log(song1)
console.log(song1.printSongInfo("Natural", "CDE"))