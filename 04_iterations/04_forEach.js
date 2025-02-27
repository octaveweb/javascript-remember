let codding = ['JavaScript','C Programing','Hypertext Markup Language','Cascading Stylesheet']


// Ex - 1
/*  codding.forEach( (item)=>{
    console.log(item);
    
  })
*/
// Ex - 2
/*
function printMe(element){
    console.log(element);
    
}
  codding.forEach(printMe)

  */

  /*
 codding.forEach((item, index, arr)=>{
    console.log(item, index, arr)
 })*/
let myCodding  = [
    {
        languageName:"JavaScript",
        languageFillName: ".js"
    },
    {
        languageName:"Phython",
        languageFillName: ".py"
    },
    {
        languageName:"Css",
        languageFillName: ".css"
    }
]
myArr = []
myCodding.forEach((item,index)=>{
    myArr[index] = item.languageName;
    
})
console.log(myArr);
