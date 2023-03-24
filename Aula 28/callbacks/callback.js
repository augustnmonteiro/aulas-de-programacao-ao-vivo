
function maiorIdade(idade, callback) {
  if (idade == 18) {
    callback(['Brasil', 'Portugal', 'Argentina']);
  } else if (idade == 19) {
    callback(['canada'])
  } else if (idade == 21) {
    callback(['usa'])
  }
}

maiorIdade(30, (listaDePaises) => {
  console.log("Paises: ", listaDePaises);
});
