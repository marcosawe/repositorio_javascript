// Utilizamos o array para desestruturar um array já esxistente e atibuir os fragmentos deles em uma variável.
const numeros = [1000, 2234, 34553, 42313, 52456, 6.543, 0.37, 18]
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros
console.log(primeiroNumero,segundoNumero,terceiroNumero);
// O operador ... no contexto de arrays é utilizado como resto, já em outros ele é utilizado como espalhador.

//Para fazer a desestruturação de arrays concatenados utilizamos:

//                    0          1         2              
//                  1  2  3   4  5  6   7  8  9
const numeros1 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,[,,seis]]= numeros1;
console.log(seis);