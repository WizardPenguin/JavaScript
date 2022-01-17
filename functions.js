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


//// ### ([rest parameters]), when we don't know size of parameters then we can take some prefix of parameters as rest parameter
function sumAll(a = 0,b = 0,...c){ // ## atlest 2 parameters are needed 
    let sm = a + b 
    for(let val of c){
        sm += val
    }
    return sm; 
}
console.log("sum is",sumAll(1,2,3,4,5))

/// Parameter destruction 
// when we know that argument is going to be class and we are going to use some properties of it which needs destructuring then we can do that in definittion itself
const point = {x: 4,y: 2}
function product({x,y}){
    return x*y;
}
console.log(point,product(point))

/// callback functions ### functions that takes function as argument (these argument function as generally named as callback )
