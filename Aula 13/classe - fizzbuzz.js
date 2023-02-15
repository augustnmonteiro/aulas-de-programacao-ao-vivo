class FizzBuzz {

  i = 1;
  max = 100;

  constructor(min, max) {
    this.i = min;
    this.max = max;
    this.checarNumeros();
  }

  checarNumeros = function () {
    for (this.i; this.i<this.max; this.i++) {
      if (this.divisivelPor3e5()) {
        console.log("fizzbuzz");
      } else if (this.divisivelPor5()) {
        console.log("buzz")
      } else if (this.divisivelPor3()) {
        console.log("fizz")
      } else {
        console.log(this.i);
      }
    }
  }

  divisivelPor3 = function () {
    return this.i % 3 == 0;
  }

  divisivelPor5 = function () {
    return this.i % 5 == 0;
  }

  divisivelPor3e5 = function () {
    return this.divisivelPor3() && this.divisivelPor5();
  }

}