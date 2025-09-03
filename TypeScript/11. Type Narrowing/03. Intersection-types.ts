// Intersection types:

// Intersection types in TypeScript allow you to combine multiple types into a single type.
// The resulting type will have all the properties of each individual type. You create intersection types using the '&' operator


// Example:

// Define two types
type Employee = {
    id : number;
    name : string;
}

type Manager = {
    department : string;
    role : string;
}

// create a intersection type
type ManagerWithEmployeeInfo = Employee & Manager;

// example usage
const manager : ManagerWithEmployeeInfo = {
    id : 143,
    name : "ABC",
    department : "Engineering",
    role : "Team Leader"
}

console.log(manager.id);
console.log(manager.name);
console.log(manager.department);
console.log(manager.role);