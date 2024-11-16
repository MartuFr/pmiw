class juego {
  constructor() {
    this.crearEnemigo();
    this.crearPersonaje();
    this.crearFondo();
       
  }

  tiempo() {
  }

  dibujar() {
    this.fondo.dibujar();
    this.personaje.dibujar();
    this.enemigo.dibujar();
    this.enemigo.mover();
    this.enemigo.dispararBalas();
    this.enemigo.gestionarBalas();
    this.verificarColision();
  }
  

  iniciar() {
  }
  
 crearFondo() {
    this.fondo = new fondo(); //dentro del juego, no variable del programa principal. Objeto de class enemigo
  }
  
  crearEnemigo() {
    this.enemigo = new enemigoJinx(150, 10); //dentro del juego, no variable del programa principal. Objeto de class enemigo
  }

  crearPersonaje() {
    this.personaje = new personajeVi(285, 320); //dentro del juego, no variable del programa principal. Objeto de class personaje
  }

verificarColision() {
   if (!this.personaje.vida) return;

    if (this.enemigo.bala !== null) {
      if (this.personaje.verificarColisionConBala(this.enemigo.bala)) {
        this.personaje.vida = false;
        this.enemigo.bala = null;
      }
    }
  }

  gano() {
  }

  pierdo() {
  }
  
  teclaPresionada(keyCode){
    this.personaje.teclaPresionada(keyCode);
  }
}
