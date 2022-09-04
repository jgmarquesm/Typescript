"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaCirculo = exports.PI = void 0;
exports.PI = 3.141592;
function areaCirculo(raio) {
    return exports.PI * Math.pow(raio, 2);
}
exports.areaCirculo = areaCirculo;
// export default function areaCirculo(raio: number): number {
//     return PI*Math.pow(raio, 2);
// }
// export default function(raio: number): number {
//     return PI*Math.pow(raio, 2);
// }
