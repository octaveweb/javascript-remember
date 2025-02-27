/*
const number = [1,2,3]


// Normal
const addindAllarrElements = number.reduce(function (previousValue,currentValue){
    // console.log(`previousValue: ${previousValue} and CurrentValue: ${currentValue}`);
    return previousValue + currentValue
},0)
// console.log(addindAllarrElements);


//Arrow Function
const newApproch = number.reduce((preVla, currVal)=> preVla + currVal,0 )
console.log(newApproch);
*/

const sopingCart = [
    {
        item:"Diss Waser",
        price: 599
    },
    {
        item:"Hand Wash",
        price: 199
    },
    {
        item:"Finile",
        price: 499
    },
    {
        item:"Water",
        price: 59
    },
]
const totalPriceofCart = sopingCart.reduce((pV, cV )=> pV + cV.price,0)
console.log(totalPriceofCart);
