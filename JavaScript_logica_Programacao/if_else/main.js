/* Expressões Condicionais */
// if - se
// else if - senao
// else - fimse

const hora = 9;
if(hora >= 0 && hora <=11){
    console.log('Bom Dia');
} else if(hora > 11 && hora <= 18){
    console.log('Boa Tarde');
}else if(hora > 18 && hora <=24){
    console.log('Boa Noite')
}else{
    console.log("Hora Errada")
}