// ================= NUMBER =================

const score = 100;
// console.log(score);


const balance = new Number(100); 
// console.log(balance);

// console.log(balance.toString().length); 

// toFixed 
// =============
                                         /*_____*/
// console.log(balance.toFixed(3)); // Add 100.00000 this part


// toPrecision
// =============
const someNumber = 100.45;
// console.log(someNumber.toPrecision(7));
/*
1235.8966 so what happning here??

          this 3 decimal number
                |||                _
think like this 100.45.toPrecision(3)
output is : {100}
but .toPrecision(4)
output is : {100.5}

but .toPrecision(5)
output is : {100.45}

but .toPrecision(6)
output is : {100.450}

but .toPrecision(7)
output is : {100.4500}

*/

let hundreas = 10000000; 
// console.log(hundreas.toLocaleString()); // USA
// console.log(hundreas.toLocaleString('en-IN')); // INDIA


// ================= MATHS =================


// console.log(Math); // put in console of browser 
// console.log(Math.abs(-4)); // change negitive value to positive value
// console.log(Math.abs(4));  // not positive to negitive
// console.log(" ")
// console.log(Math.round(4.4));// {4}
// console.log(Math.round(4.6));// {5}
// console.log(Math.min(0,4 ,6 , 5 , 8));


 
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10 // Start 
const max = 20 // Range 

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Formula