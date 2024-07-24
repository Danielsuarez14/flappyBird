let contexto = document.getElementById("lienzoJuego").getContext("2d")
contexto.canvas.width = 300
contexto.canvas.height = 530
//Variables
let FPS = 60
let gravedad = 1.5
let personaje = {
    x:50,
    y:150,
    w:50,
    h:50
}
//Score
let score = 0
//Variable tuberias
let pipes = new Array()
pipes[0] = {
    x: contexto.canvas.width,
    y: 0
}

//variable imagenes
let bird = new Image();
bird.src = "images/bird.png";

let background = new Image();
background.src = "images/background.png";

let floor = new Image();
floor.src = "images/floor.png";

let pipedown = new Image();
pipedown.src = "images/pipedown.png";

let pipeup = new Image();
pipeup.src = "images/pipeup.png";

//control

function presionar(){
    personaje.y -= 25;
}
//Loop
setInterval(loop, 1000/FPS);
function loop(){
    contexto.clearRect(0,0,300,530);
    //Background
    contexto.drawImage(background,0,0);
    contexto.drawImage(floor,0,contexto.canvas.height - floor.height);
    //character
    contexto.drawImage(bird, personaje.x, personaje.y);
    //Pipes
    for (let i = 0; i < pipes.length; i++){
        contexto.drawImage(pipeup,pipes[i].x,pipes[i].y);
        let constante = pipeup.height + 80
        contexto.drawImage(pipedown,pipes[i].x, pipes[i].y + constante);
        pipes[i].x--

        if(pipes[i].x == 150){
            pipes.push({
                x:contexto.canvas.width,
                y: Math.floor(Math.random()*pipeup.height) - pipeup.height
            })
    }
}
    //Conditions
    personaje.y += gravedad
    contexto.fillStyle = "rgba(0,0,0,1)"
    contexto.font = "25px Arial"
    contexto.fillText = ("Score: + "=score,10,contexto.canvas.height-40)
}
//Events
window.addEventListener("keydown", presionar)