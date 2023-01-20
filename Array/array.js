
let numeros = [
  0, 1, 2, 3, 4
];

maiorNumero = numeros[0];

for (let i=0; i<numeros.length; i++) {
  if (numeroAtual > maiorNumero) {
    maiorNumero = numeroAtual
  }
}
