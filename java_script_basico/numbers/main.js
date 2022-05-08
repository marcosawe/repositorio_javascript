let numero1 = 1345;
let numero2 = 1500;
let numero3 = 1234.98759890;
console.log(numero1.toString()+numero2);//Altera temporariamete o valor como string
numero1=numero1.toString();//Altera permanentemente 
console.log(numero2.toString(2));//Altera para número binário
console.log(numero3.toFixed(2));//Retira as casas decimais arredondando o valor
console.log(Number.isInteger(numero2));//Questiona ao banco de dados se o valor é inteiro
let temp = numero1 * 'olá';
console.log(temp);
console.log(Number.isNaN(temp));//Questiona a variável se ela é um NaN (é valido somente quando a string não é representada em número);