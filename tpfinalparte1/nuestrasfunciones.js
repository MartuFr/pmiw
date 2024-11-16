function cargaFondos(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag, x, y, ancho, alto);
}

function cargaBotones(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag, x, y, ancho, alto);
}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}

function keyPressed() {
  if (key === ' ') {
    if (cancionAmbiente.isPlaying()) {
      cancionAmbiente.pause();
    } else {
      cancionAmbiente.play();
    }
  }
}

function reiniciarJuego() {
  estado = "menu";
  boton1Visible = true;
  boton2Visible = false;
  botones5y6Visibles =false;
  botones7y8Visibles=false;
  botones9y10Visibles=false;
  botones3Visibles=false;
  cancionAmbiente.stop();
}
