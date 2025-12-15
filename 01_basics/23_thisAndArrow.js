const user = {
    username : "Aman",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);//this talks about current context
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);
//most global object in browser --> window (imp)

function chai(){
    console.log(this);
    let username = "Aman"
    console.log(this.username);//undefined--> only work under context of objecct
    
}

chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

//Implicit return
//const addTwo = (num1,num2) => (num1 + num2)// {} if we use this bracket than return required else () no return keyword required
const addTwo = (num1,num2) => ({username : "aman"})

console.log(addTwo(3,4));
