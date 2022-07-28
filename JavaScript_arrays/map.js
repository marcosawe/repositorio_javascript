/* Método Map -> Alteração de informações geradas pelo array*/

// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado. De uma forma mais amigável, o map() executa uma função de transformação em todos os elementos de uma determinada lista , e retorna uma nova lista como resultado.

// Para utilizarmos o método map fazemos que 
const numeros = [ 1,213,123,443,64564,4562,3444,65676,4562,6354,2145];
const numerosEmDobro = numeros.map(valor=>{
    return valor * 2;
})

console.log(numerosEmDobro);

// Para mapearmos objetos utilizamos
const pessoas = [
    {nome:'Marcos', idade:18},
    {nome:'Letícia', idade:22},
    {nome:'José', idade:52},
    {nome:'Carlos', idade:65},
    {nome:'André', idade:42},
    {nome:'Marcia', idade:67},
    {nome:'Elías', idade:34},
];

const nomes = pessoas.map(valor=>{
    return valor.nome
});

const idades = pessoas.map(valores=>{
    return valores.idade
});