/* Swicth Case */
// Tem um certa relção com o modelo if else porem aborda um conceito de casos 

const data= new Date('1795-07-12 00:00');
const diaSemana = data.getDay();

console.log(diaSemana)
switch (diaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda");
        break
    case 2:
        console.log("Terça");
        break
    case 3:
        console.log("Quarta");
        break
    case 4:
        console.log("Quinta");
        break
    case 5:
        console.log("Sexta");
        break
    case 6:
        console.log("Sábado");
        break
    default:
        break;
}