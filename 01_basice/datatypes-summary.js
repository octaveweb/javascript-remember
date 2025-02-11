// Two type of Data
// 1. Primitive DataType
// 2. Reference (nonprimitive) DataType



// Primitive DataType
// -------------------------------------------------------------

// theire are 7 type of primitive data

/*
1.  N = {Number} 
2.  N = {Null}
3.  B = {Boolean}
4.  B = {BigInt}
5.  S = {String}
6.  S = {Symbol}
7.  U = {undefined}
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Rererence (noneprimitive)
// -------------------------------------------------------------


// Array, Object, Functions 


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ********************* Memory ************************

// Stack (Primitive), Heap (nonPrimitive)

/*
Stack is nothing but a cake pile up one to anoyher,
 it is a copy of origanal value.
*/
let myYoutubeName = "KaranOP_YT"; // output is : {KaranOP_YT}
let anotherName = myYoutubeName; // output is : {KaranOP_YT}

anotherName = "JavaScript" // chenge vale 

console.log(myYoutubeName);// output is : {KaranOP_YT} it is same as privouse 
console.log(anotherName); // output is : {JavaScript} but it is change as per we change


/*
Heap is one cup of tea,
if drink then change quntity in this case email.
*/

let userOne = {
    email:"karan@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne;


// changing the value of userTwo but effect the fist one both change

userTwo.email = "xyz@yml.com";

console.log(userOne.email);//output is : {xyz@yml.com}........both change
console.log(userTwo.email); // output is : {xyz@yml.com}........both change
