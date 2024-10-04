const User={
    _email:'zani@.com',
    _password:'abc',

    get email(){
        return this._email.toLocaleUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const book = Object.create(User)
console.log(book.email);
