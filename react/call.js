function Setusername(username){
    this.username =username
    console.log("call");
    
}
function createUser(username , email ,password){
    Setusername.call(this, username)
this.email = email
this.password = password
}
const zainab = new createUser("zainab","zaine.cm","76")
console.log(zainab);
