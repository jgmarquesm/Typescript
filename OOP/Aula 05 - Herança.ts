class Carro {
    private velocidadeAtual: number = 0;

    constructor(public marca: string, public model: string, private velocidadeMaxima: number = 200 ){}

    protected mudarVelocidade(tempo: number, tipo: number): number {
        
        const novaVelocidade: number = this.velocidadeAtual + 5*tempo*tipo;
        const velocidadeValida: boolean =  novaVelocidade > 0 && novaVelocidade < this.velocidadeMaxima;

        if (velocidadeValida){
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = tempo*tipo > 0 ? this.velocidadeMaxima: 0;
        }
        
        return this.velocidadeAtual;
    }

    acelerar(tempo: number = 1): number {
        return this.mudarVelocidade(tempo, 1);
    }

    freiar(tempo: number = 1): number {
        return this.mudarVelocidade(tempo, -1);
    }
}

class Ferrari extends Carro {

    constructor(modelo: string, velocidadeMaxima: number){
        super("Ferari", modelo, velocidadeMaxima);
    }

    acelerar(tempo: number = 1): number {
        return this.mudarVelocidade(tempo, 5);
    }

    freiar(tempo: number = 1): number {
        return this.mudarVelocidade(tempo, -5);
    }
}

const f40 = new Ferrari("F40", 325);
console.log(f40.marca);
console.log(f40.model);
console.log(f40.acelerar(20));
console.log(f40.freiar(5));