/* For -Clássico*/
// Utilizado para iterar sobre os valores iteraveis
// Para utilizarmos o for:
// Setamos uma variável dentro do For e damos um valor a ela;
// Colocamos a condição dentro dos parênteses;
// Incrementamos valores na variável;

for(let i = 0; i <= 5; i ++){ // iterando de forma crescente
    console.log(i);
};

for(let i = 100; i >= -500; i -= 1){ // iterando de forma decrescente
    console.log(i);
};

for(let i = 0; i <= 20; i++){ // utilizando operações lógicas dentro do for
    const par = i % 2 ===0 ? 'par': 'ímpar'; // utilizando operação ternária;
    console.log(i,par);
};

// Percorrendo o array;
const frutas = ['Maçã', 'Pera', 'Uva', 'Banana'];

for (let i = 0; i < frutas.lengt; i++){
    console.log(frutas[i]);
};