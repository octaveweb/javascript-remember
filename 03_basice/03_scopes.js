// ============= Part 1 ============= // 

var c = 300
/* so in this case var c is declared as per 300
and in a block of if we see a another c is 
declared but on the use case of var  a problem arived
i assined,
c as 300 // on top 
and in if block c = 30
when ever i want to print var there was some problem 
arived that is the problrm of scope,


*/
let a = 700

if (78) {
    const a = 10;
    let b = 20;
    var c = 30;
}
// console.log(a);{error due to scope // normal}
// console.log(b);{error due to scope // normal}
// console.log(c);{error due to scope // not normal}
console.log(c); 
// output{ 30 }
console.log(a);
// output{ 700 }

// ============= Part 2 ============= // 

function one(){

    // const b1 = "macroBot";
    // console.log(b1); 
    // excute proparly becouse of scope

    const username = "Karan Swarnakar"
    function two(){
        const editor  = "VScode"
        console.log(username);   
    }
    two()
    // console.log(editor); // throw an error
      
}
one()
// console.log(username); // throw an error

// const b1 = "mBot";
// console.log(b1); 
// excute proparly becouse of scope

/* 
here a story enters that ones upon a time 
there was two kids first one is 
big brother and second one is yongerone 
"they eating a ice cream so if the biger one
snatch the ice-creem dose it in general or
the littel one snatch that is ok"
*/
let str = " follow for more on "
if (true) {
    const username = "karan@007"
    if (username === "karan@007") {
        const website = "octiveWeb"
        console.log(username + `${str}` + website );
        
    }
    // console.log(website); // throw an error
    
}
// console.log(username); // throw an error

//=================_Interesting_=================//

/*
what if i put function on top
*/

//////////////// PART 1 ////////////////

console.log(addOne(5)) // 2nd approch and it is working

function addOne(num){
    return num + 1;
}
// console.log(addOne(5)) // no dout 6 first approch



//////////////// PART 2 ////////////////

console.log(addTwo(5)); // not working or throwing error
// no dout 7 first secound
/*
Output:
        ERROR {Cannot access 'addTwo' before initialization}
*/
const addTwo = function(num){
    return num + 2;
} 
// console.log(addTwo(5)); // no dout 7 first approch
