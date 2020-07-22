console.log("Ray is here to code");

function init() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d")
    var tx = window.innerHeight;
    var ty = window.innerWidth;
    canvas.width = tx;
    canvas.height = ty;
    mouse = {
        x: tx/2,
        y:ty/2
    }
}
// Utility Functions
document.addEventListener("resize",()=>{
    if(tx!=window.innerWidth || ty!= window.innerHeight){
        //Resize the canvas to the new values of Window Full screen
        tx = window.innerWidth;
        ty = window.innerHeight;
        canvas.width = tx;
        canvas.height = ty; 
    }
    
})

document.addEventListener("mousemove",(e)=>{
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    // Check the output here uncomment the below line
    // console.log(mouse);
})



window.onload = init;