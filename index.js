const burgerIcon = document.querySelector('#burger')
const navbarMenu = document.querySelector("#nav-links")

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active")
});

// window.addEventListener('resize', resizeCanvas, false);

// function draw() {
//     const canvas = document.querySelector('#canvas')
//     if (!canvas.getContext) {
//         print("Couldn't get canvas context");
//         return;
//     }
//     const ctx = canvas.getContext('2d');
//     ctx.canvas.width = window.innerWidth;
//     ctx.canvas.height = window.innerHeight;
    
//     ctx.strokeStyle = 'white';
//     ctx.lineWidth = 2;
    
//     ctx.beginPath();
//     ctx.moveTo(ctx.canvas.width/2, 0);
//     ctx.lineTo(ctx.canvas.width/2, ctx.canvas.height*0.9);
//     ctx.stroke();
// }
// function resizeCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     draw();
// }
// resizeCanvas();

window.addEventListener("resize", resized, false);

function resized() {
    resizeCanvas(window.innerWidth, window.innerHeight)
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    background(30);
    stroke(255)
    a = 360;
}

function draw() {
    background(30)

    if(a == 0) {
        a = 360
    }
    a = a - 0.0005;

    push();
    translate(width/2.8,height/3,-200);
    noFill();
    rotate(a, [0.0,1.0,0.0]);
    sphere(height/3);
    pop();

    push();
    fill(30);
    translate(width/-2.5, height/-2.5, -100);
    rotate(a*5, [0.1, 1.0, 1.0]);
    box(100);
    pop();
}