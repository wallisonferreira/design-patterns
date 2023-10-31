<?php

namespace DesignPatterns\Decorator;

// use DesignPatterns\Decorator\Decorator;

class ConcreteDecoratorA extends Decorator
{
    public function operation(): string
    {
        return "ConcreteDecoratorA(" . parent::operation() . ")";
        // return "ConcreteDecoratorA(" . $this->component->operation() . ")";
    }
}
