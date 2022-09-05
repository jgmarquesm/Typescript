"use strict";
class Aluno {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    reposnderChamada() {
        console.log("Presente!");
    }
    // podemos usar método que não estão definidos na interface tambem:
    horarioDeChegada() {
        console.log(new Date());
    }
}
const aluno1 = new Aluno("João", "Mendes");
aluno1.reposnderChamada();
aluno1.horarioDeChegada();
