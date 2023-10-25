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
        this.wrappee.send(message + "Via SMS");
    }
}
class FacebookDecorator extends BaseDecorator {
    send(message) {
        this.wrappee.send(message + "Via Facebook");
    }
}
class SlackDecorator extends BaseDecorator {
    send(message) {
        this.wrappee.send(message + "Via Slack");
    }
}

let notifier = new Notifier();

notifier = new SMSDecorator(notifier);
notifier = new FacebookDecorator(notifier);
notifier = new SlackDecorator(notifier);

notifier.send("Hey, fellas!!!");