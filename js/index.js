console.log("Ray is here to code");
window.onload = init;
var canvas;
var ctx;
var tx;
var ty;
var mouse;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    tx = window.innerWidth;
    ty = window.innerHeight;
    canvas.width = tx;
    canvas.height = ty;
    mouse = {
        x: tx / 2,
        y: ty / 2
    }
    createParticles();
    animate();
}

// Utility Functions
function resizeCanvas() {
    if (tx != window.innerWidth || ty != window.innerHeight) {
        //Resize the canvas to the new values of Window Full screen
        tx = window.innerWidth;
        ty = window.innerHeight;
        canvas.width = tx;
        canvas.height = ty;
    }
};

//Random color Generator;
function randomColor() {
    return (
        "rgba(241,2,2,1)"
    );
}

document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    // Check the output here uncomment the below line
    // console.log(mouse);
});

//Define particle
function particle() {
    this.position = {
        x: tx / 2,
        y: ty / 2
    },
        this.lastPosition = {
            x: this.position.x,
            y: this.position.y
        },
        this.radians = 0.02;
    this.radius = 20;
    this.velocity = { x: 0, y: 100 },
        this.color = randomColor();
    this.update = function () {
        this.draw()
        // this.movement()
        // this.wave() 
    },
        this.draw = function () {
            this.lastPosition.x = this.position.x;
            this.lastPosition.y = this.position.y
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        },
        this.wave = function () {
            this.radians += 0.02;
            this.position.x = tx / 2;
            this.position.y = ty / 2 + Math.sin(this.radians) * 100;

        }
}
particles = [];
particlesDup = [];
function createParticles() {
    for (let i = 0; i < 1; i++) {
        var par = new particle();
        // par.position.x-=30*i;
        particles.push(par)
    }
}
var pushcount = 0;
var remcount = 200;
function animate() {
    resizeCanvas();
    requestAnimationFrame(animate);
    // ctx.fillStyle="rgba(255,255,255,0.01)"
    ctx.clearRect(0, 0, tx, ty);

    // animate the particle
    particles[0].radians += 0.02;
    particles[0].position.x = tx / 1.5;
    particles[0].position.y = ty / 2 + Math.sin(particles[0].radians) * 100;
    particles[0].update();
    var obj = new particle()
    obj.position.x = particles[0].position.x;
    obj.position.y = particles[0].position.y;
    particlesDup.push(obj);
    pushcount++;
    console.log(pushcount);

    //Create multiple copies of it for drag effect
    for (let i = 0; i < particlesDup.length; i++) {
        //reduce values as u go
        particlesDup[i].color = "rgba(241,2,2," + (i / 1000) + ")"
        particlesDup[i].radius -= 0.05;
        particlesDup[i].position.x -= 3;
        particlesDup[i].update();
    }

    if (particlesDup.length > 200) {
        particlesDup.splice(0, 1);
        remcount++;
        console.log(remcount);

    }


}
