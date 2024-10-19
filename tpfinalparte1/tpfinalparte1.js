//Comisión 2.
//  https://youtu.be/7XP59LLzriA
//Martina Fuhr 119031/9; Julia Ferrari 119028/6.
let juegg = [];
let boton = [];
let estado;
let guion;
let dialogos = [];
let miFuente;
let cancionAmbiente
let boton1Visible = true;
let boton2Visible = false;
let botones5y6Visibles =false;
let botones7y8Visibles=false;
let botones9y10Visibles=false;
let botones3Visibles=false;


function preload() {
  for (let i=0; i<13; i++) {
    juegg[i] = loadImage("data/juegg"+i+".png");
  }
  for (let a=0; a<11; a++) {
    boton[a] = loadImage("data/boton"+a+".png");
  }

  dialogos = loadStrings('data/Guion_Arcane.txt');
  miFuente = loadFont('data/ArcaneFuente.otf');
  cancionAmbiente = loadSound('data/ArcaneMusicaAmbiente.mp3');
}

function setup() {
  createCanvas(640, 480);
  estado = "menu";
  textFont(miFuente);
  fill(255);
  textSize(14);
  cancionAmbiente.setVolume(0.5);
}

function draw() {
  print(mouseX, mouseY);
  background(200);

  if (estado === "menu") { //Menú creditos
    cargaFondos(juegg[0], 320, 240, 640, 480, CENTER);
    cargaBotones(boton[0], 320, 240, 100, 50, CENTER);
    textSize(14);
    text(dialogos[1], 10, 30, 360);
    text(dialogos[2], 10, 440, 360);
  } else if (estado === "uno") { //Le aparece la bola y los recuerdos1.
    cargaFondos(juegg[1], 320, 240, 640, 480, CENTER);

    if (boton1Visible) {
      cargaBotones(boton[1], 320, 240, 300, 200, CENTER);
      textSize(18);
      text(dialogos[3], 175, 401, 360);
    }
    if (boton2Visible) {
      cargaBotones(boton[2], 320, 300, 600, 500, CENTER);
      text(dialogos[4], 175, 401, 360);
    }
  } else if (estado === "dos") { //Recuerdo taller.
    cargaFondos(juegg[2], 320, 240, 640, 480, CENTER);
    cargaBotones(boton[4], 607, 405, 60, 60, CENTER);
    textSize(14.5);
    text(dialogos[5], 175, 385, 360);
    if (botones5y6Visibles) {
      cargaBotones(boton[5], 191, 237, 230, 60, CENTER);
      cargaBotones(boton[6], 495, 233, 230, 60, CENTER);
    }
  } else if (estado === "tres") { // Se enoja y rompe todo.
    cargaFondos(juegg[4], 320, 240, 640, 480, CENTER);
    cargaBotones(boton[4], 607, 405, 60, 60, CENTER);
    textSize(15.5);
    text(dialogos[6], 175, 393, 360);
  } else if (estado === "cuatro") { // Recuerdo Powder llorando accidente.
    cargaFondos(juegg[3], 320, 240, 640, 480, CENTER);
    cargaBotones(boton[4], 607, 405, 60, 60, CENTER);
    textSize(14.5);
    text(dialogos[7], 175, 385, 360);
    if (botones7y8Visibles) {
      cargaBotones(boton[7], 191, 237, 230, 60, CENTER);
      cargaBotones(boton[8], 495, 233, 230, 60, CENTER);
    }
  } else if (estado === "cinco") { // Te conmueve y la abrazas.
    cargaFondos(juegg[7], 320, 240, 640, 480, CENTER);
    cargaBotones(boton[4], 607, 405, 60, 60, CENTER);
    textSize(16);
    text(dialogos[8], 175, 394, 360);
  } else if (estado === "seis") { // Accidente, se enfada con powder.
    cargaFondos(juegg[6], 320, 240, 640, 480, CENTER);
    cargaBotones(boton[4], 607, 405, 60, 60, CENTER);
    textSize(17);
    text(dialogos[9], 175, 394, 360);
  } else if (estado === "siete") { // Taller, te alegras que Jinx este bien.
    cargaFondos(juegg[5], 320, 240, 640, 480, CENTER);
    cargaBotones(boton[4], 607, 405, 60, 60, CENTER);
    textSize(17);
    text(dialogos[10], 175, 393, 360);
  } else if (estado === "ocho") { // Útilima cena, aca sería la mini juego.
    cargaFondos(juegg[8], 320, 240, 640, 480, CENTER);
    cargaBotones(boton[4], 607, 405, 60, 60, CENTER);
    textSize(15);
    text(dialogos[11], 175, 383, 360);

    if (botones9y10Visibles) {
      cargaBotones(boton[9], 191, 237, 230, 60, CENTER);
      cargaBotones(boton[10], 495, 233, 230, 60, CENTER);
    }
  } else if (estado === "nueve") { // Esquivas las balas. A quién le recuerdas.
    cargaFondos(juegg[10], 320, 240, 640, 480, CENTER);
    cargaBotones(boton[4], 607, 405, 60, 60, CENTER);
    textSize(17.5);
    text(dialogos[12], 175, 390, 360);
    if (botones3Visibles) {
      cargaBotones(boton[3], 320, 300, 600, 500, CENTER);
    }
  } else if (estado === "diez") { // Muerte. Final malo 1
    cargaFondos(juegg[9], 320, 240, 640, 480, CENTER);
    cargaBotones(boton[4], 607, 405, 60, 60, CENTER);
    textSize(17);
    text(dialogos[13], 175, 390, 360);
  } else if (estado === "once") { // Eligió a Vander. Final bueno
    cargaFondos(juegg[12], 320, 240, 640, 480, CENTER);
    cargaBotones(boton[4], 607, 405, 60, 60, CENTER);
    textSize(14.5);
    text(dialogos[14], 175, 385, 360);
  } else if (estado === "doce") { // Eligió a Silco. Final malo 2
    cargaFondos(juegg[11], 320, 240, 640, 480, CENTER);
    cargaBotones(boton[4], 607, 405, 60, 60, CENTER);
    textSize(14);
    text(dialogos[15], 175, 386, 360);
  }
}
