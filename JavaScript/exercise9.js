/* Una promesa es un objeto que maneja solicitudes asincrónicas.
Sintaxis de una promesa
El soporte nativo de una promesa is de ECMAScript 2015 (ES6)

----Beneficios de una promesa-----
1) Mejor gestión de solicitudes asincrónicas.
2) Mejora la legibilidad del código.
3) Mejora el manejo de errores.
*/
let promise = new promise(executor)
    .then((success) => {
        //cuando se completa la tarea
    })
    .catch((error) => {
        // Cuando ocurre algún error y la tarea falla.
    })


/* 1) Inicializar una promesa*/
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("kudos");
    }, 3000);
})

/* 2) Adjunte devoluciones de llamada de éxito y error.*/
let promise3 = new Promise()
    .then((data) => {
        console.log(`promesa resuelta ${data}`)
    })
    .catch((err) => {
        console.log(`promesa rechazada con error: ${err}`)
    })

/*3) ¿Cuándo se cumple la promesa?*/

let fetchVehiclesPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("forma alternativa de definir una promesa");
    }, 2000);
});

let successCallback = (data) => {
    console.log(data);
}

let errorCallback = (err) => {
    console.log("fallo la busqueda de vehiculos");
}
/*Modularizar las funciones, son una buena practica para el manejo 
de errores*/
fetchVehiclesPromise.then(successCallback, errorCallback);

/* 
  Advertencias Manejo de promesas 
Se requiere la función de captura de manejo de errores; 
de lo contrario, la promesa fallará silenciosamente.😮

⚡ Evite el anidamiento de promesas ⚡
*/

