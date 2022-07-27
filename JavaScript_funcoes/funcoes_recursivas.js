/* Funções Recursivas */
// Uma função é dita recursiva quando dentro dela é feita uma ou mais chamadas a ela mesma.

// Para fazer uma função recursiva utilizamos:
function recursiva(max){
    if(max >= 10) return;
    max++
    console.log(max)
    recursiva(max);
}

recursiva(-10)