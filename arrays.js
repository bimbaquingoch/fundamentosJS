var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72,
  cantidadDeLibros: 111,
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86,
  cantidadDeLibros: 78,
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85,
  cantidadDeLibros: 132,
};

var dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1.71,
  cantidadDeLibros: 90,
};

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56,
  cantidadDeLibros: 91,
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76,
  cantidadDeLibros: 182,
};
var personas = [sacha, alan, martin, dario, vicky, paula];

for (var i = 0; i < personas.length; i++) {
  persona = personas[i];
  // console.log(`${persona.nombre} mide ${persona.altura}`);
}

// filtrar elementos de un array

const esAlta = ({ altura }) => altura > 1.8;
const esBaja = ({ altura }) => altura < 1.8;
var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

// console.log(personasAltas);
// console.log("============");
// console.log(personasBajas);

console.log("*********** Transformacion de arrays **************");
// enviando como objetos, no se modifica el objeto original
// const pasarAlturaCM = (persona) => {
//   return {
//     ...persona,
//     altura: persona.altura * 100,
//   };
// };

// esta forma de crear la arrow function es equivalente a la anterior

const pasarAlturaCM = (persona) => ({
  ...persona,
  altura: persona.altura * 100,
});
var personasCMS = personas.map(pasarAlturaCM);

// console.log(personasCMS);
// console.log(personas);

console.log("================== Reducir un array a un valor");

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;
// reduce:
// recibe una función y el valor inicial del acumulador, 0 en este caso
var totalLibros = personas.reduce(reducer, 0);
console.log(`entre todos hay un total de ${totalLibros} libros `);
