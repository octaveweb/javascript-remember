// For
for (let i = 0; i <= 9; i++) {
    // console.log(i+1);
        
}
/*
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    console.log(`Tablt of  ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and Outer loop valur ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
        

    }
}
    */

// let myArr = ["Flash", "Batman", "Supper" ]
// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     console.log(element +" " + i);
    
// }

// break and continue
/*
for (let i = 1; i < 10; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
}

for (let i = 1; i < 10; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}
*/

// do while / while 
/*
let i=0;
while (i<=10) {
    console.log(`Value of ${i}`);
    i = i+2;
    
}
let myArr = ["Superman", "Batman", "Flash"];
let i = 0;
while (i < myArr.length) {
    console.log(`index ${i}: ${myArr[i]}`);
    i = i+1;
}
*/

let score = 1;
do {
    console.log(`Score is ${score}`);
    
} while (score <=10);