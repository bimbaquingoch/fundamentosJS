const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomain: true };

//para hacer un request con Jquery

// callback
//acepta varios parametros
// el primero es la URL
// el segundo parametro es indicarle que el request se va
// a hacer a otra página
// y el tercer parametro que recibe es una funcion
// const luke_url = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;

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

var ids = [1, 2, 3, 4, 5, 6, 7];
var promesas = ids.map((id) => obtenerPersonaje(id));
Promise.all(promesas).then((personajes) => console.log(personajes));
