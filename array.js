let a = [1,2,3,4]
// iterating array 
// using loop
console.log("using loop")
for(let i=0;i<a.length;i++){
    console.log(a[i])
}
// using for in loop 
console.log("for in loop that gives index")
for(id in a){
    console.log(a[id])
}
// using for of loop 
console.log("using for of loop")
for(val of a){
    console.log(val)
}
// adding and removing elements 
// using push pop O(1)
console.log("added 2,4")
a.push(2)
a.push(4)
console.log(a)
console.log("removed last element")
// pop returns removed element 
let tp = a.pop()
console.log(a,tp)
// using shift and unshift
// shift removes first elements and return what removed 
console.log("removed first element")
tp = a.shift()
console.log(a,tp)
console.log("added 2 then 3 at starting of array")
a.unshift(2)
a.unshift(3)
console.log(a)

