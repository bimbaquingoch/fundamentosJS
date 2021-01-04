var nombre = {
  apellido: "imbaquin",
};

function pasar(nombre) {
  return console.log(nombre.toUpperCase());
}

setTimeout(() => console.log(1), 1000);
setTimeout(() => console.log(2), 300);
setTimeout(() => console.log(3), 0);
console.log(4);
