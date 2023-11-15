/*Un espía está enviando mensajes encriptados.

Tu misión es crear un programa que nos ayude a buscar patrones...

Los mensajes son palabras separadas por espacios como este:
gato perro perro coche Gato peRRo sol

Necesitamos que el programa nos devuelva el número de veces que aparece cada palabra en el mensaje, independientemente de si está en mayúsculas o minúsculas.

El resultado será una cadena de texto con la palabra y el número de veces que aparece en el mensaje, con este formato:
gato2perro3coche1sol1

¡Las palabras son ordenadas por su primera aparición en el mensaje!*/


let mensaje= "gato perro perro coche Gato peRRo sol";
let palabras = mensaje.split(" ").map(palabra=>palabra.toUpperCase());

let resultado = " ";
palabras.forEach(palabra => {
    let conteo = palabras.filter( p => p === palabra).length
    resultado += palabra + conteo
});

console.log(resultado);