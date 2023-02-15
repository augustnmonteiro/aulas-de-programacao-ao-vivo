
class Pessoa {

  nome = null;
  dataNascimento = null;
  altura = null;

  setNome = function (nome) {
    this.nome = nome;
  }

  setDataNascimento = function (dataNascimento) {
    this.dataNascimento = dataNascimento;
  }

  setAltura = function (altura) {
    this.altura = altura;
  }

  getNome = function() {
    return this.nome;
  }

  getDataNascimento = function() {
    return this.dataNascimento;
  }

  getAltura = function() {
    return this.altura;
  }

}