interface PessoaAluno {
    nome: string
    sobrenome: string
    [prop: string]: any
    reposnderChamada(): void;
}

class Aluno implements PessoaAluno{
    constructor(public nome: string, public sobrenome: string){}

    reposnderChamada(): void {
        console.log("Presente!")
    }

    // podemos usar método que não estão definidos na interface tambem:

    horarioDeChegada(): void {
        console.log(new Date())
    }
}

const aluno1 = new Aluno("João", "Mendes");
aluno1.reposnderChamada();
aluno1.horarioDeChegada();