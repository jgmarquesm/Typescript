"use strict";
class CarroExemplo {
    constructor(marca, model, velocidadeMaxima = 200) {
        this.marca = marca;
        this.model = model;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    mudarVelocidade(tempo, tipo) {
        const novaVelocidade = this.velocidadeAtual + 5 * tempo * tipo;
        const velocidadeValida = novaVelocidade > 0 && novaVelocidade < this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = tempo * tipo > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar(tempo = 1) {
        return this.mudarVelocidade(tempo, 1);
    }
    freiar(tempo = 1) {
        return this.mudarVelocidade(tempo, -1);
    }
}
let carro1 = new CarroExemplo("Ford", "Focus");
Array(15).fill(0).forEach(() => carro1.acelerar(3));
console.log(carro1.acelerar(3));
Array(10).fill(0).forEach(() => carro1.freiar(7.5));
console.log(carro1.freiar());
