

console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
   
        let a = Math.random();

        if (a < 0.5) {
            reject("not support random number")
        }
        else {
            setTimeout(() => {
            console.log('yes I am done');
            resolve("Harry");
        }, 3000);
}
       
})

let prom2 = new Promise((resolve, reject) => {
   
        let a = Math.random();

        if (a < 0.5) {
            reject("not support random number 2")
        }
        else {
            setTimeout(() => {
            console.log('yes I am done 2');
            resolve("Harry 2");
        }, 1000);
}
       
})

prom1.then((a) => {
    console.log(a)
    
}).catch((err) => {
    console.log(err);
  });



let p3 = Promise.all([prom1,prom2])
p3.then((a) => {
    console.log(a)
    
}).catch((err) => {
    console.log(err);
  });