let jogador = prompt("nome do jogador?")

let acumuladorDePontos = 0;
let acumuladorDeVidas = 3;

let numeroMaximo = 10;
let min = 0;

/*
* adicionar operações de subtração, divisão e multiplicação
* as operações devem ser aleatorias
*/

let soma = 0;
let subtracao = 1;
let multiplicacao = 2;
let divisao = 3;
  
while (acumuladorDeVidas > 0){

  let numero1 = Math.floor(Math.random() * (numeroMaximo - min) + min);
  let numero2 = Math.floor(Math.random() * (numeroMaximo - min) + min);  
  let operacao = Math.floor(Math.random() * 4);


  let sinal = "";
  let resultado = 0;

 if (operacao == soma){
   sinal = "+";
   resultado = numero1 + numero2;
   
 } else if (operacao == subtracao ){
    if (numero2 > numero1){
      let guardarnumero1 = numero1;
      numero1 = numero2;
      numero2 = guardarnumero1;
    }
    sinal = "-";
    resultado = numero1 - numero2;
     
 } else if (operacao == divisao ){
    sinal = "/";
    while (numero1 % numero2 != 0){
      numero1 = Math.floor(Math.random() * (numeroMaximo - min) + min); 
      numero2 = Math.floor(Math.random() * (numeroMaximo - min) + min);
    }
    resultado = numero1 / numero2;
 } else if (operacao == multiplicacao ){
   sinal = "*";
   resultado = numero1 * numero2;
 }
 let valordigitado = prompt("quanto é " + numero1 + sinal + numero2 + "?");
  
  if(valordigitado == resultado){
    acumuladorDePontos += 5;
    if (pontos % 20 == 0){
      numeroMaximo += 10;
    }
  } else {
    vidas -= 1;

    if ( vidas == 0) {
      if (prompt("game over, " + jogador + " você fez " + acumuladorDePontos + "pontos. \nPara jogar novamente digite, sim.") == 1) {
        vidas = 3;
        max = 10;
      } 
    } else{
      alert(`incorreto, você ainte tem` + acumuladorDeVidas + "vidas!");
    }
  }
}