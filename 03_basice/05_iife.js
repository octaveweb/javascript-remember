// Immediately Invoked Function Expression (IIFE)

// Normal Function create and diclation 
/*
function dbconn() {
    console.log("DB connected");
}
dbconn() 
*/

// IIFE Function create to connect with database 
/*
What is IIFE??
-- IIFE is a function that excute immediately 
and faching problem by globel scope ploution  
to privent we use IIFE,
*/
(function dbconn() {
    //named IIFE
    console.log("DB connected");
})(); // ; --- most imporent  

// Arrow
( () =>{
    console.log("DB connection 2");
    
} )()

// Example
( (name) =>{
    console.log(`DB connection 2 of ${name}`);
    
} )("Karan")