// object is array type but elements are accessed using key instead of index 
// these are initialized using key value pair 
const obj1 = {name : "Raman", roll: 23}
// we can add more elements by just referencing elements
obj1.course = "CSE(DD)"
// we can access same as we access dixnary in other languges but key has to be passed as string 
// this allows us to use variable's data to be used as key 
// this is called computed property , using this we can even use them while creating object 
// eg obj1 = {[k]: "cs313"}
obj1["sem"] = 4
let k = "course ID"
obj1[k] = "cs313" 
console.log(obj1.name,obj1.course,obj1.roll,obj1.sem,obj1["course ID"])
// iterate over element 
console.log("iterating object")
for(key in obj1){
    console.log(obj1[key])
}
console.log("iterating using array of keys obtained by Object.keys(obj1)")
for(key of Object.keys(obj1)){
    console.log(obj1[key])
}