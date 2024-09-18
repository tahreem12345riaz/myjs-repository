//get all the colr buttn 
const buttons = document.querySelectorAll(".button");
//Add event listener to each button
buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        //Get the id of the clicked button
        const color = button.id;
        //change the backgrnd color
        document.body.style.backgroundColor = color;
    });
}

);