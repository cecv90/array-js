//Permite unir dos o más cadena de texto o array en una sola cadena o array, no modifica las cadena
//de los array originales.
//for
const elements=[1,2,3,4];
const otherElements=[5,6,7,8,9];
const newArray=[...elements];
for(let index=0; index < otherElements.length; index++){
  const element=otherElements[index];
  newArray.push(element)
}
console.log('for',newArray);

//Método concat
const answer=elements.concat(otherElements);
console.log('método concat', answer);

//otro forma con spread
const answer1=[...elements, ...otherElements];
console.log(answer1)

//Para cambiar el array original elements.
elements.push(...otherElements);
console.log(elements);

//También puedes concatenar más de dos arrays pasándolos como argumentos adicionales a la función 
//concat():
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const combinedArray = array1.concat(array2, array3);
console.log(combinedArray); // Mostrará: [1, 2, 3, 4, 5, 6]
//Recuerda que concat() no modifica los arrays originales, simplemente devuelve un nuevo array con los 
//elementos combinados.





