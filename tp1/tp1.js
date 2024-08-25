
// https://youtu.be/EWs-qxo_a_Y
////Martina Fuhr,comision2,119031/9


let img;
let colorbase;
let radio;


function preload() {
  img =loadImage('assets/reftp3.png');
}

function setup() {
  createCanvas (800, 400);
  colorbase=color(0);
  radio=15;
}


function draw() {

  background(240);
  print(ubicacionMouse(600));


  grilla(colorbase, radio);
  ovalo(0);

  image(img, 0, 0);
}
