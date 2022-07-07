
// Criando calculadora Factory Function (Calculadora criada por Objetos)

function criaCalculadora() {
     return { // Retornando a função de forma direta;

       display: document.querySelector('.display'), // Captura os valores dentro do display;
  
       inicia() { // Iniciando as funções dentro do escopo por referência;
         this.cliqueBotoes();
         this.pressionaBackSpace();
         this.pressionaEnter();
       },
  
       pressionaBackSpace() {
         this.display.addEventListener('keydown', e => { // Adicionando um evento de limpeza em backspace;
           if (e.keyCode === 8) {
             e.preventDefault();
             this.clearDisplay();
           }
         });
       },
  
       pressionaEnter() {
         this.display.addEventListener('keyup', e => { // A função é inicializada a partir do momento em que a tecla é solta
           if (e.keyCode === 13) {
             this.realizaConta();
           }
         });
       },
  
       realizaConta() { // Tenta realizar uma conta sobre os valores lançados no display
         let conta = this.display.value;
  
         try {
           conta = eval(conta); // eval() é uma função de propriedade do objeto global (window) . O argumento da função eval() é uma string. Se a string representa uma expressão, eval() avalia a expressão. Se o argumento representa uma ou mais declarações em JavaScript, eval() avalia as declarações
  
           if(!conta) {
             alert('Conta inválida');
             return;
           }
  
           this.display.value = String(conta);
         } catch(e) {
           alert('Conta inválida');
           return;
         }
       },
  
       clearDisplay() {
         this.display.value = '';
       },
  
       apagaUm() { // Apaga os valores presentes no display;
         this.display.value = this.display.value.slice(0, -1);
       },
  
  
      cliqueBotoes() { 
        document.addEventListener('click', e => {
          const el = e.target;
  
          if(el.classList.contains('btn-num')) {
            this.btnParaDisplay(el.innerText);
          }
  
          if(el.classList.contains('btn-clear')) {
            this.clearDisplay();
          }
  
          if(el.classList.contains('btn-del')) {
            this.apagaUm();
          }
  
          if(el.classList.contains('btn-eq')) {
            this.realizaConta();
          }
  
          this.display.focus();
        });
      },
  
      btnParaDisplay(valor) {
        this.display.value += valor;
      }
  
    };
  }
  
  const calculadora = criaCalculadora();
  calculadora.inicia();

// O método .bind()