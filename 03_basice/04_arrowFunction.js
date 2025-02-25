const user = { //point A
    username: "Karan Swarnakar",
    login: true,
    price: 999,
    welcomeMassage: function () {
        // console.log(`${username}, welcome to our cource`); 
        // throw an error to prevent it use "this.username" 
        /*
        it refers to current context 
        in this case point A to point B
        */
        console.log(`${this.username}, welcome to our cource`);
        // console.log(this); // take about current context

        //point B
    }
}

// user.welcomeMassage()
// user.username = "KaranOP_YT"
// user.welcomeMassage()
// console.log(this);

// const f1 = function thisFun() {
//     let username = "karan"
//     console.log(this.username);
        // Output:
        //{ undefined }
// }
// f1()


const f2 = ()=> {
    let username = "karan"
    console.log(this.username);
        // Output:
        // { undefined }
}
// f2()

// ()=>{} arrow function


// part 1______________
// let addTwoNumbers = (n1,n2)=>{
//     return n1 + n2;
// }
// console.log(addTwoNumbers(4,5));

// part 2______________
/// explicit return ///
// let addTwoNumbers = (n1,n2) =>  n1 + n2
// console.log(addTwoNumbers(4,5));

// part 3______________
/// implicit return ///
let addTwoNumbers = (n1,n2) =>  (n1 + n2);
console.log(addTwoNumbers(4,5));
// how to return object 

// let returnObj= () =>  {user.username};
// if use {} --- in use case of this you 
// have to have to write return like part 1
let returnObj= () =>  ({username: "karan"}); 
// use () -- this then {} like ({}) -- like this


const  myArray = [1,2,3,4,5];

