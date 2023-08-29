// vamos a crear un string, luego a este vamos a pasarle un metodo que nos va a permitir trababjar con algunos valores

const string= "Hello";
console.log(string.padStart(7,"hi"));/*nos va a permitir decidir donde va a iniciar y que queremos agregar,la posicion del elemento dependera de la cantidad de letras tenga el  string principal , si la posicion sobrepasa al mismmo elemento que estamos agregando ,string, este volvera a intentar rellenar ese espacioo con el estring que agregamos
ejemplo:
.padStart(enpieza en la posicion 7 y luego que agregue este elemento"")*/
console.log(string.padStart(5,"hi"));
// nos devolvera hello ya que este tiene tan solo 5 letras
console.log(string.padStart(8,"hi"));
// nos vdevolvera hihHello 
console.log(string.padStart(10,"hi"));
//nos devolvera hihihHello


// padEnd al igual que start , este se refleja al final
console.log(string.padEnd(8,"hi"));