namespace Factory {
    export function imprimirClasse(classe: Function){
        console.log(classe)
    }
    export function decoratorVazio(_: Function){}
}

function imprimirSe(valor: boolean){
    return valor ? Factory.imprimirClasse : Factory.decoratorVazio 
}

@imprimirSe(false)
class Moveis {
    constructor(){
        console.log("móvel")
    }
}