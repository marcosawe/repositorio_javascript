/*Concatenação de Arrays */
// Para concatenar arrays utilizamos spread 
const a = [1,2,3]
const b = [4,5,6]
const c = [8,9,10]

const abc = [...a, ...b, ...c]
console.log(abc)