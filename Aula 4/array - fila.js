
let pacientes = [
  "Augusto",
  "Luiz",
  "Guto",
  "William",
  "David"
];

while (pacientes.length > 0) {
  let pacienteParaSerAtendido = pacientes.shift();
  alert("Paciente: " + pacienteParaSerAtendido + " se dirija ao consultorio 1");
}