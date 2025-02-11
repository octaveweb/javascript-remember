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