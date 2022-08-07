//Under the hood, NodeJS does not run our code directly, it wraps the entire code inside a function before execution. This function is termed as Module Wrapper Function.

//Use of Module Wrapper Function in NodeJS:

/* 1.The top-level variables declared with var, const, or let are scoped to the module rather than to the global object.
2. It provides some global-looking variables that are specific to the module, such as:
--> The module and exports object that can be used to export values from the module.
--> The variables like  __filename and __dirname, that tells us the module’s absolute filename and its directory path. */


//(exports, require, module, _filename, __dirname) these all have local scope in all modules of Node.js thats why we always use these function and variable in Nodejs.

(function(exports, require, module, _filename, __dirname){
    const name = "Rishav";
    console.log(name);
});