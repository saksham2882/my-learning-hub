// Interface for a class

interface Vehicle {
    start() : void;
    stop() : void;
}

// class implements the interface
class Car1 implements Vehicle {
    start(): void {
        console.log("Car Started");
    }

    stop(): void {
        console.log("Car Stopped")
    }
}

// Usage:
const myCar1 = new Car1();
myCar1.start();
myCar1.stop();
