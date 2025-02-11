let score = 33;
let score2 = "33sf";
let score3 = null;
let score4 = undefined;

console.log(typeof score); // {number}
console.log(typeof (score)); // {number}

console.log(typeof score2); // {string}
console.log(typeof (score2)); // {string}



// Number() change every theng to number 
let convertStringToNumber = Number(score2); // convert to number
console.log(convertStringToNumber); // {NaN} stands for NOT A NUMBER 
console.log(typeof convertStringToNumber); // typeOf convertStringToNumber is : {Number}


console.log(typeof score3); // typeOf null is : {Object}
console.log(typeof score4); // typeOf undefined is : {undefined}

// converting string to number
console.log(score3); // print as null

let nullToNumber = Number(score3); 
console.log(nullToNumber); // become : {0}

// "43" => 43
// "43abc" => NaN
// true => 1 ; false =>0;

let login = 1;
let login2 = 0;


let numberBoolean = Boolean(login);
console.table([login,numberBoolean]);


let numberBoolean2 = Boolean(login2);
console.table([login2,numberBoolean2]);

let someNumber = 20;

let numToString = String(someNumber);

console.table([someNumber,numToString, typeof nullToNumber]);
