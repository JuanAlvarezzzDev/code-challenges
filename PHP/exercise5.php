<?php
/*Implemente una clase del cifrado de desplazamiento 
simple como César*/

class CifradoCesar {
    private $desplazamiento = 6;

    public function __construct() {
    }

    public function codificar($texto) {
        return $this->aplicarCifrado($texto, $this->desplazamiento);
    }

    public function decodificar($texto) {
        return $this->aplicarCifrado($texto, -$this->desplazamiento);
    }

    private function aplicarCifrado($texto, $desplazamiento) {
        $textoCifrado = '';

        foreach (str_split($texto) as $caracter) {
            if (ctype_alpha($caracter)) {
                $base = (ctype_upper($caracter)) ? 'A' : 'a';
                $caracterCifrado = chr(((ord($caracter) - ord($base) + $desplazamiento) % 26) + ord($base));
            } else {
                $caracterCifrado = $caracter; // Mantener caracteres no alfabéticos sin cambios
            }

            $textoCifrado .= $caracterCifrado;
        }

        return $textoCifrado;
    }
}

// Uso de la clase
$cifrador = new CifradoCesar();
$textoOriginal = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
$textoCifrado = $cifrador->codificar($textoOriginal);
$textoDecifrado = $cifrador->decodificar($textoCifrado);

echo "Texto original: $textoOriginal<br>";
echo "Texto cifrado: $textoCifrado<br>";
echo "Texto decifrado: $textoDecifrado";
