const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(typeof(balance));
console.log(balance.toFixed(2));

const otherNumber = 123.543543
console.log(otherNumber.toPrecision(3));//it will give significant digit for ex 1122 .toPrecision(3) ==> 1.12e+3

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));//comma lagana numbers ke beech me in indian system
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);


//+++++++++++++++++ MATHS ++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.52));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,2,62,56));

console.log(Math.random());//this value will always lie b/w 0-1
console.log(Math.floor(Math.random()*10 + 1));//to handle random values like 0.04 we add + 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min);