namespace Banco {
    export class ContaCorrente {
        @naoNegativo
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
            return `O seu saldo é: R$ ${this.saldo.toFixed(2)}.`
        }
    }
   
    function congelar(alvo: any, nomeMetodo: string, descritor: PropertyDescriptor){
        console.log(alvo, nomeMetodo);
        descritor.writable = false;
    }

    function naoNegativo(alvo: any, nomePropriedade: string){
        delete alvo[nomePropriedade];
        Object.defineProperty(alvo, nomePropriedade, {
            get: function(): any {
                return alvo["_" + nomePropriedade]
            },
            set: function(valor: any): void {
                if (valor < 0){
                    throw new Error("Saldo inválido.")
                } else {
                    alvo["_" + nomePropriedade] = valor
                }
            }
        })
    }
}

const contaCorrente = new Banco.ContaCorrente(1000);
contaCorrente.sacar(279.99);
contaCorrente.sacar(720.02); // não é mais possível fazer com que o saldo seja negativo 
console.log(contaCorrente.getSaldo());