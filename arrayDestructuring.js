// breaking array and storing it's data in variables 
let a = [2,3,5,2,5]
console.log(a)
console.log("taken first 2 elements in v1 and v2")
let [v1,v2] = a
console.log(v1,v2)
// here array breaks and v1 = a[0] and v2 = a[1]
// if we want to skip some value then leave empty space 
// we can't destructure in previous variables we need to declare them again 
// [v1, , v2] = a // error since v1,v2 are already declared and let not used
let [x,,y] = a
console.log("taken 1st and 3rd element for array")
console.log(x,y)
// x = a[0] and y = a[2] here a[1] is skipped 
// we can use something like spread operator to take remaining values in some array 
console.log("taken 1st and 2nd element in 2 variables and remaining part as new array ")
let [x1,x2,...x3] = a
console.log(x1,x2,x3)
 