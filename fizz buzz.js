
// listar todos os numeros menores de 100 que são multiplos de 3 OU 5

//1 % 3 == 0 || 1 % 5 == 0 
//fazer alguma coisa

// mostrar todos os numeros 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz
// sempre que for dividido por 3 ou 5 mostrar fizz

for (let i=1; i<100; i++) {

  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  } else if (i % 5 == 0) {
    console.log("buzz")
  } else if (i % 3 == 0) {
    console.log("fizz")
  } else {
    console.log(i);
  }

}