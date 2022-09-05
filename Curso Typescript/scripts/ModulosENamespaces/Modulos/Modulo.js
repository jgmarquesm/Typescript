"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const retangulo_1 = __importDefault(require("./retangulo"));
const circulo_1 = require("./circulo");
// Add manualmente .js com extensão no require()
console.log((0, circulo_1.areaCirculo)(10));
console.log((0, retangulo_1.default)(10, 13));
const { digaOi } = require("./novo");
console.log(digaOi("João"));
