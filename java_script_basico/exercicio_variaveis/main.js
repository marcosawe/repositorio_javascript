let varA = 'A';
let varB = 'B';
let varC = 'C';
let varTemp;
varTemp = 'A';
varA = varB;
varB = varC;
varC = varTemp;
//Forma mais moderna de se trocar variáveis sem variável temporária
[varA,varB,varC] = [varB,varC, varA];
console.log(varA,varB,varC);