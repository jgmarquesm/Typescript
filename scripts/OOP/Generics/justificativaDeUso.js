"use strict";
function echo(obj) {
    return obj;
}
console.log(echo("João").length);
console.log(echo(24).length); // -> undefined
console.log(echo([1, 2, "três"]));
console.log(echo({ nome: "João", idade: 24 }));
// Usando Generics
function echoMelhorado(obj) {
    return obj;
}
console.log(echoMelhorado("João").length);
console.log(echoMelhorado(24));
console.log(echoMelhorado([1, 2, "três"]));
console.log(echoMelhorado({ nome: "João", idade: 24 }));
