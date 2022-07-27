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
console.log(g1.next())