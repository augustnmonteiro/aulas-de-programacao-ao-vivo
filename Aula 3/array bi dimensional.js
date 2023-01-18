
let notas = [
  ["Augusto", 3],
  ["Joao", 9],
  ["Lucas", 2],
  ["Chico", 10],
  ["Joana", 9],
  ["Luciana", 9.5]
];

const NOTA_MINIMA = 7;

for (let i=0; i<notas.length; i++) {
  if (notas[i][1] < NOTA_MINIMA) {
    alert("Reprovado: " + notas[i][0]);
  } else {
    alert("Aprovado: " + notas[i][0]);
  }
}


notas = [
  ["Matematica", [
    ["Augusto", 3],
    ["Joao", 9]
  ]],
  ["Portugues", [
    ["Augusto", 9],
    ["Joao", 3]
  ]],
  ["Fisica", [
    ["Augusto", 3],
    ["Joao", 2]
  ]],
];


notas = [
  ["Augusto", [
    ["Matematica", 3],
    ["Fisica", 9]
    ["Quimica", 2]
  ]],
  ["Lucas", [
    ["Matematica", 3],
    ["Fisica", 9]
    ["Quimica", 2]
  ]],
  ["Joao", [
    ["Matematica", 3],
    ["Fisica", 9]
    ["Quimica", 2]
  ]],
  ["Lucia", [
    ["Matematica", 3],
    ["Fisica", 9]
    ["Quimica", 2]
  ]],
];