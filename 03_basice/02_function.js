// Part 1______________________

// function calculateCardPrice(num1){ 

//     return num1
// }
// console.log(calculateCardPrice(200, 300, 400,500));
/*
Output:
        {200}
*/

// Part 2________________________

// function calculateCardPrice(...num1){ // rest oprator
    
//     return num1
// }
// console.log(calculateCardPrice(200, 300, 400,500));
/*
Output:
        { 
            [ 200, 300, 400, 500 ] 
        }
*/

// Part 3__________________________
function calculateCardPrice(val1, var2, ...num1){ // rest oprator
    
    return num1
}
// console.log(calculateCardPrice(200, 300, 400,500));
/*
Output:
        { 
            [ 400, 500 ] 
        }

        becouse 200, 300 this two value
        are in val1 and val2
*/


const user = {
    username:"Karan",
    price:199
}
function handelObject(anyobject){
console.log(`User is ${anyobject.username} and price is ${anyobject.price}`);

}
// handelObject(user)
handelObject({
    username: "noobBhi",
    price:459
})


