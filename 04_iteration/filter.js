const student =[
    {name:'ali', age:17,subject:'js'}    ,
    {name:'hassan', age:18,subject:'c++'},
    {name:'qasim', age:20,subject:'flutter'},
    {name:'ibrahim', age:19,subject:'android'},
    {name:'mehmet', age:17,subject:'java'},
    {name:'sara', age:15,subject:'css'},
    {name:'khan', age:21,subject:'java'},

];
let   userstudent = student.filter((std) =>std.name ==='css')
userstudent = student.filter((std)=>{return std.age >=21 && std.subject})
console.log(userstudent);
