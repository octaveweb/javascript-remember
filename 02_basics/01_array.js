// Array

const myArray = [0,1,2,3,4,5]
const myHeros = ["SuperMan", "ironMan"]

const myArray2 = new Array(1,2,3,4)
// console.log(myArray2[2]);

// Array methords

// myArray.push(45);  // add from end [ exsisting elemints ,45]

// myArray.push(785); // add from end [ exsisting elemints, 45, 785]

// myArray.pop(); // pop out from end 

// myArray.unshift(8); // add from start [ 8, exsisting elemints ]

// myArray.shift();// remove first elements from array

// console.log(myArray.includes(52)) // return true or false
// console.log(myArray.indexOf(18)) // {-1} becouse it is not present on the array
// console.log(myArray.indexOf(2)) // 2 is present on the (0 1 2} 2 number index

const newArray = myArray.join()

console.log(myArray); 
// console.log(newArray); 
// console.log(typeof newArray); // output {string}


////////// Slice, Splice ///////////

console.log("A ", myArray);
// A  [ 0, 1, 2, 3, 4, 5 ] origanal array
console.log(" ");

const myn1 = myArray.slice(1, 3)  


console.log(myn1);
// return {   [ 1, 2 ]    }

console.log("B ", myArray); // Origanal array none change or not modify
// output {B  [ 0, 1, 2, 3, 4, 5 ]}
console.log(" ");


const myn2 = myArray.splice(1, 3)  // Origanal array got change or modify
console.log("C ", myArray);
// C  [ 0, 4, 5 ] 
console.log(" ");
console.log(myn2);
// return {   [ 1, 2, 3 ]    }


/*
{
=========== Slice(1, 3) =========== 

         indexOf 0 1 2 3 4 5 
                 | | | | | |
const myArray = [0,1,2,3,4,5]

let Slice = myArray.slice(1, 3)({

                      __ >> pick this two not include 3 (range {1,2})
                     | |
                    | | >>__ >> 3 position not  including
                   | | |
         indexOf 0 1 2 3 4 5 
                 | | | | | |
const myArray = [0,1,2,3,4,5]

___ Do not change Array on not modify it

so, myArray = [0,1,2,3,4,5] will be the same as previous

and it returns range [1,2]

});



===========  Splice(1, 3) =========== 



let Splice =  myArray.splice(1, 3)({

                     ____ >> pick 1 to 3 includs range {1 2 3}
                    | | |
         indexOf 0 1 2 3 4 5 
                 | | | | | |
const myArray = [0,1,2,3,4,5]



___ Change Array and modify it

so, myArray = [0,4,5] will be change and modifyed

and it returns range [1 2 3]

});


}
*/