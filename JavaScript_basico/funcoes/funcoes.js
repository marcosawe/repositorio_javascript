/* Funções */

// Para criar uma função utilizamos:

/* Forma Clássica */
function nome_funcao(parametro){
    console.log(`Bom Dia!!! ${parametro} `)
}
nome_funcao('Marcão')

/* Forma Adaptada */
const raiz = function(parametro){
    return parametro ** 0.5
} 

/* Arrow Function */
const soma = (N,S) =>{
    return N + S
}

// Para retornar uma variável utilizamos:
function retorno(parametro){
    return parametro / 3;
}

console.log(retorno(17));

// Para setar valores padrão aos parâmetros utilizmos
function valor_padrao(parametro1=10,parametro2=2){
    return parametro1 / parametro2
}

console.log(valor_padrao())