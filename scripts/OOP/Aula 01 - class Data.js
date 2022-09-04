"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
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
