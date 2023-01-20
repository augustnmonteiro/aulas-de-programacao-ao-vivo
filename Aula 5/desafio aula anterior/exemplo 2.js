let vidas = 3;
let pontos = 0;

let max =10;
let min = 1;

let soma = 0;
let subtracao = 1;
let divisao = 2;
let multiplicacao = 3;

let xn1 = 0;
let xn2 = 1;
let xr = 2;

let ranking = [];

function resetarJogo (){
    vidas = 3;
    max = 10;
    pontos = 0;   
}

function mostrarRanking (){
    let texto = "";
    for ( let i=0; i<ranking.length; i++){
        texto += "Usuario: " + ranking [i][0] + " fez " + ranking[i][1] + "\n";
    }
    alert(texto);
}


let nomeUsuario = "";

while ( nomeUsuario == "" ) {
    nomeUsuario = prompt("Para iniciar o jogo, insira seu nome:")
} 

alert ( "Bom jogo, " + nomeUsuario + "!")

while(vidas > 0) {
    
    let x = Math.floor(Math.random() * 3); //posição do X na equação
    
    let n1 = Math.floor(Math.random() * (max - min) + min); // primeiro valor aleatorio
    let n2 = Math.floor(Math.random() * (max - min) + min); // segundo valor aleatorio
    let operacao = Math.floor(Math.random() * 4);
    
    let sinal = "";
    let resultado = 0;
    switch (operacao){
        case soma:
            sinal = "+"
            resultado = n1 + n2 
        break;
        
        case subtracao:
            sinal = "-"
            resultado = n1 - n2
        break;
        
        case divisao:
            sinal = "/"
            resultado = n1 / n2
        break;
        
        case multiplicacao:
            sinal = "*"
            resultado = n1 * n2
        break;
    }     
    
    let valorDigitado = 0;
    let checar = 0;
    
    if (x == xn1){
        valorDigitado = prompt("Quanto é " + "X" + sinal + n2 + "=" + resultado);
        checar = n1;
    }else if (x == xn2){
        valorDigitado = prompt("Quanto é " + n1 + sinal + "X" + "=" + resultado);
        checar = n2;
    } else {
        valorDigitado = prompt("Quanto é " + n1 + sinal + n2 + "= X");
        checar = resultado;
    }
    
    
    if ( valorDigitado == checar) {
        pontos += 5;
        if ( pontos % 20 == 0) {
            max += 10;                 
        }
        if ( pontos % 50 == 0 && vidas < 3) {
            vidas += 1;
        }
    } else {
        vidas -= 1;
        if (vidas == 0) {  
            ranking.push([nomeUsuario, pontos]);
            if (prompt("Game over, " + nomeUsuario + "." + " Você fez " + pontos + " pontos.\nPara jogar novamente digite 1.") ==1 ) {
                resetarJogo();
                nomeUsuario = prompt("Digite seu nome:")
                while ( nomeUsuario == "" ) {
                    nomeUsuario = prompt("Para iniciar o jogo, insira seu nome:")
                } 
            } else {
                mostrarRanking();
            }
        } else {
            alert (nomeUsuario + ", " + "você errou! Lhe restam " + vidas + " vidas.");
        }
    } 
} 