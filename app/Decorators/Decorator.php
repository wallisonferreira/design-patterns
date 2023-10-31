<?php

namespace DesignPatterns\Decorator;

class Decorator implements Component
{
    /**
     * @var Component
     */
    protected $component;

    public function __construct(Component $component)
    {
        $this->component = $component;
    }

    /**
     * @return string
     */
    public function operation(): string
    {
        return $this->component->operation();
    }
}
