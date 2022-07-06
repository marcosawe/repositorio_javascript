/* Escopo Lexo */

//O escopo léxico define o escopo em termos da estrutura léxica do programa. Com escopo léxico, um nome sempre se refere ao seu ambiente léxico (mais ou menos) local. Esta é uma propriedade do texto do programa e é feita independente da pilha de chamadas em tempo de execução pela implementação da linguagem.

const nome = 'Marcos';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Fernando'
    falaNome();
};

usaFalaNome()