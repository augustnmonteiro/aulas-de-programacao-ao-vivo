
let unidade = 0;
let dezena = 0;
let centena = 0;
let milhar = 0;

for (let i=0; i<100; i++) {

  console.log("|" + milhar + "|" + centena + "|" + dezena + "|" + unidade + "\n");

  unidade = unidade + 1;

  if (unidade == 10) {
    dezena = dezena + 1;
    unidade = 0;
  }

  if (dezena == 10) {
    centena = centena + 1;
    dezena = 0;
  }

  if (centena == 10) {
    milhar = milhar + 1;
    centena = 0;
  }

}