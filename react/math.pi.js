//math.pie value 3.1 '
const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);
console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);
const biryani
={
    name:'mutton biryani',
    price: 500,
    isAvailable: true,
    orderBiryani: function(){
        console.log("biryani achi hai");
        
    }
}
console.log(Object.getPrototypeOf(biryani,"name"));
Object.defineProperties(biryani,'name',{
   // writable:false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(biryani,"name"));
 //
 for(let [Key, value] of Object.entries(biryani)){
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
        
    }
 }





