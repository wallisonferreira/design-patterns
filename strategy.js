// Strategy é particularmente útil quando se tem várias maneiras de fazer algo e quer mudar dinamicamente
// o "como" fazer algo sem alterar o que está sendo feito.

class DiscountStrategy {
    static defaultDiscount(price) {
        return price;
    }

    static studentDiscount(price) {
        return price * 0.9;
    }

    static blackFridayDiscount() {
        return price * 0.5;
    }
}

class ShoppingCart {
    // storage amount and strategy
    constructor(amount = 0, strategy = DiscountStrategy.defaultDiscount) {
        this.amount = amount;
        this.strategy = strategy;
    }

    // updates amount
    withAmount(amount) {
        return new ShoppingCart(amount, this.strategy);
    }

    // updates strategy
    withStrategy(strategy) {
        return new ShoppingCart(this.amount, strategy);
    }

    // apply the strategy
    checkout() {
        return this.strategy(this.amount);
    }
}

const cart = new ShoppingCart(100).withStrategy(DiscountStrategy.studentDiscount);
console.log(cart.checkout());