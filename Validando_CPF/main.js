

function ValidaCPF(cpf){
    Object.defineProperty(this,'cpfLimpo',{
        get:function(){
            return cpf.replace(/\D+/g, "")
        }
    });
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === undefined) return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.sequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const arrayParcial = Array.from(cpfParcial)

    let regressivo = arrayParcial.length + 1;
    const total = arrayParcial.reduce((ac,val)=>{
        ac += (regressivo * Number(val));
        regressivo--;
        return ac
    },0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito);

}

ValidaCPF.prototype.sequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF(prompt('Digite seu CPF'));
cpf.cpfLimpo
console.log(cpf.valida());
