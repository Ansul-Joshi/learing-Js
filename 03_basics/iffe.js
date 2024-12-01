// immediately invoked function expression (IIFE)

(function chai() {
    console.log("db connection");
    
})();
((name)=>{
    console.log(`${name} db connection two`);
    
})("Ansul")


//()()   due to global scope pollution iife function is use 

