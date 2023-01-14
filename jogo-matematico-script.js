/**
 * Gerar numeros aleatorios
 * Gerar operação aleatoria
 * Pedir para usuario digitar resultado
 * Verificar se resultado está correto
 * Se o resultado for errado, remover uma vida
 * Se o resultado for correto adicionar 5 pontos
 * Aumentar dificuldade a cada 20 pontos
 * No game over perguntar se ele quer jogar novamente 
 */

let vidas = 3;
let pontos = 0;

let max = 10;
let min = 0;

let soma = 0;
let subtracao = 1;
let divisao = 2;
let multiplicacao = 3;

while (vidas > 0) {

  let n1 = Math.floor(Math.random() * (max - min) + min);
  let n2 = Math.floor(Math.random() * (max - min) + min);
  let operacao = Math.floor(Math.random() * 4);

  let sinal = "";
  let resultado = 0;

  if (operacao == soma) {
    sinal = "+";
    resultado = n1 + n2;
  } else if (operacao == subtracao) {
    if (n2 > n1) {
      let guardarN1 = n1;
      n1 = n2;
      n2 = guardarN1;
    }
    sinal = "-";
    resultado = n1 - n2;
  } else if (operacao == divisao) {
    sinal = "/";
    while (n1 % n2 != 0) {
      n1 = Math.floor(Math.random() * (max - min) + min);
      n2 = Math.floor(Math.random() * (max - min) + min);
    }
    resultado = n1 / n2;
  } else if (operacao == multiplicacao) {
    sinal = "*";
    resultado = n1 * n2;
  }

  let valorDigitado = prompt("Quanto é " + n1 + sinal + n2 + "?");

  if (valorDigitado == resultado) {
    pontos += 5;
    if (pontos % 20 == 0) {
      max += 10;
    }
  } else {
    vidas -= 1;
    if (vidas == 0 && prompt("Game over, você fez " + pontos + " pontos.\nPara jogar novamente digite 1.") == 1) {
      vidas = 3;
      max = 10;
    } else if (vidas > 0) {
      alert("Errou, você ainda tem " + vidas + " vidas!");
    }
  }

}