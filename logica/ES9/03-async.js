async function* anotadorGenerador() {
    yield await Promise.resolve(2);
    yield await Promise.resolve (3);
    yield await Promise.resolve(1);
}

const other = anotadorGenerador();
other.next().then(response => console.log(response.value)); // => es una funcion flecha con return implicito 
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("Hello");


//

async function arrayOfName(array) {
    for await (let value of array){
    console.log(value);
   }
};

const names = arrayOfName(["oscar","Ana","nestor","karina"]);
console.log("after");