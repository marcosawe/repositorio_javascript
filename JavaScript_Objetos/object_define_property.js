/*Object Define Property */
//O método estático Object. defineProperty() define uma nova propriedade diretamente em um objeto ou modifica uma propriedade existente em um objeto e retorna o objeto 

function Loja (produto,preco,estoque){
    this.produto = produto;
    this.preco = preco;
    Object.defineProperty(this,'estoque',{
        enumerable:true, //Mostra a chave pertencente
        value:estoque, //Mostra o valor pertencente
        writable:false, //Pode alterar o valor
        configurable:false //As propriedades da chave podem ser reconfiguradas
    })
}

const produto1 = new Loja('Secador',223,20);
const produto2 = new Loja('Lava Louças',660,12);
const produto3 = new Loja('Hack',329,8);
const produto4 = new Loja('TV LED',1920,6);
const produto5 = new Loja('Mouse Gamer',210,25);
const produto6 = new Loja('Laptop',2423,13);
const produto7 = new Loja('Impressora',340,7);

console.log(produto1.estoque)