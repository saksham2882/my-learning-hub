
const multiply = (x : number, y : number) : number => {
    return x * y;
}

console.log(multiply(5, 9))


// tsconfig.json :

// example: 

// 1. tsc                              ->  compile all files
// 2. tsc filename                     ->  compile specific file 
// 3. "files": ["add.ts"]              ->  like this we compile only specific file (s)
// 4. "include": ["src/**/**"]         ->  include all files to compile in folder structure 
// 5. "include": ["src/index.ts"]      ->  include this files to compile in folder structure 
// 6. "exclude": ["src/add.ts"]        ->  exclude this files to compile in folder structure (other all compile) 
// 7. "target" : "es6"                 ->  compile to this javascript version
// 8. "outDir" : "./dist"              ->  specific place where all compile files go