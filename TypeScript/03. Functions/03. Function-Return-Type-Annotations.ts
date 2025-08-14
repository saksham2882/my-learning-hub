// 1. Regular Function 
function double(x : number): number{
    return x * x;
}

const res = double(2);
console.log(res);       // Output: 4


// 2. Using Arrow Function
const double2 = (x:number) : number => {
    return x * x;
}

const res2 = double2(2);
console.log(res2);       // Output: 4