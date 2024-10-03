class User{
    constructor(username){
        this.username =username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}
class Teacher extends User {
    constructor(username ,email , password){
        super(username);
        this.username;
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}
const book = new Teacher("abcd","book.com","234");
book.logMe();
const advancedbook = new User("advancebook")