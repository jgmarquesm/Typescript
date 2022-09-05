type Construtor = { new(...args: any[]): {} }

function imprimirObjeto(construtor: Construtor){
    console.log("Carregando...")
    return class extends construtor {
        constructor(...args: any[]){
            console.log("Antes...")
            super(...args)
            console.log("Depois...")
        }
    }
}

@imprimirObjeto
class Sofa {
    constructor(){
        console.log("Novo...")
    }
}

new Sofa();
new Sofa();
new Sofa();