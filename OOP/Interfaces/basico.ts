// type pessoas = {nome: string, idade: number}

// function saudarComOi(pessoa: pessoas): void {
//     console.log(`Oi, ${pessoa.nome}`)
// }

// function mudarNome(pessoa: pessoas, novoNome:string): void {
//     pessoa.nome = novoNome
// }

// const pessoa1: pessoas = {
//     nome: "João",
//     idade: 24
// }

// saudarComOi(pessoa1);
// mudarNome(pessoa1, "João Gabriel");
// saudarComOi(pessoa1);

interface ExemploInterface {
    attr1: string
    attr2?: number // o '?' faz com que o atributo seja opcional
    [prop: string]: any // -> Quando não sabemos ao certo o nome de um atributo que podemos receber, essa é
    // a forma de declarar.
}

function mostrarObj(args: ExemploInterface){
    console.log(args)
}

mostrarObj({attr1:"Teste", DNJkdnowene03: null}); // attr2 opcional e atributo sem nome definido;
mostrarObj({attr1:"Test2"}); // attr2 opcional e atributo sem nome definido opcional;
mostrarObj({attr1:"Teste3", attr2: 99, xablau: 0});

// Assim como podemos usar classes abstratas para definir "moldes" para classes, podemos usar interfaces para
// Definir moldes para objetos. 
// As interfaces são ainda mais abstratas que as classes abstratas. Por exemplo, se quisermos definir uma
// interface, quem implementar ela deverá implementar todos os seus métodos e atributos:

interface ModeloAbstrtato {

    nome: string;
    [prop: string]: any
    dizerOla(): void;
    fazerQqrCoisa?(...args: any): string; // método opcional

}