const user = {
    username : "Aman",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        //console.log('Got User Details from DataBase');
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username)
// console.log(user.getUserDetails());

//console.log(this)

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("Aman",12,true)
const userTwo = new User('chaiaurcode',11,false)
//console.log(userOne);//without using new keyword usertwo will overwrite userone


//using new key word step1 -> new object is getting created
//step2 --> constructor function gets called due to new keyword
//step3 --> this keyword will hold all arguments

console.log(userOne.constructor);//constructor property is refrence about itself


