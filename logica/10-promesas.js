/*
Una promesa es una forma de manejar el asincronismo en JavaScript y se representa como un 
objeto que puede generar un valor único a futuro, que tiene dos estados, o está resuelta o incluye una razón por la cual no ha sido resuelta la solicitud.

El argumento de la clase Promise es una función que recibe dos parámetros:

resolve: cuando la promesa es resuelta.
reject: cuando la promesa es rechazada.
Puedes utilizar cualquier nombre, siempre y cuando sepas su funcionamiento.

*/

const promesa = () => {
    return new Promise((resolve, reject) => {
      if (something) {
        //true o false
        resolve("Se ha resuelto la promesa")
      } else {
        reject("Se ha rechazado la promesa")
      }
    })
  }
  
promesa()
    .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
    .catch(error => console.log(error)) //En caso que se ejecute reject

// 


const anotarFuncion = () => {
    return new Promise ((resolve, reject) =>{
        if (true) {
           resolve("hey lo hicimos");
        } else{
            reject ("no funciona");
        }       
    })
}

anotarFuncion()
    .then(response => console.log(response))
    .then  
    .catch( err=> console.log(err));













