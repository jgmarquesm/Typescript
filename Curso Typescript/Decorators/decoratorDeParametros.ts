namespace BancoExemplo2 {
    export class ContaCorrente {
        @naoNegativo
        private saldo: number
    
        constructor(saldo: number){
            this.saldo = saldo
        }
    
        @congelar
        sacar(@paraInfo valor: number): boolean {
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
   
    // Decorator para métodos
    function congelar(alvo: any, nomeMetodo: string, descritor: PropertyDescriptor){
        console.log(alvo, nomeMetodo);
        descritor.writable = false;
    }

    // Decorator para atributo
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

    // Decorator para parametro
    function paraInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
        console.log(`Alvo: ${alvo};\nMétodo: ${nomeMetodo};\nÍndice: ${indiceParam}.`)
    }
}

const cCorrente = new BancoExemplo2.ContaCorrente(1000);
cCorrente.sacar(279.99);
console.log(cCorrente.getSaldo());