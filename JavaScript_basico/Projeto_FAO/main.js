function escopoLocal(){
    const form = document.querySelector('.form');// Forma mais moderna de se capturar uma tag 
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    function recebeEventoForm(evento){ // Função associada ao evento 
        evento.preventDefault(); // Previne a perda do evento
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        pessoas.push({
            nome:nome.value,
            sobrenome:sobrenome.value,
            peso:peso.value,
            altura:altura.value
        });
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
    form.addEventListener('submit', recebeEventoForm) //Adiciona o evento a uma listagem (tag HTML, e função associada)
}

escopoLocal();
