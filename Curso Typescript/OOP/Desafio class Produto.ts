// Parte 01 - Criar Classe Produto com 3 paramentros: nome, preço e desconto (podendo ser null e de valor padrão 0) e instanciar 2 obj: 1 com 2 parametros e outro com 3.
// Parte 02 - Criar método precoComDesconto; Quais são os parametros e o retorno?; Alterar método resumo para mostrar preço com desconto.

class Produto {

    constructor(public nome: string, public preco: number, public descontoEmPorcentagem: number = 0){}

    resumo(): string {
        return `
Nome do produto: ${this.nome};
Preço: R$ ${this.preco};
Disponibilidade de desconto: ${this.descontoEmPorcentagem ? "Sim" : "Não"};
Preço com desconto: ${this.precoComDesconto() ? "R$ " + this.precoComDesconto() + " "  : "" }(${this.descontoEmPorcentagem ? this.descontoEmPorcentagem*100 : "-"}%).`
    }

    precoComDesconto(): number | null {
        return this.descontoEmPorcentagem ? this.preco*(1 - this.descontoEmPorcentagem) : null;
    }
}

let produto1 = new Produto("Produto 1", 50);
console.log(produto1.resumo());

let produto2 = new Produto("Produto 2", 30, 0.1);
console.log(produto2.resumo());