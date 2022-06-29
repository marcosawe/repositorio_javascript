const paragrafo = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body) // Pegando estilos já computados do browser
const estiloBackgroundColor = estilosBody.backgroundColor //escolhendo o estilo computado pelo browser e computando em uma variável
console.log(estiloBackgroundColor)

for(let p of ps){
    p.style.backgroundColor = estiloBackgroundColor; // Para adicionar estilo nas tags utilizamos a tag.style.nomeDaTagCss em camealCase
    p.style.color = '#FFFFFF'
}