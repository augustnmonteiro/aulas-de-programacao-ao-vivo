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
 
let numero1 = 0; 
let numero2 = 0; 
 
 
let ranking = []; 

// () if, else if, switch, for, while
// [] array
// {} bloco de codigo ou objetos
 
// Confirmação de Usuario 
let usuario = "";
function perguntarNomeUsuario() {
  usuario = prompt ("Digite o seu nome : "); 
  while(usuario == ""){ 
      usuario = prompt ("OPS!! Você esqueceu de informar qual o seu nome. \n" + "Insira o seu nome para iniciar o jogo: "); 
  } 
}
 
// Funcoes 
function gerarNumeroAleatorio(min, max) { 
 return Math.floor(Math.random() * (max - min + 1)) + min; 
} 
 
function gerarN1eN2() { 
  numero1 = gerarNumeroAleatorio(0, numeroMaximo); 
  numero2 = gerarNumeroAleatorio(0, numeroMaximo); 
} 
 
function resetarJogo() { 
  pontos = 0; 
  vidas = 3; 
  //Numero maximo inicial que sera gerado aleatoriamente. 
  numeroMaximo = 10; 
} 
 
function verificarQualNumeroEMaiorEAlterar() { 
  if (numero1 < numero2){ 
      let guardarN1 = numero1; 
      numero1 = numero2; 
      numero2 = guardarN1; 
  } 
} 
 // raking de pontos  
  
function mostrarRanking() { 
    let texto = ""; 
    for (let i=0; i<ranking.length; i++) { 
      texto += "Usuario: " + ranking[i][0] + " fez: " + ranking[i][1] + "\n"; 
    } 
    alert(texto); 
  }; 

function diminuirVida() { 
  vidas -= 1; 
  if (vidas > 1 ){ 
      alert ("Resposta Errada. Você ainda tem " + vidas + " vidas"); 
  } else if(vidas == 1){ 
      alert ("Resposta Errada. Você ainda tem " + vidas + " vida");  
  } else if (vidas == 0) { 
      ranking.push([usuario, pontos]);
      if(prompt ("FIM DE JOGO, " + usuario + "! \n" + "Você fez: " + pontos + " Pontos \n" + "Digite um 1 para jogar novamente") == 1){ 
        resetarJogo();
        perguntarNomeUsuario();
      } else {
        mostrarRanking();
      }
  }         
} 
 
function adicionarPontos() { 
  pontos = pontos + 5; 
  if (pontos % 20 == 0){ 
      numeroMaximo += 10; 
      alert ("Você passou de nível, " + usuario +"! \n" + "As perguntas ficarão mais difíceis, Boa sorte."); 
  } 
  if(pontos % 50 == 0 && vidas < 3){ 
      vidas += 1; 
      alert ("Parabéns, "+ usuario +"! Você está fez "+ pontos + " pontos e ganhou 1 vida.") 
  }  
} 
 
//Estrutura do jogo matematico 
perguntarNomeUsuario();
while(vidas > 0){ 
    let operador = gerarNumeroAleatorio(0, 3); 
    let x = gerarNumeroAleatorio(0, 2); 
    gerarN1eN2(); 
 
    //Variação de Operações 
    let sinal = ""; 
    let resultado = 0; 
 
    if (operador == soma){ 
        sinal = " + "; 
        resultado = numero1 + numero2; 
    } else if (operador == subtracao){ 
        sinal = " - "; 
        while (numero1 == 0 || numero2 == 0){ 
          gerarN1eN2(); 
        } 
        verificarQualNumeroEMaiorEAlterar(); 
        resultado = numero1 - numero2; 
    } else if (operador == divisao){ 
        sinal = " / "; 
        while (numero1 % numero2 != 0 || numero1 == 0 || numero2 == 0){ 
          gerarN1eN2(); 
        } 
        verificarQualNumeroEMaiorEAlterar(); 
        resultado = numero1 / numero2; 
    } else if (operador == multiplicacao){ 
        sinal = " * "; 
        while (numero1 == 0 || numero2 == 0){ 
          gerarN1eN2(); 
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
        adicionarPontos(); 
    } else { 
        diminuirVida(); 
    } 
}