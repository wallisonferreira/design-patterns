<?php

use DesignPatterns\Decorator\View;

// require_once './Decorators/Component.php';
// require_once './Decorators/Decorator.php';
// require_once './Decorators/ConcreteComponent.php';
// require_once './Decorators/ConcreteDecoratorA.php';
// require_once './Decorators/ConcreteDecoratorB.php';
// require_once './Decorators/View.php';

spl_autoload_register(function ($file) {
    $file = "./Decorators/" . $file . '.php';
    if (file_exists($file)) {
        require_once $file;
    }
});

$view = new View();

echo __FILE__;
