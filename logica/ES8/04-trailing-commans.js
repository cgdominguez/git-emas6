const array = [24,66,55,43,22,23,34,1]

console.log(array);

console.log(array.length);
/*  [
  24, 66, 55, 43,  contenido
  22, 23, 34,  1
]
8                  length (cantidad)posiciones en el array
*/

// el commans lo que hace es respetar el espacio en blanco como una posicicon mas del array contando asi sus posiciones

const arrayCommas = [24,66,55,43,22,23,34,1, , , , ,15]

console.log(arrayCommas);

console.log(arrayCommas.length);

/* 
[ 24, 66, 55, 43, 22, 23, 34, 1, <4 empty items> ,15]    
12  posiciones en el array
*/