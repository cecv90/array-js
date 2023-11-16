function aplanarArray(array){
  const newArray=[];
  for(let i= 0; i < array.length; i++){
    if(Array.isArray(array[i])){ //Si el elemento es un array, recorrelo y añade su elementos al nuevo array.
      for(let j= 0; j < array[i].length; j++){
        newArray.push(array[i][j])
      }
    } else{
      //Si el elemento no es un array, simplemente añadelo al nuevo array
      newArray.push(array[i]);
    }
  }
  return newArray;
}
const nestedArray =[1,2,3,[4,5,6,7,[8,9]]];
const flattenedArray=aplanarArray(nestedArray);
console.log('Bucle for',flattenedArray);//[ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ]
//En este ejemplo, la función aplanarArray() recibe un array y utiliza un bucle for para recorrer cada 
//elemento. Si el elemento actual es un array, se recorre y se añaden sus elementos al nuevo array 
//newArray. Si el elemento no es un array, se añade directamente al nuevo array.
//Este enfoque manual logra el aplanamiento del array, pero requiere la detección y el manejo de los 
//elementos anidados por separado. La función flatMap() proporciona una forma más concisa y legible de 
//hacer esto en comparación con el uso de bucles for.
//Aplanar con un bucle for
//Tiene un comportamiento similar al de la función flatMap() aplanando un array utilizando un bucle for 
//en JavaScript. Para aplanar un array con un bucle for, puedes recorrer los elementos y añadirlos a un 
//nuevo array, asegurándote de manejar adecuadamente los elementos anidados si los hubiera.
//Aquí tienes un ejemplo de cómo podrías aplanar un array utilizando un bucle for: