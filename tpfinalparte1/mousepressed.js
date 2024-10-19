function mousePressed() {

  if (estado === "menu") {
    if (detectarBoton(270, 215, 100, 50)) {
      cancionAmbiente.loop();
      estado = "uno";
    }
  } else if (estado === "uno") {
    if (boton1Visible && detectarBoton(270, 184, 92, 72)) {
      boton1Visible = false;
      boton2Visible = true;
    }
    if (boton2Visible && detectarBoton(91, 161, 173, 167)) {
      estado="cuatro";
    }
    if (boton2Visible && detectarBoton(385, 146, 168, 185)) {
      estado="dos";
    }
  } else if (estado == "dos") {
    if (detectarBoton( 577, 381, 60, 60)) {
      botones5y6Visibles = true;
    }
    if (botones5y6Visibles && detectarBoton(74, 207, 230, 60)) {
      estado="siete";
    }
    if (botones5y6Visibles && detectarBoton(379, 204, 230, 60)) {
      estado="tres";
    }
  } else if (estado == "tres") {
    if (detectarBoton( 577, 381, 60, 60)) {
      estado="ocho";
    }
  } else if (estado == "siete") {
    if (detectarBoton( 577, 381, 60, 60)) {
      estado="ocho";
    }
  } else if (estado =="cuatro") {
    if (detectarBoton( 577, 381, 60, 60)) {
      botones7y8Visibles = true;
    }
    if (botones7y8Visibles && detectarBoton(74, 207, 230, 60)) {
      estado="seis";
    }
    if (botones7y8Visibles && detectarBoton(379, 204, 230, 60)) {
      estado="cinco";
    }
  } else if (estado =="cinco") {
    if (detectarBoton( 577, 381, 60, 60)) {
      reiniciarJuego(); 
    }
  } else if (estado=="seis") {
    if (detectarBoton( 577, 381, 60, 60)) {
      estado="ocho";
    }
  } else if (estado=="ocho") {
    if (detectarBoton( 577, 381, 60, 60)) {
      botones9y10Visibles = true;
    }
    if (botones9y10Visibles && detectarBoton(74, 207, 230, 60)) {
      estado="nueve";
    }
    if (botones9y10Visibles && detectarBoton(379, 204, 230, 60)) {
      estado="diez";
    }
  } else if (estado=="diez") {
    if (detectarBoton( 577, 381, 60, 60)) {
      reiniciarJuego();
    }
  } else if (estado=="nueve") {
    if (detectarBoton( 577, 381, 60, 60)) {
      botones3Visibles = true;
    }
    if (botones3Visibles && detectarBoton(74, 207, 230, 60)) {
      estado="doce";
    }
    if (botones3Visibles && detectarBoton(379, 204, 230, 60)) {
      estado="once";
    }
  } else if (estado=="doce") {
    if (detectarBoton( 577, 381, 60, 60)) {
      reiniciarJuego(); 
    }
  } else if (estado=="once") {
    if (detectarBoton( 577, 381, 60, 60)) {
      reiniciarJuego();
    }
  }
}
