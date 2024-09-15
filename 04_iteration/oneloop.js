for (let i=0; i<=10; i++) {
    //console.log(`Outer Loop Values: ${i}`);
    for (let j=0; j<=10; j++) {
        //console.log(i+ '*' + '=' + i*j);   
    }   
}
let myArray = ["monday", "tuesday", "wednesday"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}
//break and continue
for(let index =1; index <=20; index++){
    if(index==5){
console.log(`detected 5 `);
break
    }
    
    console.log(`Value of i is ${index}`);
    
}


