const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

    $.get(URL, options, (data) => {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucedio un error al obtener al personame ${id}`);
}

async function devuelvePersonaje() {
  var ids = [1, 2, 3, 4, 5, 6, 7];
  var promesas = ids.map((id) => obtenerPersonaje(id));
  try {
    // con las promesas que tenemos las guardamos en una variable
    // await: detiene la ejecucion, hasta que todas las prmesas sean
    // resueltas y se guardan en la variable
    // para utilizar await hay que declarar la funcion como asyncrona
    var personajes = await Promise.all(promesas);
    console.log(personajes);
    // console.table : imprime en la consola de una manera más ordenada
    console.table(personajes);
  } catch (id) {
    onError(id);
  }
}

devuelvePersonaje();
