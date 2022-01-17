// all work previously done for creating many object of same type is made easy by class keyword 
// when js sees this keyword it does all previous stuff done by functionMakingObject 
// but we don't have to do all that by ourselves
// class has constructor , that works same as functoin definition
// after then we can add methods to function.prototype just by defining funtion inside class 
// these definitions are auto attached to function.prototype
// using new keyword auto does many stuff so everything has became easy 
Point = class{
    constructor(x,y){
        this.x = x; 
        this.y = y; 
    }
    print(){
        console.log(this.x,this.y)
    }
};
// ##### convenstion [functions creating classes with new keyword are named with capital letter first]
const point1 = new Point(2,3)
const point2 = new Point(3,5)
point1.print()
point2.print()
