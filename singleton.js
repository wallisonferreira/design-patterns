// Singleton garante que um bloco de código tenha apenas uma instãncia e fornece um ponto de
// acesso global a essa instancia. É útil quando se deseja restringir a instanciação de uma
// classe a um único objeto, garantindo que esse único objeto seja acessível em todos os lugares
// evitando assim a criação inadvertida de múltiplas instâncias.

class Singleton {
    static instance;

    constructor(data) {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.data = data;
    }

    showData() {
        return this.data;
    }
}

const instanceA = new Singleton('DataA');
console.log(instanceA.showData());

const instanceB = new Singleton('DataB');
console.log(instanceB.showData());