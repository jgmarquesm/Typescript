import areaRetangulo from "./retangulo";
import { areaCirculo as circ} from "./circulo";
// Add manualmente .js com extensão no require()

console.log(circ(10));
console.log(areaRetangulo(10, 13));

const { digaOi } = require("./novo");
console.log(digaOi("João"));