
class JogoMatematico {

    n1 = null;
    n2 = null;
    nOperacao = 0;
    nPosicao = 0;
    max = 10;
    min = 0;
    resultadoDigitadoPeloUsuario = null;
    resultadoEquacao = null;
    resultado = null;

    constructor() {
        this.jogo();
    }

    jogo() {
        this.gerarNumeros();
        switch (this.nOperacao) {
            case 0:
                this.somar();
                break;
            case 1:
                this.subtrair();
                break;
            case 2:
                this.multiplicar();
                break;
        }
        this.checarResultado();
    }

    somar() {
        this.resultadoEquacao = this.n1 + this.n2;
        let posicao = this.posicao("+");
        this.resultadoDigitadoPeloUsuario = prompt(`Qual o valor de ${posicao}`);
    }

    subtrair() {
        this.alterarPosicaoDoN1comN2SeN1MenorN2();
        this.resultadoEquacao = this.n1 - this.n2;
        let posicao = this.posicao("-");
        this.resultadoDigitadoPeloUsuario = prompt(`Qual o valor de ${posicao}`);
    }

    multiplicar() {
        this.resultadoEquacao = this.n1 * this.n2;
        let posicao = this.posicao("*");
        this.resultadoDigitadoPeloUsuario = prompt(`Qual o valor de ${posicao}`);
    }

    posicao(sinal) {
        let equacao = "";
        switch (this.nPosicao) {
            case 0:
                //n1
                equacao = `? ${sinal} ${this.n2} = ${this.resultadoEquacao}`;
                this.resultado = this.n1;
                break;
            case 1:
                //n2
                equacao = `${this.n1} ${sinal} ? = ${this.resultadoEquacao}`;
                this.resultado = this.n2;
                break;
            case 2:
                //resultado
                equacao = `${this.n1} ${sinal} ${this.n2} = ?`;
                this.resultado = this.resultadoEquacao;
                break;
        }
        return equacao;
    }

    alterarPosicaoDoN1comN2SeN1MenorN2() {
        let n2Temporario = this.n2;
        if (this.n1 < this.n2) {
            this.n2 = this.n1;
            this.n1 = n2Temporario;
        }
    }

    checarResultado() {
        if (this.resultadoDigitadoPeloUsuario == this.resultado) {
            this.jogo();
        } else {
            this.gameOver();
        }
    }

    gameOver() {
        alert("Game Over");
    }

    gerarNumeros() {
        this.n1 = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.n2 = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.nOperacao = Math.floor(Math.random() * 3);
        this.nPosicao = Math.floor(Math.random() * 3);
    }

}