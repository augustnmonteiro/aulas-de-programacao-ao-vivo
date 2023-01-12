let acumuladorDePontos = 0;

// como adicionar pontos ao acumulador de pontos
// acumuladorDePontos = acumuladorDePontos + 5;

// 1. Adicionar 5 pontos sempre que a pergunta for correta
// 2. Mostrar quantos pontos ele fez no final
// 3. Se o valor for correto não precisa mostrar que o valor está correto so
// .  precisa fazer uma nova pergunta (PS. não deixem o if vazio)

while (true) {
  let numero1 = Math.floor(Math.abs(Math.random() * (100 - 0) + 0));
  let numero2 = Math.floor(Math.abs(Math.random() * (100 - 0) + 0));

  let valorDigitado = prompt("Quanto é " + numero1 + "+" + numero2 + "?");

  if (valorDigitado == numero1 + numero2) {
    alert("Correto");
  } else {
    alert("Incorreto você fez (x) pontos");
    break;
  }
}