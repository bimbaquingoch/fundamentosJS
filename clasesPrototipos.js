function heredade(prototipoHijo, prototipoPadre) {
  var fn = function () {};
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn();
  //asignar la funcion constructora
  prototipoHijo.prototype.constructor = prototipoHijo;
}

// se define el constructor
// esto es un prototipo/clase
function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function () {
  console.log(
    `hola me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}`
  );
};

function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

// aquí se aplica le herencia de la función qe se creó al inicio
heredade(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
  console.log(`hola me llamo ${this.nombre} y soy desarrollador `);
};

const ALTURA = 1.8;

Persona.prototype.soyAlto = function () {
  var altura =
    this.altura > ALTURA
      ? `yo ${this.nombre} soy alto`
      : `yo ${this.nombre} no soy alto`;
  return console.log(altura);
};

// new hace que se cree un nuevo objeto
var eren = new Persona("Eren", "Jagger", 1.7);

var levi = new Persona("Levi", "Ackerman", 1.6);

var erwin = new Persona("Erwin", "Smith", 1.88);

var bryan = new Desarrollador("Bryan", "Imbaquingo");
bryan.saludar();
