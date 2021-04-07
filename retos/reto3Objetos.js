var prompt = require("prompt");
prompt.start();

function auto(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}

var autos = [];

for (var i = 0; i <= 30; i++) {
  var marca = prompt.get(["Ingrese la marca del auto: "]);
  var modelo = prompt.get(["Ingrese el modelo: "]);
  var anio = prompt.get(["Ingrese el año: "]);
  autos.push(new auto(marca, modelo, anio));
}

for (var vehiculo of autos) {
  console.log(vehiculo);
}
