
//digitar a glicemia e testar se ta dentro do intervalo saudavel.
let historico = [];

while (true) {
 let paciente = prompt("Nome do paciente?");
 let glicemia = prompt("Valor da glicemia?");

 historico.push([paciente, glicemia]);

 if (prompt("Para adicionar mais um paciente digite 1") != 1) {
   break;
 }
}

for (let i=0; i<historico.length; i++) {
  let paciente = historico[i][0];
  let glicemia = historico[i][1];

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

}

console.log(historico);