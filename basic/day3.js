//js is a dynamic typed lang

//primitive
//7 types : string,number,boolean,null.undefined,symbol.bigint
const str="mystr"
const num=23
const value=false
const temp=null
let email;
const id=Symbol('123')
const anotherId=Symbol('123')


console.log(id ===anotherId)
const bigintnum=548645212154153222202n


//reference (non primitive)
//array,object,function
const heros=["shaktiman","naagraj","doga"];

let myobj={
    name:"sakshi",
    age:19,
}
const myfun=function(){
    console.log("hello")
}
console.log(typeof str)
console.log(typeof num)
console.log(typeof value)
console.log(typeof temp)
console.log(typeof email)
console.log(typeof anotherId)
console.log(typeof heros)
console.log(typeof myobj)
console.log(typeof myfun)