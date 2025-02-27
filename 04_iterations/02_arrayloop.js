//Array looping


// for of 
// ["", "", ""];
// [{},{},{}]

let myArr = []
for (let i = 0; i < 100; i++) {
    // myArr[i] = i + 1;
}
for (const num of myArr) {
    // console.log(num);
}
// console.log(myArr);

const greetings = "Hello World";
let itr = 0;
for (const greet of greetings) {
    myArr[greet] = greet;
    if (myArr[greet] == " ") {
        // console.log("Oppps! Space here")
        continue;
    }
    // console.log(`index ${itr} = ${greet}`)
    itr++;
}

// Maps 
/*
const map = new Map();
map.set('IN', 'India')
map.set('BG', 'Bangladash')
map.set('POK', 'Pakistan')
map.set('IN', 'India') // not including unique value get
console.log(map); 
for (const [key, value] of map) {
    // console.log(key, ":-" , value);
    
}
    */

 // Chaking if Works on Objects or not___

const myObj = {
    game1: "nfs",
    game2: "mindcreft"
}
for (const [key,value] of myObj) {
    console.log(key, ": ", value); 
    // output {myObj is not iterable}
    
    // Output: Not Working___
}