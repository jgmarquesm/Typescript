"use strict";
// Podemos usar constraints para restringir os tipos aceitos 
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
const filaString = new Fila("João", "Gabriel", "Édla", "Maria");
filaString.imprimir();
filaString.entrar("Teste");
filaString.imprimir();
filaString.proximo();
filaString.imprimir();
const filaNumber = new Fila(1, 2, 3, 4, 5);
filaNumber.imprimir();
filaNumber.entrar(100);
filaNumber.imprimir();
filaNumber.proximo();
filaNumber.imprimir();
/* Caso eu defina uma fila que não seja tipo number ou string, temos um erro:

const filaOutro = new Fila<boolean>(1, 0, 1, true, false);
fila.imprimir();
*/ 
