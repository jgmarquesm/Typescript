interface Object {
    log(): void
}

Object.prototype.log = function(){
    console.log(this.toString())    
}

// Agora podemos usar o .log() em qualquer objeto, tomando o cuidado de implementar se for necessário o toString()
// Exemplos:

const x = 1;
const y = 2;
const z = 3;

let joaoGabriel: {nome: string, idade: number, toString(): string} = {
    nome: "João Gabriel",
    idade: 24,
    toString() {
        return `Nome: ${this.nome};\nIdade: ${this.idade}.`
    }
}

x.log();
y.log();
z.log();
joaoGabriel.log();