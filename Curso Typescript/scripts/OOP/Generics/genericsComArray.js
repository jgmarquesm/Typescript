"use strict";
const avaliacoes = [10, 9.9, 7, 8.5, 3, 6.7];
avaliacoes.push(9.7);
console.log(avaliacoes);
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 4, 5, 10]);
function imprimirUsandoRest(...args) {
    args.forEach(elemento => console.log(elemento));
}
imprimirUsandoRest(1, 2, 4, 5, 10);
