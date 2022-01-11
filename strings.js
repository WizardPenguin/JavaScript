const str = "raman";
console.log(str);
console.log(str.slice(1,3));
console.log(str.toUpperCase());
const res = prompt("what is your name");
console.log(res); 
// removing extra whitespaces around string data
res.trim(); 
console.log(res);
console.log(typeof res); 
// changing string to integer either explicit typecase of append operator to it 
// example +res, +str makes str , res int number datatypes 
let age = "20"; 
console.log(typeof age,typeof (-age)); 
let str1 = "4"; 
let str2 = "5";
// string template allowing us to use variables data inside a string 
console.log(`str1 = ${str1} and str2 = ${str2}`);
console.log(str2 + str2);
console.log(+str1 + +str2);

