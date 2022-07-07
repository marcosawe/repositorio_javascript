// Criando calculadora Factory Function (Calculadora criada por Objetos)
function criaCalculadora(){
    return{
        // Atributos ficam na parte de cima da função;
        display:document.querySelector('.display'),


        // Tudo que for método inicia em baixo da função;
        inicia:function(){
            alert("Olá Acabei de Iniciar")
        },
        cliqueBotoes:function(){
            document.addEventListener('click',function(event){
                
            })
        },
    };
};

const calculadora= criaCalculadora();
calculadora.inicia;