class ContaCorrente {
    private saldo: number

    constructor(saldo: number){
        this.saldo = saldo
    }

    @congelar
    sacar(valor: number): boolean {
        if (valor <= this.saldo){
            this.saldo -= valor;
            return true
        } else {
            return false
        }
    }
    
    @congelar
    getSaldo(): string {
        return `O seu saldo é: R$ ${this.saldo}.`
    }
}

const cc = new ContaCorrente(1000);
cc.sacar(279.99);
console.log(cc.getSaldo());

// Digamos que alguém tenha acesso ao método e o mude... Não queremos isso!1
// cc.getSaldo = function(): string {
//     console.log("Vacilou! Você foi roubado.");
//     return `O seu saldo é: R$ 0.`
// }

// console.log(cc.getSaldo());

// Quando fazemos isso, ele já não deixa mais fazermos a mudança acima.

function congelar(alvo: any, nomeMetodo: string, descritor: PropertyDescriptor){
    console.log(alvo, nomeMetodo);
    descritor.writable = false;
}