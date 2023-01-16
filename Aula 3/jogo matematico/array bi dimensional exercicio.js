
let notas = [];

const NOTA_MINIMA = 7;

let nota = 0;

while(nota != "sair") {
  nota = prompt("Digite uma nota ou digite sair para parar");
  if (nota != "sair") {
    notas.push(parseFloat(nota));
  }
}

let total = 0;
for (let i=0; i<notas.length; i++) {
  total = total + notas[i];
}

alert("A media é: " + total / notas.length);

