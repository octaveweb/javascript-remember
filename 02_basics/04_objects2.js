// const youtube = new Object() //  Singleton objects: 

//  no_singleton objects: 
const youtube = {}
youtube.id = "123qe";
youtube.name = "Pradip";
youtube.isLoggin = false;

// console.log(youtube); 
/* Output:
         { id: '123qe', name: 'Pradip', isLoggin: false }
*/

const regulerUser = {
    email: "pradip@gamil.com",
    fullname: {
        userfullname: {
            firstname: "Karan",
            lastname: "Swarnakar"
        }
    }
}
// console.log(regulerUser.fullname.userfullname.firstname);


// _________ Section 3 _________


const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// Part 1

// const obj3 = { obj1, obj2}
// console.log(obj3);

/*
Output: 
        { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
         same problem like array
*/

// Part 2

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
/*
Output: 
       { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
*/

// Part 3

const obj3 = {...obj1,...obj2};
console.log(obj3);
/*
Output: 
       { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
        same as part 2 output 
*/

// DataBase 

const users = [
    {
        id: 1,
        email:"k@gmail.com"
    },
    {
        id: 1,
        email:"k@gmail.com"
    },
    {
        id: 1,
        email:"k@gmail.com"
    }
]
// users[1].email
// console.log(youtube);

console.log(Object.keys(youtube));
console.log(Object.values(youtube));
console.log(Object.entries(youtube));

console.log(youtube.hasOwnProperty('isLoggin')); 
/* check in object that if isLoggin exist or not 
    return type {Boolen}
    Output: {true}
*/
