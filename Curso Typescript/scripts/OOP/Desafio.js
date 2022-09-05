"use strict";
// Exercício 1 - Classe
/*
function Moto(nome){
    this.nome = nome
    this.velocidade = 0

    this.buszinar = functio(){
        console.log("toooooooo!")
    }

    this.acelerar = function(delta){
        this.velocidade += delta
    }
}
*/
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log("toooooooo!");
    }
    acelerar(delta) {
        this.velocidade += delta;
    }
}
let moto = new Moto("CB400");
moto.buzinar();
moto.acelerar(100);
console.log(`${moto.nome} está a ${moto.velocidade} Km/h`);
// Exercício 2 - Herança
/*
var objeto2D = {
    base: 0,
    altura: 0
}

var retangulo = Object.create(objeto2D);
retangulo.base -= 5;
retangulo.altura = 7;
retangulo.area = function(){
    return this.base * this.altura
}

console.log(retangulo.area());
*/
class Objeto2D {
    constructor(base = 1, altura = 1) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
let retangulo = new Retangulo(20, 4);
console.log(retangulo.area());
// Exercício 3 - Getters e Setters
/*
class Estagiario {
    private _primeiroNome
}

var estagiario = {
    _primeiroNome = "";
}

Object.defineProperty(estagiario, "primeiroNome", {
    get: function () {
        return this._primeiroNome
    },
    set: function (valor) {
        if (valor.length >= 3){
            this._primeiroNome = valor;
        } else {
            this._primeiroNome = "";
        }
    },
    enumerable: true,
    configurable: true
})
*/
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = "";
        }
    }
}
const estagiario = new Estagiario;
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Jo";
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "João Gabriel";
console.log(estagiario.primeiroNome);
