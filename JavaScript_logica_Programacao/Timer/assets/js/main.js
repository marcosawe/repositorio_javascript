//##################################################################

// Função transformadora de segundos para milessegundos
function getTimeFromSeconds(segundos){ //Função que transforma o tempo de segundos em milessegundos
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{      
        hour12:false,
        timeZone:'GMT'
    })
} 
//##################################################################

// Variáveis de seleção e apoio as funções:
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const reiniciar = document.querySelector('.reiniciar');
let segundos = 0;
let timer;
//##################################################################

// Função de transcrição do timer para o Browser;
function startRelogio(){
    timer = setInterval(()=>{
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    },1000);
}
//###################################################################

// Atribuição dos eventos no Browser e ativação das funções.
iniciar.addEventListener('click',function(event){
    clearInterval(timer) // Limpa o setInterval
    startRelogio();
    relogio.classList.remove('pausado')
})
pausar.addEventListener('click',function(event){
    clearInterval(timer);
    relogio.classList.add('pausado')
})
reiniciar.addEventListener('click',function(event){
    clearInterval(timer);
    segundos = 0;
    relogio.classList.remove('pausado')
    relogio.innerHTML = '00:00:00'
})

/*
function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
  });
}
relogio();
*/