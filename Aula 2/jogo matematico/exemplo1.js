let pontos = 0;
let vidas = 3;

let numeroMaximo = 20;

const SOMA = 0;
const SUBTRACAO = 1;
const DIVISAO = 2;
const MULTIPLICACAO = 3;

let usuario = prompt ("Digite o seu nome : ")

while(vidas > 0){
    let operador = Math.floor(Math.abs(Math.random() * (4 - 0)));
    let numero1 = Math.floor(Math.abs(Math.random() * (numeroMaximo )));
    let numero2 = Math.floor(Math.abs(Math.random() * (numeroMaximo )));

    if (operador == SOMA){
        let valorDigitado = prompt("Quanto é " + numero1 + " + " + numero2 + " ?");
        if( valorDigitado ==  numero1 + numero2){
            pontos = pontos + 10;
            if (pontos % 20 == 0){
                numeroMaximo += 10;
                alert ("Você passou de nível, " + usuario +"!" + "\n" + "As perguntas ficarão mais difíceis, Boa sorte.");
            }
        } else {
            vidas -= 1;
            if (vidas > 1 ){
                alert ("Você ainda tem " + vidas + " vidas");
            } else if(vidas == 1){
                alert ("Você ainda tem " + vidas + " vida");
            } else {
                alert ("FIM DE JOGO, " + usuario + "! " + "\n" + "Você fez: " + pontos + " Pontos");
            } 
        }
    }
    if (operador == SUBTRACAO){
        while (numero1 - numero2 < 0 ){
            numero1 = Math.floor(Math.abs(Math.random() * (numeroMaximo )));
            numero2 = Math.floor(Math.abs(Math.random() * (numeroMaximo )));
        }
        let valorDigitado = prompt("Quanto é " + numero1 + " - " + numero2 + " ?");
        if( valorDigitado ==  numero1 - numero2){
            pontos = pontos + 10;
            if (pontos % 20 == 0){
                numeroMaximo += 10;
                alert ("Você passou de nível, " + usuario +"!" + "\n" + "As perguntas ficarão mais difíceis, Boa sorte.");
            }
        } else {
            vidas -= 1;
            if (vidas > 1 ){
                alert ("Resposta Errada. Você ainda tem " + vidas + " vidas");
            } else if(vidas == 1){
                alert ("Resposta Errada. Você ainda tem " + vidas + " vida");
            } else {
                alert ("FIM DE JOGO, " + usuario + "! " + "\n" + "Você fez: " + pontos + " Pontos");
            }
        }
    }
    if (operador == DIVISAO){
        while (numero1 % numero2 != 0){
                numero1 = Math.floor(Math.abs(Math.random() * (numeroMaximo )));
                numero2 = Math.floor(Math.abs(Math.random() * (numeroMaximo )));
        }
            let valorDigitado = prompt("Quanto é " + numero1 + " / " + numero2 + " ?");
            if( valorDigitado ==  numero1 / numero2){
                pontos = pontos + 10;
                    if (pontos % 20 == 0){
                    numeroMaximo += 10;
                    alert ("Você passou de nível, " + usuario +"!" + "\n" + "As perguntas ficarão mais difíceis, Boa sorte.");
                } 
            } else {
                vidas -= 1;
                if (vidas > 1 ){
                    alert ("Você ainda tem " + vidas + " vidas");
                } else if(vidas == 1){
                    alert ("Você ainda tem " + vidas + " vida");
                } else {
                    alert ("FIM DE JOGO, " + usuario + "! " + "\n" + "Você fez: " + pontos + " Pontos");
                }
            }     
    }  
    if (operador == MULTIPLICACAO){
        let valorDigitado = prompt("Quanto é " + numero1 + " * " + numero2 + " ?");
        if( valorDigitado ==  numero1 * numero2){
            pontos = pontos + 10;
            if (pontos % 20 == 0){
                numeroMaximo += 10;
                alert ("Você passou de nível, " + usuario +"!" + "\n" + "As perguntas ficarão mais difíceis, Boa sorte.");
            }
        } else {
            vidas -= 1;
            if (vidas > 1 ){
                alert ("Você ainda tem " + vidas + " vidas");
            } else if(vidas == 1){
                alert ("Você ainda tem " + vidas + " vida");
            } else {
                alert ("FIM DE JOGO, " + usuario + "! " + "\n" + "Você fez: " + pontos + " Pontos");
            }
        }
    }
}