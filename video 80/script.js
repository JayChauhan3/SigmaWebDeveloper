// let obj= {

//     a: 1,
//     b:"jc"
// }

// console.log(obj);

// let animal= {

//     eats: true
// }

// let rabbit= {

//     jumps: true
// }

// rabbit.__proto__ = animal;
// console.log(rabbit);


class Animal{

    constructor(name){
        this.name= name
        console.log('created');
    }

    eats(){
        console.log('khayenge');
    }
    jumps(){
        console.log('kudenge');
    }
}


class Lion extends Animal{
    constructor(name){
        super(name )
        console.log('created  Lion');
    }
    eats(){
        super.eats()
        console.log('khayenge bohot');
    }

}


let a = new Animal('bunny');
console.log(a);


let l = new Lion('Shera');
console.log(l);


//-----Run in console-----
// l instanceof Lion
// Lion instanceof Animal
// a instanceof Lion 
// l.eats()