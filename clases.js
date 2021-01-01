var bryan = {
  nombre: "Bryan",
  edad: 22,
};

var carlos = {
  nombre: "Carlos",
  edad: 15,
};

function saludar(persona) {
  var { nombre } = persona;
  var { edad } = persona;
  console.log(`hola, me llamo ${nombre} y tengo ${edad} años`);
}

saludar(bryan);
saludar(carlos);

function cumpleanios(persona) {
  /* con esta linea el objeto retorna un valor que no 
    cambia en el objeto declarado inicialmente
    osea crea un valor con tiempo de vida*/
  // console.log(persona.edad +=1);
  /*por otro lado acá le decimos que retorne el valor y sobreescriba
    sobre el objeto que declaramos anteriormente*/
  // creacion de un nuevo objeto
  return {
    ...persona,
    edad: persona.edad + 1,
  };
}

console.log(cumpleanios(carlos));

const MAYORIA_DE_EDAD = 18;

function validarMayoria(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

function mayordeEdad(persona) {
  if (validarMayoria(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} eres menor de edad`);
  }
}

mayordeEdad(bryan);
mayordeEdad(carlos);

// arrow function
// esta es una forma de escribir un arrow function, que si necesitamos que solo
// nos regrese un valor, está bien.
// pero si necesitamos una funcion mas compleja, despues de la flecha, utilizar
// llaves porque estas definen el cuerpo de la funcion

const validarEdad = (persona) => persona.edad >= MAYORIA_DE_EDAD;

// con destructuracion sería así
const valida = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function mayor(persona) {
  if (valida(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

mayor(bryan);
mayor(carlos);

function permitirAcceso(persona) {
  if (!validarEdad(persona)) {
    console.log("ACCESO DENEGADO");
  } else {
    console.log("BIENVENIDO");
  }
}

permitirAcceso(bryan);
permitirAcceso(carlos);

// RETO
const EDAD_LEGAL = 18;

const edadMayor = ({ edad }) => {
  return edad >= EDAD_LEGAL;
};

const validaMayor = (persona) => {
  if (edadMayor(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
};

const esMenordeEdad = (persona) => {
  !validaMayor(persona);
};

console.log("===========================");

// validaMayor(bryan);
// validaMayor(carlos);

esMenordeEdad(bryan);
esMenordeEdad(carlos);

// ejercicio adelgazar y aumetar de peso

var sanji = {
  nombre: "Sanji",
  apellido: "Vinskmoke",
  edad: 22,
  peso: 75,
};

console.log(`el peso inicial de ${sanji.nombre} es de ${sanji.peso}kg`);

const A_S_PESO = 0.2;
const DIAS_ANIO = 365;

const aumetarDePeso = (persona) => (persona.peso += A_S_PESO);
const bajarDePeso = (persona) => (persona.peso -= A_S_PESO);

for (var i = 1; i <= DIAS_ANIO; i++) {
  var random = Math.random();

  if (random < 0.5) {
    aumetarDePeso(sanji);
    // console.log("menor a 0.25");
  } else if (random >= 0.5) {
    bajarDePeso(sanji);
    // console.log("menor a 0.5");
  }
}

console.log(
  `despues de un anio ${sanji.nombre} pesa ${sanji.peso.toFixed(2)}kg`
);
