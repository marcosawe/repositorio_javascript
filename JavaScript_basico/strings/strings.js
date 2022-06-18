/* Iterando sobre strings:*/

//Em Java Script as strings são indexadas tornando os caracteres iteraveis
//               0123456789    
let umaString = "O rato roeu a roupa do rei de roma"
console.log(umaString[8])// Retorna o valor da posição do caracter
console.log(umaString.charAt(8)) // O método charAt retorna o valor da posição do caracter
console.log(umaString.indexOf("roupa")) // Retorna o indice em que a palavra ou texto começa
console.log(umaString.lastIndexOf("roeu")) // Retorna o indice em que a palavra ou texto começa de tras pra frente;
console.log(umaString.replace("r",'n')) // Retorna as alterações feitas na string;
console.log(umaString.length); // Retorna a quantidade de indices dentro da string
console.log(umaString.slice(0,6)) // Fatia a parte desejada da string
console.log(umaString.split(' ')) // Reparte a string em um array através de um índice
console.log(umaString.toLowerCase()) //Transforma a string em minúsculo
console.log(umaString.toUpperCase()) //Transfroma a string em maiúsculo
