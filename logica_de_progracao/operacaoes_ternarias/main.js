// Operadores ternários em Java Script são efetuados com ?: (normalmente utilizados para encurtar if else.)
const pontuacaoUser = 999;
//    Variável         condição    ? Valor Verdadeiro : Valor Falso;     
const nivelUser = pontuacaoUser >= 1000 ? "Usuário Vip" : "Membro Comum"
//                                            Operação AND
console.log(nivelUser);
const paletaDeCor = '';
const corPadrao = paletaDeCor || 'Preto';
//                   Operação OR
console.log(corPadrao); 
//if(pontuacaoUser >=100){
//    console.log("Usuário Vip")
//}else{
//    console.log("Membro Comum")
//}
