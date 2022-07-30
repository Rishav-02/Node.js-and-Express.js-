//This npm is no longer support older version of node.js and JavaScript. This npm package is now pure on ECMAScript modules, also known as ESM, is the official standard format to package JavaScript, and fortunately Node.js supports it.

//Instruction:-
//We have to use import instead of require() in this package.
//Add "type": "module" to your package.json.
//Replace "main": "index.js" with "exports": "./index.js" in your package.json.

//Remove 'use strict'; from all JavaScript files.
//Replace all require()/module.export with import/export.

//At this time code doesn't run but when we change according to above written instruction then code run.

//"chalk" package supports Only ES6 code
import chalk from "chalk";

const name = "Sindre";
console.log(chalk.green("Hello"), name); //=> 'Hello Sindre'
console.log(chalk.green("Hello %s"), name); //string substitution

console.log(chalk.blue.bgRed.bold("Hello World!"));

//ES6 template literal
console.log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);
console.log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
console.log(chalk.hex("#FFA500")("Warning!"));
