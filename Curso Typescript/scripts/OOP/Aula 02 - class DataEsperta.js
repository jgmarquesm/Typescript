"use strict";
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
let dataPadraoEsperta = new DataEsperta;
console.log(dataPadraoEsperta);
let casamentoEsperta = new DataEsperta(30, 3, 2021);
console.log(casamentoEsperta);
let nascimentoEsperta = new DataEsperta(2, 11, 1997);
console.log(`Eu nasci dia ${nascimentoEsperta.dia} de ${nascimentoEsperta.mes === 11 ? "novembro" : "outro mês"} de ${nascimentoEsperta.ano}.`);
