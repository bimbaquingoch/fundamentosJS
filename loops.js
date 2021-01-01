// ejercicio adelgazar y aumetar de peso
var sanji = {
  nombre: "Sanji",
  apellido: "Vinskmoke",
  edad: 22,
  peso: 75,
};

const A_S_PESO = 0.2;
const DIAS_ANIO = 365;

const aumetarDePeso = (persona) => (persona.peso += A_S_PESO);
const bajarDePeso = (persona) => (persona.peso -= A_S_PESO);
const comeMucho = () => Math.random() < 0.3;
const haceDeporte = () => Math.random() < 0.4;
const META = sanji.peso - 3;
var dias = 0;

// for loop
console.log("============ FOR LOOP =========");
console.log(`el peso inicial de ${sanji.nombre} es de ${sanji.peso}kg`);
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
console.log("=========== WHILE LOOP ======== ");

console.log(
  `el peso inicial de ${sanji.nombre} es de ${sanji.peso.toFixed(2)}kg`
);
while (sanji.peso > META) {
  if (comeMucho()) {
    aumetarDePeso(sanji);
  }
  if (haceDeporte()) {
    bajarDePeso(sanji);
  }
  dias += 1;
}
console.log(
  `en ${dias} dias ${sanji.nombre} llego a su meta de ${sanji.peso.toFixed(
    2
  )}kg`
);

// a ver si llueve

var cont = 0;

const llueve = () => Math.random() < 0.25;

do {
  cont++;
} while (!llueve());
// esta linea de codigo es equivalente a
console.log(
  `sali a ver si esta lloviendo ${cont} ${cont > 1 ? "veces" : "vez"}`
);

//esta sentencia if

if (cont > 1) {
  console.log(`sali a ver si está lloviendo ${cont} veces`);
} else {
  console.log(`sali a ver si está lloviendo ${cont} vez`);
}
