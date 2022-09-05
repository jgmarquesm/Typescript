"use strict";
class ProdutoComMetodos {
    constructor(nome, preco, descontoEmPorcentagem = 0) {
        this.nome = nome;
        this.preco = preco;
        this.descontoEmPorcentagem = descontoEmPorcentagem;
    }
    resumo() {
        return `
Nome do produto: ${this.nome};
Preço: R$ ${this.preco};
Disponibilidade de desconto: ${this.descontoEmPorcentagem ? "Sim" : "Não"};
Desconto disponível: ${this.descontoEmPorcentagem ? this.descontoEmPorcentagem * 100 : "-"}%.`;
    }
}
let produtoComMetodos1 = new ProdutoComMetodos("Produto 1", 50);
console.log(produtoComMetodos1.resumo());
let produtoComMetodos2 = new ProdutoComMetodos("Produto 2", 30, 0.1);
console.log(produtoComMetodos2.resumo());
