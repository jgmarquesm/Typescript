"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Factory;
(function (Factory) {
    function imprimirClasse(classe) {
        console.log(classe);
    }
    Factory.imprimirClasse = imprimirClasse;
    function decoratorVazio(_) { }
    Factory.decoratorVazio = decoratorVazio;
})(Factory || (Factory = {}));
function imprimirSe(valor) {
    return valor ? Factory.imprimirClasse : Factory.decoratorVazio;
}
let Moveis = class Moveis {
    constructor() {
        console.log("móvel");
    }
};
Moveis = __decorate([
    imprimirSe(false)
], Moveis);
