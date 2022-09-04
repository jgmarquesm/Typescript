function echoMelhorado2<T>(obj: T): T {
    return obj
}

/*
sintaxe:

escopo nomeVariavel: <TIPO> (PARAMETROS: TIPOS) => TIPO = FUNÇÃO
const  chamarEcho:   <T>    (data:       T)     => T    = echoMelhorado2;
*/

type echo = <T>(data: T) => T;

const chamarEcho: echo = echoMelhorado2;
console.log(chamarEcho<string>("Alguma Coisa"));


