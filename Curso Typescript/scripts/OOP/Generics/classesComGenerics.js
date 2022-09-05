"use strict";
// Modo "normal"
// class OperacaoBinaria {
//     constructor(public operando1: any, public operando2: any){}
//     executar() {
//         return this.operando1+this.operando2;
//     }
// }
// console.log(new OperacaoBinaria("Bom", " dia!").executar());
// console.log(new OperacaoBinaria(2, 10).executar());
// console.log(new OperacaoBinaria(2, "Bom").executar());
// // Mas e se passarmos 2 objeto?
// console.log(new OperacaoBinaria({}, {}).executar());
// Com Generics
// Mais comum :
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// Também é bem comum:
/*
abstract class OperacaoBinaria<T> {
    constructor(public operando1: T, public operando2: T){}

    abstract executar(): T
}
*/
// Mais genérico (e mais perigoso kk):
/*
abstract class OperacaoBinaria<T,E,U> {
    constructor(public operando1: T, public operando2: E){}

    abstract executar(): U
}
*/
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(2, 10).executar());
// Diferença entre datas
var DateTime;
(function (DateTime) {
    class Data {
        constructor(dia = 1, mes = 1, ano = 1970) {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        }
    }
    DateTime.Data = Data;
})(DateTime || (DateTime = {}));
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 24 * 60 * 60;
        return `${Math.ceil(diferenca / dia)} dias`;
    }
}
const d1 = new DateTime.Data(2, 11, 1997);
const d2 = new DateTime.Data(2, 11, 2022);
console.log(new DiferencaEntreDatas(d1, d2).executar());
