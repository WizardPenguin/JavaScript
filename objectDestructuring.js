const point = {
    x: 10,
    y: 20
}
// either use x = point.x and y = point.y 
console.log("taking point object(x,y) values i n x,y ")
const {x,y} = point
console.log(x,y)
console.log("taking point(x,y) valus in nx,ny using destructuring")
const {x:nx,y:ny} = point
console.log(nx,ny)
const point3d = {
    x: 10,
    y: 20,
    x: 30
}
console.log("taking 2 values in x1,y1 and remaining as object in remObj variabl")
const {x:x1,y: y2,...remObj} = point3d
console.log(x,y,remObj); 

