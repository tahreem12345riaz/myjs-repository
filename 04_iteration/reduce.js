/// this function used in shopping cards etc 
//Array.reduce
const myNums=[1,2,3,4,6,6,6]
//const myTotal = myNums.reduce(function(acc,currval){
  //  console.log(`acc:${acc} and currval: ${currval}`);
    //return acc+currval
//}, 0)
const myTotal = myNums.reduce((acc, curr )=>acc+curr,0)

//console.log(myTotal);

/// shopping card
const shoppingcart = [
   { itemname: "flutter",
    price :3000},
    { itemname: "datascince",
        price :11000},
        { itemname: "c++",
            price :8000}
]
const priceTOPay = shoppingcart.reduce((acc,item )=> acc+item.price,0)
console.log(priceTOPay);
