/* 
Sintaxe:

    - Definição:

function nomeDoDecorator(classe: Function){
 ...
}

    - Uso:

@nomeDoDecorator
class { ... }

Um decorator aplica uma função à classe nesse contexto
*/


@imprimirClasse
class Eletrodomestico {
    constructor(){
        console.log("Novo...")
    }
}

function imprimirClasse(classe: Function){
    console.log(classe)
}