var n = 10; 
console.log(`value of n : ${n}`); 
{
    let x = 20;
    console.log(`value of x : ${x}`);
}
// console.log(x); // error since x has not been defined 
{
    var x = 10; 
    console.log(`value of x : ${x}`);
}
console.log(x); // no error since x is declared in functional score 
// another premitive datatypes are boolean,undefined, null, bitInt,symbol
// undefined is default datatype of non initialized variables 
// we are are accessing out of bound types thing are returned as undefined 
// any operation with undefined resulting in null (which is not a number) 
// number datatype can store till 2^51, for larger data we requires bitInt() allows operations on larger numbers
// boolean is just to store true/false
var b1 = BigInt(1)
var b2 = 2 // here b is used to specify that datatype is bitInt 

