/* Atribuição por desestruturação em Objetos */
const pessoas = {
    nome: 'Marcos Eduardo',
    sobrenome: 'Fernandes Domingues',
    idade: 18,
    endereco: {
        cidade: 'Sergipe',
        rua: 'Av Thomas Santos Silva',
        numero: 740
    }
};

// Para fazer a desestruturação de objetos utilizamos:
const {nome} = pessoas;
console.log(nome);

// É possível também setar o valor da variável em um objeto
const{sexo = 'Masculino'} = pessoas;
console.log(sexo);

// É possível renomear o valor da variável 
const{sobrenome:segundoNome} = pessoas;
console.log(segundoNome);

// Para acessar o valor encapsulado em outro objeto utilizamos:
const {endereco:{cidade:c,rua:r,numero:n}} = pessoas;
console.log(c,r,n);