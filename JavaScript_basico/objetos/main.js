/* Objetos */

// Para criar um objetos utilizamos:
const objetos = {
    Nome:'Marcos Eduardo',
    Sobrenome:'Fernandes',
    Idade: 18,
    DataNascimento: '14/05/2004'
};

// Para acessar o valor do objeto utilizamos:
console.log(objetos.Nome)
console.log(objetos.Sobrenome)
console.log(objetos.Idade)

// Para automatizar a criação de objetos utilizamos:
const criaPessoa = (nome,sobrenome,idade,dataNascimento)=>{
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade,
        dataNascimento:dataNascimento
    };
};

const pessoa1 = criaPessoa('Eduardo','Ferreira', 22,'16/07/1992')
console.log(pessoa1.nome)

// Dentro de objetos podemos evocar funções   
const pessoa2 = {
    nome: 'João',
    sobrenome: 'André',
    idade: 16,
    genero: 'Masculino',

    falaoi() {
        console.log(`${this.nome} ${this.sobrenome} está falando Oi`); // O método this referencia os parâmetros do objeto.
    },

    incrementaIdade(){
      console.log(this.idade++)
    }
}

pessoa2.falaoi()
pessoa2.incrementaIdade()
pessoa2.incrementaIdade()
pessoa2.incrementaIdade()
pessoa2.incrementaIdade()

console.log(pessoa2.idade)