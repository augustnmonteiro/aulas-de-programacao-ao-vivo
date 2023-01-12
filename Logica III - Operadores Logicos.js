/**
#### Operadores Logicos
 (||) Ou, um valor ou o outro precisa ser verdadeiro
 (&&) E, os dois valores ser verdadeiros
 (!) Não, vai negar a condição
 */

alert(2 == 2 && 3 == 3); //true
alert(2 == 2 || 3 == 3); //true
alert(2 == 2 && 3 == 4); //false
alert(2 == 3 || 3 == 4); //false
alert(2 == 3 || 3 == 3); //true
alert(2 == 3); //false
alert(!(2 == 3)); //false