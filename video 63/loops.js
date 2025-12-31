let a = [1,93,5,6,88]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)}
                       
    a.forEach((value, index,arr) => {
        console.log(value, index,arr)
    });


    let object = {
        a:1, b:2, c:3
    }

    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            const element = object[key];
            console.log(element,key)
        }
       
    }

   for (const element of a) {
    console.log(element)
   }
    
    
