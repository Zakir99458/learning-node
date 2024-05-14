// Local Module
    // const {a, add} = require("./local-1");

    // console.log(add(2,3));

    // Built-in Module
    // const path = require("node:path");
    // console.log(path.join("C:/Users/mohhossa/Desktop/programmingProjects/learning-node/", "index.js"));
    // console.log(path.join("C:/Users/mohhossa/Desktop/programmingProjects/learning-node/", "index.js"));
const fs = require("fs");
const readFile = fs.readFileSync('./texts/read.txt', 'utf-8')
const writeText = fs.writeFileSync('./texts/write.txt', readFile + "hello, I have written..")
console.log(writeText);

