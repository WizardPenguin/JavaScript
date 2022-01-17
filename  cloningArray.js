// array being referenced type when passed/ stored in new variable 
// then reference is stored means both variables operated upon some operation affects both's data
// to create new array with same previous data we need cloning methods
// 1 . using slice 
const a = [2,3,5,5,6,4,4,5]
const b = a
console.log("directly stored array into other and changed 3rd id value to 100")
console.log(a,b)
b[3] = 100
console.log("arrays after changes")
console.log(a,b)
// now to make them separate 
const newArray = a.slice(0)
newArray[2] = 1000
console.log("copy using slice fuction")
console.log(newArray,a)
// using concatenation 
console.log("copy using concat operation and added 2,3,5,3 as new elements to a")
const concatArray = [].concat(a,[2,3,5,3])
console.log(concatArray)
// using spread operation 
console.log("copy array using spread operator and added 3,5,3,5 as new elements")
const spreadArray = [...a,3,5,3,5]
console.log(spreadArray)


//// ### const reference allows variable not to change it's reference to other data 
// so once array stored in const a (variable a) it can't store any other variables reference 
