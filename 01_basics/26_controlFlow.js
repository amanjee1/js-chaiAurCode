// === 
// 2 == "2" will give true value wise 
//but 2 === "2" will give false as it alse checks type of both data

// !== 

//single line if else possible same as c/c++


//switcj syntex

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//if we dont use break in between case than it will execute all block of cases below that except default

//falsy values ---> false,0,-0,BigInt 0n,"",null,undefined,NaN
//truthy values --> "0","false"," ",[],{},function(){}

let emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Empty Object");
}

//Nullish Coalescing Operator (??) : null undefinded

let val1;
val1 = 5 ?? 10//it will get first value
let val2 = null ?? 10//it will get not null value
let val3 = undefined ?? 14

//jo bhi first value milegi whi assign ho jayega
console.log(val1 , val2, val3);

//ternery operator same as in c/c++
 