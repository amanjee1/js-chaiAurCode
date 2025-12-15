//if variable is declared inside any {} than it cant be accessed outside of this {}

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a)//error!!
// console.log(b)//error!!
// console.log(c)//will print 30

// let a = 300
// if(true){
//     let a = 10
// }
// console.log(a);//will print 300

//at last of 21 somthing important

function one(){
    const username = "Aman"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

one()

// ++++++++++++++++ interesting ++++++++++++++++

addOne(5)//correct --> no error
function addOne(num){
    return num+1
}

addTwo(5)//will give an error finction declared as variable
const addTwo = function(num){
    return num+2
}
