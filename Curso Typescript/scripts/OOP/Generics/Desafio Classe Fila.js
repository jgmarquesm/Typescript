"use strict";
// Atributos: fila (Array)
// Métodos: entrar, próximo, imprimir
var DesafiosGenerics;
(function (DesafiosGenerics) {
    class Fila {
        constructor(...args) {
            this.fila = args;
        }
        entrar(elemento) {
            this.fila.push(elemento);
        }
        proximo() {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        imprimir() {
            console.log(this.fila);
        }
    }
    DesafiosGenerics.Fila = Fila;
})(DesafiosGenerics || (DesafiosGenerics = {}));
const fila = new DesafiosGenerics.Fila("João", "Gabriel", "Édla", "Maria");
fila.imprimir();
fila.entrar("Teste");
fila.imprimir();
fila.proximo();
fila.imprimir();
