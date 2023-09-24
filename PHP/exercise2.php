<?php
/*
Crea una clase abstracta llamada **persona** en la cual no se pueda instanciar pero si se pueda heredar 
a la clase empleado y a la clase proveedor 

Php -S localhost:3000
*/

 abstract class persona {
    protected $nombre;
    protected $apellido;
    protected $email;
    protected $telefono;

    public function __construct($nombre, $apellido, $telefono, $email)
    {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->telefono = $telefono;
        $this->email = $email;
        
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function getTelefono(){
        return  $this->telefono;
    }
}

class Empleado extends persona{
    protected $codigo;
    protected $departamento;

    public function __construct($nombre, $apellido, $telefono, $email, $codigo, $departamento)
    {   
        parent::__construct($nombre, $apellido, $telefono, $email);
        $this->codigo = $codigo;
        $this->departamento= $departamento;
    }
}


class proveedor extends persona{
    protected $empresa;


    public function __construct( $nombre, $apellido, $telefono, $email, $empresa)
    {

        parent::__construct($nombre, $apellido, $telefono, $email);
        $this->empresa = $empresa;
    }

}


$empleado = new Empleado('Juan', 'Alvarez', '313904492', 'email@gmail.com', '001', 'Desarrollo');
$proveedor = new proveedor('Jose', 'Castaño', '34544563', 'email@empresa.com', 'Empresa S.A.S');

// echo $empleado->nombre;  instanciar desde clase 


echo '<pre>';
var_dump($empleado->getNombre());
echo '</pre>';

echo '<pre>';
var_dump($empleado->getTelefono());
echo '</pre>';


echo '<pre>';
var_dump($proveedor->getNombre());
echo '</pre>';


echo '<pre>';
var_dump($proveedor->getTelefono());
echo '</pre>';