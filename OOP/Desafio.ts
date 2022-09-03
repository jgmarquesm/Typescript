/*
function Moto(nome){
    this.nome = nome
    this.velocidade = 0

    this.buszinar = functio(){
        console.log("toooooooo!")
    }

    this.acelerar = function(delta){
        this.velocidade += delta
    }
}
*/

class Moto{
    public velocidade: number = 0;

    constructor(public nome: string){}

    buzinar(){
        console.log("toooooooo!")
    }

    acelerar(delta: number){
        this.velocidade += delta
    }
}


