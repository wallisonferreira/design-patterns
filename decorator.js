// Decorator (ou Wrapper) é um padrão de que visa substituir a heraça pela
// Agregação ou Composição. Dessa forma, podemos fazer mais de uma ação, se
// necessário, para uma instrução informada.

class Coffee {
    cost() {
        return 5; // preço base do café
    }
}

// Adiciona leite
class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 2;
    }
}

// Adiciona chocolate
class ChocolateDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 3;
    }
}

let myCoffee = new Coffee();

console.log('Antes', myCoffee.cost());

myCoffee = new MilkDecorator(myCoffee);
myCoffee = new ChocolateDecorator(myCoffee);

console.log('Depois', myCoffee.cost());
console.log(myCoffee);

