"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return `O seu saldo é: R$ ${this.saldo}.`;
    }
}
__decorate([
    congelar
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
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
function congelar(alvo, nomeMetodo, descritor) {
    console.log(alvo, nomeMetodo);
    descritor.writable = false;
}
