/* Método Reduce -> Reduz o valor do array a um único número */

// A função reduce do JavaScript serve para iterar sobre um array e utilizar o valor de cada item para criar um objeto final com base em alguma regra. Como o próprio nome da função sugere, ela “reduz” os itens de um vetor a um valor único. Por exemplo, podemos utilizá-la para obter a soma ou produto dos itens de um vetor numérico.

// Sintaxe -> array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]));


// Aplicando reduce
const numeros = [ 1,13,34,6564,34,2363,234,5675,41435,8678,1332,34577,4443,365];

const total = numeros.reduce(function(acumulador,valor){
    acumulador += valor
    return acumulador
},0);

console.log(total)

// Aplicando reduce em objetos
const pessoas = [
    {nome:'Marcos', idade:18},
    {nome:'Letícia', idade:22},
    {nome:'José', idade:52},
    {nome:'Carlos', idade:65},
    {nome:'André', idade:42},
    {nome:'Marcia', idade:67},
    {nome:'Elías', idade:34},
];

const maisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor
});

console.log(maisVelha)