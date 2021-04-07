var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function juego(usr, cpu) {
  if (usr != cpu) {
    if (usr === piedra && cpu === papel) {
      console.log(`usr = ${usr} vs cpu = ${cpu}`);
      console.log(`ganó el ordenador con ${cpu}`);
    } else if (usr === papel && cpu === tijera) {
      console.log(`usr = ${usr} vs cpu = ${cpu}`);
      console.log(`ganó el ordenador con  ${cpu}`);
    } else if (usr === tijera && cpu === piedra) {
      console.log(`usr = ${usr} vs cpu = ${cpu}`);
      console.log(`ganó el ordenador con ${cpu}`);
    } else {
      console.log(`usr = ${usr} vs cpu = ${cpu}`);
      console.log(`ganó el usuario con ${usr}`);
    }
  } else {
    console.log("empate");
  }
}

juego("papel", "tijera");
