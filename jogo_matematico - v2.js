let acumuladorDePontos = 0;
let vidas = 3;

let numeroMaximo = 10;

/*
* adicionar operações de subtração, divisão e multiplicação
* as operações devem ser aleatorias
*/

while (vidas > 0) {
  let numero1 = Math.floor(Math.abs(Math.random() * (numeroMaximo - 0) + 0));
  let numero2 = Math.floor(Math.abs(Math.random() * (numeroMaximo - 0) + 0));

  let valorDigitado = prompt("Quanto é " + numero1 + "+" + numero2 + "?");

  if (valorDigitado == numero1 + numero2) {
    acumuladorDePontos = acumuladorDePontos + 5;
    if (acumuladorDePontos % 20 == 0) {
      numeroMaximo = numeroMaximo + 10;
    }
  } else {
    alert("Você ainda tem " + vidas + " vidas");
    vidas = vidas - 1;
  }
}
alert("Você fez " + acumuladorDePontos + " pontos");