const language = {
    js: "JavaScript",
    c: "C Programing",
    html: "Hypertext Markup Language",
    css: "Cascading Stylesheet"
}
let myArr2 = []
let i = 0;
for (const key in language) {
//    console.log(key); // giveing key Ex - 1
//    console.log(`${key} shortcut is ${language[key]}`);
    myArr2[i] =  language[key]
   i++;
}
console.log(myArr2);

 // Chaking if Works on array or not
let myArray = ["js","rub", "phy", "java", "cpp"]

for (const key in myArray) {
    // console.log(key); // Ex - 2
    // console.log(myArray[key]); // Ex - 3
    
}

// Map is not itritraable using for in 
// const map = new Map();
// map.set('IN', 'India')
// map.set('BG', 'Bangladash')
// map.set('POK', 'Pakistan')
// map.set('IN', 'India') // not including unique value get
// console.log(map); 

// for (const key in map) {
// //    console.log(key);
   
// }





/*
--------- Ex - 1 ---------
Output:
        js
        c
        html
        css



--------- Ex - 2 ---------
Output:
        0
        1
        2
        3
        4


--------- Ex - 3 ---------
Output:
        js
        rub
        phy
        java
        cpp
*/