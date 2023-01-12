let acumuladorDePontos = 0;
let vidas = 3;

while (vidas > 0) {
  let numero1 = Math.floor(Math.abs(Math.random() * (100 - 0) + 0));
  let numero2 = Math.floor(Math.abs(Math.random() * (100 - 0) + 0));

  let valorDigitado = prompt("Quanto é " + numero1 + "+" + numero2 + "?");

  if (valorDigitado == numero1 + numero2) {
    alert("Correto");
  } else {
    vidas = vidas - 1;
    alert("Você ainda tem " + vidas + " vidas");
  }
}
alert("Você fez " + acumuladorDePontos + " pontos");