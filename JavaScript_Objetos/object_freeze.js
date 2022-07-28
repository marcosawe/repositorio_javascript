/* Object Freeze */
// O método Object.freeze() congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele; impede que as propriedades existentes sejam removidas; e impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, ou capacidade de escrita sejam alteradas. Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado.

// Sintaxe -> Object.freeze(obj)

function Objetos(nome,sobrenome,idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    Object.freeze(this);
}


const p1 = new Objetos('Marcos','Fernandes',17);
const p2 = new Objetos('Felipe','Azevedo',56);
p2.anoNascimento = 1978

console.log(p2.anoNascimento)