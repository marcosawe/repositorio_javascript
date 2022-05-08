// Array se constitue por listas indexadas(por elemento) que regem todos os tipos de dados primitivos
const valores = [1, 23, "Marcos", "Felipe", 12.32, true, null, NaN];
console.log(valores);
// Deve ser organizada por colchetes e conter somente um ripo de dado primitivo por array´
const nomes = ['Marcos', 'Felipe', 'Bárbara', 'José']
console.log(nomes[3])
//Para editar um elemento em array é preciso atribuir o valor a posição do indice do array
nomes[0] = 'Bixo Ruim';
console.log(nomes);
//Para adicionar um elemento no final do array utilizasse a função push
nomes.push('Eduardo');
console.log(nomes);
//Para adicionar um elemento no inicio do array utilizasse a função unshift;
nomes.unshift('Guilherme');
console.log(nomes);
//Para remover um elemento no final do array utilizasse a função pop;
const removidos = nomes.pop()
//Para remover um elemento no início do array utilizasse a função shifth;
nomes.shift();
console.log(nomes);
// Para fatiar uma parte do array utilizamos slice
console.log(nomes.slice(0, 3))
// Para descobrir se o conjunto é array utilizasse
console.log(nomes instanceof Array) 