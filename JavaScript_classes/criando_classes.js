/* Classes */

// Classe é uma estrutura que descreve estados e comportamentos de um determinado objeto. No Javascript utilizamos uma função para criar a classe. Para criar propriedades podemos usar a palavra var ou this.

// Criando uma classe:
class Pessoa {
    constructor(nome,sobrenome){//Método que recebe parâmetros dentro de uma classe;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log(`Olá meu nome é ${this.nome} ${this.sobrenome}`)
    };

    comer(){
        console.log(`${this.nome} ${this.sobrenome} está comendo`)
    };

    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo`)
    };
}

// Instânciando um objeto sobre o molde(Classe);
const p1 = new Pessoa('Marcos Eduardo','Fernandes');
p1.beber()