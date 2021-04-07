var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function juego(usr, cpu) {
  switch (true) {
    case usr === piedra && cpu === papel:
      console.log(`usr = ${usr} \ncpu = ${cpu}`);
      console.log(`ganó ${cpu}`);
      break;

    case usr === papel && cpu === tijera:
      console.log(`usr = ${usr} \ncpu = ${cpu}`);
      console.log(`ganó ${cpu}`);
      break;

    case (usr === tijera) & (cpu === piedra):
      console.log(`usr = ${usr} \ncpu = ${cpu}`);
      console.log(`ganó ${cpu}`);
      break;
    default:
      console.log(`usr = ${usr} \ncpu = ${cpu}`);
      console.log(`ganó ${usr}`);
  }
}

juego("piedra", "tijera");
