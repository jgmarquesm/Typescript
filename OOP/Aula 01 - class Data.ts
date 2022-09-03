class Data {
    dia: number;
    mes: number;
    ano: number;

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

let dataPadrao = new Data;
console.log(dataPadrao);

let casamento = new Data(30, 3, 2021);
console.log(casamento);

let nascimento = new Data(2, 11, 1997);
console.log(`Eu nasci dia ${nascimento.dia} de ${nascimento.mes === 11 ? "novembro" : "outro mês"} de ${nascimento.ano}.`);