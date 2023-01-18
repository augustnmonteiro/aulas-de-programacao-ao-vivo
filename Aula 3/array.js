
let notas = [
  10,
  6,
  5,
  7,
  9,
  3,
  7,
  10,
  10
];


let total = 0;
for (let i=0; i<notas.length; i++) {
  total = total + notas[i];
}

alert(total / notas.length);