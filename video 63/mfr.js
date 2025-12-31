let a = [1,13,5,7,11]
let newArr = []
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    newArr.push(element**2);
  
    
}  console.log(newArr);




//map
let bArr = a.map((e,index,arr)=>{
    return e**2
})
console.log(bArr);


const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(a.filter(greaterThanSeven))


let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))



Array.from("jay") //run on console
