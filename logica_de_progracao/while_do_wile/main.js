// Etrutura de repetição padrão do while
let valor = 0
while (valor<=10) {
    console.log(valor);
    valor++;
}

// Função de número aleatório
function random (min,max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(1,50);
console.log(rand)

while (rand !== 10) {
    
}