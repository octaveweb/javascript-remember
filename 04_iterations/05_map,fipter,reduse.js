// let language = [ 'JavaScript', 'Phython', 'Css' ]

// const values = language.forEach( (item) => {
//     console.log(item);// not returing any valye 
//     return item;// not returing any valye 
// });
// console.log(values); // Output is: {undefined}

let myNums = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10
]
// EX - 1
// const newNums = myNums.filter((num)=>{
//     return num >4

// })


// EX - 2

// const newNums = myNums.filter((num)=> num >4 )
// console.log(newNums);

// EX - 3

let newNums = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
})
// console.log(newNums);

// Ex - 4


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
//   const userBooks = books.filter((bk)=> bk.genre === "History" ) 
  // const publishBef2000 = books.filter((bk)=> bk.publish < 2000 && bk.genre === "History") 

//   console.log(userBooks);
  console.log(publishBef2000);
//   console.log(publishBef2000.length);
  