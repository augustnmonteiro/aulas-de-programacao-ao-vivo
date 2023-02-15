class FizzBuzz {

  i = 1;
  max = 100;

  constructor(min, max) {
    this.i = min;
    this.max = max;
    this.checarNumeros();
  }

  checarNumeros() {
    for (this.i; this.i<this.max; this.i++) {
      this.divisivelPor3e5();
      this.divisivelPor5();
      this.divisivelPor3();
      if (!(this.i % 3 == 0 || this.i % 5 == 0)) {
        console.log(this.i);
      }
    }
  }

  divisivelPor3() {
    if (this.i % 3 == 0) {
      console.log("fizz");
    }
  }

  divisivelPor5() {
    if (this.i % 5 == 0) {
      console.log("buzz");
    }
  }

  divisivelPor3e5() {
    if (this.i % 3 == 0 && this.i % 5 == 0) {
      console.log("fizzbuzz");
    }
  }

}