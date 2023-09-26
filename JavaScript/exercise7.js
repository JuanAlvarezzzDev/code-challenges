/*Diseña un script que vaya leyendo números y guardándolos en un array. 
Una vez lleno mostrará el array y deberá decir cuantos números son pares y 
cuantos son impares. La entrada de datos termina cuando el usuario teclea 0 
o un valor no numérico.Intenta resolverlo sin usar métodos del objeto array, 
solo indices y longitudes de arrays. No debe aceptar valores no numéricos 
(isNaN(valor) permite detectar valores no numéricos).*/


const process = require('process');
let numbers = [];
const parImpar = (numbersArray)=>{
    let par = 0; 
    let impar = 0; 
   for(let i = 0; i<numbersArray.length; i++){
     if(numbersArray[i] % 2==0){
        par++
     }
     else{
         impar++
     }
   }
 
   return `Numero Pares: ${par} /n  Numero Impares: ${impar}`;
 }

const obtenerNumero = () => {
    const stdin = process.openStdin();
    console.log("Escribe un número o introduce cualquier valor no numérico para finalizar:");
    stdin.addListener("data", (data) => {
        const numero = parseFloat(data.toString().trim());
        if (!isNaN(numero)) {
            numbers.push(numero);
        } else {
            console.log('Proceso finalizado. Números ingresados:', numbers);
            const resultado = parImpar(numbers);
            console.log(resultado); // Mostrar el resultado en la consola
            process.exit();
        }
    });
};




obtenerNumero(); 



