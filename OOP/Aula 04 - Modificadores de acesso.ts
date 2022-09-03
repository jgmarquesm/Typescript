class CarroExemplo {
    private velocidadeAtual: number = 0;

    constructor(public marca: string, public model: string, private velocidadeMaxima: number = 200 ){}

    private mudarVelocidade(tempo: number, tipo: number): number {
        
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

let carro1 = new CarroExemplo("Ford", "Focus");

Array(15).fill(0).forEach(()=> carro1.acelerar(3));
console.log(carro1.acelerar(3));

Array(10).fill(0).forEach(()=> carro1.freiar(7.5));
console.log(carro1.freiar());