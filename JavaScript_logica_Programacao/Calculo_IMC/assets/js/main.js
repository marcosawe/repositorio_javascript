// #Capiturar o evento de submit do formulário.
const form = document.querySelector('#form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso')//Pegando os inputs
    const inputAltura = event.target.querySelector('#altura')

    const peso = Number(inputPeso.value);//Pegando os valores dos inputs
    const altura = Number(inputAltura.value);

    if (!peso) { // Validando através da terminologia not 
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getIMC(peso, altura) // Calcula os parâmetros do IMC 
    const nivelIMC = getNivelImc(imc);

    const msg = `Seu IMC é de ${imc} (${nivelIMC})`;

    setResultado(msg, true);
});

function getNivelImc(imc) { // Range do IMC
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobre Peso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
};

function getIMC(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2);
};

function criaParagrafos() {
    const p = document.createElement('p'); // Criando uma tag na div resultado
    return p
};


// # Mandar uma mensagem ao id resultado dentro da section div
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";

    const p = criaParagrafos();

    if (isValid) {
        p.classList.add("texto-paragrafo");
    } else {
        p.classList.add("bad");
    }

    p.innerHTML = msg
    resultado.appendChild(p) // Adiciona p na div resultado
};