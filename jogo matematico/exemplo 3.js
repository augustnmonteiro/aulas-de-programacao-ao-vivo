let pontos = 0;

while(true){
    let numero1 = Math.floor(Math.abs(Math.random() * (100 - 0) + 0));
    let numero2 = Math.floor(Math.abs(Math.random() * (100 - 0) + 0));

    let valorDigitado = prompt("Quanto é " + numero1 + " + " + numero2 + " ?");

    if( valorDigitado ==  numero1 + numero2){
        pontos = pontos + 5;
    } else {
        alert ("Resposta Incorreta. Você fez: " + pontos + " Pontos");
        break;
    } 
}