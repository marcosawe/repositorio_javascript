let varA = "A"
let varB = "B"
let varC = "C"
const varTempA = varA

varA = varB
varB = varC
varC = varTempA

console.log(varA,varB,varC)