interface Mesa {
    // imprime(): void -> // new Mesa().imprime();
    imprime?(): void
}

@imprimivel
class Mesa {
    constructor(){
        console.log("Novo...")
    }
}

function imprimivel(construtor: Function) {
    construtor.prototype.imprime = function(){
        console.log(this)
    }
}

const mesa = new Mesa();
mesa.imprime && mesa.imprime();