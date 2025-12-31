import fs from "fs/promises"
let a = await fs.readFile("harry.txt")
// let b = await fs.writeFile("harry.txt","\n\n\nnew promise")   //remove the existing data and then write new data what you adding
let c = await fs.appendFile("harry.txt","ha ha")  
console.log(a.toString(),c);
 