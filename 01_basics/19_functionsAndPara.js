// function myName(){
//     console.log("Aman");
// }
// myName()

// function add(num1, num2){
//     return num1 + num2
// }

// console.log(add(5,3));

// function login(username = "sam"){//now if we pass nothing as argument than it will consider sam as string
//     if(username == undefined){
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(login("Aman"));
// console.log(login());//undefined is paseed as argument


// ... is ks rest or spred based upon its usage
function calcCartPrice(...num1){
    return num1//will return all argumants as array
}
console.log(calcCartPrice(200,600,454));

const user = {
    username : "Aman",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);
handleObject({
    username : "sam",
    price : 299
});
