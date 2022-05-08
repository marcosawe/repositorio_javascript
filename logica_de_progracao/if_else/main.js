/* 
Entre 0 - 11 -> Bom dia
Entre 12 - 17 -> Boa tarde
Entre 18 - 23 -> Boa noite
*/
// If pode ser executado sozinho
// Sempre que eu utiliso else eu antes tenho que utilizar if
// Eu posso ter vários else ifs na minha checagem
// Só posso ter um else na checagem
// Podemos utilizar condições sem else if, utilizando apenas if e else.
const hora = 7
if(hora >=0 && hora <=11){
console.log('Bom dia!!!');
} else if (hora>=12 && hora<=17){
console.log('Boa tarde!!!');
} else if (hora>=18 && hora<=23){
console.log('Boa noite!!!')
}