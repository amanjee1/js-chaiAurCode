//A promise is an object representing the eventual completion or failiure of an asynchronous operation
const promiseOne = new Promise(function(resolve, reject){
    //DO an async cast
    //DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is compolete');
        resolve()//now it gets connected with .then
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed')
})//.then has direct connection with resolve


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Chai", email : 'chai@example.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})//u can pass parameter inside resolve function which will be passed into function inside .then

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : 'Aman', password : '1234'})
        }
        else{
            reject('Error : Something Went Wrong')
        }
    }, 1000)
})

//chaining of .then

promiseFour
.then((user) => {
    console.log(user);
    return  user.username
})
.then((username) => {//value which will be returned from upper .then will be passed inside function of this .then
    console.log(username)
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log('Promise is either resolved or rejected'))
 
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : 'javascript', password : '1234'})
        }
        else{
            reject('Error : JS Went Wrong')
        }
    }, 1000)
})

//async await

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
//         const data = await response.json()
//         console.log(data);
//     }catch (error){
//         console.log('E: ',error);
//     }
// }

//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log('Error handeled'))




//IMPORTANT --> if u have reuested something from promise and u get an error code 404 than u will get that in resolve not reject
//REASON --> u will get error only in that case if browser was not able to make request
//toh agr request send ho gyi tab woh resolve ka hi part hoga chahe q na baad me error 404 mile
//agr request nhi gyi toh reject