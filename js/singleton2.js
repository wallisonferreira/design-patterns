let singleTonInstance = null;

function createSingleton(data) {
    if (singleTonInstance) {
        return singleTonInstance;
    }

    const instance = {
        data: data,
        showData: function() {
            return this.data;
        }
    };

    singleTonInstance = instance;
    return instance;
}

const instanceA = createSingleton('DataA');
console.log(instanceA.showData());

const instanceB = createSingleton('DataB');
console.log(instanceB.showData());