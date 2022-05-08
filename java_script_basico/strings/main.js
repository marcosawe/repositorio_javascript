//Strings são indexssadas   0123456789
let umaString =            `Uma string`
console.log(umaString[4])//retorna o índice do número indicado nos colchetes.
console.log(umaString.replace(`Uma`, `Nossa`))//Mudar palavra no texto
console.log(umaString.indexOf('string'))//Índice
console.log(umaString.lastIndexOf('U'))//Índice de traz para frente
console.log(umaString.length)//Quantidade de caractéres
console.log(umaString.slice(0, 3))//Pega os caractéres definidos pelo índice
console.log(umaString.split(' '))//Recorta a strring em um determinado caractér
console.log(umaString.toUpperCase())//Transforma a string em maiúsculo
console.log(umaString.toLowerCase())//Transforma a string em minúsculo
