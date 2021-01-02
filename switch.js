const HOROSCOPO = {
  aries: "21 de marzo - 20 de abril",
  tauro: "21 de abril - 21 de mayo",
  geminis: "22 de mayo - 22 de junio",
  cancer: "23 de juno - 23 de julio",
  leo: "24 de julio - 23 de agosto",
  virgo: "24 de agosto - 23 de septiembre",
  libra: "24 de septiembre - 23 de octubre",
  escorpio: "24 de octubre - 22 de noviembre",
  sagitario: "23 de noviembre - 21 de diciembre",
  capricorio: "22 de diciembre - 20 de enero",
  acuario: "21 de enero - 19 de febrero",
  piscis: "20 de febrero - 20 de marzo",
};

var signo = prompt("Cual es tu signo?");
signo = signo.toLowerCase();

const mostrarSigno = (signo) => {
  switch (signo) {
    case "aries":
      console.log(HOROSCOPO.aries);
      break;
    case "tauro":
      console.log(HOROSCOPO.tauro);
      break;
    case "geminis":
      console.log(HOROSCOPO.geminis);
      break;
    case "cancer":
      console.log(HOROSCOPO.cancer);
      break;
    case "leo":
      console.log(HOROSCOPO.leo);
      break;
    case "virgo":
      console.log(HOROSCOPO.virgo);
      break;
    case "libra":
      console.log(HOROSCOPO.libra);
      break;
    case "escorpio":
      console.log(HOROSCOPO.escorpio);
      break;
    case "sagitario":
      console.log(HOROSCOPO.sagitario);
      break;
    case "capricorio":
      console.log(HOROSCOPO.capricorio);
      break;
    case "acuario":
      console.log(HOROSCOPO.acuario);
      break;
    case "piscis":
      console.log(HOROSCOPO.piscis);
      break;

    default:
      console.log("NO ES UN SIGNO ZODIACAL");
  }
};

mostrarSigno(signo);
