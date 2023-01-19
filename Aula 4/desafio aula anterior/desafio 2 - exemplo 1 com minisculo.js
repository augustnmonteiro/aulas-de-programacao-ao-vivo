let notas = [
  ["Augusto", 3],
  ["Joao", 9],
  ["Lucas", 2],
  ["Chico", 10],
  ["Joana", 9],
  ["Luciana", 9.5]
];

nome = prompt("Nome do Aluno?");

for (let i=0; i<notas.length; i++) {
  if (notas[i][0].toLowerCase() == nome.toLowerCase().trim()) {
    alert(notas[i][1])
  }
}