# TypeScript Setup

Welcome to the TypeScript Setup notes! This document will guide you through the basics of setting up a TypeScript project, understanding its core concepts, and configuring your development environment.

## What is TypeScript?

TypeScript is a superset of JavaScript that adds static typing to the language. This means you can define the types of your variables, function parameters, and return values, allowing for better code organization, readability, and error detection *before* runtime.

## Why TypeScript?

1.  **Early Error Detection:** Catches type-related errors during development (compile-time) rather than at runtime, leading to fewer bugs in production.
2.  **Improved Code Readability and Maintainability:** Explicit types make code easier to understand and refactor, especially in large codebases.
3.  **Enhanced Tooling and IDE Support:** Modern IDEs (like VS Code) provide excellent autocompletion, navigation, and refactoring capabilities thanks to TypeScript's type information.
4.  **Scalability:** Helps manage complexity in large applications by providing a structured way to define data shapes and interactions.

## Setting Up TypeScript

To start using TypeScript, you first need to install the TypeScript compiler. This is typically done via npm (Node Package Manager).

1.  **Install Node.js and npm:** If you don't have them already, download and install Node.js from [nodejs.org](https://nodejs.org/). npm is included with Node.js.

2.  **Install TypeScript Globally:** Open your terminal or command prompt and run:

    ```bash
    npm install -g typescript
    ```

    This command installs the TypeScript compiler (`tsc`) globally on your system, allowing you to use it from any directory.

3.  **Initialize a TypeScript Project (Optional but Recommended):**
    Navigate to your project directory and run:

    ```bash
    tsc --init
    ```

    This command creates a `tsconfig.json` file in your current directory, which is the configuration file for your TypeScript project.

## `tsconfig.json`: The TypeScript Configuration File

The `tsconfig.json` file is crucial for any TypeScript project. It specifies the root files and the compiler options required to compile the project.

Here are some common `compilerOptions` you'll find and use:

*   `target`: Specifies the ECMAScript target version for the compiled JavaScript.
    *   **Example:** `"target": "es6"` (or `"es2015"`) compiles your TypeScript code to ES6 (ECMAScript 2015) JavaScript. This is a common setting for modern environments.

*   `module`: Specifies the module code generation.
    *   **Example:** `"module": "es6"` (or `"es2015"`) uses ES6 module syntax (import/export). Other common values include `"commonjs"` for Node.js environments.

*   `outDir`: Specifies the output directory for compiled JavaScript files.
    *   **Example:** `"outDir": "./dist"` will place all compiled `.js` files into a `dist` folder.

*   `rootDir`: Specifies the root directory of input files.
    *   **Example:** `"rootDir": "./src"` tells the compiler that your TypeScript source files are located in the `src` directory.

*   `strict`: Enables a broad range of strict type-checking options. It's highly recommended to keep this `true` for robust code.
    *   **Example:** `"strict": true`

*   `include`: An array of glob patterns that specify which files to include in the compilation.
    *   **Example:** `"include": ["src/**/*.ts"]` will include all `.ts` files within the `src` directory and its subdirectories.

*   `exclude`: An array of glob patterns that specify which files to exclude from the compilation.
    *   **Example:** `"exclude": ["node_modules", "dist"]` commonly excludes these directories. You can also exclude specific files like `"exclude": ["src/add.ts"]`.

*   `files`: An array of relative or absolute paths to be included in the compilation. Use this when you want to explicitly list specific files.
    *   **Example:** `"files": ["add.ts", "index.ts"]` will only compile these two files.

**Example `tsconfig.json` (simplified from your project):**

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "strict": true,
    // "outDir": "./dist", // Uncomment to output to a 'dist' folder
    // "rootDir": "./src", // Uncomment if your source files are in 'src'
    "skipLibCheck": true // Skips type checking of all declaration files (*.d.ts).
  },
  // "include": ["src/**/*.ts"], // Example: include all .ts files in 'src'
  // "exclude": ["node_modules"], // Example: exclude node_modules
  // "files": ["add.ts", "index.ts"] // Example: explicitly list files
}
```

## Compiling TypeScript

Once you have your TypeScript files and `tsconfig.json` set up, you can compile your code into JavaScript using the `tsc` command.

*   **Compile all files in the project (based on `tsconfig.json`):**

    ```bash
    tsc
    ```

*   **Compile a specific TypeScript file:**

    ```bash
    tsc yourFileName.ts
    ```

    **Example:** `tsc add.ts` will compile `add.ts` into `add.js`.

## Basic TypeScript Example

Let's look at a simple function written in TypeScript, similar to what you have in `add.ts` and `index.ts`.

**`add.ts`:**

```typescript
const add = (x: number, y: number): number => {
    return x + y;
}

console.log(add(5, 9));
```

In this example:
*   `x: number` and `y: number` specify that `x` and `y` must be numbers.
*   `: number` after the parameters specifies that the function `add` must return a number.

When compiled, this `add.ts` file will produce a `add.js` file (if `outDir` is not specified, it will be in the same directory):

**`add.js` (compiled output):**

```javascript
var add = function (x, y) {
    return x + y;
};
console.log(add(5, 9));
```

Notice how the type annotations are removed in the compiled JavaScript, as browsers and Node.js directly execute JavaScript.

This concludes your basic notes on TypeScript setup. Keep practicing, and you'll master it in no time!