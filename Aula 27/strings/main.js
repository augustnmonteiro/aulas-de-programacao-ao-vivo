let name = "José";
let lastname = "Doe";
let age = "99";

let text = 'Nome: ' + name + ' Sobrenome: ' + lastname + ' Idade: ' + age;
console.log(text);

let text2 = "Nome: " + name + " Sobrenome: " + lastname + " Idade: " + age;
console.log(text2);

let text3 = "Nome: " + name + ' Sobrenome: ' + lastname + " Idade: " + age;
console.log(text3);

let text4 = `Nome: ${name} Sobrenome: ${lastname} Idade: ${age}`;
console.log(text4);

console.log("---------");
console.log(text4.replace('Sobrenome:', 'Nome da Familia:'));

let pipe = "Nome/Lugar/Idade/Telefone";

console.log(pipe.split("/").join("::::"));

