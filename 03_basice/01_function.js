

function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log(" ");
}
// sayMyName()
/*{
    Breakdown sayMyName();

kanwn as reference |    Excution   
    |||||||||     |     ||  
    sayMyName     |     ()

}*/


// Part 1

// function addTwoNumbers(n1,n2){
//    console.log( n1 + n2);
// }

// const result = addTwoNumbers(4,5)
// console.log("Result: ",result);  
// Output: 
// {Result:  undefined}
/*
NOTE:
    Becouse consol.log not return anything
    see the Part 2 
*/

// Part 2

function addTwoNumbers(n1,n2){

    // let result = n1 + n2;
    // return result;
    return n1 + n2
 }

 const result = addTwoNumbers(45,5);
//  console.log("Result: ",result);
 /*
    Output:
        {Result:  50}
 */
 

// Part 3
/*function loginUserMassage(username){
    return `${username} "just login in`;
}

loginUserMassage("Karan") 

    nothing hapend while execution of this function 
    becouse we don't say any thing about print 
    creakout Part 4
*/

// Part 4
const mataBotIdGenertion = Math.random();
function loginUserMassage(username = `MaraBot ${mataBotIdGenertion}`){
    // if(username === undefined){ 
    if(!username){ // same as previous
        console.log("Enter a user name");
        return
    }
    return `${username} just login in`;
}

console.log(loginUserMassage());

/*
Output:
{
    Enter a user name
    undefined
}
*/
// console.log(loginUserMassage("Karan"));
/*
Output:
{
  Karan just login in
}
*/