 //array

 const myArr = [0,1,22,99,4,5,true,"aman"]

 console.log(myArr[0]);
 //shallow copy of an object is a copy whose properties share the same refrences
 //deep copy --> no same refrance


 //JS array copy operations create shallow copies

 const myHeros = ["Spiderman","ironMan"]
 const myArr2 = new Array(2,5,3,6)

//Array methods

//myArr.push(6)
//myArr.pop()//remove last element

myArr.unshift(9)//will add an element at the start of array
console.log(myArr);
myArr.shift()//will remove element at start of array
console.log(myArr);
console.log(myArr.includes(0));//will return true or false if 0 exists in array
console.log(myArr.indexOf(22));//if this value exist will give index of that element
console.log(myArr.indexOf(10));//if it does not exist will give -1

const newArr = myArr.join()//adds all elements of an array into string
console.log(newArr);
console.log(myArr);
console.log(typeof newArr)

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)

//splice will manipulate original array will remove all elements from range (1,3) and will also include last element
console.log("C ",myArr);
console.log(myn2);

