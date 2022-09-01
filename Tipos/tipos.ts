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
let nome1: string = "João"; 

// number
let idade: number = 24;

// boolean
let gostaDeProgramar: boolean = true;

// Array

let array1: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let array2: string[] = ["João", "Gabriel", 24] 

// Tuplas

let tupla1:[string, number, number] = ["João", 1, 2];
// let tupla2: [number, boolean] = [0, false, "João"] // Aceita, mas está preparado para receber apenas 2 slots


// Enums

enum Cor {
    Azul, // = 0
    Vermelho, // = 1
    Amarelo, // = 2
    Verde // = 3, em qualquer elemento podemos fazer " elemento" = 100 e os próximo continuam a contagem do 100
}

let corFavorita: Cor = Cor.Azul;
console.log(corFavorita);

// Any -> Genérico, recebe qualquer tipo e deixa a tipagem dinâmica, o que não é interessante se estamos 
// querendo usar TS, não é por isso que as vezes ela não seja útil.

// Tipo em funções (parametros e retorno)

function meuNome(): string {
    return nome;
} // -> indica que o retorno da função será uma string

function meuNomeEIdade(name: string, age: number): string {
    return `Meu nome é ${nome} e tenho ${idade} anos`;
} // -> indica que o retorno da função será uma string

console.log(meuNomeEIdade);

function retornoVoid(): void {
    return console.log("Retorno void");
}
function multiplicacao(a: number, b: number): number{
    return a+b
}

// Tipo fuçnão -> Quando temos uma variável recebendo uma função como valor, podemos usar a assinatura
// do método para definir o tipo dessa variável.

let soma: (a: number, b: number) => (number); // -> receber dois number e retorna apenas 1
soma = multiplicacao;

// 