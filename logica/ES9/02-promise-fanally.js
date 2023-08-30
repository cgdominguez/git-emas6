const anotarFuncion = () => {
    return new Promise ((resolve, reject) =>{
        if (true) {
           resolve("Hey lo hicimos");
        } else{
            reject ("No funciona");
        }       
    })
}

anotarFuncion()
    .then(response => console.log(response))
    .catch( err=> console.log(err))
    .finally(()=> console.log("Finally"));// cuando termina la promesa , la funcion es prara ejecutar alguna accion, 

    