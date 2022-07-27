/* Método Splice*/

// O método splice() permite inserir novos elementos e excluir elementos existentes em um array simultaneamente.

// Para utilizamos o método splice fazemos que
const nomes = ['Marcos', 'Felipe', 'Daniel', 'Ricardo'];
// nomes.splice(índice, delete, elementos para adicionar...);

// Utilizando Splice como pop
const removidos = nomes.splice(-1,1);
console.log(nomes,removidos);

// Utilizando Splice como shift
console.log('############')
const removidosInicio = nomes.splice(0,1)
console.log(nomes,removidosInicio)

// Utilizando Splice como push
console.log("#############")
nomes.splice(nomes.length,0,'Carlos') // Sar preferÊncia ao push normal
console.log(nomes)

// Utilizando Splice como unshift
console.log("#############")
nomes.splice(0,0,'Marcos','Guilherme','Caio')
console.log(nomes)