//singleton object --> Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Aman",// key : value --> key will be by default string
    "full Name" : "Aman Dwivedi",//cant access it through . method
    [mySym] : "myKey1",//to use key as symbol put it into [] bracket
    age : 20,
    location : "Kanpur",
    email : "aman@gmail.com",
    isLoggedIn : false,
    lastLogginDays : ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])//pass key as string 
console.log(typeof JsUser.mySym);

JsUser.email = "AmanChatGPT.com"
//Object.freeze(JsUser);//now no changes can be made to this object
//JsUser.email = "AmanGemini.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function(){
    console.log(`My name is ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());