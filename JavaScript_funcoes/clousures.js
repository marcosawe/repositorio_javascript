/* Clousure */

//Uma closure (fechamento) trata-se de um tipo especial de objeto que combina duas coisas: a função e o ambiente onde a função foi criada. Este ambiente consiste de quaisquer variáveis que estavam no escopo naquele momento em que a função foi criada.

// Global
function retornaFuncao(nome) {
    return function(sobrenome) {
      return nome + ' ' + sobrenome;
    };
  }
  
  function falaNome(nome) {
    const sobrenome = 'Miranda';
    console.log(nome, sobrenome);
  }
  
  const funcao = retornaFuncao('Luiz');
  const funcao2 = retornaFuncao('João');
  console.dir(funcao);
  console.dir(funcao2);
  
  console.log(funcao('Miranda'),
    funcao2('Oliveira'));