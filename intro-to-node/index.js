const fs = require("fs");
fs.copyFileSync("file1.txt","file2.txt");

const heroes = require("superheroes");
var name;
name= heroes.random();
console.log("You are "+name);

const villian = require("supervillains");
var v;
v= villian.random();
console.log("You are "+v);
