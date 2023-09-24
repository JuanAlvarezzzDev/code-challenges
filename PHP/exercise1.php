<?php
/* php -S localhost:3000  */
//instanciar una clase
class Empleado
{
    /*
   Principio de Abstraccion
   Modificadores de acceso:
   Public acceso desde la instancia, se puede modificar y acceder
   protected solo se puede acceder y modificar desde la misma clase con metodos
   */
    protected $nombre;
    protected $apellido;
    protected $departamento;
    protected $email;
    protected $codigo;

    //metodo magico __construct
    public function __construct($nombre, $apellido, $departamento, $email, $codigo)
    {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->departamento = $departamento;
        $this->email = $email;
        $this->codigo = $codigo;
    }
    /* 
     Get- para obtener un valor
     Set- para modificar un valor

  */
    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }
}

$empleado = new Empleado('Juan', 'Alvarez', 'Desarrollo', 'email@gmail.com', '001');

echo $empleado->getNombre();
echo $empleado->setNombre('Camilo');

echo '<pre>';
var_dump($empleado);
echo '</pre>';

?>