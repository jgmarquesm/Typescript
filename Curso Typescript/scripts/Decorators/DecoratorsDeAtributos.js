"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Banco;
(function (Banco) {
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
        congelar
    ], ContaCorrente.prototype, "sacar", null);
    __decorate([
        congelar
    ], ContaCorrente.prototype, "getSaldo", null);
    Banco.ContaCorrente = ContaCorrente;
    function congelar(alvo, nomeMetodo, descritor) {
        console.log(alvo, nomeMetodo);
        descritor.writable = false;
    }
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
})(Banco || (Banco = {}));
const contaCorrente = new Banco.ContaCorrente(1000);
contaCorrente.sacar(279.99);
contaCorrente.sacar(720.02); // não é mais possível fazer com que o saldo seja negativo 
console.log(contaCorrente.getSaldo());
