class User{
    constructor(email , password){
        this.email= email;
        this.password = password;
    }
    get password(){
        return this.password.toUpperCase() 
     }
     set password(value){
        this.password=value



}}
const zainab= new User("zain@.com","78")
console.log(zainab.password);

