"use strict";
class Carro {
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
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferari", modelo, velocidadeMaxima);
    }
    acelerar(tempo = 1) {
        return this.mudarVelocidade(tempo, 5);
    }
    freiar(tempo = 1) {
        return this.mudarVelocidade(tempo, -5);
    }
}
const f40 = new Ferrari("F40", 325);
console.log(f40.marca);
console.log(f40.model);
console.log(f40.acelerar(20));
console.log(f40.freiar(5));
