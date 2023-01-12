let pergunta = "Quanto é 8 + 2?";
let opcaoA = "9";
let opcaoB = "10";
let opcaoC = "7";
let opcaoD = "15";

alert(pergunta + " \n" + opcaoA + "\n" + opcaoB + "\n" + opcaoC + "\n" + opcaoD);

while (true) {
  let opcaoDigitada = prompt("Digite a opção correta?");

  if (opcaoDigitada != opcaoA 
    && opcaoDigitada != opcaoB 
    && opcaoDigitada != opcaoC 
    && opcaoDigitada != opcaoD) {
    alert("Opção invalida");
  } else if (opcaoDigitada != opcaoB) {
    alert("Resposta errada");
    break;
  } else {
    alert("Resposta está correta");
    break;
  }
}