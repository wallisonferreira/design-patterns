<?php

namespace DesignPatterns\Decorator;

/**
 * The base Component interface defines operations that can be altered
 * by decorators.
 */
interface Component
{
    /**
     * @return string
     */
    public function operation(): string;
}
