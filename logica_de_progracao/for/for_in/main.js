// For in -> Lê os índices ou chaves do vetor(array)
//               0       1      2
//const frutas= ['Pera', 'Uva', 'Maçã' ]
//for (let i in frutas){
//    console.log(frutas[i]);
//}

// Itera sobre objetos e vetores indexados por chave e valor.
//const frutas= ['Pera', 'Uva', 'Maçã' ]
//for(i=0; chaveValor < frutas.length; i++){
    //    console.log(frutas[i])
    //}
    
// Aplicação em objetos
const pessoa = {
    nome:'Marcos Eduardo',
    sobrenome: 'Fernandes',
    idade: 17,
    cidade: 'Uberlândia',
}
//Formas de imprimir a chave de um objeto
//console.log(pessoa.nome);
//console.log(pessoa['nome']);

for ( let chave in pessoa){
    console.log(chave, pessoa[chave]);
} 