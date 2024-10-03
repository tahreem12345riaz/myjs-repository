const user={
    username: "tahreem",
    id:78,
    age :22 ,
    signedIn:true,
getuserDetails: function(){
   // console.log(`Username:${this.username }`);
    console.log(this );
    
}

}
//console.log(user.username);
//console.log(user.getuserDetails());
function User(username, loginCount , isLoggedIn){
    this.username =username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    return this
}
const userOne = User('zainab',12, true)
console.log(userOne);


