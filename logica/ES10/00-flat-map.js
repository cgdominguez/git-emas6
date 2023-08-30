// flat
// flat map nos devuelve una matris de cualuier  sub matris
// una matris es una areglo , una sub matris es los arreglos anidados
const array = [1,2,3,4,5,[1,3,5,[7,8,[45,44]]]];// respetar las comas de cierre en cada elemento
console.log(array.flat(3));  // el 3 son los niveles del array


//flatMap
const array2 = [1,2,3,4,5];

console.log(array2.flatMap(v => [v , v * 2])); // metodo flatMap, v = value 

// nos devuelve los valores  y aplica la trasformacion , la multiplicacion

