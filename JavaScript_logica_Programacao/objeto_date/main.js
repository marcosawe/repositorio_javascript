/* Função Date */
// Utilizada para manipular as datas estabelecidas pela máquina
// Conhecida como função construtora (sempre utilizar new) (a função sempre apresenta a primeira letra como maiúscula);
// O calculo de horas é feito através de milessegundos;

// Para mandar os parâmetro para a função Date utilizamos (ano ,mês,dia,horas,minutos,segundos)
// Para mandar parâmetros de string utilizamos('2022-03-23 14:43')
const data1 = new Date(2022,5,23,14,44,01);
console.log(data1.toDateString());
const data2 = new Date('2022-6-23 14:44:01');
console.log(data2.toDateString());

// Para pegar todos os respectivos parâmetros de datas utilizamos:
console.log('Dia',data1.getDate());
console.log('Mês',data1.getMonth() + 1);
console.log('Ano',data1.getFullYear());
console.log('Hora',data1.getHours());
console.log('Minutos',data1.getMinutes());
console.log('Segundo',data1.getSeconds());
console.log('MS',data1.getMilliseconds());
console.log('Dia da Semana',data1.getDay());

// Função Formata Data
function formataData(data){
    const dia = adicionaZero(data.getDate());
    const mes = adicionaZero(data.getMonth() + 1);
    const ano = adicionaZero(data.getFullYear());
    const hora = adicionaZero(data.getHours());
    const minutos = adicionaZero(data.getMinutes());
    const segundos = adicionaZero(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

// Função adiciona zero
function adicionaZero(num){
    return num >= 10 ? num : `0${num}`
}

const data = new Date();
const dataBrazil = formataData(data);
console.log(dataBrazil);