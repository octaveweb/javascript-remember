const nameOfOwner  = "Karan Swarnakar";
const repo = 50;

console.log(name + repo + " value"); // output is : {Karan 50 value}

console.log(`Hello my name ${nameOfOwner} and my repo count is ${repo}`); 
//output is : {Hello my name Karan and my repo count is 50}

const ownweName = new String('Karan');
const fullName = new String('Karan-Swarnakar');

/*
console.log(ownweName[0]); // {K}
console.log(ownweName[1]); // {a}
console.log(ownweName[2]); // {r}
console.log(ownweName[3]); // {a}
console.log(ownweName[4]); // {n}
*/




// console.log(ownweName[6]); // this will be {undefined}

console.log(ownweName.__proto__);
console.log(ownweName.length);
console.log(ownweName.toUpperCase());

//Witch carecter belong to 4 index:
console.log(ownweName.charAt(4));


//Witch index "n" belongs to:
console.log(ownweName.indexOf('n'));

const newString = nameOfOwner.substring(0,8); // Example-1
/*
so here we see starting
is index 0 and ending in 3 
but the catch is 3 index not including

______________Example-1______________

nameOfOwner.substring(0,8) -+-

console.log(nameOfOwner[0]); // {K}      -+-  
console.log(nameOfOwner[1]); // {a}      -+-
console.log(nameOfOwner[2]); // {r}      -+-
console.log(nameOfOwner[3]); // {a}      -+-
console.log(nameOfOwner[4]); // {n}      -+-
console.log(nameOfOwner[5]); // {Empty}  -+-
console.log(nameOfOwner[6]); // {S}      -+-
console.log(nameOfOwner[7]); // {w}      -+-
console.log(nameOfOwner[8]); // {a}
console.log(nameOfOwner[9]); // {r}
console.log(nameOfOwner[10]); // {n}
console.log(nameOfOwner[11]); // {a}
console.log(nameOfOwner[12]); // {k}
console.log(nameOfOwner[13]); // {a}
console.log(nameOfOwner[14]); // {r}

So, output is : {
    0:K,
    1:a,
    2:r,
    3:a
    4:n
    5:{Empty}
    6:S
    w:7
}
*/

console.log(newString);

const anotherString = ownweName.slice(0,3);
console.log(anotherString);
console.log(nameOfOwner.length);


// .trim(), .replace(), .includes(), .split()  // go check it out in mdn



