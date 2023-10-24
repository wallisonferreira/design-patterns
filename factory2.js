
function createProduct(name) {
    return {
        name: name,
        display: function() {
            console.log(`Product: ${this.name}`);
        }
    };
}

function productFactory(type) {
    if (type === 'A') return createProduct('Product A');
    if (type === 'B') return createProduct('Product B');
}

const productA = productFactory('A');
const productB = productFactory('B');

productA.display();
productB.display();