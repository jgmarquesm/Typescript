// const PI: number = 3.141592;

// function areaDaCircunferencia(raio: number): number {
//     return PI*Math.pow(raio, 2);
// }

// function areaDoRetangulo(base: number, altura: number): number {
//     return base*altura;
// }

// console.log(areaDaCircunferencia(10));
// console.log(areaDoRetangulo(10,20));

// Repare que estas funções estão definidas no escopo global, então se am algum outro arquivo existr uma outra função de mesmo nome
// teremos um conflito, para isso podemos definir os namespaces:

namespace Areas {
    const PI: number = 3.141592;

    export function circunferencia(raio: number): number {
        return PI*Math.pow(raio, 2);
    }

    export function retangulo(base: number, altura: number): number {
        return base*altura;
    }
}

console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(10,20));

// Namespaces aninhados

namespace Geometria {

    const PI: number = 3.141592;

    export namespace Area {

        export function circunferenciaAninhada(raio: number): number {
            return PI*Math.pow(raio, 2);
        }
    
        export function retanguloAninhado(base: number, altura: number): number {
            return base*altura;
        }
    }

    export namespace Volume {

        export function esferaAninhada(raio: number): number {
            return (4/3)*PI*Math.pow(raio, 3);
        }
    
        export function paralelepipedoAninhado(base: number, altura: number, comprimento: number ): number {
            return base*altura*comprimento;
        }
    }
}

console.log(Geometria.Area.circunferenciaAninhada(10));
console.log(Geometria.Volume.esferaAninhada(10));
console.log(Geometria.Area.retanguloAninhado(10,20));
console.log(Geometria.Volume.paralelepipedoAninhado(10,20,10));
