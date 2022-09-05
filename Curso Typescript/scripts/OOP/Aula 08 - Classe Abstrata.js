"use strict";
// Classes abstratas não podem ser instanciasdas;
// Podemos implementar métodos abstratos e concretos nas classes abstratas;
class Exemplo {
    metodo2(numero) { return numero + 1; }
}
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class somando extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => (t + a));
    }
}
class subtraindo extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => (t - a));
    }
}
class multiplicando extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => (t * a));
    }
}
const c1 = new somando();
c1.executar(1, 2, 3, 4);
console.log(c1.getResultado());
const c3 = new multiplicando();
c3.executar(1, 2, 3, 4);
console.log(c3.getResultado());
const c2 = new subtraindo();
c2.executar(1, 2, 3, 4);
console.log(c2.getResultado());
