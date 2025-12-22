// let myName = 'aman    '
// let mtchannel = 'chai    '

// console.log(myName.truelength);

let myHeros = ['thor','hulk']

let heroPower = {
    thor : 'Hammer',
    hulk : 'Smash',

    getSmashPower: function(){
        console.log(`hulk power is ${this.hulk}`);
    }
}
//we are trying to inject some function directly to Object 

Object.prototype.aman = function(){
    console.log(`Aman is present in all objects`)
}

Array.prototype.heyaman = function(){
    console.log(`Aman says hello`);
}
//heroPower.aman()
myHeros.aman()
//heroPower.heyaman()//this object class will not access methods of Array datatype

//as every object funtion will pass to end of all methods regarding that own datatype and object so myheros will also pass to Object and it will find function name aman()


//inharitance

const user = {
    name : 'chai',
    email : 'cjai@google.com'
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    makeAssignment : 'JS assignment',
    fullTime: true,
    __proto__: Teacher//innheritance
}

Teacher.__proto__ = user//it is used for inheritance


//morden syntex
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = 'chaiAurCode    '
String.prototype.trueLength = function(){
    console.log(`${this}`); //this will correspond to current context which is calling this function
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
'Aman'.trueLength()