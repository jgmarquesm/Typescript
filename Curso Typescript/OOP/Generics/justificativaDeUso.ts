function echo(obj: any): any {
    return obj
}

console.log(echo("João").length);
console.log(echo(24).length); // -> undefined
console.log(echo([1, 2, "três"]));
console.log(echo({nome: "João", idade: 24}));

// Usando Generics

function echoMelhorado<T>(obj: T): T {
    return obj
}

console.log(echoMelhorado<string>("João").length);
console.log(echoMelhorado<number>(24));
console.log(echoMelhorado<any[]>([1, 2, "três"]));
console.log(echoMelhorado<object>({nome: "João", idade: 24}));