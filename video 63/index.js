let fr= [ 'mango', 'banana','apple']



 fr.push("berry");
 fr.pop();
 fr.shift();
 console.log(fr);
 fr[0]='pineapple';
 fr.unshift('grapes');
 fr.unshift();
 fr.shift()
 fr.unshift('grapes')
 console.log(fr);
console.log(fr.toString());
console.log(fr.join(' and ')); 
console.log(fr.push( 3,4,5,6))
console.log(fr);
delete fr[5];
console.log(fr);

let a = [1,2,3]
let b = [4,5,6]
let c = [7,8,9]

console.log(a.concat(b,c));

console.log(a);
console.log(b);
console.log(c);

let num = [1,2,3,4,5,6,7,8]

num.splice(0,3) // 0= place; 3= remove 3 numbers from place
console.log(num)

num.splice(0,1,89,98) 
console.log(num)
