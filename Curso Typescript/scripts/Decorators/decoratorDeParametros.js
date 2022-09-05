"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var BancoExemplo2;
(function (BancoExemplo2) {
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
            return `O seu saldo é: R$ ${this.saldo.toFixed(2)}.`;
        }
    }
    __decorate([
        naoNegativo
    ], ContaCorrente.prototype, "saldo", void 0);
    __decorate([
        congelar,
        __param(0, paraInfo)
    ], ContaCorrente.prototype, "sacar", null);
    __decorate([
        congelar
    ], ContaCorrente.prototype, "getSaldo", null);
    BancoExemplo2.ContaCorrente = ContaCorrente;
    // Decorator para métodos
    function congelar(alvo, nomeMetodo, descritor) {
        console.log(alvo, nomeMetodo);
        descritor.writable = false;
    }
    // Decorator para atributo
    function naoNegativo(alvo, nomePropriedade) {
        delete alvo[nomePropriedade];
        Object.defineProperty(alvo, nomePropriedade, {
            get: function () {
                return alvo["_" + nomePropriedade];
            },
            set: function (valor) {
                if (valor < 0) {
                    throw new Error("Saldo inválido.");
                }
                else {
                    alvo["_" + nomePropriedade] = valor;
                }
            }
        });
    }
    // Decorator para parametro
    function paraInfo(alvo, nomeMetodo, indiceParam) {
        console.log(`Alvo: ${alvo};\nMétodo: ${nomeMetodo};\nÍndice: ${indiceParam}.`);
    }
})(BancoExemplo2 || (BancoExemplo2 = {}));
const cCorrente = new BancoExemplo2.ContaCorrente(1000);
cCorrente.sacar(279.99);
console.log(cCorrente.getSaldo());
