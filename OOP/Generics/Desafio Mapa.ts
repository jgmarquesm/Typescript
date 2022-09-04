/*
Array de objetos: {key, value} -> itens
Métodos: obter(key) => {k, v}}, colocar({k,v})
limpar()
imprimir()
*/

type par<K,V> = {key: K, value: V};

class Mapa<K,V> {
    
    itens: Array<par<K,V>> = new Array<par<K, V>>;

    obter(key: K): par<K,V> | null {
        const resultado = this.itens.filter(i => i.key === key)
        return resultado ? resultado[0] : null;
    }

    colocar(novoPar: par<K,V>): void {
        const encontrado = this.obter(novoPar.key);

        if(encontrado){
            encontrado.value = novoPar.value;
        } else {
            this.itens.push(novoPar)
        }
    }

    limpar(): void {
        this.itens = new Array<par<K,V>>
    }

    imprimir(): void {
        console.log(this.itens);
    }
}

const mapa = new Mapa<string, string>();
mapa.colocar({key: "k1", value: "v1"});
mapa.colocar({key: "k2", value: "v2"});
mapa.colocar({key: "k3", value: "v3"});
mapa.colocar({key: "k4", value: "v4"});
mapa.colocar({key: "k5", value: "v5"});
mapa.imprimir();
console.log(mapa.obter("k1"));
mapa.colocar({key: "k1", value: "50mil"});
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
