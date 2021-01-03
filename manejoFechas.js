// manejo de fechas con JS

function diasEntreFechas(fecha1, fecha2) {
  //cantidad e milisegundos en un día
  const unDia = 1000 * 60 * 60 * 24;
  const diferencia = Math.abs(fecha1 - fecha2);
  return Math.floor(diferencia / unDia);
  // esto de aquí devuelve el total de días desde mi nacimiento
  // hasta hoy, si lo que se quiere son los años, entonces
  // el valor debe dividirse para 365
}

const hoy = new Date();
//recibe el año, mes y día
//meses comiensan en 0
const nacimiento = new Date(1998, 3, 3);

// console.log(hoy);
// console.log(nacimiento);

diasEntreFechas(hoy, nacimiento);

// hay que tener en cuenta que date tiene sus propias funciones y
// la que devuelve los días retorna valores de 0 a 6, esto se debe
// a que cuenta los días de la semana, 0=Domingo, 1=Lunes, ..., 6=Sabado
