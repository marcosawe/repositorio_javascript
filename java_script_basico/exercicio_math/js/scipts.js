const numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto-script");

numeroTitulo.innerHTML = numero;

texto.innerHTML = ""
texto.innerHTML +=`<p>Raiz quadrada do seu número é : <b>${numero ** 0.5}</b></p>`;
texto.innerHTML += `<p>${numero} é inteiro: <b>${Number.isInteger(numero)}</b></p>`
texto.innerHTML += `<p>É NaN: <b>${Number.isNaN(numero)}</b></p>`;
texto.innerHTML += `<p>Arredondando para baixo: <b>${Math.floor(numero)}</b></p>`;
texto.innerHTML += `<p>Arredondando para cima:<b> ${Math.ceil(numero)}</b></p>`;
texto.innerHTML += `<p> Diminuindo casas decimais: <b>${numero.toFixed(2)}</b></p>`
