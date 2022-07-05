// As funções em JS são First-Class Object (Objetos de Primeira Classe)
// Podem ser Function Expression (Expressão que é função);

/* Declarando Funções */
// Primeira forma de declarar funções:
function nomaDaFuncao(){ // É através dela que o Java Script permite fazer Hoisting
    console.log('Oláa!!')
}
nomaDaFuncao()

// Segunda forma de declarar função:
const novaFuncao = function (){
    console.log('Nova Função');
};

// Arrow Function
const arrowFunction = ()=>{
    console.log('Arrow Function');
};

// Dentro de um Objeto
const objeto = {
    falar:function falar(){
        console.log('Estou Falando');
    },
}

console.log(objeto.falar)