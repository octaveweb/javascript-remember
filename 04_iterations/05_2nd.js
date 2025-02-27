const number = [1,2,3,4,5,6,7,8,9,10]
let addinTeninAllarrayEllement = number.map( (num) => num+10 ); // returns a new array
console.log(addinTeninAllarrayEllement);
// Channing of methords 
let channing = number
                    .map((num) => num*10)
                    .map((num)=> num + 1 )
                    .filter((num)=> num >= 50)

console.log(channing);
