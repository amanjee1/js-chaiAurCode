//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();  //we use IIFE just to avoid problem from global scope variable or to avoid problem caused by global pollution

//to write multiple IIFE use semicolon at the end

((name) => {
    //unnmaed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Aman');