/*
Crea un array booleano con dos valores 'verdadero' y 'falso'. 
Este array te sirve para traduicr los valores true y false. 
Usalo para que el script muestre un alert con el nombre 
vedadero si un usuario teclea un valor entre 0 y 9 y 
falso en el caso contrario.
Fuente: https://javascript.espaciolatino.com/evaluar/arrays_inicio.html

*/

let arrayBooleano = ['verdadero😍', 'falso😪'];
let usuario = 11
let message = (usuario <= 9) ? arrayBooleano[0] : arrayBooleano[1];
console.log(message);
