interface fazerCalculo{
    (a: number, b:number): number;
}

let potencia: fazerCalculo;

potencia = function(base: number, expoente: number): number {
    // Math.pow(base, expoente)
    // base**expoente
    // Array(expoente).fill(base).reduce((t, a)=>(t * a))
    return base**expoente
}

console.log(potencia(2, 3));