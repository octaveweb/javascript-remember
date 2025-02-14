// Dates

let myDate = new Date();

console.log(typeof myDate); // {Object}

//myDate
console.log(myDate); 
// Output:
// {2025-02-14T05:51:33.454Z}

//toString()
console.log(myDate.toString()) 
// Output:
// {Fri Feb 14 2025 11:22:57 GMT+0530 (India Standard Time)}

console.log(myDate.toDateString()) 
// Output: 
// {Fri Feb 14 2025} 

console.log(myDate.toISOString()) 
// Output: 
// {2025-02-14T05:55:48.250Z}

console.log(myDate.toJSON()) 
// Output: 
// {2025-02-14T05:56:44.915Z}

console.log(myDate.toLocaleDateString()) 
// Output: 
// {2/14/2025} /* #Current Date */

console.log(myDate.toLocaleString()) 
// Output: 
// {2/14/2025, 11:28:35 AM}

console.log(myDate.toLocaleTimeString()) 
// Output: 
// {11:29:13 AM} /* #Current Time */

console.log(myDate.toTimeString()) 
// Output: 
// {11:31:17 GMT+0530 (India Standard Time)}

console.log(myDate.toUTCString()) 
// Output: 
// {Fri, 14 Feb 2025 06:02:09 GMT}



// Format - 1 =============================
let specificDate = new Date(2025, 0, 23);
let specificTime = new Date(2025, 0, 23 , 5, 3);
console.log(specificDate); 
// Output:
// {2025-01-22T18:30:00.000Z} 
/* 
    Can't understoude so i use methord that i learn prevous on top
    toDateString
*/ 
console.log(specificDate.toDateString());
// Output:
// {Thu Jan 23 2025}
/* know i understode what is it using methord */ 

console.log(specificTime);

console.log(specificTime.toLocaleString());

// Format - 2 =============================
console.log("  ");

// specific format like mm-dd-yy or mm-yy-dd or yy-dd-mm 

// let setIngSpecificFormat = new Date("2025-02-14")
let setIngSpecificFormat = new Date("01-14-2025")
console.log(setIngSpecificFormat.toLocaleString());


let myTimeStamps = Date.now();
console.log(myTimeStamps);

console.log(setIngSpecificFormat.getTime());
console.log(Date.now());//      {1739514424533}          output in milliseconds 
console.log(Date.now()/1000);// {1739514424.534}         output in seconds with decimal values
console.log(Math.floor(Date.now()/1000));// {1739514424} output in seconds 

console.log(" ");

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1); // becouse mounth start with 0 not 1 
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(" ");
console.log(newDate.getTime());
console.log(newDate.getTimezoneOffset());



console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));
