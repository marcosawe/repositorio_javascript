/* Método Filter */

// É utilizado para filtrar um conjunto pertencente a um array através de um callback
// Filter -> Sempre retorna a mesma quantidade de elementos no array ou menos.

//Para fazer um filter utilizamos
const numeros = [ 1,13,34,6564,34,2363,234,5675,41435,8678,1332,34577,4443,365];
const numerosFiltrados = numeros.filter((valor,indice,array)=>{
    console.log(valor,indice);
    return valor %12
});

console.log(numerosFiltrados)

// Filtrando uma lista de objetos
const pessoas = [
    {nome:'Marcos', idade:18},
    {nome:'Letícia', idade:22},
    {nome:'José', idade:52},
    {nome:'Carlos', idade:65},
    {nome:'André', idade:42},
    {nome:'Marcia', idade:67},
    {nome:'Elías', idade:34},
];

const nomesGrandesFiltrados = pessoas.filter(valor=>{
    return valor.nome.length >= 5;
});

const pessoasComMaisDeCinquenta = pessoas.filter(valor =>{
    return valor.idade > 50;
})

const nomeTerminaComA = pessoas.filter( obj =>{
    return obj.nome.toLowerCase().endsWith('a');
})

console.log(nomesGrandesFiltrados)
console.log('########')
console.log(pessoasComMaisDeCinquenta)
console.log('########')
console.log(nomeTerminaComA)