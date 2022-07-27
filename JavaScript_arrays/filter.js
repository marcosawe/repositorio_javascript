/* Método Filter */

// É utilizado para filtrar um conjunto pertencente a um array através de um callback
// Filter -> Sempre retorna a mesma quantidade de elementos no array ou menos.

//Para fazer um filter utilizamos
const numeros = [ 1,13,34,6564,34,2363,234,5675,41435,8678,1332,34577,4443,365]
const numerosFiltrados = numeros.filter((valor,indice,array)=>{
    console.log(valor,indice);
    return valor %12
});

console.log(numerosFiltrados)