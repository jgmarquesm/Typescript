"use strict";
/*
class Matemetica{
    PI: number = 3.141592;

    areaCirculo(raio: number): number {
            return this.PI*Math.pow(raio, 2);
    }
}

const area1 = new Matemetica();

console.log(area1.areaCirculo(4));
area1.PI = 2.71;
console.log(area1.PI);
*/
class Matemetica {
    static areaCirculo(raio) {
        return this.PI * Math.pow(raio, 2);
    }
}
Matemetica.PI = 3.141592;
console.log(Matemetica.areaCirculo(4)); // Sem static: console.log(new Matemetica().areaCirculo(4))
