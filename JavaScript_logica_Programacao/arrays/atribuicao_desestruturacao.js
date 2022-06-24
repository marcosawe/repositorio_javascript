/* Atribuição via Desestruturação */
// Reparticiona elementos do array em variáveis e retona somente os índices interessado;
// ... rest operator  ...spread
const numeros = [1,2,3,4,5,6,7,8,9]
const [um,dois, ...resto] = numeros
console.log(resto);

// Caso dentro da listagem você não queira pegar determinado elemento faça:
const [, , , ,cinco] = numeros;
console.log(cinco);

// Acessando o valor de uma Matriz através de rest:
//                 0       1        2
//               0 1 2   0 1 2   0 1 2
const matriz = [[1,2,3],[4,5,6],[7,8,9]]
const [,[,,seis],] = matriz
console.log(seis)

// Acessando o valor de uma Matriz através de rest de forma mais fácil:
const [lista1,lista2,lista3] = matriz
console.log(lista2[2])
console.log(matriz)