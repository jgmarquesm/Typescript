class DataEsperta {

    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){}

}

let dataPadraoEsperta = new DataEsperta;
console.log(dataPadraoEsperta);

let casamentoEsperta = new DataEsperta(30, 3, 2021);
console.log(casamentoEsperta);

let nascimentoEsperta = new DataEsperta(2, 11, 1997);
console.log(`Eu nasci dia ${nascimentoEsperta.dia} de ${nascimentoEsperta.mes === 11 ? "novembro" : "outro mês"} de ${nascimentoEsperta.ano}.`);