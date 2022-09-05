const avaliacoes: Array<number> = [10, 9.9, 7, 8.5, 3, 6.7]
avaliacoes.push(9.7);
console.log(avaliacoes);

function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 4, 5, 10]);

function imprimirUsandoRest<T>(...args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimirUsandoRest(1, 2, 4, 5, 10);