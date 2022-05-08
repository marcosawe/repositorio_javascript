const paragrafos = document.querySelector('.Paragrafos');
const ps = paragrafos.querySelectorAll('p');

// Pegando estilo computado do CSS
const estilosDoBody = getComputedStyle(document.body);
const backgroundColorBody = estilosDoBody.backgroundColor;
console.log(backgroundColorBody);

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#FFFFFF';
}

