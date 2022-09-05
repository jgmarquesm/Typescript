"use strict";
/*
Array de objetos: {key, value} -> itens
Métodos: obter(key) => {k, v}}, colocar({k,v})
limpar()
imprimir()
*/
class Mapa {
    constructor() {
        this.itens = new Array;
    }
    obter(key) {
        const resultado = this.itens.filter(i => i.key === key);
        return resultado ? resultado[0] : null;
    }
    colocar(novoPar) {
        const encontrado = this.obter(novoPar.key);
        if (encontrado) {
            encontrado.value = novoPar.value;
        }
        else {
            this.itens.push(novoPar);
        }
    }
    limpar() {
        this.itens = new Array;
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ key: "k1", value: "v1" });
mapa.colocar({ key: "k2", value: "v2" });
mapa.colocar({ key: "k3", value: "v3" });
mapa.colocar({ key: "k4", value: "v4" });
mapa.colocar({ key: "k5", value: "v5" });
mapa.imprimir();
console.log(mapa.obter("k1"));
mapa.colocar({ key: "k1", value: "50mil" });
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
