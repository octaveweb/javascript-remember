
// _________ Section 1 _________

const marvelHeros = ["Spiderman", "ironman", "thore"];
const dcHero = ["superman", "flash", "batman"]

// marvelHeros.push(dcHero)

// console.log(marvelHeros); 
                                     // Arrya included as a element
                                    // ________________________________
// [ 'Spiderman', 'ironman', 'thore', [ 'superman', 'flash', 'batman' ] ]


// console.log(marvelHeros[3][1]); 
/* Output:
        { flash }
*/

// _________ Section 2 _________

const allHeros = marvelHeros.concat(dcHero)
// console.log(marvelHeros) 
// [ 'Spiderman', 'ironman', 'thore', [ 'superman', 'flash', 'batman' ] ]

// console.log(allHeros); // return a new array
/* 
Output {
    [ 'Spiderman', 'ironman', 'thore', 'superman', 'flash', 'batman' ]
}
*/

//////////// Sprade oprator //////////////

// Same output or use case like concat 

const allNewHero = [...marvelHeros, ...dcHero];
// console.log(allNewHero);

const arrySubArrDeepArray = [1,2,3,[4,5,6], 7, [6,7,[4,5]]];

const flat = arrySubArrDeepArray.flat(Infinity);
console.log(flat);
/*
Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

===== Flat =====
 Output:
 [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]

*/

// _________ Section 3 _________

console.log(Array.isArray("karan"));
console.log(Array.from("karan"));
console.log(Array.from({name:"Karan"})); // interesting array methord

let scroe1  = 100
let scroe2  = 200
let scroe3  = 300
console.log(Array.of(scroe1,scroe2,scroe3));
