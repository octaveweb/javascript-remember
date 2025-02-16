// Singleton
// Object.create

// === start ===
// Object literals
const mySum = Symbol("key1")

const jsuser = {
    name: "Karan",
    "full Name": "Karan Swarnakar",
    mySum: "myKey1", // not currect
    [mySum]: "myKey1", // currect syntext to add sumbole
    age: 20,
    location: "Kolkata",
    email: "karan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday"]
}

// console.log(jsuser.email)
// console.log(jsuser[email]) // throw an error 
// console.log(jsuser["email"]) // throw an error 
/* 
becouse behaing the seen
object key store as a string

Example:
const jsuser = {

    it is store as a string
    |||||
    ____
    name: "Karan"
}
*/

// console.log(jsuser.full name); // throw an error 

// console.log(jsuser["full Name"]); // this is the currect virsion
// console.log(jsuser.mySum); // this is the currect virsion

// console.log(typeof jsuser.mySum); // return output is {string}
// console.log(typeof jsuser[mySum]); // return output is {string} but using "Sumbol"

jsuser.email = "kk@hmail.com" // any one can overwrite 
// console.log(jsuser.email); // Output: {kk@hmail.com}

// To Prevent it:

/*
to prevent it we have to freeze it 
how lest see!
*/

// Object.freeze(jsuser);

// jsuser.name = "Powre ranger" // try to name overwrite 
// console.log(jsuser); 
/* Output: {
    name: 'Karan',
    'full Name': 'Karan Swarnakar',
    mySum: 'myKey1',
    age: 20,
    location: 'Kolkata',
    email: 'kk@hmail.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Sunday', 'Monday' ],
    [Symbol(key1)]: 'myKey1'
  } */

jsuser.greeting = function () {
    console.log("Hello Js User");

}

jsuser.greeting2 = function () {
    console.log(`Hello Js User, ${this.name}`);

}
console.log(jsuser.greeting());
/* Output:
            Hello Js User
            undefined

*/
console.log(jsuser.greeting2());
/* Output:
            Hello Js User, Karan
            undefined
*/

