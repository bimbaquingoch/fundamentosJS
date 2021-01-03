/*
13 /_4__


13 - 4 = 9    1
9 - 4 = 5     1
5 - 4 = 1     1
1 - 4 = -3  

*/

// para realizar recursividad se necesita un caso base
// y un caso recursivo
function divisionEntera(dividendo, divisor) {
  if (dividendo < divisor) {
    return 0;
  }
  return 1 + divisionEntera(dividendo - divisor, divisor);
}

console.log(divisionEntera(13, 4));
