// ///A promise is an object
// A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It is used for handling asynchronous operations, such as making API calls or reading files, 
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('aynchorous task is complete');
        
    },1000)
})
promiseOne.then(function(){
    console.log("consumed promise");
    
})
const promiseThree = new Promise(function(resolve, reject ){
    setTimeout(function(){
        resolve({username:"hy", email:"tahreemriaz@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true 
//         if (!error){
//             resolve({username:'zani',password:'12344'})
//         }else{
//             reject('ERROR:Something went wrong ')
//         }

//         },1000)
//     })
// promiseFour.then((user) =>{
//     console.log(user);
//     return user.username
    
// })
// //console.log(username);
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
    
// })
const promise = new Promise(function(resolve, reject) {

    setTimeout(function(){
        let error = true;  // Change to 'false' if you want to test the resolve path
        if (!error){
            resolve({username:'zani', password:'1234'});

        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);  // The delay is set to 1000ms (1 second)
});

// Use the promise variable here
promise.then((user) => {
    console.log(user);  // Logs the resolved object {username: 'zani', password: '1234'}
    return user.username;
    
})
.then((username) => {
    console.log(username);  // Logs the username 'zani'
    return username;
})
.then((username) => {
    console.log(username);  // Logs the username 'zani' again
})
.catch(function(error) {
    console.log(error);  // Logs the error message if rejected
});
