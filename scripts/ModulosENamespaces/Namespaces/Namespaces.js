"use strict";
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
var Areas;
(function (Areas) {
    const PI = 3.141592;
    function circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.circunferencia = circunferencia;
    function retangulo(base, altura) {
        return base * altura;
    }
    Areas.retangulo = retangulo;
})(Areas || (Areas = {}));
console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(10, 20));
// Namespaces aninhados
var Geometria;
(function (Geometria) {
    const PI = 3.141592;
    let Area;
    (function (Area) {
        function circunferenciaAninhada(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circunferenciaAninhada = circunferenciaAninhada;
        function retanguloAninhado(base, altura) {
            return base * altura;
        }
        Area.retanguloAninhado = retanguloAninhado;
    })(Area = Geometria.Area || (Geometria.Area = {}));
    let Volume;
    (function (Volume) {
        function esferaAninhada(raio) {
            return (4 / 3) * PI * Math.pow(raio, 3);
        }
        Volume.esferaAninhada = esferaAninhada;
        function paralelepipedoAninhado(base, altura, comprimento) {
            return base * altura * comprimento;
        }
        Volume.paralelepipedoAninhado = paralelepipedoAninhado;
    })(Volume = Geometria.Volume || (Geometria.Volume = {}));
})(Geometria || (Geometria = {}));
console.log(Geometria.Area.circunferenciaAninhada(10));
console.log(Geometria.Volume.esferaAninhada(10));
console.log(Geometria.Area.retanguloAninhado(10, 20));
console.log(Geometria.Volume.paralelepipedoAninhado(10, 20, 10));
