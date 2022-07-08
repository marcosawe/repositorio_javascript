/* Constructor Functions (Funções Construtoras) -> constroe e retorna Objetos*/
// Por convenção devem iniciar as funções com letras maiúsculas;
// Por convenção também só iniciam com a palavra (new);

// Molde da função:
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = ()=>{
        console.log(`${this.nome},: sou um método.`);
    };
}

// Atribuindo o objeto a uma construção;
const p1 = new Pessoa('Marcos','Eduardo');
const p2 = new Pessoa('Antônio', 'Carlos');

p1.metodo()