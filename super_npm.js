//Go to npmjs.com to install package

//Write Command "npm init" then press Enter then fill all required detail.After fill all then a json file is created(package.json) with given detail. This npm.js file is use to acces the json file of superheroes that is download by writing command in cmd is "npm install superheroes" then a json file generated(package-lock.json).


const superheroes = require('superheroes');
const mySuperheroName = superheroes.random();

const supervillain = require('supervillains');
const mySupervillainName = supervillain.random();
console.log(mySuperheroName);
console.log(mySupervillainName);


// const mySuperhero = superheroes.all;
// console.log(mySuperhero);