
const fs = require("fs");

// C:\Users\mohhossa\Desktop\programmingProjects\learning-node\texts\read.txt
const readFile = fs.readFileSync('./texts/read.txt', 'utf-8');
// console.log(readFile);

fs.readFile('./texts/read.txt', 'utf-8', (err, data)=>{
    if(err)
        throw err;
    console.log(data);
})


