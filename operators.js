// we have == and === 
// === checks equality of value and type 
// whereas == don't check type equality 
// !== not equal value or not equal type 
let str = "4"
let num = 4
console.log(str == num)
console.log(str === num) // false since they don't have same dtype 
console.log(str != num)
console.log(str !== num) // true since they had different dtype
// we have relational operators >= <= > < etc 
// we have logical operators like and (&&) or (||) and not (!)
// we have bitwise  operators with difference that >>> used to unsigned right shift means sign bit not shifted 
// other's are operated on 32 bit signed number
// to convert number to binary 
num = 10
console.log((num).toString(2))
// ternary operator 
let age = 8
let drink = age >= 5? "cofee": "milk"
console.log(age,drink)


