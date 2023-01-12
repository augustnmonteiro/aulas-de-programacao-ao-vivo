
//digitar a glicemia e testar se ta dentro do intervalo saudavel.

let paciente = prompt("Nome do paciente?");
let glicemia = prompt("Valor da glicemia?");

if (glicemia < 70) {
  //hipoglicemico
  alert("O paciente: " + paciente + " está Hipoglicemico");
} else if (glicemia > 99) {
  //hiperglicemia
  alert("O paciente: " + paciente + " está Hiperglicemico");
} else {
  //esta saudavel
  alert("O paciente: " + paciente + "  está Saudavel");
}