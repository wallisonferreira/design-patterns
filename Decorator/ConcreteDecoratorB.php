<?php

namespace DesignPatterns\Decorator;

use DesignPatterns\Decorator\Decorator;

class ConcreteDecoratorB extends Decorator
{
    public function operation(): string
    {
        return "ConcreteDecoratorB(" . parent::operation() . ")";
        // return "ConcreteDecoratorB(" . $this->component->operation() . ")";
    }
}
