//methods of js

const marvel_heros = ["spiderman","Thor","ironman"]
const dc_heros = ["Superman","Batman","flash"]

// marvel_heros.push(dc_heros)//it will take whole array as data

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);//will add element of dc to marvel and concat will be stored in new array

//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

////

const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)//.flat(pass depth in it)
console.log(real_another_array);

console.log(Array.isArray("Aman"));
console.log(Array.from("Aman"));
console.log(Array.from({name : "Aman"}));//will give empty array as it doesnt know whether to make array of keys or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));//.of will return new array from set of elements