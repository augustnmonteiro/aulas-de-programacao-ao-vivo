
class Glicemia {

  paciente = null;
  valor = null;

  constructor(paciente, valor) {
    this.paciente = paciente;
    this.valor = valor;
    this.resultado();
  }

  setPaciente(nome) {
    this.paciente = nome;
  }

  setValor(valor) {
    this.valor = valor;
  }

  resultado = function () {
    if (this.valor < 70) {
      //hipoglicemico
      alert("O paciente: " + this.paciente + " está Hipoglicemico");
    } else if (this.valor > 99) {
      //hiperglicemia
      alert("O paciente: " + this.paciente + " está Hiperglicemico");
    } else {
      //esta saudavel
      alert("O paciente: " + this.paciente + "  está Saudavel");
    }
  }

}