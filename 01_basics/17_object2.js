//const tinderUser = new Object() //singleton object

const tinderUser = {}//non singleton
tinderUser.id = "123abc"
tinderUser.name = "Aman"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "123@gmail.com",
    fullname : {
        userfullname : {
            firstName : "Aman",
            lastName : "Dwivedi"
        }
    }
}

console.log(regularUser.fullname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

// const obj3 = Object.assign({}, obj1, obj2)//Object.assign({}//opetional parameter--> to make sure all object lies within this object, obj1, obj2, .....)
// console.log(obj3)

//spread operator same as array

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {

    },
    {
        id : 123,
        name : "Aman"
    },
    {

    }
]//array of objects
//to access element --> users[1].id

console.log(Object.keys(tinderUser));//output value datatype will be array so we can apply may operations on it like looping
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//will make array of array --> [["key1",value1], ["key2", value2], .....]

console.log(tinderUser.hasOwnProperty('isLogged'));
