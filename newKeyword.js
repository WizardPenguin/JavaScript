// previously objects were created using function having
// 1 create temporary object 
// 2. set it's __proto__ as function.prototype
// 3. return this object 

// all these steps are done by simple new keyword 
// it don't need to create temporary object, instead it itself creates and passes it's reference as this 
// it auto returns reference to this 
// auto adds function.prototype as __proto__ of this 

function createUser(name,age){
    this.age = age
    this.name = name
}
createUser.prototype.print = function(){
    console.log(this.name,this.age)
}
const obj1 = new createUser("shayam",23)
const obj2 = new createUser("Ghanshyam",55)
obj1.print()
obj2.print()