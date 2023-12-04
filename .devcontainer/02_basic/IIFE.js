// Immediately Invoked Function Expressions (IIFE)
//this is to used to immediately run the function and to avoid the global scope pollution 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

(function Bun(name){

    console.log(`Hey Ram mujhe bacha lo ${name}`)
})(`Anuj`);

( 
    (name)=>{
        console.log(`Please help me ${name}`); 
})(`vashu`);

