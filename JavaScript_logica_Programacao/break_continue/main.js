/* Continue */
// Serve para setar a apresentação de um número iterado (pula a iteração feita para a próxima)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index of numeros) {
    if (index === 2) {
        continue;
    }

    /* Break */
    // Quebra o laço apartir do momento que alguma condição é satisfeita;

    if (index === 7) {
        break;
    }
    console.log(index);
};
