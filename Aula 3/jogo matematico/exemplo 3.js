//Dados iniciais de jogo
let pontos = 0;
let vidas = 3;

//Numero maximo inicial que sera gerado aleatoriamente.
let numeroMaximo = 10;

// Operações
let soma = 0;
let subtracao = 1;
let divisao = 2;
let multiplicacao = 3;

// Incognitas
let xn1 = 0;
let xn2 = 1;
let xr = 2;

// Confirmação de Usuario
let usuario = prompt ("Digite o seu nome : ");
while(usuario == ""){
    usuario = prompt ("OPS!! Você esqueceu de informar qual o seu nome. \n" + "Insira o seu nome para iniciar o jogo: ");
}

//Estrutura do jogo matematico
while(vidas > 0){
    let operador = Math.floor(Math.abs(Math.random() * (4 - 0)));
    let numero1 = Math.floor(Math.abs(Math.random() * (numeroMaximo )));
    let numero2 = Math.floor(Math.abs(Math.random() * (numeroMaximo )));
    let x = Math.floor(Math.abs(Math.random() * (3 - 0)));

    //Variação de Operações
    let sinal = "";
    let resultado = 0;

    if (operador == soma){
        sinal = " + ";
        resultado = numero1 + numero2;
    } else if (operador == subtracao){
        sinal = " - ";
        while (numero1 == 0 || numero2 == 0){
            numero1 = Math.floor(Math.abs(Math.random() * (numeroMaximo )));
            numero2 = Math.floor(Math.abs(Math.random() * (numeroMaximo )));
        }
        if (numero1 < numero2){
            let guardarN1 = numero1;
            numero1 = numero2;
            numero2 = guardarN1;
        }
        resultado = numero1 - numero2;
    } else if (operador == divisao){
        sinal = " / ";
        while (numero1 % numero2 != 0 || numero1 == 0 || numero2 == 0){
            numero1 = Math.floor(Math.abs(Math.random() * (numeroMaximo )));
            numero2 = Math.floor(Math.abs(Math.random() * (numeroMaximo )));
        }
        if (numero1 < numero2){
            let guardarN1 = numero1;
            numero1 = numero2;
            numero2 = guardarN1;
        }
        resultado = numero1 / numero2;
    } else if (operador == multiplicacao){
        sinal = " * ";
        while (numero1 == 0 || numero2 == 0){
            numero1 = Math.floor(Math.abs(Math.random() * (numeroMaximo )));
            numero2 = Math.floor(Math.abs(Math.random() * (numeroMaximo )));
        }
        resultado = numero1 * numero2;
    }

    //Variação do posicionamento da Incognita
    let xposicao1 = numero1;
    let xposicao2 = numero2;
    let xposicaoresultado = resultado;
    let resposta;

    if(x == xn1){
        xposicao1 = "x";
        resposta = numero1; 
    }else if(x == xn2){
        xposicao2 = "x";
        resposta = numero2;
    }else if(x == xr){
        xposicaoresultado = "x";
        resposta = resultado;
    }

    //Execução
    let valorDigitado = prompt("Quanto é " + xposicao1 + sinal + xposicao2 + " = " + xposicaoresultado + " ?");
    if( valorDigitado ==  resposta){
        pontos = pontos + 5;
        if (pontos % 20 == 0){
            numeroMaximo += 10;
            alert ("Você passou de nível, " + usuario +"! \n" + "As perguntas ficarão mais difíceis, Boa sorte.");
        }
        if(pontos % 50 == 0 && vidas < 3){
            vidas += 1;
            alert ("Parabéns, "+ usuario +"! Você está fez "+ pontos + " pontos e ganhou 1 vida.")
        }
    } else {
        vidas -= 1;
        if (vidas > 1 ){
            alert ("Resposta Errada. Você ainda tem " + vidas + " vidas");
        } else if(vidas == 1){
            alert ("Resposta Errada. Você ainda tem " + vidas + " vida");
        } else if (vidas == 0){
            if(prompt ("FIM DE JOGO, " + usuario + "! \n" + "Você fez: " + pontos + " Pontos \n" + "Digite um 1 para jogar novamente") == 1){
                vidas = 3;
                numeroMaximo = 10;
                pontos = 0;
            }
        } 
    }
} 