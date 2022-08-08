/* Getters e Setters -> Classes */

// Symbol -> A função Symbol() retorna um valor do tipo símbolo (symbol), tem propriedades estáticas que expõem vários membros dos objetos nativos, possuem métodos estáticos que expõem o registro de símbolos globais e se parecem com uma classe de objeto nativo, mas estão incompletos como construtor porque não suportam a sintaxe "new Symbol()".

// Para criar uma opção estática utilizamos o dado primitivo Symbol

const velocidadeSymbol = Symbol("Velocidade");

class Carro{
    constructor(nome){
        this.nome = nome;
        this[velocidadeSymbol] = 0;
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[velocidadeSymbol] = valor;
    }

    get velocidade(){ // Forma de apresentar um valor Symbol em uma função getter
        return this[velocidadeSymbol];
    }



    acelerar(){
        if(this[velocidadeSymbol] >= 100) return;
        this[velocidadeSymbol] += 1;
    }

    freiar(){
        if(this[velocidadeSymbol] <= 100) return;
        this[velocidadeSymbol] -= 1;
    }
}

const carro1 = new Carro('Marevic')

for(let i = 0; i <= 100; i++){
    carro1.acelerar()
};

carro1.velocidade = 88

console.log(carro1.velocidade)