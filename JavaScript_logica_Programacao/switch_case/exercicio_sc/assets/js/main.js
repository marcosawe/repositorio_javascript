// Código utilizando switch case:
//const h1 = document.querySelector(".container h1"); // Assim como no css podemos estipular mais parâmetros para
//const date = new Date();
//h1.innerHTML = date.toDateString();

// function getDayWeekText(day){
//     let DayWeekText;
//     switch (day) {
//         case 0:
//             DayWeekText = "Domingo"
//             return DayWeekText;
//         case 1:
//             DayWeekText = "Segunda-Feira"
//             return DayWeekText;
//         case 2:
//             DayWeekText = "Terça-Feira"
//             return DayWeekText;
//         case 3:
//             DayWeekText = "Quarta-Feira"
//             return DayWeekText;
//         case 4:
//             DayWeekText = "Quinta-Feira"
//             return DayWeekText;
//         case 5:
//             DayWeekText = "Sexta-Feira"
//             return DayWeekText;
//         case 6: 
//         DayWeekText = "Sábado"
//         return DayWeekText;
//         default:
//             DayWeekText= ``
//             return DayWeekText;
//     }
// }

// function getNameMonth(name){
//     let NameMonth;
//     switch (name) {
//         case 0:
//             NameMonth = "Janeiro"
//             return NameMonth;
//         case 1:
//             NameMonth = "Fevereiro"
//             return NameMonth;
//         case 2:
//             NameMonth = "Março"
//             return NameMonth;
//         case 3:
//             NameMonth = "Abril"
//             return NameMonth;
//         case 4:
//             NameMonth = "Maio"
//             return NameMonth;
//         case 5:
//             NameMonth = "Junho"
//             return NameMonth;
//         case 6: 
//             NameMonth = "Julho"
//             return NameMonth;
//         case 7: 
//             NameMonth = "Agosto"
//             return NameMonth;
//         case 8: 
//             NameMonth = "Setembro"
//             return NameMonth;
//         case 9: 
//         NameMonth = "Outubro"
//             return NameMonth;
//         case 10: 
//             NameMonth = "Novembro"
//             return NameMonth;
//         case 11: 
//             NameMonth = "Dezembro"
//             return NameMonth;
//         default:
//             NameMonth = ``
//             return NameMonth;
//     }
// }

// function leftZero(num){
//     return num >=10 ? num : `0${num}`;
// }

// function creatDate(date){
//     const dayWeek = date.getDay();
//     const numberMonth = date.getMonth();

//     const nameDay = getDayWeekText(dayWeek);
//     const nameMonth = getNameMonth(numberMonth);

//     return `${nameDay} ${date.getDate()} de ${nameMonth} de ${date.getFullYear()} ${leftZero(date.getHours())}:${leftZero(date.getMinutes())}`;
// }
// h1.innerHTML= creatDate(date);

// Código com as funções nativas do Java Script
const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'}); 
