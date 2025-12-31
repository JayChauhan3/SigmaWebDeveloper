// async function getData() {
//     return new Promise ((resolve, reject) => {
//         setTimeout (() => {
//             resolve(455)
//         }, 3500);

//     })
// }

async function getData() {
   
     
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
let data = await x.json() 
return data
    
}

async function main() {
    console.log("hi how are you?")

    console.log("Load data")

    let data = await getData()

    console.log(data)
    console.log("data processed")
    console.log("task 2")
}

main()


