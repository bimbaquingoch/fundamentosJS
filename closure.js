function crearSaludo(finaldeFrase) {
  //esta función llama a los saludos
  return function (nombre) {
    console.log(`hola ${nombre} ${finaldeFrase}`);
  };
}

const saludoArgentino = crearSaludo("che");
const saludoColombiano = crearSaludo("parcero");

saludoArgentino("Chino");
saludoColombiano("Chino");
