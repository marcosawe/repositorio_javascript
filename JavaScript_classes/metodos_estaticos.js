/* Métodos Estáticos e Dinânmicos */

//O método estatístico é uma representação simplificada de algum processo complexo, criado para descomplicar a análise quantitativa de todas as variantes que estão envolvidas em um processo.



class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // Métodos de Instância -> tem acesso a todos os dados da instância;
    aumentarVolume(){
        this.volume += 2
    }

    diminuiVolume(){
        this.volume -= 2;
    }

    static soma(x,y){
        return x+y
    }
}

const C1 = new ControleRemoto('Samsung')
console.log(ControleRemoto.soma(12,4))
console.log(C1)