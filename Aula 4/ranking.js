let ranking = [
  ["usuario a", 40],
  ["usuario b", 100],
  ["usuario c", 90],
];

function mostrarRanking() {
  let texto = "";
  for (let i=0; i<ranking.length; i++) {
    texto += "Usuario: " + ranking[i][0] + " fez: " + ranking[i][1] + "\n";
  }
  alert(texto);
};
