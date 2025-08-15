// Multi-Dimensional Arrays:  - Arrays of arrays

const doubleDi : number[][] = [[1, 3, 4], [2, 5, 6]]; // 2D array with 2 rows and 3 columns 
console.log(doubleDi[0][1]);  // Output: 3
console.log(doubleDi[1][2]);  // Output: 6


const triDi : number[][][] = [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11 , 12]]]; // 3D array with 2 layers, 2 rows and 3 columns
console.log(triDi[0][0][1]);  // Output: 2
console.log(triDi[1][1][2]);  // Output: 12