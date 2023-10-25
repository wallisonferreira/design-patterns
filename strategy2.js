// anonymous function with param "price"

const defaultDiscount = price => price;
const studentDiscount = price => price * 0.9;
const blackFridayDiscount = price => price * 0.5;

function createShoppingCart(amount = 0, strategy = defaultDiscount) {
    return {
        withamount: (newAmount) => createShoppingCart(newAmount, strategy),
        withStrategy: (newStrategy) => createShoppingCart(amount, newStrategy),
        checkout: () => strategy(amount)
    };
}

const cart =  createShoppingCart(100).withStrategy(studentDiscount);
console.log(cart.checkout());