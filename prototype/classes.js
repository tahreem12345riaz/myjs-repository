class User {
    //constructor
    constructor(username, email , password){
        this.username= username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`

    }
}
const xyz = new User("tahreem","tahreem.com", 1234)
console.log(xyz.encryptPassword());
