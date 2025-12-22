function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

//function is function and it is object as well

function createUser(username, score){
    this.username = username 
    this.score = score
}
//inserting my own method in function as function is a type of object
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const chai = new createUser('chai',25)
const tea = new createUser('tea',250)

chai.printMe()

//check for notes form same folder of file same name of hiteshchaudhery github