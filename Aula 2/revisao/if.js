
// checar numero positivo ou negativo
// checar se numero é par ou impar
// checar em qual faixa etaria está o usuario, as faixas são, 0-18, 18-30, 30-50, 50-70, 70-125
// checar se string está vazia
// checar se string é igual a outra string

// mostrar o que acontece quando colocar `=` no if ao inves de `==`

let numero = 0;

if (numero == 0) {
  alert("neutro");
} else if (numero > 0) {
  alert("positivo");
} else {
  alert("negativo");
}

let numero2 = 20;
if (numero2 % 2 == 0) {
  alert("Par");
} else if (numero2 % 2 != 0) {
  alert("impar");
}

let idade = 25;
if (idade < 18) {
  alert("faixa 1");
} else if (idade >= 18 && idade < 30) {
  alert("faixa 2");
} else if (idade >= 30 && idade < 50) {
  alert("faixa 3");
} else if (idade >= 50 && idade < 70) {
  alert("faixa 4");
} else if (idade >= 70 && idade < 125) {
  alert("faixa 5");
}

let texto = "";
if (texto == "") {
  alert("Você não digitou nada")
} else {
  alert("Ok")
}

let nome = "";

if (nome == "morada nova") {
  alert("ceara");
} else {
  alert("nao sei");
}

let cidade = "";
let nome2 = "";
let idade2 = 0;

cidade = prompt("Qual sua cidade?");
nome2 = prompt("Qual seu nome?");
idade2 = prompt("Qual sua idade?");

if ((cidade == "" || nome == "") && idade2 < 18) {
  alert("Dados invalidos");
} else {
  alert("Cadastro with success");
}

let teste = "meu jogo";

if (teste == "não tem jogo") {
  alert("if");
} else {
  alert("else")
}

alert(teste);



// if (<condições>) {
//   <codigo que vai ser executado se o if for verdade>
// } else {
//   <codigo que vai ser executado se o if for false></codigo>
// }

// if (<condições>) {
//   <codigo que vai ser executado se o if for verdade>
// } else if (<condições>) {
//   <codigo que vai ser executado se o else if for verdade></codigo>
// } else {
//   <codigo que vai ser executado se o if e todos else if forem false></codigo>
// }

// if (<condições>) {
//   <codigo que vai ser executado se o if for verdade>
// } else if (<condições>) {
//   <codigo que vai ser executado se o else if for verdade></codigo>
// } else if (<condições>) {
//   <codigo que vai ser executado se o else if for verdade></codigo>
// } else if (<condições>) {
//   <codigo que vai ser executado se o else if for verdade></codigo>
// } else if (<condições>) {
//   <codigo que vai ser executado se o else if for verdade></codigo>
// } else if (<condições>) {
//   <codigo que vai ser executado se o else if for verdade></codigo>
// } else if (<condições>) {
//   <codigo que vai ser executado se o else if for verdade></codigo>
// } else if (<condições>) {
//   <codigo que vai ser executado se o else if for verdade></codigo>
// } else if (<condições>) {
//   <codigo que vai ser executado se o else if for verdade></codigo>
// } else {
//   <codigo que vai ser executado se o if e todos else if forem false></codigo>
// }

// if (<condiçao>) {
//   if (<condicão>) {
//     <codigo vai ser executado apenas se os 2 ifs forem verdade></codigo> 
//   }
// }