
let vidas = 3;
let pontos = 0;

let max = 10;
let min = 0;

let soma = 0;
let subtracao = 1;
let divisao = 2;
let multiplicacao = 3;

while (vidas > 0 ) {
      
      let n1 = Math.floor (Math.random() * (max - 0) + 0);
      let n2 = Math.floor (Math.random() * (max - 0) + 0);
      let operacao = Math.floor(Math.random() * 4)
      
      let sinal = ""
      let resultado = 0;
      
      if ( operacao == soma ){
            sinal = "+"
            resultado = n1 + n2
      } else if ( operacao == subtracao ){
            sinal = "-"
            if (n2 > n1){
                  let memorizan1 = n1
                  n1 = n2
                  n2 = memorizan1
            }
            resultado = n1 - n2
      } else if ( operacao == divisao){
            sinal = "/"
            while (n1 % n2 != 0 ) {
                  n1 = Math.floor (Math.random * (max - min) + min) ;
                  n2 = Math.floor (Math.random * (max - min) + min) ;
            }
            resultado = n1/n2 
      } else if ( operacao == multiplicacao ){
            sinal = "*"
            resultado = n1 * n2
      }
      
      
      let valorDigitado= prompt( "Qual o valor correto de " + n1 + sinal + n2 + "?")
      
      if(valorDigitado == resultado) {
            pontos += 5;
            if (pontos % 20 == 0) {
                  max +=10;
            }
      } else {
            vidas -= 1;
            if (vidas == 0 && prompt("Game over, você fez" + pontos + "pontos.\nPara jogar novamente:\nDigite1")==1){
                  vidas=3;
                  max= 10; 
            } else if( vidas > 0 ) {
                  alert("Incorreto, você ainda tem" + vidas + "vidas");
            }
      }
}