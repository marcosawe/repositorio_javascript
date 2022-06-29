/* While */
// Funciona como um enquanto da lógica de programação;
// Para construit um laço while utilizamos:
let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}

console.log('##########')

// Aplicando o while em funções:
function random(max,min){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
} 

const max = 50;
const min = 1;
rand = random(max,min);

while(rand !== 12){
    rand =random(max,min);
    console.log(rand)
}

console.log('###########')

// Do While:
// Aplica a operação antes de checar a mesma
do {
    rand =random(max,min);
    console.log(rand)
} while (rand !== 12);