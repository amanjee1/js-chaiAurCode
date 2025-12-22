function SetUsername(username){
    //complex DB calls
    this.username = username
}

function createUser(username, email, password){
    //SetUsername(username)  //this call will not be made
    SetUsername.call(this, username)//.call will be used  and upon using this refrence anyhting that is happening inside called function will be held inside calling function

    this.email = email
    this.password = password
}

const chai = new createUser('chai','chai@fb.com','123')
console.log(chai)