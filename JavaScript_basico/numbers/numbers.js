/*Manipulando valores Number*/
let Num1 = 1235.43545679;
let Num2 = 123;
let temp = 'Cinco' * Num2

Num2 = Num2.toString(); // Transformando um Number em String;
Num1 = Num1.toFixed(4); // Torna o valor fix com o determinado número de casas;
console.log(Number.isInteger(Num2)) // Pergunta se o para a variável se ela possui valor inteiro.
console.log(Number.isNaN(temp)) //Pergunta a variável se ela é passível de cálculo.