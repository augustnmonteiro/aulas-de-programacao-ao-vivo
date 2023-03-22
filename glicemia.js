//digitar a glicemia e testar se ta dentro do intervalo saudavel.

let paciente = prompt("Nome do paciente?");
let valor = prompt("Valor da glicemia?");

const glicemia = (valor, paciente, callback) => {
  if (valor < 70) {
    //hipoglicemico
    callback("O paciente: " + paciente + " está Hipoglicemico");
  } else if (valor > 99) {
    //hiperglicemia
    callback("O paciente: " + paciente + " está Hiperglicemico");
  } else {
    //esta saudavel
    callback("O paciente: " + paciente + "  está Saudavel");
  }
}

glicemia(valor, paciente, (texto) => {
  alert("O RESULTADO FOI: " + texto);
  console.log(texto);
});
