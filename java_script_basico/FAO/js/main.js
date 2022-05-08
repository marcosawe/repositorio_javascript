// Não se deve criar variáveis em escopo global, o ideal é envolver códigos em funções
function qualquer(){
    alert('lorem ipsum'),
    alert('Seu pae tem gonorreia')
}
qualquer()

// Para selecionar alguma informação do HTML fazemos
function meuEscopo() {
    const form = document.querySelector('.form');
    //Para capturar eventos na página da web utilizamos
    function recebeEventoForm(evento) {
      evento.preventDefault();
      const form = evento.target;
      const resultado = document.querySelector('.resultado');
   
      const pessoas = []
   
      const nome = form.querySelector('.nome');
      const sobrenome = form.querySelector('.sobrenome');
      const peso = form.querySelector('.peso');
      const altura = form.querySelector('.altura');
   
      pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
      })
   
      console.log(pessoas);
   
      resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ` +
        `${peso.value} ${altura.value} </p>`;
   
    }
   
    form.addEventListener('submit', recebeEventoForm);
  }
  meuEscopo();