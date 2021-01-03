const bryan = {
  nombre: "Bryan",
  apellido: "Imbaquingo",
  edad: 22,
};

// const cumpleanios = (persona) => persona.edad++;

// creamos un nuevo objeto en memoria
const cumpleaniosInmutable = (persona) => ({
  ...persona,
  edad: persona.edad + 1,
});

console.log(cumpleaniosInmutable(bryan));
console.log(cumpleaniosInmutable(bryan));
console.log(cumpleaniosInmutable(bryan));

console.log(bryan);

// de esta forma si se necesita modificar el valor retornado por la función,
// aunque tenga una propiedad de objeto por dentro
const cumpleaniosInmutableNuevo = (persona) => {
  persona = JSON.parse(JSON.stringify(persona));

  return {
    ...persona,
    edad: persona.edad + 1,
  };
};
