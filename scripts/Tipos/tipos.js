"use strict";
// No Javascript 
let nome = "João"; // No JS poderia fazer a seguinte atribuição sem nenhum aviso de erro: nome = 28
console.log(nome);
// Já no Typescript não podemos pois ele é de tipagem estática
//  nome = 28; // -> Type 'number' is not assignable to type 'string'.
console.log(nome);
// No momento da declaração da variável, não foi definido nenhum tipo, como ele não deixa eu colocar qualquer
// tipo depois? -> a variável foi definida e inicializada, desse modo, o TS faz uma inferencia implicita do
// tipo, desse modo, a variável se torna daquele tipo, semelhante à como é feito com o 'var' no Java.
// A diferença entre a inferencia implicita do TS e do Java é que não aceita de jeito algum atribuir um novo
// tipo à variável já declarada e inferida, mas o TS, como é feito sobre o JS, aceita, mesmo exibindo um erro.
// caso seja feita somente a declaração sem atribuição, o tipo da variável será "any" e ela possui tipos dinâmicos.
let qqrTipo;
qqrTipo = "João";
console.log(typeof qqrTipo);
qqrTipo = 24;
console.log(typeof qqrTipo);
// string
let nome1 = "João";
// number
let idade = 24;
// boolean
let gostaDeProgramar = true;
// Array
let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let array2: string[] = ["João", "Gabriel", 24] 
// Tuplas
let tupla1 = ["João", 1, 2];
// let tupla2: [number, boolean] = [0, false, "João"] // Aceita, mas está preparado para receber apenas 2 slots
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Azul"] = 0] = "Azul";
    Cor[Cor["Vermelho"] = 1] = "Vermelho";
    Cor[Cor["Amarelo"] = 2] = "Amarelo";
    Cor[Cor["Verde"] = 3] = "Verde"; // = 3, em qualquer elemento podemos fazer " elemento" = 100 e os próximo continuam a contagem do 100
})(Cor || (Cor = {}));
let corFavorita = Cor.Azul;
console.log(corFavorita);
// Any -> Genérico, recebe qualquer tipo e deixa a tipagem dinâmica, o que não é interessante se estamos 
// querendo usar TS, não é por isso que as vezes ela não seja útil.
// Tipo em funções (parametros e retorno)
function meuNome() {
    return nome;
} // -> indica que o retorno da função será uma string
function meuNomeEIdade(name, age) {
    return `Meu nome é ${name} e tenho ${age} anos`;
} // -> indica que o retorno da função será uma string
meuNomeEIdade("hehe", 1);
function retornoVoid() {
    return console.log("Retorno void");
}
retornoVoid();
function somar(a, b) {
    return a + b;
}
// Tipo fuçnão -> Quando temos uma variável recebendo uma função como valor, podemos usar a assinatura
// do método para definir o tipo dessa variável.
let soma; // -> receber dois number e retorna apenas 1
soma = somar;
//  Tipo de objetos 
let usuario = {
    nome: "João",
    idade: 24
}; // internamente, ele faz a inferencia implicita do tipo de usuario, nome e idade, mas a maneira mais segura seria
let usuarioCerto = {
    nome: "João",
    idade: 24
};
function verificarPonto(hora) {
    if (hora <= 8) {
        return `Ponto batido com sucesso. Horário: ${hora}:00.`;
    }
    else {
        return `Não é possível bater o ponto. Horário: ${hora}:00.`;
    }
}
// Desse modo podemos definir muitos funcionário sem a complexidade de ficar definindo esse tipo complexo em
// cado uma das declarações;
let funcionario1 = {
    supervisores: ["João"],
    verificaPonto: verificarPonto
};
// ...
let funcionarioN = {
    supervisores: ["João Gabriel"],
    verificaPonto: verificarPonto
};
console.log(funcionario1.verificaPonto(10));
console.log(funcionarioN.verificaPonto(8));
// Union Types - Imagine que poderíamos receber mais de um tipo de dado em uma variável, hora pode ser number,
// hora string... Nesse caso, podemos usar Union Types ao invés de definir a variável com 'any':
let nota;
nota = 10;
console.log(`Valor de nota: ${nota}`);
nota = "dez";
console.log(`Valor de nota: ${nota}`);
// nota = true;
// console.log(`Valor de nota: ${nota}`) -> erro
// Tipo never: usado quando é esperado que um método ou laço de repetição nunca retorne algo, é diferente do void
// pois o void espera um retorno vazio, já o never, não esperar retorno nenhum;
// Ex.: Loop infinito ou funções que terminem com um erro;
function falha(msg) {
    throw new Error(msg);
}
function validarProduto(name, preco) {
    if (!name || name.trim().length === 0) {
        falha("Precisa de um nome.");
    }
    else if (preco <= 0) {
        falha("Preço inválido.");
    }
    else {
        console.log("Válido!");
    }
}
const produtoSabao = {
    nome: "Sabão",
    preco: 11,
    valido() {
        validarProduto(this.nome, this.preco);
    }
};
const testandoProd = {
    nome: "ProdTeste",
    preco: 0,
    valido() {
        validarProduto(this.nome, this.preco);
    }
};
produtoSabao.valido();
/* testandoProd.valido();
->
throw new Error(msg);
          ^
Error: Preço inválido.
*/
// Tipo null: Podemos usar o tipo null para criar variáveis que são opções, combinando com o union types:
let opcional = null;
console.log(`Opcional: ${opcional}`);
opcional = "sim";
console.log(`Opcional: ${opcional}`);
let contato1 = {
    nome: "Pessoa1",
    telefone1: "567",
    telefone2: null
};
let contato2 = {
    nome: "Pessoa2",
    telefone1: "567987758",
    telefone2: "56789"
};
