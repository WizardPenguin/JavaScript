// array manipulation function 
// 1. forEach function 
const arr = [1,2,3,5,6,4,6,4]
// it takes callback function as parameter that takes obj,index as argument
// after then it applies that function on each element present 
arr.forEach(elm => {
    console.log(elm)
});
arr.forEach(function(val,index){
    console.log(val,index)
});
// map function takes callback as argument that returns a value
// this function then returns array of all returned values 
const squaredArr = arr.map((elm,index)=>{
    return elm*elm;
});
console.log(squaredArr)
// filter function used to filter those values for which callback returns true 
const evenArr = arr.filter(elm =>{
    return elm%2 == 0; // returns true if elm is even 
})
console.log(evenArr)
// reduce function: 
// it accumulates result taking callback function(accumulator,current), where accumulator gives computed result returned in previous iteration 
// if initial value to accumulator passed then it starts form 0th id value 
// otherwise it takes initial accumulator value as 0th id value and start reducing from index 1 
const sum = arr.reduce((accumulator,current)=>{
    return accumulator + current; 
},0); // initial accumulator = 0 
console.log(sum); 

// some, every are there that takes in callback that returns boolean, 
// some returns end result true of some elm is true for callback 
// every returns true if all elements are satisfying our requirnments


/// SORT (important since it works different from other languages)
// if callback(a,b) -ve then a comes before b 
// if callback(a,b) +ve then b comes before a 
// otherwise order is not changed 
const points= [1,6,4,2,2,3,5]
// by default it considers arguments as string and sort them in lexiographical order 
// makes changes inplace 
points.sort()
console.log(points)
points.sort((a,b)=>{
    // we want if a is greater then it should be on front at that time return -ve 
    return b - a; 
})
console.log(points)
