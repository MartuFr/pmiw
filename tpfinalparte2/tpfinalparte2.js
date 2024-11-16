//Comisión 2.
//Martina Fuhr 119031/9; Julia Ferrari 119028/6.
let objJuego; //variable objeto tipo juego con las características de la class, declaro un objeto y lo inicializo con mi clase.
let imagen = [];
let texto = [];
let boton=[];
let miFuente;
let estado="tutorial";
let tiempoinicio;
let tiempolimite=22000;
let cancionAmbiente;

  function preload() {
  for (let i=0; i<4; i++) {
    imagen[i] = loadImage("data/imagen"+i+".png");
  }
  for (let a=0; a<2; a++) {
    boton[a] = loadImage("data/boton"+a+".png");
  }
  texto = loadStrings('data/textosjuego.txt');
  miFuente = loadFont('data/ArcaneFuente.otf');
  cancionAmbiente = loadSound('data/AshesAndBlood.mp3');
}

function setup() {
  createCanvas (640, 480);
  textFont(miFuente);
  tiempoinicio=millis();
  objJuego = new juego();
  imagen[2].resize (60, 140);
  imagen[1].resize(260, 160);
  cancionAmbiente.setVolume(0.5);
}


function draw() {
  background (200);

  if (estado==="juego") { //logica de estados
    objJuego.dibujar();

    let tiempopaso = millis()-tiempoinicio;
    if (tiempopaso>=tiempolimite) { //si se excede tiempo sin chocarse gana
      estado="ganaste";
      cancionAmbiente.stop(); // detener música al ganar
    }
    if (objJuego.personaje.vida === false) {
      estado="perder";
       cancionAmbiente.stop(); // detener música al perder
    }
  } else if (estado==="perder") {
    mostrarPantallaPerdiste();
  } else if (estado==="ganaste") {
    mostrarPantallaGanaste();
  } else if (estado==="tutorial") {
    mostrarPantallaTutorial();
  }
}
//PANTALLAS PERDISTE , GANASTE Y TUTORIAL
function mostrarPantallaPerdiste() {
  background(144, 39, 66);
  fill(255)
    textSize(22);
  image(boton[1], 210, 190, 230, 60);

  text(texto[0], 10, 440, 360);
  text(texto[1], 10, 30, 360);
  text(texto[5], 175, 300, 360);
  textSize(100);
  text(texto[4], 140, 180, 360);
}
function mostrarPantallaGanaste() {
  background(177, 182, 136);
  fill(255);
  textSize(22);

  image(boton[1], 210, 190, 230, 60);

  text(texto[0], 10, 440, 360);
  text(texto[1], 10, 30, 360);
  text(texto[3], 190, 300, 360);
  textSize(100);
  text(texto[2], 150, 180, 360);
}
function mostrarPantallaTutorial() {
  background(0);
  image(imagen[0], 0, 0, width, height);
  image(imagen[3], 245, 300, 160, 160);
  fill(255)
    textSize(18);
  text(texto[7], 150, 275, 360);

  image(boton[0], 210, 190, 230, 60);
  textSize(40);
  text(texto[6], 150, 180, 360);
}

//BOTONES

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}
function reiniciarJuego() {
  estado = "juego";
  tiempoinicio = millis();
  objJuego = new juego();
  if (!cancionAmbiente.isPlaying()) {
  cancionAmbiente.loop(); // hacer que la música se repita en bucle
}
}

//CAMBIO DE ESTADO
function mousePressed() {
  if (estado === "tutorial" && detectarBoton(210, 190, 230, 60)) {
    reiniciarJuego();
    estado= "juego";
     reiniciarJuego();
  }
  if (estado === "ganaste" && detectarBoton(210, 190, 230, 60)) {
    estado= "tutorial";
  } else if (estado === "perder" && detectarBoton(210, 190, 230, 60)) {
    estado= "tutorial";
  }
}


function keyPressed() {
  objJuego.teclaPresionada(keyCode); //al juego y del juego al personaje
}
