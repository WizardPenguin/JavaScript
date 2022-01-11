// declaring function using function keyword 
// function sum(a,b){
//     return a + b; 
// }
// storing function into variable (using function expression)
const sum = function(a,b){
    return a + b; 
}
// creating using arrow function 
// const sum = (a,b)=>{
//     return a+b; 
// }
// when we have only line returning something then it can be written in more shorter form 
// const sum = (a,b)=> a+b; 
// when we have only single argument then we can omit () in arrow function 
const square = a => a**2; 
console.log("sum of 2,3")
console.log(sum(2,3))
console.log("square of 2 :",square(2))


/// ########## hoisting 
// when functiond declared using function keyword then it can be accessed anywhere in program, even before declaration of function 
hello()
// such objects are created in global score as created by var varaibles
function hello(){
    console.log("hello")
}
// function defined using functinal expressions are not defined in global score
// var hello = function(){
//     console.log("hello")
// }
