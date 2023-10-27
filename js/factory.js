// Factory fornece uma interface para criar objetos dinamicamente. Em vez de chamar um
// construtor diretamente, um factory é usado, permitindo que o sistema permaneça flexível e
// se adapte a diferentes situações e requisitos. Esse padrão ajuda a separar a lógica de
// criação da lógica de uso.

class Product {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(`Product: ${this.name}`);
    }
}

class Factory {
    static createProduct(type) {
        // lógica de criação
        if (type === 'A') {
            return new Product("Product A");
        } else if (type === 'B') {
            return new Product("product B");
        }
        return null;
    }
}

// lógica de uso
const productA = Factory.createProduct('A');
productA.display();

const productB = Factory.createProduct('B');
productB.display();