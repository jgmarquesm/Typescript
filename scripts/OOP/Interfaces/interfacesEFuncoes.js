"use strict";
let potencia;
potencia = function (base, expoente) {
    // Math.pow(base, expoente)
    // base**expoente
    // Array(expoente).fill(base).reduce((t, a)=>(t * a))
    return Math.pow(base, expoente);
};
console.log(potencia(2, 3));
