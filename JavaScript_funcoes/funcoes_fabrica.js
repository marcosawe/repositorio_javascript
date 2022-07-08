/* Factory Functions -> Funções que criam e retornam objetos; */

// O this faz referência ao objeto do qual a função é uma propriedade. Em outras palavras, o this faz referência ao objeto que está chamando a função no momento.

function criaPessoa(nome, sobrenome, a, p) {
    return {
      nome,
      sobrenome,
  
      // Getter -> Getters lhe dão uma maneira de definir uma propriedade de um objeto, mas eles não calculam o valor da propriedade até que sejam acessados. Um getter adia o custo de cálculo do valor até que o valor seja necessário e, se nunca o for, você não precisa pagar esse custo.

      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
      },
  
      // Setter -> 
      set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
      },
  
      fala(assunto = 'falando sobre NADA') {
        return `${this.nome} está ${assunto}.`;
      },
  
      altura: a,
      peso: p,
  
      // Getter
      get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
      }
    };
  }
  
  const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
  const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
  const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);
  
  console.log(p1.imc);
  console.log(p2.imc);
  console.log(p3.imc);