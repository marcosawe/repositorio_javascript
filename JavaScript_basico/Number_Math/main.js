const numero = Number(prompt("Digite um número: ")); // Salvando a pergunta do prompt em uma variável
const numero_titulo = window.document.getElementById('numero-titulo'); // Acessando a tag html através da sua ID.
const raiz_quadrada = window.document.getElementById('raiz-quadrada');
const inteiro = window.document.getElementById('inteiro');
const NAN = window.document.getElementById('NAN');
const arredonda_baixo = window.document.getElementById('arredonda-baixo');
const arredonda_alto = window.document.getElementById('arredonda-alto');
const casas_decimais = window.document.getElementById("casas-decimais")

numero_titulo.innerHTML =`O seu número é ${numero}`; // Transformando o HTML na variável obtida.
raiz_quadrada.innerHTML = `Raiz Quadrada: ${Math.sqrt(numero)}`;
inteiro.innerHTML = `${numero} é inteiro: ${Number.isInteger(numero)} `;
NAN.innerHTML = `É NaN: ${Number.isNaN(numero)} `;
arredonda_baixo.innerHTML = `Arredondando para baixo: ${Math.floor(numero)}`;
arredonda_alto.innerHTML = `Arredondando para cima: ${Math.ceil(numero)}`;
casas_decimais.innerHTML = `Com duas casas decimais: ${numero.toFixed(2)}`;