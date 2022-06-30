/* Funções setInterval setTimeOut*/
// Serve para controlar os timers 

// Quando se trabalha com intervalo de tempos é utilizado:
function mostraHora() {
    let data = new Date();
  
    return data.toLocaleTimeString('pt-BR', {
      hour12: false
    });
  }
  
  const timer = setInterval(function() {
    console.log(mostraHora());
  }, 1000);
  
  setTimeout(function() { // Para utilizar a função setInterval passamos o parâmetro de referência e o período de repetição da função(em milessegundo);
    clearInterval(timer);
  }, 3000);
  
  setTimeout(function() {
    console.log('Olá mundo!');
  }, 5000);