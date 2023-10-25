// Decorator (ou Wrapper) é um padrão de que visa substituir a heraça pela
// Agregação ou Composição. Dessa forma, podemos fazer mais de uma ação, se
// necessário, para uma instrução passada.

class Coffee {
    cost() {
        return 5; // preço base do café
    }
}

// Decorator 1: Adiciona leite
class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 2;
    }
}

class ChocolateDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 3;
    }
}

let myCoffee = new Coffee();

myCoffee = new MilkDecorator(myCoffee);
myCoffee = new ChocolateDecorator(myCoffee);

console.log(myCoffee.cost());

