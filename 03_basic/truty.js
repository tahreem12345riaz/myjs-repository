const userEmail = "ali@.yahoo "
/*if (userEmail) {
    console.log("Got User Email");
    
}else {
    console.log("Don't hac=ve user email ");
    
}*/

////Falsy values: 0, -0 ,bigInt On, null ,undefined ,NaN
//Truthy values "0", 'false', "",[],{},function(){}

if (userEmail.length===0) {
   console.log("Array is empty ");
    
}
//object 
const emptyobj ={}
if (Object.keys(emptyobj).length === 0) {
    console.log("obj is empty ");
    
}
//
let val1;
val1 = null ?? 10
val1 = undefined?? 90
console.log(val1);
//Terniary operator
//condition ? true : false 
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more tahn 80");
;

