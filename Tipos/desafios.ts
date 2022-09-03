/*
Criar objeto funcionário com:
    - Array de supervisores;
    - Função de bater ponto que recebe a hora e retorna uma string:
        - Ponto normal (<= 8)
        - Atrasado (> 8) 
*/

// alias ainda não estava disponíve
// type funcionario = {supervisores: string[], VerificaPonto: (horas: number) => (string)};


let joao: {
    supervisores: string[],
    verificaPonto: (horas: number) => (string)
} = {
    supervisores: [],
    verificaPonto(hora: number): string {
        if (hora <= 8){
            return `Ponto batido com sucesso. Horário: ${hora}:00.`;
        } else {
            return `Não é possível bater o ponto. Horário: ${hora}:00.`;
        } 
    }
}

/*
Transformar o seguinte código JS em TS:

let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
}

let correntista = {
    nome: "João Gabriel",
    contaBancaria: contaBancaria,
    contatos: ["Contato1", "Contato2"]
}

correntista.contaBancaria.depositar(3000);
console.log(correntista);
*/


type contaBancaria = {saldo: number, depositar: (valor: number) => void}
type correntista = {nome: string, contaBancaria: contaBancaria, contatos: string[]}

let contaBancaria: contaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor;
    }
}

let correntista: correntista = {
    nome: "João Gabriel",
    contaBancaria: contaBancaria,
    contatos: ["Contato1", "Contato2"]
}

correntista.contaBancaria.depositar(3000);
console.log(correntista); 