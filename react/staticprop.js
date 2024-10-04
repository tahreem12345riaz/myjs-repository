class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username:${this.username}`);
    }
    static createId(){
        return '32'
    }
}
const tahreem = new User("zainab")
class Book extends User{
    constructor(username, email){
        super(username)
        this.email =email
    }
}


const student = new Book("student", "std@.com");

console.log(Book.createId());
