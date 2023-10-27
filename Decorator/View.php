<?php

namespace DesignPatterns\Decorator;

use DesignPatterns\Decorator\Component;
use DesignPatterns\Decorator\ConcreteComponent;
use DesignPatterns\Decorator\ConcreteDecoratorA;
use DesignPatterns\Decorator\ConcreteDecoratorB;

class View
{
    public function __construct()
    {
        $simple = new ConcreteComponent();
        echo "Client: I've got a simple component:\n";
        $this->clientView($simple);
        echo "\n\n";

        $decorator1 = new ConcreteDecoratorA($simple);
        $decorator2 = new ConcreteDecoratorB($decorator1);
        echo "Client: Now I've got a decorated component:\n";
        $this->clientView($decorator2);
    }

    public function clientView(Component $component)
    {
        echo "RESULT: " . $component->operation();
    }
}
