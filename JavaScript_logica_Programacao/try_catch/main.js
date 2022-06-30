/* Try Catch */
// É utilizado para tratar erros e estrailos em uma variável para que futuramente possam ser tratados.

// Sintaxe para tratar erros
try {
    console.log(naoExisto)
} catch (erro) {
    console.log("naoExisto não existe")
}

// Sintaxe para lançar erros
const soma = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError("X ou Y não são números!") // Lançando um erro
    }
    return x + y
}
try {
    console.log(soma(1, 4));
    console.log(soma("1", 6));
}catch(error){
    console.log("O sistema está gerando erro!!!")
};

// Tratamento com Finally
try {
    //Executa quando não há erros
} catch (e) {
    //Executa quando há erros
} finally{
    // Sempre Executa
}

// Fazendo uma função que checa a hora!!!

function retonaHora(data) {
    if (data && !(data instanceof Date)) {
      throw new TypeError('Esperando instância de Date.');
    }
  
    if (!data) {
      data = new Date();
    }
  
    return data.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }
  
  try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retonaHora();
    console.log(hora);
  } catch(e) {
    // Tratar erro
    // console.log(e);
  } finally {
    console.log('Tenha um bom dia.');
  }