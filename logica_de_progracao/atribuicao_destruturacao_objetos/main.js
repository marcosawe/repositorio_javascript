const pessoa ={
    nome:undefined, 
    idade: 17,
    peso: 80,
    altura:1.80,
    endereco:{
    rua:"Bernardo Cupertino",
    numero:965
    }
}
// atribuição via desestruturação
const {nome:mamaco = "Zeze Violão",endereco:enderecoMamaco } = pessoa;
console.log(mamaco,enderecoMamaco);
