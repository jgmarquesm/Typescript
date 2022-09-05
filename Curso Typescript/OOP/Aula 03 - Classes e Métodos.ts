class ProdutoComMetodos {

    constructor(public nome: string, public preco: number, public descontoEmPorcentagem: number | null = 0){}

    resumo(): string {
        return `
Nome do produto: ${this.nome};
Preço: R$ ${this.preco};
Disponibilidade de desconto: ${this.descontoEmPorcentagem ? "Sim" : "Não"};
Desconto disponível: ${this.descontoEmPorcentagem ? this.descontoEmPorcentagem*100 : "-"}%.`
    }
}

let produtoComMetodos1 = new ProdutoComMetodos("Produto 1", 50);
console.log(produtoComMetodos1.resumo());

let produtoComMetodos2 = new ProdutoComMetodos("Produto 2", 30, 0.1);
console.log(produtoComMetodos2.resumo());