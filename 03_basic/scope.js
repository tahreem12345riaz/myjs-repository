 
let b = 99
//var c= 99
let a = 300
if(true ) {
    let a = 100
    const b = 990
    var c = 934
  //  console.log("INNER:" , a);
}
/*for(let i= 0; i<array.length;i++){
    const element = array[i];
}




//console.log(a);
//console.log(b);
//console.log(c);*/

/// Nested scope 
function one(){
    const username = "Ali"
    function two(){
        const website = "linkedIn"
        //console.log(username);
         
    }
    //console.log(linkedIn); >> it gives error
    two()
    
}
//one()
if(true){
    const username = "Ali"
    if(username==="Ali"){
        const website = 'linkedIn'
        console.log(website);
        
    }
    console.log(username);
    
}


