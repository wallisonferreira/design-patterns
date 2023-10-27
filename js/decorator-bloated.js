class SMSDecorator {
    send(message) {
        console.log(message);
        console.log("Enviado por SMS!\n");
    }
}
class FacebookDecorator {
    send(message) {
        console.log(message);
        console.log("Enviado para o Facebook!\n");
    }
}
class SlackDecorator {
    send(message) {
        console.log(message);
        console.log("Enviado para o Slack!\n");
    }
}

var microtime = require('microtime');

start = microtime.now();

smsDecorator = new SMSDecorator();
smsDecorator.send("Qual a boa, pessoal?");

facebookDecorator = new FacebookDecorator();
facebookDecorator.send("Qual a boa, pessoal?");

slackDecorator = new SlackDecorator();
slackDecorator.send("Qual a boa, pessoal?");

for (i = 0; i < 9881; i++) {
    slackDecorator.send("Qual a boa, pessoal?");
}

end = microtime.now();

duration = end - start;

console.log("Tempo de execução: " + duration);