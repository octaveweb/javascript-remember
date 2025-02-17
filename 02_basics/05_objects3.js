////////////----Object Destructuring in JavaScript----////////////

const course = {
    coursename: "karan op yt",
    price: "999",
    courceProvider: "Karan"
}
/* To get the name of provider*/
// console.log(course.courceProvider)

/* To get the name of provider but in extract format*/
const { courceProvider } = course
console.log(courceProvider);

/* same thing in extract format but the 
the name is so Big "courceProvider" i dont 
to type this 
so, 
*/
const { courceProvider: owner } = course
console.log(owner);

// API
/*

____ Json Format _____
{
    maneOwnwe: "karan",
    "admin": true
}

    [
        {},
        {},
        {}
    ]   
    */