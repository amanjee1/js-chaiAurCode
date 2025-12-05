const name = "Aman"
const repoCount = 50

const gameName = new String('aman-hc')
//console.log(name + repoCount + " Value");

//backTicks

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());//it will not change original string it is just creating deep copy of object
console.log(gameName.charAt(5));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4)//it will not consider 4th index
console.log(newString);

const anotherString = gameName.slice(-5,4)//we can use negative values inside it but not in substring
console.log(anotherString);

const newString1 = "  aman   ";
console.log(newString1);
console.log(newString1.trim());//this method only works on white spaces + line terminators

const url = "https://aman.com/aman%20dwivedi";

console.log(url.replace('%20', '-'));

console.log(url.includes('aman'));//whether exists in string

console.log(gameName.split('-'));//split string at - 
