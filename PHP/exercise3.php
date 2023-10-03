<?php
/*Calculate the Hamming Distance between two DNA strands.*/
$Cadena1 = 'GAGCCTACTAACGGGAT';
$Cadena2 = 'CATCGTAATGACGGCCT';
$Hamming = 0;

// ¿Tienen la misma longitud?
if (strlen($Cadena1) === strlen($Cadena2)) {
    for ($i = 0; $i < strlen($Cadena1); $i++) {
        $letra1 = $Cadena1[$i];
        $letra2 = $Cadena2[$i]; // Compara las letras en la misma posición
        
        if ($letra1 != $letra2) {
            $Hamming++;
        }
    }
} else {
    echo "Las cadenas no tienen la misma longitud.";
}

echo $Hamming;

