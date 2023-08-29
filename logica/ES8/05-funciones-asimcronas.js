// promesas , algo que va a pasar , cuando? hoy, mañana ó nunca

const fnAsync = () => { // va a retornar una nueva promesa con los dos elementos resolve y reject 
    return new Promise((resolve,reject)=>{ // aqui dentro entran true, false, si un valor es verdadero entra en resolve y si es falso en reject
        (true)//ternario
            ? setTimeout(()=> resolve("AsynC"),2000)  // requiere un valor numerico de tiempo en este caso es 2000
            : reject(new Error("Error!"));                                            // los : vendrian a ser como un else 
    })
};

const anotherFn = async ()=>{ // antes de los argumentos/ parametros vamos a tener la palabra reservada async
const somethig = await fnAsync(); // await (espera) espera termina lo que va asuseder
console.log(somethig);  
console.log("hola");

};

console.log("antes before");
anotherFn();                //promesa se va a memoria a ejecutarce , esperando resultados
console.log("after despues");

/* ejecutamos

antes before
after despues      se ve after xq la promesa se encuentra ejecutandos e en memoria no bloquea el programa
AsynC              promesa setTimeout 
hola


*/