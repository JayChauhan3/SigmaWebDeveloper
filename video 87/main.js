const fs = require ("fs")
// console.log(fs);
console.log('starting');
fs.writeFileSync('harry.txt','i am harry')
fs.writeFile('harry2.txt','harry3',()=>{
    console.log('done');
    
})
console.log('ending');


fs.appendFile("harry.txt","Appending new data",(e,d)=>{
    console.log(d);
    
})