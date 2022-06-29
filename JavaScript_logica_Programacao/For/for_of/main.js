/* For - of */
// for específicos para objetos iteráveis(strings, arrays);
// Iterando sobre strings:
const nomes = ["Marcos Eduardo", 'Felipe', 'Gean', 'Emanuel'];

// For in:
// Utilizar com strings arrays e objetos;
for(let i in nomes){
    console.log(i)
};
console.log("##########")

// For of:
// Utilizar somente com strings e arrays;
for(let i of nomes){
    console.log(i)
}
console.log("##########")

// forEach
// Retorna o elemento, o indice e o array de um objeto iterável
// Bastante utilizando em encapsulamento de funções:
nomes.forEach(function(elemento,indice,array){ 
    console.log(elemento, indice,array);
})