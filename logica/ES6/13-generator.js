function* iterate(array) { // e identifiaca con un * para identiicar el generator
    for ( let value of array)// por cada elelemto del array vamos hacer algo
    {
        yield value; // va a retornar cada uno de los valores
    }
}

const it = iterate(["oscar","irma","elvio","carlos", "ana","yennifer"]);

console.log(it.next().value); // it (refencia ),next (palabra reser vada , ejecucuin , se genera adentro del generator)
console.log(it.next().value);//irma
console.log(it.next().value);//elvio
console.log(it.next().value);// carlos
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);// undefined
console.log(it.next().value);// undefined


// recuerda su estado , la ultima llamada , por ende sabe cual es la proxima

