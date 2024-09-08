function loginUsermessage(username = "sam"){
    if(!username){
        console.log(
            "please enter username" );
        return 

    }
    return `${username} just logged in`
}
//console.log(loginUsermessage("zainab"));
//
function  calculateCartprices(val1, val2,...num1 )
{
    return num1 
}
//console.log(calculateCartprices(200,400,600,900));
const user = {
    user : "ali",
    price:921
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and 
        price is ${anyobject.price}`);
    
}
handleobject({
    username:"ali",
    price:900
})
const myNewArray =[100,200,400,800]
function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(myNewArray));

