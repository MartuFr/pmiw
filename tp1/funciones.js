
//funcion no retorna valor,grilla

function grilla (col, rad) {
  for (let i=26; i < 51; i+=2) {
    let posX = i*16;
    for (let j=1; j<51; j+=2) {
      let posY =j*13;

      fill(col);
      ellipse( posX, posY, rad, 9);
    }
  }
  for (let i=25; i<51; i+=2) {
    let posX=i*16;
    for (let j=0; j<51; j+=2) {
      let posY =j*13;
      fill(col);
      ellipse(posX, posY, rad, 9);
    }
  }
}

//funcion que retorna valor
function ubicacionMouse(posM) {
  if (mouseX> posM) {
    return true;
  } else {
    return false;
  }
}

//ovalo
function ovalo(col) {
  for (let i=1; i<1000; i+=22) {
    let opacidad=map(i, 1, 1000, 255, 0);
    let tam= map(i, 1, 1000, 100, 400);

    //cambio de tamaño
    if (ubicacionMouse(600)) {
      tam=tam-100;
    }

    //basado en la distancia del mouse en relacion al centro del cuadrado cambia de color ovalo
    let d= dist(600, 200, mouseX, mouseY);
    let grises=map(d, 0, 100, 0, 100);

    fill(grises, opacidad);
    stroke(0, 0);
    ellipse(mouseX, mouseY, tam, tam/2);
  }
}

// presionando la tecla espacio el radio de las elipses de la grilla cambia
function keyPressed() {
  if (key==' ') {
    radio=28;
  } else if (key=='r') { //al presionar tecla r se reinicia el valor del radio
    radio=15;
  } else if (key=='t') { //TENIENDO EN CUENTA CORRECCION SE AGREGA que al presionar la tecla t la ubicacion del ovalo cambie
    mouseX=599;
    mouseY=200;
  }
}
