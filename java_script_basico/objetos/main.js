// Para se criar objetos de forma literal utilizasse {}
const pessoa1 = {
    nome:'Marcos',
    sobrenome:'Fernandes',
    idade: 17,
    estadoCivil:'Solteiro'
}; 
// Para acessar os valores de um objetos utilizasse o nome dele e um .
console.log(pessoa1.estadoCivil)
// Para se criar objetos de forma mais facil, utilizasse funções e dentro dessas funções se englobam objetos
const criarPessoas = (nome,sobrenome,idade,estadoCivil)=>{
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade,
        estadoCivil:estadoCivil
    };
};
const pessoa2 = criarPessoas('José','Oliveira',19,'solteiro')
console.log(pessoa2)
// Pode-se ter funções dentro de métodos
const pessoa3 = {
    nome:"Marcelo",
    sobrenome:"Domingues",
    idade:58,
    estadoCivil:"Casado",
    Fala(){
    console.log('Mamaquim')
    }
}
pessoa3.Fala()
//Para referênciar objetos utilizamos this
const pessoa4 = {
    nome:"João",
    sobrenome:"Do Nargas",
    idade:16,
    estadoCivil:"Gay",
    deuaRoda:1,
    Fala(){
    console.log(`${this.nome} está falando que é ${this.estadoCivil}`)
    },
    incrementoRoda(){
    ++this.deuaRoda,
    console.log(`João do Nargas deu a roda ${this.deuaRoda} vezes.`)
    }
}
pessoa4.Fala()
pessoa4.incrementoRoda()
pessoa4.incrementoRoda()
pessoa4.incrementoRoda()
pessoa4.incrementoRoda()
