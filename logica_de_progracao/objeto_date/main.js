//Criando constante em horas
const tresHoras = 60 * 60 * 3 * 1000
// Trabalha com a manipulação de datas através de funções construtoras. Sempre começa com a tag new
const data = new Date(); // (Ano, Mês, Dia, Hora, Minuto, Segundo, Milésimo de Segundo)
const data2 = new Date("2022-03-22 23:36"); // Valor da data por string;
console.log(data2.getDate()); // Para pegar informações da função date utilizasse variavel.get
console.log(Date.now()) //Paga a data atual em milessegundos
//Para imprimir a data utilizamos:
console.log(data.toString())
// A função data é contada em milésimos de segundo

// Função formata data
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
};

function formataData (data3){
    const dia = zeroAEsquerda(data3.getDate());
    const mes = zeroAEsquerda (data3.getMonth() + 1);
    const ano = zeroAEsquerda (data3.getFullYear());
    const hora = zeroAEsquerda (data3.getHours());
    const minuto = zeroAEsquerda (data3.getMinutes());
    const segundo = zeroAEsquerda (data3.getSeconds());

    return `${dia}/${mes}/${ano}/${hora}:${minuto}:${segundo}`;
};
const data3 = new Date();
const dataBrasil = formataData(data3);
console.log(dataBrasil);

