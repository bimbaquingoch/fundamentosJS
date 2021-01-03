const bryan = {
  nombre: "Bryan",
  apellido: "Imbaquingo",
  edad: 22,
};

function saludar(saludo = "hola") {
  console.log(`${saludo} mi nombre es ${this.nombre} ${this.apellido}`);
}

// const saludarBryan = saludar.bind(bryan);

// setTimeout(saludar.bind(bryan, "hola che"), 2000);

// saludarBryan();

saludar.call(bryan, "hola che");
// saludar.bind(bryan);

// el apply funciona similar al call, el primer parametro es el this
// y el segundo parametro es un array que tiene los parametros de
// la función.
saludar.apply(bryan, ["hola che"]);
