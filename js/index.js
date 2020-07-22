console.log("Ray is here to code");

function init() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d")
    var tx = window.innerHeight;
    var ty = window.innerWidth;
    canvas.width = tx;
    canvas.height = ty;
}
// Utility Functions
document.addEventListener("resize",()=>{
    
    
})

window.onload = init;