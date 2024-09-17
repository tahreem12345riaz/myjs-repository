// hum ku chaihye  or mazeed 9 numbers 
//const myNums= [1,2,3,4,5,6,7,8,9]
//const newnums = myNums.map((num)=> num +9)
//console.log(newnums);
// ab hum ku 11 , 13 , number kr ke dikhna hai

//e.g 1*10 10 , 10+1 = 11 output shw is 11 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newnum = myNums.map((num) => num * 10)
                     .map((num) => num + 1)
                     .filter((num)=>num >=39)
console.log(newnum);