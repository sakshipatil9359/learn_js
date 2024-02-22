"use strict";//treat all js code as newer version

//alert(3 +3) //we are using node js not browser so it will through error
// number=> 2 to power 53
// bigint
// string=> ""
// boolean=>true/false
// null =>standalone   value(it is a object)
// undefined=>
// symbol =>unique
console.log(typeof"sakshi")
console.log(typeof null)
let score="33"
console.log(typeof(score))
let valueInNumber=Number(score)
console.log(typeof(valueInNumber))

//"33"=>33
//"33abc"=>NaN
//true =>1 ; false =>0
//null=>0
//undefined =>NaN


let isLoggedIn=1
let booleanLoggedIn=Boolean(isLoggedIn)
console.log(booleanLoggedIn)

//1=>true  0=>false
//""=>false
//"sakshi"=>true



//*********************operations***************** */
console.log(2+2+"1")
console.log("1"+(2+3))
console.log("1"+2+3)
console.log(true)
console.log(+true)


console.log("2"=== 2)