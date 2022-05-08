// Funções são trechos de código que executam ações. Geralmente começam com a atribuição function
function saudacao(){
    console.log('Bom dia');
}
saudacao();
// Para atribuir parâmetros ás funções normalmente colocamos variáveis nos parênteses das funções e dentro da função definimos oque faremos com a atribuição.
function gordo(nome){
    console.log(`${nome} é gordalho, burro e preto.`)
} 
gordo('João do Nargas') 
// Para retornar o valor de uma função para atribuila em uma variável utilizamos return dentro de uma função
function valor(retornar){
    return `${retornar} retornos;` //return não precisa de console.log
}
const variavel = valor("12");
console.log(variavel);
// Função matemática sobre a soma de dois fatores
function somaValores (x,y){
    const somaResultado = x+y
    return somaResultado
}
console.log(somaValores(2,6))
console.log(somaValores(5,9))
// Quando não for enviado um parâmetro os métodos devem assumir um padrão
function multipValores(x = 1,y = 1){
    const multResultados = x * y
    return multResultados
}
console.log(multipValores())
// Forma mais anônima de se criar funções
const raiz = function(n){
    return n ** 0.5;
};
console.log(raiz(30));
console.log(raiz(10));
console.log(raiz(20));
// Forma mais simples de se criar funções e mais moderna
const multiplicacao=(x,y)=>{
    const multiplicacao = x*y;
    return multiplicacao;
};

console.log(multiplicacao(3,5))