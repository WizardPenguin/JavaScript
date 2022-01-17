// now requirment is to make many objects of same type 
// for that we can create function to do that that reutrns object formed 
function makeObj(name,age){
    ret = {
        name:name,
        age:age,
        print: function (){
            console.log(name,age);
        }
    }
    return ret
}
const obj1 = makeObj("shayam",23)
const obj2 = makeObj("dinesh",20)
obj1.print() 
obj2.print()
console.log(obj1.print === obj2.print) // both are different references 
// Problmes are we are creating function each time again 
// this can be solved using separate function class for object and store all functions there
// after then we can pass their reference to this class function
var userFunction = {
    print: function (){
        console.log(this.name,this.age);
    }
}
function createUser(name,age){
    ret = {
        name:name,
        age:age,
        print: userFunction.print,
    }
    return ret
}
const user1 = createUser("shayam",32)
const user2 = createUser("dinesh", 32)
user1.print()
user2.print()

// but if we want to add some new function in user class they need to be updated in both user and userFunction 
// so to deal with that problem we create obj with __proto__ or [[prototype]] as userFunction 
// when we ask for a key in obj and is not found then java auto searches in __proto__ object and if found returns it's reference
// so each update in userFunction auto reflects in our class
// also then we don't need to create more references for functions since it auto searches for them 
const pointFunction = {
    print : function (){
        console.log(this.x,this.y)
    },
    multiply : function(){
        console.log(this.x*this.y); 
    }
}
function createPoint(x,y){
    ret = Object.create(pointFunction)
    ret.x = x 
    ret.y = y
    return ret
}
const point1 = createPoint(1,2)
const point2 = createPoint(3,2)
point1.print()
point2.multiply()

// instead of creating separate object pointFunction we can define these functions in class provided for function 
// function in js are function + object
// means function has a default object called function.prototype
// in this object we can define all functions for our object 
// and pass this class as __proto__ for object
function createEmp(name,department){
    ret = Object.create(createEmp.prototype)
    ret.name = name
    ret.department = department
    return ret
}
createEmp.prototype.print = function(){
    console.log(this.name,this.department)
}
const emp1 = createEmp("shayam","cse")
const emp2 = createEmp("Ram","ece")
emp1.print()
emp2.print()
