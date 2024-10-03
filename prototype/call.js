function SetUsername(username){
//complex DB calls 
this.username = username

}
function createUser(username,email, id , password){
    SetUsername(username)
    this.email = email
    this.id = id
    this.username
}
const abcd = new createUser("abcd","abcd@yahoom.com","123")
console.log(abcd);

 

