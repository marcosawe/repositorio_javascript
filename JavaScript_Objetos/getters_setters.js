/* Getters e Setters */
// Getters e setters são usados para proteger seus dados, especialmente na criação de classes. Para cada instância de variável, um método getter retorna seu valor, enquanto um método setter o define ou atualiza.

function Produto(nome,valor,quantidade){
    this.nome = nome
    this.valor = valor
    let quantidadePrivada = quantidade // O método mais correto para não manipular a variável privada é colocando a mesma em uma outra variável
    
    Object.defineProperty(this,'quantidade',{
        enumerable:true,
        configurable:true,
        // Para adicionarmos uma função getter utilizamos:
        get:function(){
            return quantidadePrivada;
        },

        //Para criar um setter utilizamos:
        set:function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('O valor não é um Number!!')
            }
            quantidadePrivada = valor
        },
        })
    }

const p1 = new Produto('Vinagre',13,7);
p1.quantidadePrivada = 500
console.log(p1.quantidadePrivada)