// Atributos: fila (Array)
// Métodos: entrar, próximo, imprimir
namespace DesafiosGenerics {
    export class Fila<T>{
        private fila: Array<T>

        constructor(...args: Array<T>){
            this.fila = args;
        }

        entrar(elemento: T): void {
            this.fila.push(elemento);
        }

        proximo(): T {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }

        imprimir(): void {
            console.log(this.fila)
        }
    }
}
const fila = new DesafiosGenerics.Fila<string>("João", "Gabriel", "Édla", "Maria");
fila.imprimir();
fila.entrar("Teste");
fila.imprimir();
fila.proximo();
fila.imprimir();