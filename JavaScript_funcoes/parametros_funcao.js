/* Parâmetros em Java Script */

// Arguments
function funcao1() {
    console.log(arguments[1]); // Os argumentos adicionados a uma função que não possui parâmetros em sua declaração ficam armazenados na função argumsnts
    let total = 0;
    for(let argumentos of arguments){
        total += argumentos
    }
    console.log(total)
} 

funcao1(13,45,99,2,3,5)

// Para setar valores nos parâmetros fazemos que
function somaValores(a=12,b=67){
    console.log(a+b);
}
somaValores(22);

// Para pular um valor de um parâmetro setado, utilizamos
function diminuicaoValores(a=2,b='mamaco',c=12){
    console.log(a+b+c)
};
diminuicaoValores(20,null,20); 

// Para aplicar atribuição via desetruturação, utilizamos:
function desestruturacao({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade);
};
const obj = {nome:'Marcos Eduardo', sobrenome:'Fernandes', idade: 18}
desestruturacao(obj);

// Para aplicar atribuição via desetruturação em arrays, utilizamos:
function desestruturacaoArray([valor1,valor2,valor3,valor4]){
    console.log(valor1,valor2,valor3,valor4)
};
let array = [1,2,3,4];
desestruturacaoArray(array);

// Para aplicar rest operator utilizamos:
function calculadora(operador, acumulador, ...numeros){
    for(let calculo of numeros){
        if(operador==="+") acumulador += calculo;
        if(operador==="-") acumulador -= calculo;
        if(operador==="*") acumulador *= calculo;
        if(operador==="/") acumulador /= calculo;
    }
    console.log(acumulador)
}
calculadora('*',34,56,5,674,43)