const accountId = 123; // none to be change again
let accountEmail = "demo@gmail.com"; 
var accountPass = "789654123";
accountCity = "Kolkata";

let accountState;

// accountId = 8; // not allowed

// console.log(accountId);

accountEmail = "n@gmail.com";
accountPass = "123"
accountCity = "Madhyamgram"

// not use in multipal prints 

// console.log(accountEmail);
// console.log(accountPass);
// console.log(accountCity);

// for multipal prints 

console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountCity,accountState]);


// known as schop
{
//problem created by var
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
}