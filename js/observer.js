// Observer, também conhecido como Publish/Subscribe, define uma dependência de um-para-muitos
// entre objetos, de forma que quando um objeto muda de estado, todos os seus dependentes são
// notificados e atualizados automaticamente. É amplamente utilizado em situações onde um sistema
// precisa ser informado sobre mudanças ocorridas em outro sistema.

// Classe Subject ou Observable
class Subject {

    // declara uma lista de observers
    constructor() {
        this.observers = [];
    }

    // adiciona um observer na lista
    subscribe(observer) {
        this.observers.push(observer);
    }

    // remove um observer da lista
    unsubscribe(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1); // index start, number of elements to remove
        }
    }
    
    // notifica cada observer definido na lista
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

// Classe Observer
class Observer {
    update(data) {
        console.log(`Observer updated with data: ${data}`);
    }
}

// Instancia observable
const subject = new Subject();

// Instancia observers
const observer1 = new Observer();
const observer2 = new Observer();

// Adiciona observers dentro da lista de observers
subject.subscribe(observer1);
subject.subscribe(observer2);

// Notifica cada observer dentro da lista
subject.notify("some data");

// Remove um observer da lista
subject.unsubscribe(observer1);

// Acessando um observer da lista pela classe Subject
console.log(subject.observers[0].update('what'));