let acumuladorDePontos = 0;
let vidas = 3;
let numeroMaximo = 10;
let numeroMinimo = 0; 
let adicao= 0;
let subtracao = 1;
let multiplicacao = 2;
let divisao = 3;
let pergunta1 = 4;
let pergunta2 = 5;
let pergunta3 = 6;

let usuario = prompt("Qual seu nome?"); 

while (usuario == "") {
  alert ("Usuário inválido!")
  usuario = prompt("Qual seu nome?"); 
}

while (vidas > 0) {
  let numero1 = Math.floor(Math.abs(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo));
  let numero2 = Math.floor(Math.abs(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo));
  let operacao = Math.floor(Math.abs(Math.random() * (4 - 0) + 0));
  let pergunta = Math.floor(Math.abs(Math.random() * (7 - 4) + 4));

  
  if (operacao == adicao) {  
    if (pergunta == pergunta1) {
    let resultado = numero1 + numero2; 
    let valorDigitado = prompt("Quanto é " + numero1 + " + X = " + resultado + "?");
      if (valorDigitado != "" && valorDigitado == numero2) {
      acumuladorDePontos += 5;
        if (acumuladorDePontos % 20 == 0) {
        numeroMaximo += 10;
    }
        if (vidas < 3) {
          if (acumuladorDePontos % 50 == 0) {
          vidas +=1;
      }
    }
   }
    else if (vidas > 0) {
      vidas -= 1;
      alert("" + usuario +", você tem " + vidas + " vidas");
      if (vidas == 0) {
      let re = prompt("FIM DE JOGO, "+ usuario +". \n" + "Você fez "+ acumuladorDePontos + " pontos! \n" + "Digite 1 para jogar novamente.");
        if (re == 1)  {
        vidas = 3;
        numeroMaximo = 10;
        acumuladorDePontos = 0;
      }
    }
    }
  }
   else if (pergunta == pergunta2) {
   resultado = numero1 + numero2; 
   let valorDigitado = prompt("Quanto é  X + " + numero2 + " = " + resultado + "?");
   if (valorDigitado != "" && valorDigitado == numero1) {
     acumuladorDePontos += 5;
      if (acumuladorDePontos % 20 == 0) {
      numeroMaximo += 10;
    }
       if (vidas < 3) {
        if (acumuladorDePontos % 50 == 0) {
        vidas +=1
      }
    }
  }

  else if (vidas > 0) {
  vidas -= 1;
  alert("" + usuario +", você tem " + vidas + " vidas");
    if (vidas == 0) {
    let re = prompt("FIM DE JOGO, "+ usuario +". \n" + "Você fez "+ acumuladorDePontos + " pontos! \n" + "Digite 1 para jogar novamente.");
      if (re == 1)  {
      vidas = 3;
      numeroMaximo = 10;
      acumuladorDePontos = 0;
  }
}  
}
}
    else if (pergunta == pergunta3){
    resultado = numero1 + numero2; 
    let valorDigitado = prompt("Quanto é " + numero1 + " + " + numero2 +" = X ?");
      if (valorDigitado != "" && valorDigitado == resultado) {
      acumuladorDePontos += 5;
        if (acumuladorDePontos % 20 == 0) {
      numeroMaximo += 10;
    }
        if (vidas < 3) {
          if (acumuladorDePontos % 50 == 0) {
          vidas +=1
      }
    }
  }
    else if (vidas > 0) {
    vidas -= 1;
    alert("" + usuario +", você tem " + vidas + " vidas");
      if (vidas == 0) {
      let re = prompt("FIM DE JOGO, "+ usuario +". \n" + "Você fez "+ acumuladorDePontos + " pontos! \n" + "Digite 1 para jogar novamente.");
        if (re == 1) {
        vidas = 3;
        numeroMaximo = 10;
        acumuladorDePontos = 0;
  }
}
}
}
  }
  if (operacao == subtracao) { 
    while (numero1 - numero2 < 0)  {
    numero1 = Math.floor(Math.abs(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo));
    numero2 = Math.floor(Math.abs(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo));
      if (numero1 < numero2) {
      let guadarn1 = numero1;
      numero1 = numero2;
      numero2 = guadarn1;  
     }
     }
      if (pergunta == pergunta1) {
      let resultado = numero1 - numero2;
      let valorDigitado = prompt("Quanto é " + numero1 + " - X = "+ resultado + "?");
        if (valorDigitado != "" && valorDigitado == numero2) {
        acumuladorDePontos += 5;
          if (acumuladorDePontos % 20 == 0) {
          numeroMaximo += 10;
    }
          if (vidas < 3) {
            if (acumuladorDePontos % 50 == 0) {
            vidas +=1
      }
    }
  }
    else if (vidas > 0) {
    vidas -= 1;
    alert("" + usuario +", você tem " + vidas + " vidas");
      if (vidas == 0) {
      let re = prompt("FIM DE JOGO, "+ usuario +". \n" + "Você fez "+ acumuladorDePontos + " pontos! \n" + "Digite 1 para jogar novamente.");
        if (re == 1)  {
        vidas = 3;
        numeroMaximo = 10;
        acumuladorDePontos = 0;
      }
    }
  }
    }
    else if (pergunta == pergunta2) {
    let resultado = numero1 - numero2;
    let valorDigitado = prompt("Quanto é X - " + numero2 + "  = "+ resultado + "?");
      if (valorDigitado != "" && valorDigitado == numero1) {
      acumuladorDePontos += 5;
        if (acumuladorDePontos % 20 == 0) {
        numeroMaximo += 10;
   }
      if (vidas < 3) {
      if (acumuladorDePontos % 50 == 0) {
     vidas +=1
   }
 }
}
    else if (vidas > 0) {
    vidas -= 1;
    alert("" + usuario +", você tem " + vidas + " vidas");
      if (vidas == 0) {
      let re = prompt("FIM DE JOGO, "+ usuario +". \n" + "Você fez "+ acumuladorDePontos + " pontos! \n" + "Digite 1 para jogar novamente.");
         if (re == 1)  {
         vidas = 3;
         numeroMaximo = 10;
         acumuladorDePontos = 0;
 }
}
}
}
    else if (pergunta == pergunta3) {
    let resultado = numero1 - numero2;
    let valorDigitado = prompt("Quanto é " + numero1 +"  - " + numero2 + "  = X ?");
      if (valorDigitado != "" && valorDigitado == resultado) {
      acumuladorDePontos += 5;
       if (acumuladorDePontos % 20 == 0) {
       numeroMaximo += 10;
 }
       if (vidas < 3) {
       if (acumuladorDePontos % 50 == 0) {
       vidas +=1
   }
 }
}
    else if (vidas > 0) {
    vidas -= 1;
     alert("" + usuario +", você tem " + vidas + " vidas");
       if (vidas == 0) {
      let re = prompt("FIM DE JOGO, "+ usuario +". \n" + "Você fez "+ acumuladorDePontos + " pontos! \n" + "Digite 1 para jogar novamente.");
        if (re == 1) {
      vidas = 3;
      numeroMaximo = 10;
      acumuladorDePontos = 0;
  }
}
    }
}
}
    if (operacao == multiplicacao) {
      if (numero1 < numero2) {
      let guadarn1 = numero1;
      numero1 = numero2;
      numero2 = guadarn1;
      }
      if (pergunta == pergunta1){
      let resultado = numero1 * numero2;
      let valorDigitado = prompt("Quanto é " + numero1 + " * X = " + resultado + "?");
        if (valorDigitado != "" && valorDigitado == numero2 ) {
        acumuladorDePontos += 5;
          if (acumuladorDePontos % 20 == 0) {
          numeroMaximo += 10;
      }
          if (vidas < 3) {
            if (acumuladorDePontos % 50 == 0) {
          vidas +=1
      }
    }
    }
      else if (vidas > 0) {
      vidas -= 1;
      alert("" + usuario +", você tem " + vidas + " vidas");
        if (vidas == 0) {
        let re = prompt("FIM DE JOGO, "+ usuario +". \n" + "Você fez "+ acumuladorDePontos + " pontos! \n" + "Digite 1 para jogar novamente.");
          if (re == 1)  {
          vidas = 3;
          numeroMaximo = 10;
          acumuladorDePontos = 0;
    }
  }
  }
}
      else if (pergunta == pergunta2){
      let resultado = numero1 * numero2;
      let valorDigitado = prompt("Quanto é X * " + numero2 + "= " + resultado + "?");
      if (valorDigitado != "" && valorDigitado == numero1 ) {
      acumuladorDePontos += 5;
        if (acumuladorDePontos % 20 == 0) {
      numeroMaximo += 10;
  }
        if (vidas < 3) {
          if (acumuladorDePontos % 50 == 0) {
        vidas +=1
    }
  }
  }
      else if (vidas > 0) {
      vidas -= 1;
      alert("" + usuario +", você tem " + vidas + " vidas");
        if (vidas == 0) {
        let re = prompt("FIM DE JOGO, "+ usuario +". \n" + "Você fez "+ acumuladorDePontos + " pontos! \n" + "Digite 1 para jogar novamente.");
          if (re == 1)  {
          vidas = 3;
          numeroMaximo = 10;
          acumuladorDePontos = 0;
        }
      }
}
}
    else if (pergunta == pergunta3){
  let resultado = numero1 * numero2;
  let valorDigitado = prompt("Quanto é " + numero1 +" * " + numero2 + "= X ?");
  if (valorDigitado != "" && valorDigitado == resultado ) {
  acumuladorDePontos += 5;
    if (acumuladorDePontos % 20 == 0) {
   numeroMaximo += 10;
}
    if (vidas < 3) {
      if (acumuladorDePontos % 50 == 0) {
    vidas +=1
  }
}
}
    else if (vidas > 0) {
      vidas -= 1;
      alert("" + usuario +", você tem " + vidas + " vidas");

      if (vidas == 0) {
      let re = prompt("FIM DE JOGO, "+ usuario +". \n" + "Você fez "+ acumuladorDePontos + " pontos! \n" + "Digite 1 para jogar novamente.");
        if (re == 1) {
        vidas = 3;
        numeroMaximo = 10;
        acumuladorDePontos = 0;
  }
}
}
}
}
  if (operacao == divisao) {   
    while (numero1 % numero2 != 0)  {
    numero1 = Math.floor(Math.abs(Math.random() * (numeroMaximo)));
    numero2 = Math.floor(Math.abs(Math.random() * (numeroMaximo)));
      if (numero1 < numero2) {
      let guadarn1 = numero1;
      numero1 = numero2;
      numero2 = guadarn1; 
     }
    }
    if (pergunta == pergunta1){
      if (numero1 < numero2) {
      let guadarn1 = numero1;
      numero1 = numero2;
      numero2 = guadarn1; 
        }
      let resultado = numero1 / numero2;
      let valorDigitado = prompt("Quanto é " + numero1 + " / X = " + resultado + "?");
        if (valorDigitado != "" && valorDigitado == numero2) {
        acumuladorDePontos += 5;
          if (acumuladorDePontos % 20 == 0) {
          numeroMaximo += 10;
      }
        if (vidas < 3){
          if (acumuladorDePontos % 50 == 0) {
          vidas +=1
        }
    }
  }
      else if (vidas > 0) {
      vidas -= 1;
      alert("" + usuario +", você tem " + vidas + " vidas");
        if (vidas == 0) {
        let re = prompt("FIM DE JOGO, "+ usuario +". \n" + "Você fez "+ acumuladorDePontos + " pontos! \n" + "Digite 1 para jogar novamente.");
          if (re == 1)  {
          vidas = 3;
          numeroMaximo = 10;
          acumuladorDePontos = 0;
        }
    }
  }
  }
    else if (pergunta == pergunta2){
    let resultado = numero1 / numero2;
    let valorDigitado = prompt("Quanto é X / " + numero2 +" = " + resultado + "?");
       if (valorDigitado != "" && valorDigitado == numero1) {
       acumuladorDePontos += 5;
         if (acumuladorDePontos % 20 == 0) {
       numeroMaximo += 10;
       }
        if (vidas < 3){
          if (acumuladorDePontos % 50 == 0) {
          vidas +=1
       }
     }
   }
    else if (vidas > 0) {
    vidas -= 1;
    alert("" + usuario +", você tem " + vidas + " vidas");
      if (vidas == 0) {
      let re = prompt("FIM DE JOGO, "+ usuario +". \n" + "Você fez "+ acumuladorDePontos + " pontos! \n" + "Digite 1 para jogar novamente.");
        if (re == 1)  {
        vidas = 3;
        numeroMaximo = 10;
        acumuladorDePontos = 0;
      }
    }
  }
}
      else if (pergunta == pergunta3){
      let resultado = numero1 / numero2;
      let valorDigitado = prompt("Quanto é " + numero1 +" / " + numero2 +" = X ?");
        if (valorDigitado != "" &&  valorDigitado == resultado) {
        acumuladorDePontos += 5;
          if (acumuladorDePontos % 20 == 0) {
          numeroMaximo += 10;
        }
          if (vidas < 3){
           if (acumuladorDePontos % 50 == 0) {
           vidas +=1
   }
 }
}
        else if (vidas > 0) {
        vidas -= 1;
        alert("" + usuario +", você tem " + vidas + " vidas");
          if (vidas == 0) {
          let re = prompt("FIM DE JOGO, "+ usuario +". \n" + "Você fez "+ acumuladorDePontos + " pontos! \n" + "Digite 1 para jogar novamente.");
            if (re == 1)  {
            vidas = 3;
            numeroMaximo = 10;
            acumuladorDePontos = 0;
          }
        }
}
}
  }
}
