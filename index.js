const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector("#nav-links");
const leaves_columns = document.querySelector("#leaves_columns");
const contact_info = document.querySelector("#contact_info");
var line_show = true;


burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active")
});

// var buttons_json = {};
// fetch('./leaves.json')
//   .then(response => response.json())
//   .then(data => buttons_json = data)
//   .catch(error => console.log(error));

// console.log(buttons_json["Button_1"]["text"]);


//buttons_json is a promise, I want it to be the data
// var buttons_json = fetch('./leaves.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// //what I'm trying to achieve
// var x = (buttons_json["Button_1"]["text"]);
// var y = (buttons_json["Button_2"]["text"]);

// console.log("Ligma");
// console.log(buttons_json);
// // console.log("Sugma");
// console.log(buttons_json.Button_1.text)

// var leaves = [];
// const button_1 = document.getElementById("button_1");
// button_1.innerText = buttons_json["Button_1"]["text"];
// const button_2 = document.getElementById("button_2");
// button_2.innerText = buttons_json["Button_2"]["text"];
// const button_3 = document.getElementById("button_3");
// button_3.innerText = buttons_json["Button_3"]["text"];
// const button_4 = document.getElementById("button_4");
// button_4.innerText = buttons_json["Button_4"]["text"];
// const button_5 = document.getElementById("button_5");
// button_5.innerText = buttons_json["Button_5"]["text"];
// const button_6 = document.getElementById("button_6");
// button_6.innerText = buttons_json["Button_6"]["text"];
// const button_7 = document.getElementById("button_7");
// button_7.innerText = buttons_json["Button_7"]["text"];
// const button_8 = document.getElementById("button_8");
// button_8.innerText = buttons_json["Button_8"]["text"];
// leaves.push(button_1);
// leaves.push(button_2);
// leaves.push(button_3);
// leaves.push(button_4);
// leaves.push(button_5);
// leaves.push(button_6);
// leaves.push(button_7);
// leaves.push(button_8);


function contact_show() {
    contact_info.style.display = 'block';
    leaves_columns.style.display = 'none';
    line_show = false;
    console.log("yep")
}

function leaves_show() {
    // contact_info.style.visibility = "hidden";
    // leaves_columns.style.visibility = "visible";
    contact_info.style.display = 'none';
    leaves_columns.style.display = 'block';
    line_show = true;
}

//particle modified from example here: https://p5js.org/examples/simulate-particles.html
let particles = [];
class Particle {
    constructor() {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(0,500);
        this.r = 2;
        this.xSpeed = random(-1,1);
        this.ySpeed = random(-1, 1.5);
    }
    createParticle() {
        noStroke();
        fill(180);
        circle(this.x,this.y,this.r);
    }
    moveParticle() {
        if(this.x < -width || this.x > width)
          this.xSpeed*=-1;
        if(this.y < -height || this.y > height)
          this.ySpeed*=-1;
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
    }
    joinParticles(particles) {
        particles.forEach(element =>{
          let dis = dist(this.x,this.y,element.x,element.y);
          if(dis<205) {
            stroke('rgba(255,255,255,0.04)');
            line(this.x,this.y,element.x,element.y);
          }
          let particles = [];
        });
      }
}

window.addEventListener("resize", resize_canvas, false);

function resize_canvas() {
    resizeCanvas(window.innerWidth, window.innerHeight) //WebGL canvas
}

function setup() {
    background_canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    // background_canvas.parent("canvas_div");
    background_canvas.position(0, 0, 'fixed');
    background_canvas.style('z-index', '-2');
    background(30);
    stroke(200);
    frameRate(60);
    sphere_rot = 360;
    box_rot = 360;
    // console.log("made it to setup")

    //particles
    for(let i = 0;i<width/12;i++){
        particles.push(new Particle());
      }
}

function draw() {
    // stroke('rgba(255,255,255,0.04)');
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
    translate(-(width/2.0), -(height/2.4), -200)
    rotate(box_rot, [0.2,1.0,1.0]);
    box(200);
    pop();

    //smaller box
    push();
    fill(30);
    translate(-(width/4.0), -(height/4.0), 0)
    rotate(-box_rot*5, [0.2,1.0,1.0]);
    box(60);
    pop();

    //smallest box
    push();
    fill(30);
    translate(-(width/3.0), -(height/5.4), 0)
    rotate(-box_rot*10, [1.0,0.2,1.0]);
    box(30);
    pop();

    //sphere
    push();
    fill(30);
    translate(width*0.5, height*0.4, -200)
    rotate(sphere_rot, [0.0, 1.0, 0.0]);
    sphere(height/2.8);
    pop();

    //line
    if (line_show == true) {
        push();
        strokeWeight(2);
        fill(180);
        translate(0,0,0)
        line(0, -(height*0.40), 0, 0, height*0.45, 0);
        pop();
    }
    
    //particles
    push();
    for(let i = 0;i<particles.length;i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].joinParticles(particles.slice(i));
    }
    pop();

    // console.log("Particles: " + particles.length)

}
