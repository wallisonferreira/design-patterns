// Usamos decorator quando queremos passar comportamentos 
// adicionais em tempo de execução, sem quebrar o código.

class Notifier {
    send(message) {
        console.log(message);
    }
}
class BaseDecorator {
    constructor(notifier) {
        this.wrappee = notifier;
    }
}
class SMSDecorator extends BaseDecorator {
    send(message) {
        this.wrappee.send(message);
        console.log("Enviado por SMS!\n");
    }
}
class FacebookDecorator extends BaseDecorator {
    send(message) {
        this.wrappee.send(message);
        console.log("Enviado para o Facebook!\n");
    }
}
class SlackDecorator extends BaseDecorator {
    send(message) {
        this.wrappee.send(message);
        console.log("Enviado para o Slack!\n");
    }
}

var microtime = require('microtime');

start = microtime.now();

let notifier = new Notifier();
notifier = new SMSDecorator(notifier);
notifier = new FacebookDecorator(notifier);
notifier = new SlackDecorator(notifier);

for (i = 0; i < 9881; i++) {
    notifier = new SlackDecorator(notifier);
}

notifier.send("Qual a boa, pessoal?");

end = microtime.now();

duration = end - start;

console.log("Tempo de execução: " + duration);