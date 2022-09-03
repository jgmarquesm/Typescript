// Classes abstratas não podem ser instanciasdas;
// Podemos implementar métodos abstratos e concretos nas classes abstratas;

abstract class Exemplo {

    abstract metodo1(str: string): void;
    metodo2(numero: number): number{ return numero + 1 }

}

abstract class Calculo{
    protected resultado: number = 0;

    abstract executar(...numero: number[]): void;

    getResultado(): number {
        return this.resultado;
    }
}

class somando extends Calculo{
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => (t+a));
    }
}

class subtraindo extends Calculo{
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => (t-a));
    }
}

class multiplicando extends Calculo{
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => (t*a));
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
console.log(c2.getResultado())