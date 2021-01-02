class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(
      `hola me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}`
    );

    if (fn) {
      fn(nombre, apellido);
    }
  }

  soyAlto() {
    var altura =
      this.altura > ALTURA
        ? `yo ${this.nombre} soy alto`
        : `yo ${this.nombre} no soy alto`;
    return console.log(altura);
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }

  saludar(fn) {
    var { nombre, apellido } = this;
    // estas 2 líneas son equivalentes a la line de arriba
    // var nombre = this.nombre;
    // var apellido = this.apellido;
    console.log(`hola me llamo ${this.nombre} y soy desarrollador/a `);
    if (fn) {
      fn(nombre, apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mira no sabia que eres desarrollador `);
  }
}

const ALTURA = 1.8;

// new hace que se cree un nuevo objeto
var eren = new Persona("Eren", "Jagger", 1.7);

var levi = new Persona("Levi", "Ackerman", 1.6);

var erwin = new Persona("Erwin", "Smith", 1.88);

var bryan = new Desarrollador("Bryan", "Imbaquingo", 1.7);

eren.saludar();
levi.saludar(responderSaludo);
erwin.saludar();
bryan.saludar(responderSaludo);
