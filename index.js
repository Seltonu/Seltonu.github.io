const burgerIcon = document.querySelector('#burger')
const navbarMenu = document.querySelector("#nav-links")

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active")
});

// window.addEventListener('resize', resizeCanvas, false);

// function drawL() {
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
//     drawL();
// }
// resizeCanvas();


// drawL();




window.addEventListener("resize", resized, false);

function resized() {
    resizeCanvas(window.innerWidth, window.innerHeight) //WebGL canvas
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    background(30);
    stroke(255);
    frameRate(30);
    sphere_rot = 360;
    box_rot = 360;
    console.log("made it to setup")
}

function draw() {
    background(30)

    if(sphere_rot == 0) {
        sphere_rot = 360
    }
    sphere_rot = sphere_rot - 0.0015;
    if(box_rot == 0) {
        box_rot = 360
    }
    box_rot = box_rot - 0.0035;

    push();
    fill(30);
    // noFill();
    translate(-(width/2.0), -(height/2.4), -200)
    rotate(box_rot, [0.2,1.0,1.0]);
    box(200);
    pop();

    //smaller box
    push();
    fill(30);
    // noFill();
    translate(-(width/4.0), -(height/4.0), 0)
    rotate(-box_rot*5, [0.2,1.0,1.0]);
    box(60);
    pop();

    //smallest box
    push();
    fill(30);
    // noFill();
    translate(-(width/3.0), -(height/5.4), 0)
    rotate(-box_rot*10, [1.0,0.2,1.0]);
    box(30);
    pop();

    //sphere
    push();
    // noFill();
    fill(30);
    // translate(600, 300, 0)
    translate(width*0.5, height*0.4, -200)
    rotate(sphere_rot, [0.0, 1.0, 0.0]);
    sphere(height/2.8);
    pop();


    //random dots
    

}