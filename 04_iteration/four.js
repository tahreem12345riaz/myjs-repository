///ab ak object ak obejct se milna hoga 
/*const myobject = {
    course:'javascript',
    cpp:'c++',
    rb :'ruby python'
}
for(const key in myobject){
    //console.log(`${key} shorcut is for ${myobject[key]}`);
    
}*/
const coding = ['javascript', 'flutter', 'python', 'cpp'];

for (const key in coding) {
   // console.log(key); // Logs the index (0, 1, 2, ...)
}

coding.forEach((item, index, arr) => {
   // console.log(item, index, arr); // Logs the item, index, and the whole array
});
const myNums =[2,4,67,4,4,3,6,37,8]
//const newNums = myNums.filter((num)=>{
//return num < 4
//})
/*const newNums =[]
myNums.forEach((num) => {
    if(num>9){
        newNums.push(num)
    }
})
console.log(newNums);*/


