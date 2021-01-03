var bryan = {
  nombre: "Bryan",
  apellido: "Imbaquingo",
  edad: 22,
};

function esMayorDeEdad(persona) {
  var mensaje;
  if (persona.edad > 18) {
    mensaje = "Es mayor de edad";
  } else {
    mensaje = "Es menor de edad ";
  }
  console.log(mensaje);
}

// esMayorDeEdad(bryan);

for (var i = 0; i < 10; i++) {
  console.log(i);
}
// si se declara dentro del for la i con let, no se va a imprimir
// porque su alcance se limita solo al for, en cambio con var
// la variable tiene un mayor alcance y por eso se puede imprimir
console.log(`Terminó la ejecución, el valor de i es ${i}`);
