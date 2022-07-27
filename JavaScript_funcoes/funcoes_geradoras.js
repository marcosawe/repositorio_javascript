/* Funções Geradoras -> Generator Functions */

// Um gerador é um processo que pode ser pausado e retomado e gerar vários valores. Um gerador no JavaScript consiste em uma função gerador, que retorna um objeto iterável Generator.

//Para criar uma função geradora utilizamos:
function* geradora1(){
    //Codigo...
    yield 'Olá' // Método utilizado para retornar sempre o seguinte yield;
    //Código...
    yield 'tudo bem'
    //Código...
    yield 'Como vai'
    //Código...
    yield 'Suava?'
}
const g1=geradora1()
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())
console.log(g1.next()) // Ela sempre retonará o próximo valor yield

//Para iterarmos sobre uma funbção utilizamos:
const g2 = geradora1()
for(let valor of g2){
    console.log(valor);
}

// Criando contador infinito
function* contador(){
    let i = 0
    while(true){
        yield i;
        i++
    };
}

const gerador2 = contador();
console.log(gerador2.next().value);
console.log(gerador2.next().value);
console.log(gerador2.next().value);
console.log(gerador2.next().value);
console.log(gerador2.next().value);
console.log(gerador2.next().value);

// Criando geradores que delegam tarefas a outros geradores
function* delegado(){
    yield 1
    yield 2
    yield 3
}

function* delegante(){
    yield* delegado()
    yield 4
    yield 5
    yield 6
    yield 7
}

const gerador3 = delegante()

console.log('################')

for (const iterator of gerador3) {
    console.log(iterator)
}