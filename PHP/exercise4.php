<?php

/*
En este ejercicio, simulará un sistema informático basado en ventanas. 
Creará algunas ventanas que se pueden mover y cambiar de tamaño. 
La siguiente imagen es representativa de los valores con los que 
trabajará a continuación.
Para mas informacion visite: https://exercism.org/tracks/php/exercises/windowing-system
*/
class ProgramWindow
{
    public $x;
    public $y;
    public $width;
    public $height;
    public function  __construct()
    {
    }

    public function resize($size)
    {
        $this->height = $size->height;
        $this->width = $size->width;
    }

    public function move($position)
    {
        $this->x = $position->x;
        $this->y = $position->y;
    }
}

class Size
{

    public function  __construct(
        public $height,
        public $width
    ) {
    }
}

class Position
{
    public function  __construct(
        public $x,
        public $y
    ) {
    }
}


$window = new ProgramWindow();
$size = new Size(764, 1080);
$position = new Position(80, 313);
$window->resize($size);
$window->move($position);
var_dump($window->height);
var_dump($window->width);
var_dump($window->y);
var_dump($window->x);
