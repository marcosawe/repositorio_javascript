// Valores primitivos(imutáveis)-string, number,boolean,undefined, null,(bigint,symbol) são valores que permitem cópia
let a = 'A'
let b = a //cópia
console.log(a,b)

a= 'Outra coisa'
console.log(a,b)
// Valores por referência (mutáveis)-array object fuction -- Passados por referência

let w = [1,2,3];
let c = [...w];
console.log(w,c)

w.push(6)
console.log(w,c)
console.log(w,c)