/* Arrays */
// Arrays são uma coleção de listas que apresentam informações que se complementam
// Para criar um array utilizamos:
const alunos = ['Marcos','Luiz', 'Ferenando', 'Henrique', 'Maria'];
// Para acessar o valor pertencente a string utilizamos.
alunos[3];
console.log(alunos[3]);
// Para editar um valor dentro do Array utilizamos:
alunos[0] = 'Felipe'; 
console.log(alunos);
// Para adicionar um elemento no final do Array utilizamos:
alunos.push('João');
console.log(alunos);
// Para adicionar um elemento ao começo do Array utilizamos:
alunos.unshift('Marcão');
console.log(alunos);
// Para remover os elementos finais do array utilizamos:
alunos.pop();
console.log(alunos);
// Para remover os elementos iniciais do array utilizamos:
alunos.shift()
console.log(alunos)
// Para fatiar sobre um array utilizamos
console.log(alunos.slice(0,2))
// Para saber se o conjunto pertence a um array utilizamos:
console.log(alunos instanceof Array);