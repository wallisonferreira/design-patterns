<?php

namespace DesignPatterns\Decorator;

class ConcreteComponent implements Component
{
    /**
     * @return string
     */
    public function operation(): string
    {
        return "ConcreteComponent";
    }
}
